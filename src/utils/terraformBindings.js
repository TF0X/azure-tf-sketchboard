import { getSchema } from '../schema/schemaUtils.js'
import { inferTfTypeForField } from './generateFromSchema.js'
import { groupForNode } from './terraformGroups.js'
import { externalVarName, outputNameFor, rootInputExpression } from './terraformNames.js'

const clone = (value) => JSON.parse(JSON.stringify(value ?? {}))

export function setFieldValue(properties, blocks, fieldPath, value) {
  if (fieldPath.includes('.')) {
    const [parent, child] = fieldPath.split('.')
    if (!blocks[parent] || typeof blocks[parent] !== 'object') blocks[parent] = {}
    blocks[parent][child] = value
    return
  }

  properties[fieldPath] = value
}

export function localRefFor(targetNode, attr, instanceNames) {
  return `${targetNode.data.resourceType}.${instanceNames[targetNode.id]}.${attr}`
}

export function buildResourceContext(node, bindings, nodesById, instanceNames) {
  const schema = getSchema(node.data.resourceType)
  if (!schema) {
    throw new Error(`No schema for resource type ${node.data.resourceType}`)
  }

  const properties = { ...(node.data.properties ?? {}) }
  const blocks = clone(node.data.blocks)
  const externalInputs = []

  for (const binding of bindings) {
    const target = nodesById[binding.targetNodeId]
    if (!target) continue

    const attr = binding.refExpr.split('.').pop()
    const sourceGroup = groupForNode(node)
    const targetGroup = groupForNode(target)

    if (sourceGroup === targetGroup) {
      setFieldValue(properties, blocks, binding.field, {
        __ref: localRefFor(target, attr, instanceNames)
      })
      continue
    }

    const tfType = inferTfTypeForField(schema, binding.field)
    const variable = externalVarName(instanceNames[node.id], binding.field)

    setFieldValue(properties, blocks, binding.field, { __var: variable })
    externalInputs.push({
      variable,
      fieldPath: binding.field,
      tfType,
      refExpr: rootInputExpression(
        tfType,
        `module.${targetGroup}.${outputNameFor(instanceNames[target.id], attr)}`
      )
    })
  }

  return { schema, properties, blocks, externalInputs }
}

export function dedupeInputs(inputs) {
  const byName = new Map()
  for (const input of inputs) {
    if (!byName.has(input.variable)) byName.set(input.variable, input)
  }
  return [...byName.values()]
}
