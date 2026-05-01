import { memo, useCallback } from 'react'
import { Handle, Position } from '@xyflow/react'
import { RESOURCES_BY_TYPE } from '../data/resources.js'
import { useStore } from '../store.js'

const CATEGORY_BY_TYPE = {
  azurerm_resource_group: 'Core',
  azurerm_virtual_network: 'Network',
  azurerm_subnet: 'Network',
  azurerm_network_security_group: 'Security',
  azurerm_network_interface: 'Network',
  azurerm_public_ip: 'Network',
  azurerm_linux_virtual_machine: 'Compute',
  azurerm_windows_virtual_machine: 'Compute',
  azurerm_kubernetes_cluster: 'Compute',
  azurerm_application_gateway: 'Network',
  azurerm_app_service_plan: 'App',
  azurerm_linux_web_app: 'App',
  azurerm_container_registry: 'App',
  azurerm_storage_account: 'Data',
  azurerm_sql_server: 'Data',
  azurerm_mssql_database: 'Data',
  azurerm_cosmosdb_account: 'Data',
  azurerm_key_vault: 'Security',
  azurerm_log_analytics_workspace: 'Ops',
  azurerm_servicebus_namespace: 'Messaging',
  azurerm_cdn_profile: 'Edge'
}

const getInitials = (label, resourceType) => {
  const words = String(label || resourceType)
    .replace(/^Azure/i, '')
    .split(/[\s_-]+/)
    .filter(Boolean)

  if (words.length === 0) return 'AZ'
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase()
  return words.slice(0, 2).map((word) => word[0]).join('').toUpperCase()
}

const getMeta = (data) => {
  const props = data.properties ?? {}
  if (props.location) return props.location
  if (props.size) return props.size
  if (props.sku) return `SKU ${props.sku}`
  if (props.sku_name) return props.sku_name
  if (props.address_space) return Array.isArray(props.address_space) ? props.address_space[0] : props.address_space
  if (props.address_prefixes) {
    return Array.isArray(props.address_prefixes) ? props.address_prefixes[0] : props.address_prefixes
  }
  return 'Azure resource'
}

function AzureNodeBase({ id, data, selected }) {
  const resource = RESOURCES_BY_TYPE[data.resourceType]
  const name = data.properties.name || 'unnamed'
  const removeNode = useStore((state) => state.removeNode)
  const color = resource?.color ?? '#0078D4'
  const label = resource?.label ?? data.resourceType
  const category = CATEGORY_BY_TYPE[data.resourceType] ?? 'Azure'
  const initials = getInitials(label, data.resourceType)
  const meta = getMeta(data)

  const handleDelete = useCallback(
    (event) => {
      event.stopPropagation()
      removeNode(id)
    },
    [id, removeNode]
  )

  return (
    <div
      className={`azure-node group relative w-[250px] overflow-hidden rounded-xl border bg-panelDark shadow-xl transition-all duration-150 ${
        selected ? 'is-selected border-accent' : 'border-border/90'
      }`}
      style={{ '--node-accent': color }}
    >
      <Handle id="target-left" type="target" position={Position.Left} className="azure-node__handle" />
      <Handle id="target-top" type="target" position={Position.Top} className="azure-node__handle" />

      <div className="azure-node__accent" />
      <div className="relative flex gap-3 px-4 py-3.5">
        <div className="azure-node__icon shrink-0" aria-hidden="true">
          {initials}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="azure-node__category">{category}</span>
            <span className="h-1 w-1 rounded-full bg-textDim/50" />
            <span className="truncate text-[10px] font-semibold uppercase text-textDim">{label}</span>
          </div>
          <div className="truncate text-[15px] font-semibold leading-5 text-textMain">{name}</div>
          <div className="mt-1 truncate text-xs text-textDim">{meta}</div>
        </div>
      </div>

      <div className="azure-node__footer flex items-center justify-between gap-2 px-4 py-2">
        <span className="truncate font-mono text-[10px] text-textDim">{data.resourceType}</span>
        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
      </div>

      <button
        type="button"
        onClick={handleDelete}
        title="Remove resource"
        aria-label="Remove resource"
        className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md text-sm text-textDim opacity-0 transition-opacity hover:bg-red-900/40 hover:text-red-300 group-hover:opacity-100"
      >
        x
      </button>

      <Handle id="source-right" type="source" position={Position.Right} className="azure-node__handle" />
      <Handle id="source-bottom" type="source" position={Position.Bottom} className="azure-node__handle" />
    </div>
  )
}

export const AzureNode = memo(AzureNodeBase)
