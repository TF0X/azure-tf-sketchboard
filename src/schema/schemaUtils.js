import azurerm_resource_group from './azurerm_resource_group.json' with { type: 'json' }
import azurerm_virtual_network from './azurerm_virtual_network.json' with { type: 'json' }
import azurerm_subnet from './azurerm_subnet.json' with { type: 'json' }
import azurerm_network_security_group from './azurerm_network_security_group.json' with { type: 'json' }
import azurerm_network_interface from './azurerm_network_interface.json' with { type: 'json' }
import azurerm_public_ip from './azurerm_public_ip.json' with { type: 'json' }
import azurerm_linux_virtual_machine from './azurerm_linux_virtual_machine.json' with { type: 'json' }
import azurerm_windows_virtual_machine from './azurerm_windows_virtual_machine.json' with { type: 'json' }
import azurerm_storage_account from './azurerm_storage_account.json' with { type: 'json' }
import azurerm_sql_server from './azurerm_sql_server.json' with { type: 'json' }
import azurerm_mssql_database from './azurerm_mssql_database.json' with { type: 'json' }
import azurerm_app_service_plan from './azurerm_app_service_plan.json' with { type: 'json' }
import azurerm_linux_web_app from './azurerm_linux_web_app.json' with { type: 'json' }
import azurerm_key_vault from './azurerm_key_vault.json' with { type: 'json' }
import azurerm_container_registry from './azurerm_container_registry.json' with { type: 'json' }
import azurerm_kubernetes_cluster from './azurerm_kubernetes_cluster.json' with { type: 'json' }
import azurerm_application_gateway from './azurerm_application_gateway.json' with { type: 'json' }
import azurerm_log_analytics_workspace from './azurerm_log_analytics_workspace.json' with { type: 'json' }
import azurerm_servicebus_namespace from './azurerm_servicebus_namespace.json' with { type: 'json' }
import azurerm_cosmosdb_account from './azurerm_cosmosdb_account.json' with { type: 'json' }
import azurerm_cdn_profile from './azurerm_cdn_profile.json' with { type: 'json' }
import azurerm_user_assigned_identity from './azurerm_user_assigned_identity.json' with { type: 'json' }
import azurerm_role_assignment from './azurerm_role_assignment.json' with { type: 'json' }
import azurerm_private_endpoint from './azurerm_private_endpoint.json' with { type: 'json' }
import azurerm_redis_cache from './azurerm_redis_cache.json' with { type: 'json' }
import azurerm_postgresql_flexible_server from './azurerm_postgresql_flexible_server.json' with { type: 'json' }
import azurerm_linux_function_app from './azurerm_linux_function_app.json' with { type: 'json' }
import azurerm_virtual_network_peering from './azurerm_virtual_network_peering.json' with { type: 'json' }

export const SCHEMAS_BY_TYPE = {
  azurerm_resource_group,
  azurerm_virtual_network,
  azurerm_subnet,
  azurerm_network_security_group,
  azurerm_network_interface,
  azurerm_public_ip,
  azurerm_linux_virtual_machine,
  azurerm_windows_virtual_machine,
  azurerm_storage_account,
  azurerm_sql_server,
  azurerm_mssql_database,
  azurerm_app_service_plan,
  azurerm_linux_web_app,
  azurerm_key_vault,
  azurerm_container_registry,
  azurerm_kubernetes_cluster,
  azurerm_application_gateway,
  azurerm_log_analytics_workspace,
  azurerm_servicebus_namespace,
  azurerm_cosmosdb_account,
  azurerm_cdn_profile,
  azurerm_user_assigned_identity,
  azurerm_role_assignment,
  azurerm_private_endpoint,
  azurerm_redis_cache,
  azurerm_postgresql_flexible_server,
  azurerm_linux_function_app,
  azurerm_virtual_network_peering
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
      if (typeof inner === 'string') return `${outer}_of_${inner}`
      return `${outer}_of_complex`
    }
    if (outer === 'map') return `map_of_${typeof inner === 'string' ? inner : 'complex'}`
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
