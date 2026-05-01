import { memo, useCallback } from 'react'
import { Handle, Position } from '@xyflow/react'
import { RESOURCES_BY_TYPE } from '../data/resources.js'
import { useStore } from '../store.js'

function AzureNodeBase({ id, data, selected }) {
  const resource = RESOURCES_BY_TYPE[data.resourceType]
  const name = data.properties.name || 'unnamed'
  const removeNode = useStore((state) => state.removeNode)

  const handleDelete = useCallback(
    (event) => {
      event.stopPropagation()
      removeNode(id)
    },
    [id, removeNode]
  )

  return (
    <div
      className={`group relative min-w-[200px] rounded-lg bg-panel border-2 shadow-lg overflow-hidden ${
        selected ? 'border-accent' : 'border-border'
      }`}
    >
      <Handle type="target" position={Position.Left} />
      <div className="h-1.5 w-full" style={{ backgroundColor: resource?.color ?? '#666' }} />
      <div className="flex items-center gap-2 px-3 py-2.5 pr-9">
        <span className="text-xl leading-none">{resource?.icon ?? '📦'}</span>
        <div className="flex flex-col min-w-0">
          <span className="text-xs uppercase tracking-wider text-textDim">
            {resource?.label ?? data.resourceType}
          </span>
          <span className="text-sm font-medium text-textMain truncate">{name}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={handleDelete}
        title="Remove resource"
        aria-label="Remove resource"
        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-md text-textDim opacity-0 group-hover:opacity-100 hover:bg-red-900/40 hover:text-red-300 transition-opacity"
      >
        ✕
      </button>
      <Handle type="source" position={Position.Right} />
    </div>
  )
}

export const AzureNode = memo(AzureNodeBase)
