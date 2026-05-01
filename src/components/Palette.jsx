import { useCallback } from 'react'
import { AZURE_RESOURCES } from '../data/resources.js'

export function Palette() {
  const handleDragStart = useCallback((event, resourceType) => {
    event.dataTransfer.setData('application/azure-resource-type', resourceType)
    event.dataTransfer.effectAllowed = 'move'
  }, [])

  return (
    <aside className="flex flex-col w-64 bg-panelDark border-r border-border overflow-hidden">
      <div className="px-4 py-3 border-b border-border">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-textDim">Resources</h2>
        <p className="text-xs text-textDim mt-1">Drag onto the canvas</p>
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1.5">
        {AZURE_RESOURCES.map((resource) => (
          <div
            key={resource.type}
            draggable
            onDragStart={(event) => handleDragStart(event, resource.type)}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium bg-panel border border-border border-l-4 cursor-grab hover:bg-[#1f2c4a] active:cursor-grabbing transition-colors"
            style={{ borderLeftColor: resource.color }}
          >
            <span className="text-lg leading-none">{resource.icon}</span>
            <span className="text-textMain">{resource.label}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
