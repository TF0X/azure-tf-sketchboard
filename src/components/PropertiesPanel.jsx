import { useCallback, useMemo } from 'react'
import { useStore } from '../store.js'
import { RESOURCES_BY_TYPE } from '../data/resources.js'
import { getSchema } from '../schema/schemaUtils.js'
import { buildInstanceNames, resolveEdgeBindings } from '../utils/edgeResolver.js'
import { PropertyField } from './PropertyField.jsx'
import { SchemaForm } from './SchemaForm.jsx'

export function PropertiesPanel() {
  const selectedNodeId = useStore((state) => state.selectedNodeId)
  const nodes = useStore((state) => state.nodes)
  const edges = useStore((state) => state.edges)
  const updateNodeProperty = useStore((state) => state.updateNodeProperty)
  const setNodeBlock = useStore((state) => state.setNodeBlock)
  const removeNode = useStore((state) => state.removeNode)

  const selectedNode = useMemo(
    () => nodes.find((node) => node.id === selectedNodeId) ?? null,
    [nodes, selectedNodeId]
  )

  const resource = selectedNode ? RESOURCES_BY_TYPE[selectedNode.data.resourceType] : null
  const schema = selectedNode?.data.schemaDriven ? getSchema(selectedNode.data.resourceType) : null

  const edgeBindings = useMemo(() => {
    if (!selectedNode) return []
    const nodesById = Object.fromEntries(nodes.map((n) => [n.id, n]))
    const instanceNames = buildInstanceNames(nodes)
    return resolveEdgeBindings(selectedNode, edges, nodesById, instanceNames)
  }, [selectedNode, nodes, edges])

  const handlePropertyChange = useCallback(
    (key, value) => {
      if (!selectedNode) return
      updateNodeProperty(selectedNode.id, key, value)
    },
    [selectedNode, updateNodeProperty]
  )

  const handleBlockChange = useCallback(
    (blockName, blockValue) => {
      if (!selectedNode) return
      setNodeBlock(selectedNode.id, blockName, blockValue)
    },
    [selectedNode, setNodeBlock]
  )

  const handleDelete = useCallback(() => {
    if (!selectedNode) return
    removeNode(selectedNode.id)
  }, [selectedNode, removeNode])

  const isEmpty = !selectedNode || !resource

  return (
    <aside className="flex flex-col w-96 bg-panelDark border-l border-border overflow-hidden">
      <div className="px-4 py-3 border-b border-border">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-textDim">Properties</h2>
        <p className="text-xs text-textDim mt-1">
          {selectedNode ? 'Edit selected resource' : 'Select a node to edit'}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {isEmpty ? (
          <div className="text-center text-textDim text-sm mt-12 px-4">
            <div className="text-3xl mb-3">⚙️</div>
            Click on any node in the canvas to view and edit its properties.
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-border">
              <span className="text-2xl">{resource.icon}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <div className="text-sm font-semibold text-textMain">{resource.label}</div>
                  {schema ? (
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-emerald-400 bg-emerald-900/30 border border-emerald-800/50 rounded px-1.5 py-0.5">
                      Schema
                    </span>
                  ) : null}
                </div>
                <div className="text-xs text-textDim font-mono truncate">{resource.type}</div>
              </div>
            </div>

            {schema ? (
              <SchemaForm
                schema={schema}
                properties={selectedNode.data.properties}
                blocks={selectedNode.data.blocks}
                edgeBindings={edgeBindings}
                onPropertyChange={handlePropertyChange}
                onBlockChange={handleBlockChange}
              />
            ) : (
              resource.properties.map((property) => (
                <PropertyField
                  key={property.name}
                  property={property}
                  value={selectedNode.data.properties[property.name] ?? ''}
                  onChange={handlePropertyChange}
                />
              ))
            )}

            <div className="pt-4 mt-2 border-t border-border">
              <button
                type="button"
                onClick={handleDelete}
                className="w-full px-3 py-2 rounded-md text-sm font-medium bg-red-900/30 border border-red-800/60 text-red-300 hover:bg-red-900/50 hover:text-red-200 transition-colors"
              >
                Delete Resource
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
