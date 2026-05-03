import { RESOURCES_BY_TYPE } from '../data/resources.js'
import {
  buildRequiredTopLevelBlocks,
  coerceLegacyDefault,
  defaultValueForKind,
  fieldKind,
  getSchema
} from '../schema/schemaUtils.js'

function buildDefaultProperties(resource, schema) {
  if (!schema) {
    return (resource.properties ?? []).reduce((acc, prop) => {
      acc[prop.name] = prop.default
      return acc
    }, {})
  }

  const properties = {}
  const curatedDefaults = Object.fromEntries((resource.properties ?? []).map((p) => [p.name, p.default]))

  for (const [name, attr] of Object.entries(schema.block.attributes ?? {})) {
    if (!attr.required) continue
    const kind = fieldKind(attr.type)
    const curatedValue = curatedDefaults[name]
    properties[name] =
      curatedValue !== undefined ? coerceLegacyDefault(curatedValue, kind) : defaultValueForKind(kind)
  }

  for (const [name, value] of Object.entries(curatedDefaults)) {
    if (name in properties) continue
    const attr = schema.block.attributes?.[name]
    if (!attr) continue
    properties[name] = coerceLegacyDefault(value, fieldKind(attr.type))
  }

  return properties
}

function buildDefaultBlocks(resource, schema) {
  if (!schema) return undefined

  const required = buildRequiredTopLevelBlocks(schema.block)
  const overrides = resource.blockDefaults ?? {}
  const blocks = {}

  for (const [name, attrs] of Object.entries(required)) {
    blocks[name] = { ...attrs, ...(overrides[name] ?? {}) }
  }

  for (const [name, attrs] of Object.entries(overrides)) {
    if (name in blocks) continue
    blocks[name] = { ...attrs }
  }

  return blocks
}

export function createNodeData(resourceType, propertyOverrides = {}) {
  const resource = RESOURCES_BY_TYPE[resourceType]
  if (!resource) return null

  const schema = getSchema(resourceType)
  const data = {
    resourceType,
    properties: {
      ...buildDefaultProperties(resource, schema),
      ...propertyOverrides
    }
  }

  const blocks = buildDefaultBlocks(resource, schema)
  if (blocks) {
    data.schemaDriven = true
    data.blocks = blocks
  }

  return data
}
