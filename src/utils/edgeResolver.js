import { EDGE_FIELD_MAP } from '../data/edgeMap.js'

const refExpressionFor = (targetNode, attr, targetInstance) => {
  if (targetNode.data.schemaDriven) {
    return `${targetNode.data.resourceType}.${targetInstance}.${attr}`
  }
  return `module.${targetInstance}.${attr}`
}

// BFS over the canvas graph (edges are undirected for resolution — drag direction is UX, not semantics).
// Tracks the path so callers can show "via X → Y" hints.
const findReachablePath = (sourceNode, targetType, edges, nodesById) => {
  const visited = new Set([sourceNode.id])
  const queue = [{ id: sourceNode.id, path: [] }]
  while (queue.length > 0) {
    const { id: currentId, path } = queue.shift()
    for (const edge of edges) {
      let neighborId = null
      if (edge.source === currentId) neighborId = edge.target
      else if (edge.target === currentId) neighborId = edge.source
      if (!neighborId || visited.has(neighborId)) continue
      visited.add(neighborId)
      const next = nodesById[neighborId]
      if (!next) continue
      const nextPath = [...path, next]
      if (next.data.resourceType === targetType) return { target: next, path: nextPath }
      queue.push({ id: neighborId, path: nextPath })
    }
  }
  return null
}

export const sanitizeIdentifier = (value) => {
  const cleaned = String(value ?? '')
    .trim()
    .replace(/[^A-Za-z0-9_-]/g, '_')
  if (!cleaned) return 'unnamed'
  return /^[A-Za-z_]/.test(cleaned) ? cleaned : `r_${cleaned}`
}

export const buildInstanceNames = (nodes) => {
  const names = {}
  const used = new Set()
  for (const node of nodes) {
    const base = sanitizeIdentifier(node.data.properties.name || node.id)
    let candidate = base
    let counter = 2
    while (used.has(candidate)) {
      candidate = `${base}_${counter++}`
    }
    used.add(candidate)
    names[node.id] = candidate
  }
  return names
}

// Resolve every edge field the source could need: direct edges first, then transitive lookup
// through outgoing edges. Each binding includes path info so the UI can show *why* a field
// got auto-filled.
export function resolveEdgeBindings(sourceNode, edges, nodesById, instanceNames) {
  const mapForSource = EDGE_FIELD_MAP[sourceNode.data.resourceType] ?? {}

  const directByType = new Map()
  for (const edge of edges) {
    let other = null
    if (edge.source === sourceNode.id) other = nodesById[edge.target]
    else if (edge.target === sourceNode.id) other = nodesById[edge.source]
    if (!other) continue
    if (!directByType.has(other.data.resourceType)) {
      directByType.set(other.data.resourceType, other)
    }
  }

  const bindings = []
  for (const [targetType, mapping] of Object.entries(mapForSource)) {
    const direct = directByType.get(targetType) ?? null
    let target = direct
    let path = direct ? [direct] : []
    let transitive = false
    if (!target) {
      const found = findReachablePath(sourceNode, targetType, edges, nodesById)
      if (found) {
        target = found.target
        path = found.path
        transitive = true
      }
    }
    if (!target) continue
    const targetInstance = instanceNames[target.id]
    const rawValue = mapping.value(target)
    const attr = rawValue.split('.').pop()
    bindings.push({
      field: mapping.field,
      refExpr: refExpressionFor(target, attr, targetInstance),
      transitive,
      targetNodeId: target.id,
      targetType: target.data.resourceType,
      targetName: target.data.properties.name,
      path: path.map((n) => ({
        id: n.id,
        type: n.data.resourceType,
        name: n.data.properties.name
      }))
    })
  }
  return bindings
}

// Look up a binding by exact field path (e.g. "resource_group_name" or "gateway_ip_configuration.subnet_id").
export function findBindingForField(bindings, fieldPath) {
  return bindings.find((b) => b.field === fieldPath) ?? null
}
