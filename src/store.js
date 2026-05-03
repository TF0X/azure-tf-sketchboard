import { create } from 'zustand'
import { addEdge, applyEdgeChanges, applyNodeChanges } from '@xyflow/react'
import { RESOURCES_BY_TYPE } from './data/resources.js'
import {
  buildRequiredTopLevelBlocks,
  coerceLegacyDefault,
  defaultValueForKind,
  fieldKind,
  getSchema
} from './schema/schemaUtils.js'
import { generateTerraformFiles } from './utils/generateTerraform.js'

const buildDefaultProperties = (resource, schema) => {
  // For schema-driven resources, seed all required attrs with type-correct defaults,
  // then overlay legacy curated defaults where the names match.
  if (schema) {
    const properties = {}
    const legacyDefaults = Object.fromEntries(
      (resource.properties ?? []).map((p) => [p.name, p.default])
    )
    for (const [name, attr] of Object.entries(schema.block.attributes ?? {})) {
      if (!attr.required) continue
      const kind = fieldKind(attr.type)
      const legacy = legacyDefaults[name]
      properties[name] =
        legacy !== undefined ? coerceLegacyDefault(legacy, kind) : defaultValueForKind(kind)
    }
    // Also carry over any legacy-curated optional fields (e.g. SKUs) that the user expects to see filled.
    for (const [name, value] of Object.entries(legacyDefaults)) {
      if (name in properties) continue
      const attr = schema.block.attributes?.[name]
      if (!attr) continue
      properties[name] = coerceLegacyDefault(value, fieldKind(attr.type))
    }
    return properties
  }
  return (resource.properties ?? []).reduce((acc, prop) => {
    acc[prop.name] = prop.default
    return acc
  }, {})
}

let nodeIdCounter = 1
const nextNodeId = () => `node-${nodeIdCounter++}`

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  selectedNodeId: null,

  addNode: (resourceType, position) => {
    const resource = RESOURCES_BY_TYPE[resourceType]
    if (!resource) return
    const schema = getSchema(resourceType)
    const id = nextNodeId()
    const data = {
      resourceType,
      properties: buildDefaultProperties(resource, schema)
    }
    if (schema) {
      data.schemaDriven = true
      const required = buildRequiredTopLevelBlocks(schema.block)
      const overrides = resource.blockDefaults ?? {}
      const merged = {}
      for (const [name, attrs] of Object.entries(required)) {
        merged[name] = { ...attrs, ...(overrides[name] ?? {}) }
      }
      // Optional blocks the curator chose to seed (e.g. cosmosdb geo_location, app gateway many)
      for (const [name, attrs] of Object.entries(overrides)) {
        if (name in merged) continue
        merged[name] = { ...attrs }
      }
      data.blocks = merged
    }
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
      const resource = RESOURCES_BY_TYPE[tnode.type]
      if (!resource) continue
      const schema = getSchema(tnode.type)
      const id = nextNodeId()
      const baseProps = buildDefaultProperties(resource, schema)
      const data = {
        resourceType: tnode.type,
        properties: { ...baseProps, ...(tnode.props ?? {}) }
      }
      if (schema) {
        data.schemaDriven = true
        const required = buildRequiredTopLevelBlocks(schema.block)
        const overrides = resource.blockDefaults ?? {}
        const merged = {}
        for (const [name, attrs] of Object.entries(required)) {
          merged[name] = { ...attrs, ...(overrides[name] ?? {}) }
        }
        for (const [name, attrs] of Object.entries(overrides)) {
          if (name in merged) continue
          merged[name] = { ...attrs }
        }
        data.blocks = merged
      }
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
