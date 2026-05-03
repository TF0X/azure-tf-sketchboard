import { memo, useCallback } from 'react'
import { Handle, Position } from '@xyflow/react'
import { RESOURCES_BY_TYPE } from '../data/resources.js'
import { ResourceIcon } from '../data/icons.jsx'
import { useStore } from '../store.js'

function getMeta(data) {
  const props = data.properties ?? {}
  if (props.size) return props.size
  if (props.sku_name) return props.sku_name
  if (props.sku) return props.sku
  if (props.address_space) return Array.isArray(props.address_space) ? props.address_space[0] : props.address_space
  if (props.address_prefixes) {
    return Array.isArray(props.address_prefixes) ? props.address_prefixes[0] : props.address_prefixes
  }
  if (props.location) return props.location
  return null
}

function AzureNodeBase({ id, data, selected }) {
  const resource = RESOURCES_BY_TYPE[data.resourceType]
  const name = data.properties.name || 'unnamed'
  const removeNode = useStore((state) => state.removeNode)
  const color = resource?.color ?? '#0078D4'
  const label = resource?.label ?? data.resourceType
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
      className={`azure-node group relative flex items-center gap-2.5 rounded-xl border bg-panelDark transition-all duration-150 ${
        selected ? 'is-selected' : ''
      }`}
      style={{ '--node-accent': color }}
      title={data.resourceType}
    >
      <Handle id="target-left" type="target" position={Position.Left} className="azure-node__handle" />
      <Handle id="target-top" type="target" position={Position.Top} className="azure-node__handle" />

      <div className="azure-node__icon" aria-hidden="true">
        <ResourceIcon resourceType={data.resourceType} size={20} />
      </div>

      <div className="min-w-0 flex-1 pr-2">
        <div className="truncate text-[13px] font-semibold leading-tight text-textMain">{name}</div>
        <div className="mt-0.5 truncate text-[10px] font-medium uppercase tracking-wide text-textDim/80">
          {meta ? `${label} - ${meta}` : label}
        </div>
      </div>

      <button
        type="button"
        onClick={handleDelete}
        title="Remove resource"
        aria-label="Remove resource"
        className="azure-node__close opacity-0 group-hover:opacity-100"
      >
        x
      </button>

      <Handle id="source-right" type="source" position={Position.Right} className="azure-node__handle" />
      <Handle id="source-bottom" type="source" position={Position.Bottom} className="azure-node__handle" />
    </div>
  )
}

export const AzureNode = memo(AzureNodeBase)
