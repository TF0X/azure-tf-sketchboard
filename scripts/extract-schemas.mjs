/**
 * Extracts individual resource schema JSONs from schema-source/schema-full.json
 * into src/schema/<type>.json, then regenerates src/schema/schemaUtils.js imports.
 *
 * Usage:  node scripts/extract-schemas.mjs [resourceType ...]
 *   No args → extract all types listed in AZURE_RESOURCES
 *   With args → extract only the specified types
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SCHEMA_SOURCE = path.join(ROOT, 'schema-source', 'schema-full.json')
const SCHEMA_DIR = path.join(ROOT, 'src', 'schema')
const SCHEMA_UTILS = path.join(SCHEMA_DIR, 'schemaUtils.js')

// All resource types currently in AZURE_RESOURCES (resources.js)
const ALL_RESOURCE_TYPES = [
  'azurerm_resource_group',
  'azurerm_virtual_network',
  'azurerm_subnet',
  'azurerm_network_security_group',
  'azurerm_network_interface',
  'azurerm_public_ip',
  'azurerm_linux_virtual_machine',
  'azurerm_windows_virtual_machine',
  'azurerm_storage_account',
  'azurerm_sql_server',
  'azurerm_mssql_database',
  'azurerm_app_service_plan',
  'azurerm_linux_web_app',
  'azurerm_key_vault',
  'azurerm_container_registry',
  'azurerm_kubernetes_cluster',
  'azurerm_application_gateway',
  'azurerm_log_analytics_workspace',
  'azurerm_servicebus_namespace',
  'azurerm_cosmosdb_account',
  'azurerm_cdn_profile',
  'azurerm_user_assigned_identity',
  'azurerm_role_assignment',
  'azurerm_private_endpoint',
  'azurerm_redis_cache',
  'azurerm_postgresql_flexible_server',
  'azurerm_linux_function_app',
  'azurerm_virtual_network_peering',
  'azurerm_lb',
  'azurerm_firewall',
  'azurerm_nat_gateway',
  'azurerm_dns_zone',
  'azurerm_container_group',
  'azurerm_linux_virtual_machine_scale_set',
  'azurerm_mysql_flexible_server',
  'azurerm_eventhub_namespace',
  'azurerm_synapse_workspace',
  'azurerm_api_management',
  'azurerm_windows_web_app',
  'azurerm_application_insights',
  'azurerm_monitor_action_group',
  'azurerm_logic_app_workflow',
  'azurerm_data_factory',
  'azurerm_cognitive_account',
  'azurerm_machine_learning_workspace',
  'azurerm_search_service',
  'azurerm_databricks_workspace',
  'azurerm_iothub',
  'azurerm_signalr_service',
  'azurerm_notification_hub_namespace',
  'azurerm_vpn_gateway',
  'azurerm_cdn_frontdoor_profile',
  'azurerm_recovery_services_vault',
  'azurerm_automation_account',
  'azurerm_static_web_app',
  'azurerm_stream_analytics_job',
  'azurerm_monitor_diagnostic_setting',
  'azurerm_virtual_hub',
  'azurerm_bastion_host',
  'azurerm_route_table',
  'azurerm_network_ddos_protection_plan',
  'azurerm_express_route_circuit',
  'azurerm_managed_disk',
  'azurerm_batch_account',
  'azurerm_storage_data_lake_gen2_filesystem',
  'azurerm_mssql_server',
  'azurerm_kusto_cluster',
  'azurerm_web_application_firewall_policy',
  'azurerm_app_configuration',
  'azurerm_spring_cloud_service',
  'azurerm_eventgrid_topic',
  'azurerm_monitor_metric_alert',
  'azurerm_cognitive_deployment',
  'azurerm_private_dns_zone',
  'azurerm_application_security_group',
  'azurerm_local_network_gateway',
  'azurerm_virtual_wan',
  'azurerm_availability_set',
  'azurerm_app_service_environment_v3',
  'azurerm_mssql_elasticpool',
  'azurerm_cosmosdb_sql_container',
  'azurerm_service_plan',
  'azurerm_windows_function_app',
  'azurerm_firewall_policy',
  'azurerm_monitor_autoscale_setting',
  'azurerm_eventgrid_system_topic',
  'azurerm_monitor_activity_log_alert',
  'azurerm_bot_service_azure_bot',
]

const requested = process.argv.slice(2)
const targets = requested.length > 0 ? requested : ALL_RESOURCE_TYPES

console.log(`Loading schema-full.json…`)
const fullSchema = JSON.parse(fs.readFileSync(SCHEMA_SOURCE, 'utf8'))
const resourceSchemas =
  fullSchema.provider_schemas['registry.terraform.io/hashicorp/azurerm'].resource_schemas

let extracted = 0
let skipped = 0

for (const type of targets) {
  const raw = resourceSchemas[type]
  if (!raw) {
    console.warn(`  ⚠  ${type} — not found in schema, skipping`)
    skipped++
    continue
  }
  const out = { resource_type: type, version: raw.version ?? 0, block: raw.block }
  const dest = path.join(SCHEMA_DIR, `${type}.json`)
  fs.writeFileSync(dest, JSON.stringify(out, null, 2))
  console.log(`  ✓  ${type}`)
  extracted++
}

console.log(`\nExtracted ${extracted}, skipped ${skipped}.`)

// Regenerate schemaUtils.js imports from every JSON in src/schema/
const jsonFiles = fs.readdirSync(SCHEMA_DIR)
  .filter(f => f.endsWith('.json'))
  .map(f => f.replace('.json', ''))
  .sort()

const importLines = jsonFiles
  .map(t => `import ${t} from './${t}.json' with { type: 'json' }`)
  .join('\n')

const exportEntries = jsonFiles.map(t => `  ${t},`).join('\n')

const utilsContent = `${importLines}

export const SCHEMAS_BY_TYPE = {
${exportEntries}
}

export function getSchema(resourceType) {
  return SCHEMAS_BY_TYPE[resourceType] ?? null
}

// ---- Type analysis ----

export function fieldKind(typeSpec) {
  if (typeof typeSpec === 'string') return typeSpec
  if (Array.isArray(typeSpec)) {
    const [outer, inner] = typeSpec
    if (outer === 'list' || outer === 'set') {
      if (typeof inner === 'string') return \`\${outer}_of_\${inner}\`
      return \`\${outer}_of_complex\`
    }
    if (outer === 'map') return \`map_of_\${typeof inner === 'string' ? inner : 'complex'}\`
    if (outer === 'object') return 'object'
  }
  return 'unknown'
}

export function isSupportedKind(kind) {
  return [
    'string',
    'number',
    'bool',
    'list_of_string',
    'set_of_string',
    'map_of_string'
  ].includes(kind)
}

export function partitionAttributes(block) {
  const required = []
  const optional = []
  for (const [name, attr] of Object.entries(block.attributes ?? {})) {
    const kind = fieldKind(attr.type)
    const entry = { name, attr, kind }
    if (attr.required) required.push(entry)
    else if (attr.optional) optional.push(entry)
  }
  required.sort((a, b) => a.name.localeCompare(b.name))
  optional.sort((a, b) => a.name.localeCompare(b.name))
  return { required, optional }
}

export function listBlocks(block) {
  return Object.entries(block.block_types ?? {})
    .map(([name, def]) => ({ name, def, required: (def.min_items ?? 0) >= 1 }))
    .filter(({ name }) => name !== 'timeouts')
    .sort((a, b) => {
      if (a.required !== b.required) return a.required ? -1 : 1
      return a.name.localeCompare(b.name)
    })
}

// ---- Default values ----

export function defaultValueForKind(kind) {
  switch (kind) {
    case 'string':
      return ''
    case 'number':
      return ''
    case 'bool':
      return false
    case 'list_of_string':
    case 'set_of_string':
      return []
    case 'map_of_string':
      return {}
    default:
      return null
  }
}

// Coerce a legacy-style default value to the type the schema expects.
export function coerceLegacyDefault(rawValue, kind) {
  if (rawValue === undefined || rawValue === null) return defaultValueForKind(kind)
  switch (kind) {
    case 'string':
      return String(rawValue)
    case 'number': {
      const n = Number(rawValue)
      return Number.isFinite(n) ? n : defaultValueForKind(kind)
    }
    case 'bool':
      if (typeof rawValue === 'boolean') return rawValue
      if (rawValue === 'true') return true
      if (rawValue === 'false') return false
      return defaultValueForKind(kind)
    case 'list_of_string':
    case 'set_of_string':
      if (Array.isArray(rawValue)) return rawValue.map(String)
      return [String(rawValue)]
    case 'map_of_string':
      if (rawValue && typeof rawValue === 'object' && !Array.isArray(rawValue)) {
        return Object.fromEntries(Object.entries(rawValue).map(([k, v]) => [k, String(v)]))
      }
      return {}
    default:
      return defaultValueForKind(kind)
  }
}

// Build flat defaults for a block's required attributes only (no nesting).
// Used to seed nested-block UI state when the user adds a block.
export function buildBlockAttrDefaults(block) {
  const out = {}
  for (const [name, attr] of Object.entries(block.attributes ?? {})) {
    if (!attr.required) continue
    out[name] = defaultValueForKind(fieldKind(attr.type))
  }
  return out
}

// At node creation, auto-add required top-level blocks so generated TF stays close to valid.
export function buildRequiredTopLevelBlocks(block) {
  const out = {}
  for (const [name, def] of Object.entries(block.block_types ?? {})) {
    if (name === 'timeouts') continue
    if ((def.min_items ?? 0) >= 1) {
      out[name] = buildBlockAttrDefaults(def.block)
    }
  }
  return out
}
`

fs.writeFileSync(SCHEMA_UTILS, utilsContent)
console.log(`\nRegenerated schemaUtils.js with ${jsonFiles.length} resource types.`)
