import { useCallback, useMemo, useState } from 'react'
import { AZURE_RESOURCES } from '../data/resources.js'

export function Palette() {
  const [searchQuery, setSearchQuery] = useState('')
  const [collapsedCategories, setCollapsedCategories] = useState({})

  const handleDragStart = useCallback((event, resourceType) => {
    event.dataTransfer.setData('application/azure-resource-type', resourceType)
    event.dataTransfer.effectAllowed = 'move'
  }, [])

  const normalizedQuery = searchQuery.trim().toLowerCase()

  const filteredResources = useMemo(() => {
    if (!normalizedQuery) {
      return AZURE_RESOURCES
    }

    return AZURE_RESOURCES.filter((resource) => {
      const searchableText = [resource.label, resource.type, resource.category]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      return searchableText.includes(normalizedQuery)
    })
  }, [normalizedQuery])

  const groupedResources = useMemo(() => {
    return filteredResources.reduce((groups, resource) => {
      const category = resource.category ?? 'Other'

      if (!groups[category]) {
        groups[category] = []
      }

      groups[category].push(resource)
      return groups
    }, {})
  }, [filteredResources])

  const visibleCategories = Object.keys(groupedResources)

  const toggleCategory = useCallback((category) => {
    setCollapsedCategories((current) => ({
      ...current,
      [category]: !current[category]
    }))
  }, [])

  return (
    <aside className="flex flex-col w-64 bg-panelDark border-r border-border overflow-hidden">
      <div className="px-4 py-3 border-b border-border">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-textDim">Resources</h2>
        <p className="text-xs text-textDim mt-1">Drag onto the canvas</p>
        <input
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search services..."
          className="w-full mt-3 px-3 py-2 rounded-md border border-border bg-panel text-sm text-textMain placeholder:text-textDim outline-none focus:border-[#4da3ff]"
        />
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {visibleCategories.length === 0 ? (
          <div className="px-3 py-6 text-sm text-center text-textDim border border-dashed border-border rounded-md bg-panel">
            No services match your search.
          </div>
        ) : (
          visibleCategories.map((category) => {
            const resources = groupedResources[category]
            const isCollapsed = collapsedCategories[category] ?? false

            return (
              <section key={category} className="rounded-md border border-border bg-panel/30 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between gap-3 px-3 py-2 text-left hover:bg-[#1f2c4a] transition-colors"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-textDim">
                    {category}
                  </span>
                  <span className="flex items-center gap-2 text-xs text-textDim">
                    <span>{resources.length}</span>
                    <span className="text-sm leading-none">{isCollapsed ? '▸' : '▾'}</span>
                  </span>
                </button>

                {!isCollapsed && (
                  <div className="px-2 pb-2 space-y-1.5">
                    {resources.map((resource) => (
                      <div
                        key={resource.type}
                        draggable
                        onDragStart={(event) => handleDragStart(event, resource.type)}
                        className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium bg-panel border border-border border-l-4 cursor-grab hover:bg-[#1f2c4a] active:cursor-grabbing transition-colors"
                        style={{ borderLeftColor: resource.color }}
                        title={resource.type}
                      >
                        <span className="text-lg leading-none">{resource.icon}</span>
                        <div className="min-w-0">
                          <div className="text-textMain truncate">{resource.label}</div>
                          <div className="text-[11px] text-textDim truncate">{resource.type}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )
          })
        )}
      </div>
    </aside>
  )
}
