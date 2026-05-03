// Predefined canvas templates. Each template lists nodes (with relative positions
// and seed properties) and edges (referencing nodes by their `key`). The store's
// applyTemplate action instantiates them via addNode + onConnect.

export const TEMPLATES = [
  {
    id: 'hub-and-spoke',
    label: 'Hub-and-Spoke Network',
    description:
      'Central hub VNet with shared services (Key Vault, Log Analytics) and two spoke VNets connected via VNet peering.',
    nodes: [
      // Hub
      { key: 'rg_hub', type: 'azurerm_resource_group', position: { x: 80, y: 60 }, props: { name: 'rg-hub' } },
      { key: 'vnet_hub', type: 'azurerm_virtual_network', position: { x: 360, y: 60 }, props: { name: 'vnet-hub', address_space: ['10.0.0.0/16'] } },
      { key: 'subnet_hub', type: 'azurerm_subnet', position: { x: 640, y: 60 }, props: { name: 'snet-hub-shared', address_prefixes: ['10.0.1.0/24'] } },
      { key: 'kv_shared', type: 'azurerm_key_vault', position: { x: 360, y: 220 }, props: { name: 'kv-hub-shared' } },
      { key: 'law_shared', type: 'azurerm_log_analytics_workspace', position: { x: 640, y: 220 }, props: { name: 'law-hub-shared' } },

      // Spoke A
      { key: 'rg_spoke_a', type: 'azurerm_resource_group', position: { x: 80, y: 420 }, props: { name: 'rg-spoke-a' } },
      { key: 'vnet_spoke_a', type: 'azurerm_virtual_network', position: { x: 360, y: 420 }, props: { name: 'vnet-spoke-a', address_space: ['10.1.0.0/16'] } },
      { key: 'subnet_spoke_a', type: 'azurerm_subnet', position: { x: 640, y: 420 }, props: { name: 'snet-spoke-a-app', address_prefixes: ['10.1.1.0/24'] } },

      // Spoke B
      { key: 'rg_spoke_b', type: 'azurerm_resource_group', position: { x: 80, y: 620 }, props: { name: 'rg-spoke-b' } },
      { key: 'vnet_spoke_b', type: 'azurerm_virtual_network', position: { x: 360, y: 620 }, props: { name: 'vnet-spoke-b', address_space: ['10.2.0.0/16'] } },
      { key: 'subnet_spoke_b', type: 'azurerm_subnet', position: { x: 640, y: 620 }, props: { name: 'snet-spoke-b-app', address_prefixes: ['10.2.1.0/24'] } },

      // Peerings — one per direction. The local virtual_network_name comes via the VNet edge;
      // remote_virtual_network_id is set as a bare HCL ref the generator emits unquoted.
      {
        key: 'peer_hub_to_a',
        type: 'azurerm_virtual_network_peering',
        position: { x: 920, y: 240 },
        props: {
          name: 'peer-hub-to-spoke-a',
          remote_virtual_network_id: 'azurerm_virtual_network.vnet_spoke_a.id',
          allow_virtual_network_access: 'true',
          allow_forwarded_traffic: 'false'
        }
      },
      {
        key: 'peer_a_to_hub',
        type: 'azurerm_virtual_network_peering',
        position: { x: 920, y: 380 },
        props: {
          name: 'peer-spoke-a-to-hub',
          remote_virtual_network_id: 'azurerm_virtual_network.vnet_hub.id',
          allow_virtual_network_access: 'true',
          allow_forwarded_traffic: 'false'
        }
      },
      {
        key: 'peer_hub_to_b',
        type: 'azurerm_virtual_network_peering',
        position: { x: 920, y: 520 },
        props: {
          name: 'peer-hub-to-spoke-b',
          remote_virtual_network_id: 'azurerm_virtual_network.vnet_spoke_b.id',
          allow_virtual_network_access: 'true',
          allow_forwarded_traffic: 'false'
        }
      },
      {
        key: 'peer_b_to_hub',
        type: 'azurerm_virtual_network_peering',
        position: { x: 920, y: 660 },
        props: {
          name: 'peer-spoke-b-to-hub',
          remote_virtual_network_id: 'azurerm_virtual_network.vnet_hub.id',
          allow_virtual_network_access: 'true',
          allow_forwarded_traffic: 'false'
        }
      }
    ],
    edges: [
      // Hub network
      ['vnet_hub', 'rg_hub'],
      ['subnet_hub', 'vnet_hub'],
      ['kv_shared', 'rg_hub'],
      ['law_shared', 'rg_hub'],
      // Spoke A
      ['vnet_spoke_a', 'rg_spoke_a'],
      ['subnet_spoke_a', 'vnet_spoke_a'],
      // Spoke B
      ['vnet_spoke_b', 'rg_spoke_b'],
      ['subnet_spoke_b', 'vnet_spoke_b'],
      // Peerings: each peering connects to its LOCAL VNet (and that VNet's RG via transitive)
      ['peer_hub_to_a', 'vnet_hub'],
      ['peer_a_to_hub', 'vnet_spoke_a'],
      ['peer_hub_to_b', 'vnet_hub'],
      ['peer_b_to_hub', 'vnet_spoke_b']
    ]
  }
]
