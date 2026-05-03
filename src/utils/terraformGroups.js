export const VM_TYPES = new Set(['azurerm_linux_virtual_machine', 'azurerm_windows_virtual_machine'])

export const MODULE_GROUPS = [
  {
    name: 'core',
    label: 'Core',
    types: ['azurerm_resource_group']
  },
  {
    name: 'identity',
    label: 'Identity & RBAC',
    types: ['azurerm_user_assigned_identity', 'azurerm_role_assignment']
  },
  {
    name: 'network',
    label: 'Network',
    types: [
      'azurerm_virtual_network',
      'azurerm_subnet',
      'azurerm_network_security_group',
      'azurerm_network_interface',
      'azurerm_public_ip',
      'azurerm_application_gateway',
      'azurerm_cdn_profile',
      'azurerm_virtual_network_peering',
      'azurerm_private_endpoint'
    ]
  },
  {
    name: 'vm',
    label: 'Virtual Machines',
    types: [...VM_TYPES]
  },
  {
    name: 'app',
    label: 'Apps',
    types: [
      'azurerm_app_service_plan',
      'azurerm_linux_web_app',
      'azurerm_linux_function_app',
      'azurerm_container_registry',
      'azurerm_kubernetes_cluster'
    ]
  },
  {
    name: 'data',
    label: 'Data',
    types: [
      'azurerm_storage_account',
      'azurerm_sql_server',
      'azurerm_mssql_database',
      'azurerm_cosmosdb_account',
      'azurerm_postgresql_flexible_server',
      'azurerm_redis_cache',
      'azurerm_key_vault',
      'azurerm_log_analytics_workspace',
      'azurerm_servicebus_namespace'
    ]
  }
]

const TYPE_TO_GROUP = MODULE_GROUPS.reduce((acc, group) => {
  for (const type of group.types) acc[type] = group.name
  return acc
}, {})

export function groupForResourceType(resourceType) {
  return TYPE_TO_GROUP[resourceType] ?? 'misc'
}

export function groupForNode(node) {
  return groupForResourceType(node.data.resourceType)
}

function sortNodes(nodes, instanceNames) {
  return [...nodes].sort((a, b) => {
    const groupCompare = groupForNode(a).localeCompare(groupForNode(b))
    if (groupCompare !== 0) return groupCompare

    const aIsResourceGroup = a.data.resourceType === 'azurerm_resource_group'
    const bIsResourceGroup = b.data.resourceType === 'azurerm_resource_group'
    if (aIsResourceGroup && !bIsResourceGroup) return -1
    if (!aIsResourceGroup && bIsResourceGroup) return 1

    if (a.data.resourceType !== b.data.resourceType) {
      return a.data.resourceType.localeCompare(b.data.resourceType)
    }

    return instanceNames[a.id].localeCompare(instanceNames[b.id])
  })
}

export function moduleGroupsFromNodes(nodes, instanceNames) {
  const groups = new Map()

  for (const node of sortNodes(nodes, instanceNames)) {
    const groupName = groupForNode(node)
    if (!groups.has(groupName)) {
      const definition = MODULE_GROUPS.find((group) => group.name === groupName)
      groups.set(groupName, {
        name: groupName,
        label: definition?.label ?? 'Misc',
        nodes: []
      })
    }
    groups.get(groupName).nodes.push(node)
  }

  return [...groups.values()]
}
