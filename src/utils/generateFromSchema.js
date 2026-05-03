import { fieldKind } from '../schema/schemaUtils.js'

const sanitize = (value) =>
  String(value ?? '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/[\r\n]+/g, ' ')

const isUnset = (value) => {
  if (value === null || value === undefined) return true
  if (typeof value === 'string' && value.trim() === '') return true
  if (Array.isArray(value) && value.length === 0) return true
  if (typeof value === 'object' && !Array.isArray(value)) {
    if (value.__ref || value.__var) return false
    if (Object.keys(value).length === 0) return true
  }
  return false
}

const padKey = (key, width) => key.padEnd(width, ' ')

// Recognize bare HCL identifier expressions like "azurerm_virtual_network.vnet-hub.id"
// so templates and manual entries can reference other resources without quoting.
const HCL_REF_PATTERN = /^[a-z][a-z0-9_]*\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_]+)+$/

function renderScalar(kind, value, indent) {
  // Edge-injected reference: bare HCL (e.g. module.rg.name)
  if (value && typeof value === 'object' && value.__ref) {
    if (kind === 'list_of_string' || kind === 'set_of_string') return `[${value.__ref}]`
    return value.__ref
  }
  // Module variable reference
  if (value && typeof value === 'object' && value.__var) return `var.${value.__var}`

  if (kind === 'bool') return value ? 'true' : 'false'
  if (kind === 'number') {
    const num = Number(value)
    return Number.isFinite(num) ? String(num) : `"${sanitize(value)}"`
  }
  if (kind === 'list_of_string' || kind === 'set_of_string') {
    if (!Array.isArray(value) || value.length === 0) return '[]'
    return `[${value.map((v) => (HCL_REF_PATTERN.test(v) ? v : `"${sanitize(v)}"`)).join(', ')}]`
  }
  if (kind === 'map_of_string') {
    const entries = Object.entries(value ?? {})
    if (entries.length === 0) return '{}'
    const inner = ' '.repeat(indent + 2)
    const close = ' '.repeat(indent)
    const lines = entries.map(([k, v]) => `${inner}"${sanitize(k)}" = "${sanitize(v)}"`)
    return `{\n${lines.join('\n')}\n${close}}`
  }
  if (typeof value === 'string' && HCL_REF_PATTERN.test(value)) return value
  return `"${sanitize(value)}"`
}

function defaultLiteralForKind(kind) {
  switch (kind) {
    case 'bool':
      return 'false'
    case 'number':
      return '0'
    case 'list_of_string':
    case 'set_of_string':
      return '[]'
    case 'map_of_string':
      return '{}'
    default:
      return '""'
  }
}

function renderAttributes(blockDef, properties, indent) {
  const pad = ' '.repeat(indent)
  const entries = []
  for (const [name, attr] of Object.entries(blockDef.attributes ?? {})) {
    if (attr.computed && !attr.required && !attr.optional) continue
    const value = properties?.[name]
    const kind = fieldKind(attr.type)
    if (!attr.required && isUnset(value)) continue
    if (attr.required && isUnset(value)) {
      entries.push({ name, missing: true, kind })
      continue
    }
    entries.push({ name, value, kind })
  }
  if (entries.length === 0) return ''
  const keyWidth = Math.max(...entries.map((e) => e.name.length))
  return entries
    .map(({ name, value, kind, missing }) => {
      if (missing) {
        return `${pad}${padKey(name, keyWidth)} = ${defaultLiteralForKind(kind)} # TODO: required, set a real value`
      }
      return `${pad}${padKey(name, keyWidth)} = ${renderScalar(kind, value, indent)}`
    })
    .join('\n')
}

function renderNestedBlocks(blockDef, blocksValue, indent) {
  const pad = ' '.repeat(indent)
  const out = []
  for (const [name, def] of Object.entries(blockDef.block_types ?? {})) {
    if (name === 'timeouts') continue
    const required = (def.min_items ?? 0) >= 1
    const value = blocksValue?.[name]
    if (value === null || value === undefined) {
      if (!required) continue
      const inner = renderBlockBody(def.block, {}, indent + 2)
      out.push(`\n${pad}${name} {\n${inner}\n${pad}}`)
      continue
    }
    const inner = renderBlockBody(def.block, value, indent + 2)
    out.push(`\n${pad}${name} {\n${inner}\n${pad}}`)
  }
  return out.join('')
}

function renderBlockBody(blockDef, data, indent) {
  const properties = data ?? {}
  const attrText = renderAttributes(blockDef, properties, indent)
  const nestedText = renderNestedBlocks(blockDef, properties, indent)
  return [attrText, nestedText].filter(Boolean).join('')
}

export function generateResourceFromSchema(schema, instanceName, properties, blocks) {
  const propText = renderAttributes(schema.block, properties ?? {}, 2)
  const blockText = renderNestedBlocks(schema.block, blocks ?? {}, 2)
  return `resource "${schema.resource_type}" "${instanceName}" {\n${propText}${blockText}\n}`
}

// ---- Module-mode helpers ----

// `bindings` is the array from edgeResolver. `properties` and `blocks` already have
// {__var: name} placeholders injected for each binding by the caller.

export function generateResourceModuleMain(schema, properties, blocks) {
  const propText = renderAttributes(schema.block, properties ?? {}, 2)
  const blockText = renderNestedBlocks(schema.block, blocks ?? {}, 2)
  return `resource "${schema.resource_type}" "this" {\n${propText}${blockText}\n}\n`
}

export function generateResourceModuleVariables(schema, bindingFields) {
  if (bindingFields.length === 0) return '# No external inputs — this module is self-contained.\n'
  const lines = []
  for (const { variable, fieldPath } of bindingFields) {
    const tfType = inferTfTypeForField(schema, fieldPath)
    lines.push(`variable "${variable}" {`)
    lines.push(`  description = "Edge-injected value for ${fieldPath}"`)
    lines.push(`  type        = ${tfType}`)
    lines.push('}')
    lines.push('')
  }
  return lines.join('\n')
}

export function generateResourceModuleOutputs(schema) {
  const t = schema.resource_type
  const out = [
    `output "id" {`,
    `  description = "Resource ID"`,
    `  value       = ${t}.this.id`,
    '}',
    '',
    `output "name" {`,
    `  description = "Resource name"`,
    `  value       = ${t}.this.name`,
    '}',
    ''
  ]
  if (schema.block.attributes?.location) {
    out.push(
      `output "location" {`,
      `  description = "Resource location"`,
      `  value       = ${t}.this.location`,
      '}',
      ''
    )
  }
  return out.join('\n')
}

// Find the schema attribute at fieldPath (supports "parent.child") and return a TF type string.
export function inferTfTypeForField(schema, fieldPath) {
  const parts = fieldPath.split('.')
  let block = schema.block
  let attr = null
  for (let i = 0; i < parts.length; i++) {
    const seg = parts[i]
    if (i === parts.length - 1) {
      attr = block.attributes?.[seg] ?? null
    } else {
      const bt = block.block_types?.[seg]
      if (!bt) return 'string'
      block = bt.block
    }
  }
  if (!attr) return 'string'
  const kind = fieldKind(attr.type)
  switch (kind) {
    case 'bool':
      return 'bool'
    case 'number':
      return 'number'
    case 'list_of_string':
      return 'list(string)'
    case 'set_of_string':
      return 'set(string)'
    case 'map_of_string':
      return 'map(string)'
    default:
      return 'string'
  }
}
