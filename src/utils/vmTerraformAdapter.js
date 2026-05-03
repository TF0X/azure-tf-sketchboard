import { groupForNode } from './terraformGroups.js'
import { externalVarName, outputNameFor } from './terraformNames.js'
import { localRefFor } from './terraformBindings.js'

const FALLBACK_NIC_OWNED_FIELDS = ['subnet_id', 'public_ip_address_id']

export function vmContextBindings(bindings, hasExplicitNic) {
  if (!hasExplicitNic) return bindings
  return bindings.filter((binding) => !FALLBACK_NIC_OWNED_FIELDS.includes(binding.field))
}

export function addFallbackNicInputs(inputs, instanceName, bindings, nodesById, instanceNames) {
  const subnetBinding = bindings.find((binding) => binding.field === 'subnet_id')
  if (!subnetBinding) return

  const subnet = nodesById[subnetBinding.targetNodeId]
  if (!subnet || groupForNode(subnet) === 'vm') return

  const variable = externalVarName(instanceName, 'subnet_id')
  if (inputs.some((input) => input.variable === variable)) return

  inputs.push({
    variable,
    fieldPath: 'subnet_id',
    tfType: 'string',
    refExpr: `module.${groupForNode(subnet)}.${outputNameFor(instanceNames[subnet.id], 'id')}`
  })
}

export function renderFallbackNicForVm(instanceName, properties, bindings, nodesById, instanceNames) {
  const subnetId = resolveFallbackNicRef({
    field: 'subnet_id',
    instanceName,
    bindings,
    nodesById,
    instanceNames,
    missingValue: '"" # TODO: connect this VM to a subnet'
  })

  const publicIpId = resolveFallbackNicRef({
    field: 'public_ip_address_id',
    instanceName,
    bindings,
    nodesById,
    instanceNames,
    missingValue: null
  })

  const publicIpLine = publicIpId ? `    public_ip_address_id          = ${publicIpId}\n` : ''
  const location = properties.location?.__var ? `var.${properties.location.__var}` : `"${properties.location}"`
  const resourceGroup =
    properties.resource_group_name?.__var
      ? `var.${properties.resource_group_name.__var}`
      : properties.resource_group_name?.__ref ?? `"${properties.resource_group_name ?? ''}"`

  return `resource "azurerm_network_interface" "${instanceName}_nic" {
  name                = "${properties.name}-nic"
  location            = ${location}
  resource_group_name = ${resourceGroup}

  ip_configuration {
    name                          = "primary"
    subnet_id                     = ${subnetId}
${publicIpLine}    private_ip_address_allocation = "Dynamic"
  }
}
`
}

function resolveFallbackNicRef({ field, instanceName, bindings, nodesById, instanceNames, missingValue }) {
  const binding = bindings.find((candidate) => candidate.field === field)
  const target = binding ? nodesById[binding.targetNodeId] : null

  if (target && groupForNode(target) === 'vm') {
    return localRefFor(target, 'id', instanceNames)
  }

  if (binding) return `var.${externalVarName(instanceName, field)}`
  return missingValue
}
