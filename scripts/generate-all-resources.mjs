/**
 * Generates src/data/resources-auto.js and src/data/edgeMap-auto.js from
 * schema-source/schema-full.json for every AzureRM resource type not already
 * hand-crafted in resources.js.
 *
 * Also calls extract-schemas.mjs logic to write src/schema/<type>.json for
 * every new type and regenerate schemaUtils.js.
 *
 * Usage:  node scripts/generate-all-resources.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SCHEMA_SOURCE = path.join(ROOT, 'schema-source', 'schema-full.json')
const SCHEMA_DIR = path.join(ROOT, 'src', 'schema')
const DATA_DIR = path.join(ROOT, 'src', 'data')

// ─── Types already hand-crafted in resources.js ────────────────────────────
const HAND_CRAFTED = new Set([
  'azurerm_resource_group','azurerm_virtual_network','azurerm_subnet',
  'azurerm_network_security_group','azurerm_network_interface','azurerm_public_ip',
  'azurerm_linux_virtual_machine','azurerm_windows_virtual_machine','azurerm_storage_account',
  'azurerm_sql_server','azurerm_mssql_database','azurerm_app_service_plan','azurerm_linux_web_app',
  'azurerm_key_vault','azurerm_container_registry','azurerm_kubernetes_cluster',
  'azurerm_application_gateway','azurerm_log_analytics_workspace','azurerm_servicebus_namespace',
  'azurerm_cosmosdb_account','azurerm_cdn_profile','azurerm_user_assigned_identity',
  'azurerm_role_assignment','azurerm_private_endpoint','azurerm_redis_cache',
  'azurerm_postgresql_flexible_server','azurerm_linux_function_app','azurerm_virtual_network_peering',
  'azurerm_lb','azurerm_firewall','azurerm_nat_gateway','azurerm_dns_zone','azurerm_container_group',
  'azurerm_linux_virtual_machine_scale_set','azurerm_mysql_flexible_server',
  'azurerm_eventhub_namespace','azurerm_synapse_workspace','azurerm_api_management',
  'azurerm_windows_web_app','azurerm_application_insights','azurerm_monitor_action_group',
  'azurerm_logic_app_workflow','azurerm_data_factory','azurerm_cognitive_account',
  'azurerm_machine_learning_workspace','azurerm_search_service','azurerm_databricks_workspace',
  'azurerm_iothub','azurerm_signalr_service','azurerm_notification_hub_namespace',
  'azurerm_vpn_gateway','azurerm_cdn_frontdoor_profile','azurerm_recovery_services_vault',
  'azurerm_automation_account','azurerm_static_web_app','azurerm_stream_analytics_job',
  'azurerm_monitor_diagnostic_setting','azurerm_virtual_hub','azurerm_bastion_host',
  'azurerm_route_table','azurerm_network_ddos_protection_plan','azurerm_express_route_circuit',
  'azurerm_managed_disk','azurerm_batch_account','azurerm_storage_data_lake_gen2_filesystem',
  'azurerm_mssql_server','azurerm_kusto_cluster','azurerm_web_application_firewall_policy',
  'azurerm_app_configuration','azurerm_spring_cloud_service','azurerm_eventgrid_topic',
  'azurerm_monitor_metric_alert','azurerm_cognitive_deployment','azurerm_private_dns_zone',
  'azurerm_application_security_group','azurerm_local_network_gateway','azurerm_virtual_wan',
  'azurerm_availability_set','azurerm_app_service_environment_v3','azurerm_mssql_elasticpool',
  'azurerm_cosmosdb_sql_container','azurerm_service_plan','azurerm_windows_function_app',
  'azurerm_firewall_policy','azurerm_monitor_autoscale_setting','azurerm_eventgrid_system_topic',
  'azurerm_monitor_activity_log_alert','azurerm_bot_service_azure_bot',
])

// ─── Category detection ─────────────────────────────────────────────────────
const CATEGORY_RULES = [
  // order matters — first match wins
  { cat: 'AI & ML',                 pat: /cognitive|machine_learning|openai|bot_service|ai_services|language_|speech_|form_recognizer|video_|computer_vision|anomaly_detector|personalizer|content_moderator|immersive_reader|custom_vision/ },
  { cat: 'Analytics',               pat: /synapse|kusto|hdinsight|stream_analytics|analysis_services|data_lake|purview|databricks/ },
  { cat: 'API Management',          pat: /api_management/ },
  { cat: 'Compute',                 pat: /virtual_machine|vmss|vm_|_vm_|container_group|batch_|availability_set|dedicated_host|proximity_placement|managed_disk|disk_|image|snapshot|capacity_reservation|gallery|app_service_environment|orchestrated_virtual/ },
  { cat: 'Containers',              pat: /kubernetes|container_registry|container_app|spring_cloud/ },
  { cat: 'Databases',               pat: /sql|mssql|mysql|postgresql|mariadb|cosmosdb|cosmos_|redis|mongo|cassandra|gremlin|table_|elastic_pool|database|db_/ },
  { cat: 'Developer Tools',         pat: /devtest|lab_|devops|source_control|notification_hub|relay_|hybrid_connection/ },
  { cat: 'Governance',              pat: /management_group|resource_lock|policy_|blueprint|subscription|cost_management|billing|lighthouse|advisor|resource_deployment|tenant/ },
  { cat: 'Identity & Access',       pat: /active_directory|aadb2c|aad_|user_assigned_identity|role_|federated_identity|privileged/ },
  { cat: 'Integration',             pat: /logic_app|data_factory|eventgrid|event_grid|eventhub|event_hub|servicebus|service_bus|iothub|iot_|digital_twin|time_series|maps_/ },
  { cat: 'IoT & Edge',              pat: /iot|digital_twin|time_series_insights|sphere/ },
  { cat: 'Media & Communication',   pat: /media_|communication_|video_analyzer|spatial_anchors|remote_rendering/ },
  { cat: 'Monitoring',              pat: /monitor_|log_analytics|application_insights|dashboard|workbook|automation_|recovery_|site_recovery|backup|diagnostic/ },
  { cat: 'Networking',              pat: /virtual_network|subnet|network_|public_ip|dns_|vpn_|firewall|gateway|route_|bastion|express_route|nat_|frontdoor|traffic_manager|load_balancer|virtual_hub|virtual_wan|peering|ip_group|web_application_firewall|ddos|application_security_group|private_dns|private_link|private_endpoint|local_network/ },
  { cat: 'Security',                pat: /key_vault|sentinel|defender|security_center|attestation|confidential_ledger|security_|advanced_threat|information_protection/ },
  { cat: 'Storage',                 pat: /storage_|data_lake_gen2|backup_|hpc_cache|netapp/ },
  { cat: 'Virtual Desktop',         pat: /virtual_desktop|wvd_/ },
  { cat: 'Web & APIs',              pat: /web_app|function_app|app_service|cdn_|signalr|static_web|api_connection|notification_hub_namespace|spring_cloud/ },
]

function detectCategory(type) {
  const bare = type.replace('azurerm_', '')
  for (const { cat, pat } of CATEGORY_RULES) {
    if (pat.test(bare)) return cat
  }
  return 'Other'
}

// ─── Icon + colour per category ─────────────────────────────────────────────
const CATEGORY_STYLE = {
  'AI & ML':               { icon: '🧠', color: '#4B0082' },
  'Analytics':             { icon: '📊', color: '#7B2FBE' },
  'API Management':        { icon: '🔌', color: '#16A085' },
  'Compute':               { icon: '🖥️', color: '#8E44AD' },
  'Containers':            { icon: '📦', color: '#2980B9' },
  'Databases':             { icon: '🗄️', color: '#E67E22' },
  'Developer Tools':       { icon: '🛠️', color: '#27AE60' },
  'Governance':            { icon: '⚖️', color: '#7F8C8D' },
  'Identity & Access':     { icon: '🪪', color: '#7159C1' },
  'Integration':           { icon: '🔗', color: '#E74C3C' },
  'IoT & Edge':            { icon: '📡', color: '#00B4D8' },
  'Media & Communication': { icon: '🎬', color: '#E74C3C' },
  'Monitoring':            { icon: '📈', color: '#8E44AD' },
  'Networking':            { icon: '🌐', color: '#0078D4' },
  'Security':              { icon: '🔒', color: '#C0392B' },
  'Storage':               { icon: '💾', color: '#F39C12' },
  'Virtual Desktop':       { icon: '🖥️', color: '#0078D4' },
  'Web & APIs':            { icon: '🌍', color: '#16A085' },
  'Other':                 { icon: '☁️', color: '#95A5A6' },
}

// ─── Label humaniser ────────────────────────────────────────────────────────
function toLabel(type) {
  return type
    .replace(/^azurerm_/, '')
    .split('_')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

// ─── Property extraction ─────────────────────────────────────────────────────
// Attributes we always skip in the properties panel
const SKIP_ATTRS = new Set([
  'id', 'tags', 'resource_group_name', 'location',
])

// Optional attrs worth surfacing (in priority order)
const PRIORITY_OPTIONAL = [
  'sku_name','sku','tier','sku_tier','kind','version','os_type','offer_type',
  'capacity','size','instances','node_count','instance_count','replica_count','partition_count',
  'enabled','public_network_access_enabled','https_only','minimum_tls_version',
  'administrator_login','admin_username','admin_login','sql_administrator_login',
  'dns_prefix','replication_type','account_tier','account_kind','access_tier',
  'soft_delete_retention_days','retention_in_days','streaming_units','compatibility_level',
  'allocation_method','idle_timeout_in_minutes','family','generation','type',
  'service_mode','protocol','allow_forwarded_traffic','allow_virtual_network_access',
  'cluster_version','node_size','vm_size','image_offer','offer','publisher',
  'display_name','friendly_name','short_name','namespace_type','topic_type',
  'pool_allocation_mode','create_option','disk_size_gb','storage_account_type',
  'input_schema','severity','frequency','window_size','redundancy',
  'zone_redundant','threat_intelligence_mode','microsoft_app_type',
  'address_space','address_prefixes','address_prefix','gateway_address',
  'bandwidth_in_mbps','peering_location','service_provider_name',
]

const AZURE_LOCATIONS = ['East US','West Europe','Southeast Asia','UK South','Australia East']

function schemaTypeToUiType(attrType, attrName) {
  if (typeof attrType === 'string') {
    if (attrType === 'bool') return 'bool'
    if (attrType === 'number') return 'number'
    return 'text'
  }
  if (Array.isArray(attrType)) {
    const outer = attrType[0]
    if (outer === 'list' || outer === 'set') return 'text'
    if (outer === 'map') return 'text'
  }
  return 'text'
}

function defaultForUiType(uiType, attrName) {
  if (uiType === 'bool') return 'false'
  if (uiType === 'number') return '1'
  // name defaults
  if (attrName === 'name') return ''
  if (attrName === 'dns_prefix') return 'myapp'
  if (attrName === 'administrator_login' || attrName === 'admin_username' || attrName === 'admin_login') return 'adminuser'
  if (attrName === 'sql_administrator_login') return 'sqladmin'
  if (attrName === 'version') return 'latest'
  if (attrName === 'minimum_tls_version') return 'TLS1_2'
  if (attrName === 'https_only' || attrName === 'enabled' || attrName === 'public_network_access_enabled') return 'true'
  if (attrName === 'zone_redundant') return 'false'
  if (attrName === 'replication_type') return 'LRS'
  if (attrName === 'account_tier') return 'Standard'
  if (attrName === 'access_tier') return 'Hot'
  if (attrName === 'allocation_method') return 'Static'
  if (attrName === 'protocol') return 'Tcp'
  if (attrName === 'os_type') return 'Linux'
  if (attrName === 'kind') return 'StorageV2'
  if (attrName === 'tier') return 'Standard'
  if (attrName === 'sku' || attrName === 'sku_name' || attrName === 'sku_tier') return 'Standard'
  if (attrName === 'family') return 'C'
  if (attrName === 'capacity') return '1'
  if (attrName === 'size') return 'Standard_B2s'
  if (attrName === 'node_count' || attrName === 'instance_count' || attrName === 'instances') return '1'
  if (attrName === 'replica_count' || attrName === 'partition_count') return '1'
  if (attrName === 'streaming_units') return '3'
  if (attrName === 'retention_in_days') return '30'
  if (attrName === 'disk_size_gb') return '128'
  if (attrName === 'create_option') return 'Empty'
  if (attrName === 'soft_delete_retention_days') return '7'
  if (attrName === 'idle_timeout_in_minutes') return '10'
  if (attrName === 'severity') return '2'
  if (attrName === 'frequency') return 'PT5M'
  if (attrName === 'window_size') return 'PT15M'
  if (attrName === 'address_space') return '10.0.0.0/16'
  if (attrName === 'address_prefixes') return '10.0.1.0/24'
  if (attrName === 'address_prefix') return '10.0.0.0/23'
  if (attrName === 'bandwidth_in_mbps') return '50'
  if (attrName === 'gateway_address') return '1.2.3.4'
  return ''
}

function extractProperties(block, type) {
  const attrs = block.attributes ?? {}
  const props = []

  // 1. name (always first if present and not computed-only)
  if (attrs.name && (attrs.name.required || attrs.name.optional) && !(!attrs.name.required && !attrs.name.optional)) {
    props.push({ name: 'name', label: 'Name', type: 'text', default: '' })
  }

  // 2. location (use select if present)
  if (attrs.location && (attrs.location.required || attrs.location.optional)) {
    props.push({ name: 'location', label: 'Location', type: 'select', options: AZURE_LOCATIONS, default: 'East US' })
  }

  // 3. all required attrs (excluding skipped, name, location already added)
  for (const [attrName, attr] of Object.entries(attrs)) {
    if (SKIP_ATTRS.has(attrName) || attrName === 'name' || attrName === 'location') continue
    if (attr.computed && !attr.required && !attr.optional) continue
    if (!attr.required) continue
    const uiType = schemaTypeToUiType(attr.type, attrName)
    const def = defaultForUiType(uiType, attrName)
    if (uiType === 'bool') {
      props.push({ name: attrName, label: toLabel('azurerm_' + attrName), type: 'select', options: ['true', 'false'], default: def })
    } else {
      props.push({ name: attrName, label: toLabel('azurerm_' + attrName), type: uiType, default: def })
    }
  }

  // 4. priority optional attrs (up to 4)
  let optCount = 0
  for (const attrName of PRIORITY_OPTIONAL) {
    if (optCount >= 4) break
    if (SKIP_ATTRS.has(attrName) || attrName === 'name' || attrName === 'location') continue
    const attr = attrs[attrName]
    if (!attr || (!attr.optional) || attr.computed && !attr.optional) continue
    if (props.some(p => p.name === attrName)) continue
    const uiType = schemaTypeToUiType(attr.type, attrName)
    const def = defaultForUiType(uiType, attrName)
    if (uiType === 'bool') {
      props.push({ name: attrName, label: toLabel('azurerm_' + attrName), type: 'select', options: ['true', 'false'], default: def })
    } else {
      props.push({ name: attrName, label: toLabel('azurerm_' + attrName), type: uiType, default: def })
    }
    optCount++
  }

  return props
}

// ─── Edge map generation ─────────────────────────────────────────────────────
function buildEdgeEntries(type, block) {
  const attrs = block.attributes ?? {}
  const entries = {}

  if (attrs.resource_group_name) {
    entries['azurerm_resource_group'] = {
      field: 'resource_group_name',
      value: `(target) => \`azurerm_resource_group.\${target.data.properties.name}.name\``
    }
  }

  // Common FK patterns
  const FK_PATTERNS = [
    { attr: 'subnet_id',              src: 'azurerm_subnet',              field: 'subnet_id',              val: 'id' },
    { attr: 'virtual_network_id',     src: 'azurerm_virtual_network',     field: 'virtual_network_id',     val: 'id' },
    { attr: 'virtual_network_name',   src: 'azurerm_virtual_network',     field: 'virtual_network_name',   val: 'name' },
    { attr: 'public_ip_address_id',   src: 'azurerm_public_ip',          field: 'public_ip_address_id',   val: 'id' },
    { attr: 'server_id',              src: 'azurerm_mssql_server',        field: 'server_id',              val: 'id' },
    { attr: 'storage_account_id',     src: 'azurerm_storage_account',     field: 'storage_account_id',     val: 'id' },
    { attr: 'storage_account_name',   src: 'azurerm_storage_account',     field: 'storage_account_name',   val: 'name', direct: true },
    { attr: 'key_vault_id',           src: 'azurerm_key_vault',           field: 'key_vault_id',           val: 'id', direct: true },
    { attr: 'workspace_id',           src: 'azurerm_log_analytics_workspace', field: 'workspace_id',       val: 'id', direct: true },
    { attr: 'log_analytics_workspace_id', src: 'azurerm_log_analytics_workspace', field: 'log_analytics_workspace_id', val: 'id', direct: true },
    { attr: 'service_plan_id',        src: 'azurerm_service_plan',        field: 'service_plan_id',        val: 'id' },
    { attr: 'cognitive_account_id',   src: 'azurerm_cognitive_account',   field: 'cognitive_account_id',   val: 'id' },
    { attr: 'application_insights_id', src: 'azurerm_application_insights', field: 'application_insights_id', val: 'id', direct: true },
  ]

  for (const { attr, src, field, val, direct } of FK_PATTERNS) {
    if (attrs[attr] && (attrs[attr].required || attrs[attr].optional)) {
      if (!entries[src]) {
        const directStr = direct ? ', directOnly: true' : ''
        entries[src] = {
          field,
          directOnly: !!direct,
          value: `(target) => \`${src.replace('azurerm_', 'azurerm_')}.` + `\${target.data.properties.name}.${val}\``
        }
      }
    }
  }

  return entries
}

// ─── Main ────────────────────────────────────────────────────────────────────
console.log('Loading schema-full.json…')
const fullSchema = JSON.parse(fs.readFileSync(SCHEMA_SOURCE, 'utf8'))
const resourceSchemas =
  fullSchema.provider_schemas['registry.terraform.io/hashicorp/azurerm'].resource_schemas

const allTypes = Object.keys(resourceSchemas).sort()
const newTypes = allTypes.filter(t => !HAND_CRAFTED.has(t))
console.log(`Total types: ${allTypes.length}  |  Hand-crafted: ${HAND_CRAFTED.size}  |  Generating: ${newTypes.length}`)

// ── 1. Extract schema JSONs ──────────────────────────────────────────────────
let schemaExtracted = 0
for (const type of newTypes) {
  const raw = resourceSchemas[type]
  const out = { resource_type: type, version: raw.version ?? 0, block: raw.block }
  fs.writeFileSync(path.join(SCHEMA_DIR, `${type}.json`), JSON.stringify(out, null, 2))
  schemaExtracted++
}
console.log(`Schema JSONs written: ${schemaExtracted}`)

// ── 2. Build resource entries ─────────────────────────────────────────────────
const resourceEntries = []
const edgeEntries = {}

for (const type of newTypes) {
  const raw = resourceSchemas[type]
  const block = raw.block ?? {}
  const category = detectCategory(type)
  const { icon, color } = CATEGORY_STYLE[category] ?? CATEGORY_STYLE['Other']
  const props = extractProperties(block, type)
  const label = toLabel(type)

  resourceEntries.push({ type, label, category, icon, color, properties: props })
  const edges = buildEdgeEntries(type, block)
  if (Object.keys(edges).length > 0) {
    edgeEntries[type] = edges
  }
}

// ── 3. Write resources-auto.js ───────────────────────────────────────────────
function jsValue(v) {
  if (typeof v === 'string') return JSON.stringify(v)
  if (typeof v === 'boolean') return String(v)
  if (Array.isArray(v)) return `[${v.map(jsValue).join(', ')}]`
  return JSON.stringify(v)
}

function renderProperty(p) {
  const parts = [`name: ${jsValue(p.name)}`, `label: ${jsValue(p.label)}`, `type: ${jsValue(p.type)}`]
  if (p.options) parts.push(`options: ${jsValue(p.options)}`)
  parts.push(`default: ${jsValue(p.default)}`)
  return `    { ${parts.join(', ')} }`
}

function renderResource(r) {
  const propsStr = r.properties.length > 0
    ? `[\n${r.properties.map(renderProperty).join(',\n')}\n  ]`
    : '[]'
  return `  {
    type: ${jsValue(r.type)},
    label: ${jsValue(r.label)},
    category: ${jsValue(r.category)},
    icon: ${jsValue(r.icon)},
    color: ${jsValue(r.color)},
    properties: ${propsStr}
  }`
}

const autoResourcesContent = `// AUTO-GENERATED by scripts/generate-all-resources.mjs — do not edit by hand.
// Re-run the script to regenerate when the provider schema changes.

export const AZURE_RESOURCES_AUTO = [
${resourceEntries.map(renderResource).join(',\n')}
]
`

fs.writeFileSync(path.join(DATA_DIR, 'resources-auto.js'), autoResourcesContent)
console.log(`resources-auto.js written: ${resourceEntries.length} entries`)

// ── 4. Write edgeMap-auto.js ─────────────────────────────────────────────────
function renderEdgeEntry(srcType, targets) {
  const targetLines = Object.entries(targets).map(([tgt, cfg]) => {
    const directStr = cfg.directOnly ? `\n      directOnly: true,` : ''
    return `    ${jsValue(tgt)}: {
      field: ${jsValue(cfg.field)},${directStr}
      value: ${cfg.value}
    }`
  }).join(',\n')
  return `  ${jsValue(srcType)}: {\n${targetLines}\n  }`
}

const edgeMapContent = `// AUTO-GENERATED by scripts/generate-all-resources.mjs — do not edit by hand.

export const EDGE_FIELD_MAP_AUTO = {
${Object.entries(edgeEntries).map(([src, tgts]) => renderEdgeEntry(src, tgts)).join(',\n')}
}
`

fs.writeFileSync(path.join(DATA_DIR, 'edgeMap-auto.js'), edgeMapContent)
console.log(`edgeMap-auto.js written: ${Object.keys(edgeEntries).length} entries`)

// ── 4b. Write per-category chunk files ───────────────────────────────────────
function categoryToSlug(cat) {
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')
}

const CHUNKS_DIR = path.join(DATA_DIR, 'chunks')
if (!fs.existsSync(CHUNKS_DIR)) fs.mkdirSync(CHUNKS_DIR)

// Group by category
const byCategory = {}
for (const entry of resourceEntries) {
  const slug = categoryToSlug(entry.category)
  if (!byCategory[slug]) byCategory[slug] = { label: entry.category, entries: [] }
  byCategory[slug].entries.push(entry)
}

// Write one file per category
for (const [slug, { label, entries }] of Object.entries(byCategory)) {
  const content = `// AUTO-GENERATED — category: ${label}\nexport default [\n${entries.map(renderResource).join(',\n')}\n]\n`
  fs.writeFileSync(path.join(CHUNKS_DIR, `resources-${slug}.js`), content)
}
console.log(`Chunk files written: ${Object.keys(byCategory).length} categories`)

// Write resourceChunks.js with static dynamic-import paths (required for Vite code-splitting)
const chunkImportLines = Object.entries(byCategory)
  .map(([slug]) => `  () => import('./chunks/resources-${slug}.js'),`)
  .join('\n')

const resourceChunksContent = `// AUTO-GENERATED — maps category slugs to dynamic import functions for parallel loading.
// Static import() paths are required for Vite to create separate bundles per category.

export const RESOURCE_CHUNK_LOADERS = [
${chunkImportLines}
]
`
fs.writeFileSync(path.join(DATA_DIR, 'resourceChunks.js'), resourceChunksContent)
console.log(`resourceChunks.js written with ${Object.keys(byCategory).length} loaders`)

// ── 5. Regenerate schemaUtils.js ─────────────────────────────────────────────
const allJsonTypes = fs.readdirSync(SCHEMA_DIR)
  .filter(f => f.endsWith('.json'))
  .map(f => f.replace('.json', ''))
  .sort()

const importLines = allJsonTypes
  .map(t => `import ${t} from './${t}.json' with { type: 'json' }`)
  .join('\n')

const exportEntries = allJsonTypes.map(t => `  ${t},`).join('\n')

const schemaUtilsContent = `// AUTO-GENERATED — run scripts/generate-all-resources.mjs to update imports.
${importLines}

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
    'string', 'number', 'bool',
    'list_of_string', 'set_of_string', 'map_of_string'
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

export function defaultValueForKind(kind) {
  switch (kind) {
    case 'string': return ''
    case 'number': return ''
    case 'bool': return false
    case 'list_of_string':
    case 'set_of_string': return []
    case 'map_of_string': return {}
    default: return null
  }
}

export function coerceLegacyDefault(rawValue, kind) {
  if (rawValue === undefined || rawValue === null) return defaultValueForKind(kind)
  switch (kind) {
    case 'string': return String(rawValue)
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
    default: return defaultValueForKind(kind)
  }
}

export function buildBlockAttrDefaults(block) {
  const out = {}
  for (const [name, attr] of Object.entries(block.attributes ?? {})) {
    if (!attr.required) continue
    out[name] = defaultValueForKind(fieldKind(attr.type))
  }
  return out
}

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

fs.writeFileSync(path.join(SCHEMA_DIR, 'schemaUtils.js'), schemaUtilsContent)
console.log(`schemaUtils.js regenerated: ${allJsonTypes.length} total types`)

console.log('\nDone. Next step: update resources.js and edgeMap.js to import and merge the auto files.')
