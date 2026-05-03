export const padKey = (key, width) => key.padEnd(width, ' ')

export function variableNameFor(fieldPath) {
  return fieldPath.replace(/\./g, '_')
}

export function outputNameFor(instanceName, attr) {
  return `${instanceName}_${attr}`.replace(/[^A-Za-z0-9_]/g, '_')
}

export function externalVarName(instanceName, fieldPath) {
  return `${instanceName}_${variableNameFor(fieldPath)}`.replace(/[^A-Za-z0-9_]/g, '_')
}

export function rootInputExpression(tfType, refExpr) {
  if (tfType.startsWith('list(') || tfType.startsWith('set(')) return `[${refExpr}]`
  return refExpr
}
