import { useCallback, useMemo, useRef, useState } from 'react'
import { Background, BackgroundVariant, Controls, MiniMap, ReactFlow, useReactFlow } from '@xyflow/react'
import { useStore } from '../store.js'
import { AzureNode } from './AzureNode.jsx'

const nodeTypes = { azureNode: AzureNode }

export function Canvas() {
  const wrapperRef = useRef(null)
  const { screenToFlowPosition } = useReactFlow()
  const [selectedEdgeId, setSelectedEdgeId] = useState(null)

  const nodes = useStore((state) => state.nodes)
  const edges = useStore((state) => state.edges)
  const onNodesChange = useStore((state) => state.onNodesChange)
  const onEdgesChange = useStore((state) => state.onEdgesChange)
  const onConnect = useStore((state) => state.onConnect)
  const addNode = useStore((state) => state.addNode)
  const setSelectedNode = useStore((state) => state.setSelectedNode)
  const removeEdge = useStore((state) => state.removeEdge)

  const handleDragOver = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault()
      const resourceType = event.dataTransfer.getData('application/azure-resource-type')
      if (!resourceType) return
      const position = screenToFlowPosition({ x: event.clientX, y: event.clientY })
      addNode(resourceType, position)
    },
    [addNode, screenToFlowPosition]
  )

  const handleNodeClick = useCallback(
    (_event, node) => {
      setSelectedNode(node.id)
      setSelectedEdgeId(null)
    },
    [setSelectedNode]
  )

  const handlePaneClick = useCallback(() => {
    setSelectedNode(null)
    setSelectedEdgeId(null)
  }, [setSelectedNode])

  const handleEdgeClick = useCallback((_event, edge) => {
    setSelectedEdgeId(edge.id)
  }, [])

  const handleDeleteSelectedEdge = useCallback(() => {
    if (!selectedEdgeId) return
    removeEdge(selectedEdgeId)
    setSelectedEdgeId(null)
  }, [selectedEdgeId, removeEdge])

  const showEmptyState = useMemo(() => nodes.length === 0, [nodes.length])
  const selectedEdgeExists = useMemo(
    () => Boolean(selectedEdgeId && edges.some((edge) => edge.id === selectedEdgeId)),
    [selectedEdgeId, edges]
  )

  return (
    <div ref={wrapperRef} className="relative flex-1 min-w-0 bg-canvas" onDragOver={handleDragOver} onDrop={handleDrop}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        onPaneClick={handlePaneClick}
        onEdgeClick={handleEdgeClick}
        deleteKeyCode={['Backspace', 'Delete']}
        fitView
        proOptions={{ hideAttribution: false }}
      >
        <Background variant={BackgroundVariant.Dots} gap={18} size={1} color="#2b3656" />
        <Controls className="!bg-panel !border-border" />
        <MiniMap
          className="!bg-panelDark !border-border"
          nodeColor={() => '#0078D4'}
          maskColor="rgba(15, 23, 41, 0.7)"
        />
      </ReactFlow>

      {showEmptyState ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-sm px-6">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-lg font-semibold text-textMain mb-2">Empty canvas</h3>
            <p className="text-sm text-textDim">
              Drag a resource from the left palette onto the canvas to start sketching your Azure infrastructure.
            </p>
            <p className="text-xs text-textDim mt-3">
              Tip: hover a node to delete it, or click a connection and press <kbd className="px-1 py-0.5 rounded bg-panel border border-border text-textMain">Delete</kbd>.
            </p>
          </div>
        </div>
      ) : null}

      {selectedEdgeExists ? (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-lg bg-panelDark border border-border shadow-lg">
          <span className="text-xs text-textDim">Connection selected</span>
          <button
            type="button"
            onClick={handleDeleteSelectedEdge}
            className="px-3 py-1 rounded-md text-xs font-medium bg-red-900/40 border border-red-800/60 text-red-300 hover:bg-red-900/60 hover:text-red-200 transition-colors"
          >
            Remove connection
          </button>
        </div>
      ) : null}
    </div>
  )
}
