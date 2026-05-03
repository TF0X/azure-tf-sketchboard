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
  },

  {
    id: 'single-vm',
    label: 'Single Linux VM (with networking)',
    description:
      'A working Linux VM with NIC, public IP, NSG, and a dedicated subnet — the minimum apply-ready VM stack.',
    nodes: [
      { key: 'rg', type: 'azurerm_resource_group', position: { x: 80, y: 60 }, props: { name: 'rg-vm' } },
      { key: 'vnet', type: 'azurerm_virtual_network', position: { x: 360, y: 60 }, props: { name: 'vnet-vm', address_space: ['10.10.0.0/16'] } },
      { key: 'subnet', type: 'azurerm_subnet', position: { x: 640, y: 60 }, props: { name: 'snet-vm', address_prefixes: ['10.10.1.0/24'] } },
      { key: 'nsg', type: 'azurerm_network_security_group', position: { x: 360, y: 220 }, props: { name: 'nsg-vm' } },
      { key: 'pip', type: 'azurerm_public_ip', position: { x: 640, y: 220 }, props: { name: 'pip-vm' } },
      { key: 'nic', type: 'azurerm_network_interface', position: { x: 920, y: 140 }, props: { name: 'nic-vm' } },
      { key: 'vm', type: 'azurerm_linux_virtual_machine', position: { x: 1200, y: 140 }, props: { name: 'vm-main' } }
    ],
    edges: [
      ['vnet', 'rg'],
      ['subnet', 'vnet'],
      ['nsg', 'rg'],
      ['pip', 'rg'],
      ['nic', 'subnet'],
      ['nic', 'pip'],
      ['nic', 'rg'],
      ['vm', 'nic'],
      ['vm', 'rg']
    ]
  },

  {
    id: 'three-tier-web',
    label: '3-Tier Web App',
    description:
      'Web app on App Service backed by PostgreSQL with Key Vault for secrets and Log Analytics for observability.',
    nodes: [
      { key: 'rg', type: 'azurerm_resource_group', position: { x: 80, y: 60 }, props: { name: 'rg-web' } },
      { key: 'asp', type: 'azurerm_app_service_plan', position: { x: 360, y: 60 }, props: { name: 'asp-web', os_type: 'Linux', sku_name: 'B1' } },
      { key: 'app', type: 'azurerm_linux_web_app', position: { x: 640, y: 60 }, props: { name: 'app-web-sketch' } },
      { key: 'pg', type: 'azurerm_postgresql_flexible_server', position: { x: 360, y: 260 }, props: { name: 'pg-web' } },
      { key: 'kv', type: 'azurerm_key_vault', position: { x: 640, y: 260 }, props: { name: 'kv-web' } },
      { key: 'law', type: 'azurerm_log_analytics_workspace', position: { x: 360, y: 460 }, props: { name: 'law-web' } }
    ],
    edges: [
      ['asp', 'rg'],
      ['app', 'asp'],
      ['app', 'rg'],
      ['pg', 'rg'],
      ['kv', 'rg'],
      ['law', 'rg']
    ]
  },

  {
    id: 'aks-production',
    label: 'AKS (production-style)',
    description:
      'AKS cluster with private VNet, ACR for images, Key Vault for secrets, Log Analytics, and a Managed Identity with AcrPull RBAC.',
    nodes: [
      { key: 'rg', type: 'azurerm_resource_group', position: { x: 80, y: 60 }, props: { name: 'rg-aks' } },
      { key: 'vnet', type: 'azurerm_virtual_network', position: { x: 360, y: 60 }, props: { name: 'vnet-aks', address_space: ['10.20.0.0/16'] } },
      { key: 'subnet', type: 'azurerm_subnet', position: { x: 640, y: 60 }, props: { name: 'snet-aks', address_prefixes: ['10.20.1.0/24'] } },
      { key: 'aks', type: 'azurerm_kubernetes_cluster', position: { x: 920, y: 60 }, props: { name: 'aks-main', dns_prefix: 'aksmain' } },
      { key: 'acr', type: 'azurerm_container_registry', position: { x: 360, y: 260 }, props: { name: 'acrmainsketch', sku: 'Standard' } },
      { key: 'kv', type: 'azurerm_key_vault', position: { x: 640, y: 260 }, props: { name: 'kv-aks' } },
      { key: 'law', type: 'azurerm_log_analytics_workspace', position: { x: 920, y: 260 }, props: { name: 'law-aks' } },
      { key: 'identity', type: 'azurerm_user_assigned_identity', position: { x: 360, y: 460 }, props: { name: 'id-aks-acr' } },
      { key: 'role_acr_pull', type: 'azurerm_role_assignment', position: { x: 640, y: 460 }, props: { name: '', role_definition_name: 'AcrPull' } }
    ],
    edges: [
      ['vnet', 'rg'],
      ['subnet', 'vnet'],
      ['aks', 'subnet'],
      ['aks', 'rg'],
      ['acr', 'rg'],
      ['kv', 'rg'],
      ['law', 'rg'],
      ['identity', 'rg'],
      ['role_acr_pull', 'identity'],
      ['role_acr_pull', 'acr']
    ]
  }
]
