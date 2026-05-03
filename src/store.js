import { create } from 'zustand'
import { addEdge, applyEdgeChanges, applyNodeChanges } from '@xyflow/react'
import { createNodeData } from './utils/nodeFactory.js'
import { generateTerraformFiles } from './utils/generateTerraform.js'

let nodeIdCounter = 1
const nextNodeId = () => `node-${nodeIdCounter++}`

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  selectedNodeId: null,

  addNode: (resourceType, position) => {
    const data = createNodeData(resourceType)
    if (!data) return
    const id = nextNodeId()
    const newNode = { id, type: 'azureNode', position, data }
    set((state) => ({ nodes: [...state.nodes, newNode] }))
  },

  updateNodeProperty: (nodeId, key, value) => {
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, properties: { ...node.data.properties, [key]: value } } }
          : node
      )
    }))
  },

  setNodeBlock: (nodeId, blockName, blockValue) => {
    set((state) => ({
      nodes: state.nodes.map((node) => {
        if (node.id !== nodeId) return node
        const blocks = { ...(node.data.blocks ?? {}) }
        if (blockValue === null || blockValue === undefined) {
          delete blocks[blockName]
        } else {
          blocks[blockName] = blockValue
        }
        return { ...node, data: { ...node.data, blocks } }
      })
    }))
  },

  setSelectedNode: (nodeId) => set({ selectedNodeId: nodeId }),

  removeNode: (nodeId) => {
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== nodeId),
      edges: state.edges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId),
      selectedNodeId: state.selectedNodeId === nodeId ? null : state.selectedNodeId
    }))
  },

  removeEdge: (edgeId) => {
    set((state) => ({ edges: state.edges.filter((edge) => edge.id !== edgeId) }))
  },

  onNodesChange: (changes) => {
    set((state) => {
      const nextNodes = applyNodeChanges(changes, state.nodes)
      const removed = changes.filter((c) => c.type === 'remove').map((c) => c.id)
      const nextSelected = removed.includes(state.selectedNodeId) ? null : state.selectedNodeId
      return { nodes: nextNodes, selectedNodeId: nextSelected }
    })
  },

  onEdgesChange: (changes) => {
    set((state) => ({ edges: applyEdgeChanges(changes, state.edges) }))
  },

  onConnect: (connection) => {
    set((state) => ({ edges: addEdge({ ...connection, type: 'default', animated: false }, state.edges) }))
  },

  clearCanvas: () => set({ nodes: [], edges: [], selectedNodeId: null }),

  applyTemplate: (template) => {
    if (!template?.nodes) return
    const nodes = []
    const keyToNodeId = {}
    for (const tnode of template.nodes) {
      const data = createNodeData(tnode.type, tnode.props)
      if (!data) continue
      const id = nextNodeId()
      nodes.push({ id, type: 'azureNode', position: { ...tnode.position }, data })
      keyToNodeId[tnode.key] = id
    }
    let edgeCounter = 1
    const edges = []
    for (const [srcKey, tgtKey] of template.edges ?? []) {
      const source = keyToNodeId[srcKey]
      const target = keyToNodeId[tgtKey]
      if (!source || !target) continue
      edges.push({ id: `tpl-edge-${edgeCounter++}`, source, target, type: 'default', animated: false })
    }
    set({ nodes, edges, selectedNodeId: null })
  },

  generateTerraformFiles: () => {
    const { nodes, edges } = get()
    return generateTerraformFiles(nodes, edges)
  }
}))
