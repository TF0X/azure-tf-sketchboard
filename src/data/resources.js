export const AZURE_LOCATIONS = ['East US', 'West Europe', 'Southeast Asia', 'UK South', 'Australia East']

const LOCATION_FIELD = { name: 'location', label: 'Location', type: 'select', options: AZURE_LOCATIONS, default: 'East US' }

export const AZURE_RESOURCES = [
  {
    type: 'azurerm_resource_group',
    label: 'Resource Group',
    icon: '🗂️',
    color: '#0078D4',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'rg-main' },
      LOCATION_FIELD
    ]
  },
  {
    type: 'azurerm_virtual_network',
    label: 'Virtual Network',
    icon: '🌐',
    color: '#0078D4',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'vnet-main' },
      { name: 'address_space', label: 'Address Space', type: 'text', default: '10.0.0.0/16' },
      LOCATION_FIELD
    ]
  },
  {
    type: 'azurerm_subnet',
    label: 'Subnet',
    icon: '🔲',
    color: '#0078D4',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'subnet-main' },
      { name: 'address_prefixes', label: 'Address Prefix', type: 'text', default: '10.0.1.0/24' }
    ]
  },
  {
    type: 'azurerm_network_security_group',
    label: 'Network Security Group',
    icon: '🛡️',
    color: '#E74C3C',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'nsg-main' },
      LOCATION_FIELD
    ]
  },
  {
    type: 'azurerm_network_interface',
    label: 'Network Interface',
    icon: 'NIC',
    color: '#0078D4',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'nic-main' },
      LOCATION_FIELD
    ],
    blockDefaults: {
      ip_configuration: {
        name: 'primary',
        private_ip_address_allocation: 'Dynamic',
        subnet_id: ''
      }
    },
    notes: 'Connect to a Subnet to inherit subnet_id, connect to a Public IP to attach it, and connect to a VM to populate network_interface_ids.'
  },
  {
    type: 'azurerm_public_ip',
    label: 'Public IP',
    icon: '🌍',
    color: '#27AE60',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'pip-main' },
      LOCATION_FIELD,
      { name: 'allocation_method', label: 'Allocation', type: 'select', options: ['Static', 'Dynamic'], default: 'Static' },
      { name: 'sku', label: 'SKU', type: 'select', options: ['Basic', 'Standard'], default: 'Standard' }
    ]
  },
  {
    type: 'azurerm_linux_virtual_machine',
    label: 'Linux VM',
    icon: '🖥️',
    color: '#8E44AD',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'vm-main' },
      LOCATION_FIELD,
      { name: 'size', label: 'VM Size', type: 'select', options: ['Standard_B1s', 'Standard_B2s', 'Standard_D2s_v3', 'Standard_D4s_v3'], default: 'Standard_B2s' },
      { name: 'admin_username', label: 'Admin Username', type: 'text', default: 'adminuser' }
    ],
    blockDefaults: {
      os_disk: { caching: 'ReadWrite', storage_account_type: 'StandardSSD_LRS' },
      source_image_reference: { publisher: 'Canonical', offer: '0001-com-ubuntu-server-jammy', sku: '22_04-lts-gen2', version: 'latest' }
    },
    notes: 'Connect this VM to a Network Interface to populate `network_interface_ids`. If no NIC is connected, generation creates one from a Subnet edge.'
  },
  {
    type: 'azurerm_windows_virtual_machine',
    label: 'Windows VM',
    icon: '🪟',
    color: '#8E44AD',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'vm-win-main' },
      LOCATION_FIELD,
      { name: 'size', label: 'VM Size', type: 'select', options: ['Standard_B2s', 'Standard_D2s_v3', 'Standard_D4s_v3'], default: 'Standard_D2s_v3' },
      { name: 'admin_username', label: 'Admin Username', type: 'text', default: 'adminuser' },
      { name: 'admin_password', label: 'Admin Password', type: 'text', default: 'P@ssw0rd1234!' }
    ],
    blockDefaults: {
      os_disk: { caching: 'ReadWrite', storage_account_type: 'StandardSSD_LRS' },
      source_image_reference: { publisher: 'MicrosoftWindowsServer', offer: 'WindowsServer', sku: '2022-Datacenter', version: 'latest' }
    },
    notes: 'Connect this VM to a Network Interface to populate `network_interface_ids`. If no NIC is connected, generation creates one from a Subnet edge. admin_password default is a placeholder — change before applying.'
  },
  {
    type: 'azurerm_storage_account',
    label: 'Storage Account',
    icon: '💾',
    color: '#F39C12',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'stmainsketch001' },
      LOCATION_FIELD,
      { name: 'account_tier', label: 'Tier', type: 'select', options: ['Standard', 'Premium'], default: 'Standard' },
      { name: 'account_replication_type', label: 'Replication', type: 'select', options: ['LRS', 'GRS', 'ZRS', 'RAGRS', 'GZRS', 'RAGZRS'], default: 'LRS' }
    ]
  },
  {
    type: 'azurerm_sql_server',
    label: 'SQL Server',
    icon: '🗃️',
    color: '#E67E22',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'sql-main' },
      LOCATION_FIELD,
      { name: 'version', label: 'Version', type: 'select', options: ['12.0'], default: '12.0' },
      { name: 'administrator_login', label: 'Admin Login', type: 'text', default: 'sqladmin' },
      { name: 'administrator_login_password', label: 'Admin Password', type: 'text', default: 'P@ssw0rd1234!' }
    ],
    notes: 'Deprecated in azurerm v4 — use azurerm_mssql_server going forward.'
  },
  {
    type: 'azurerm_mssql_database',
    label: 'SQL Database',
    icon: '📊',
    color: '#E67E22',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'sqldb-main' },
      { name: 'sku_name', label: 'SKU', type: 'select', options: ['Basic', 'S0', 'S1', 'S2', 'P1', 'P2', 'GP_S_Gen5_2'], default: 'S0' },
      { name: 'max_size_gb', label: 'Max Size (GB)', type: 'text', default: '32' }
    ]
  },
  {
    type: 'azurerm_app_service_plan',
    label: 'App Service Plan',
    icon: '📋',
    color: '#16A085',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'asp-main' },
      LOCATION_FIELD,
      { name: 'os_type', label: 'OS Type', type: 'select', options: ['Linux', 'Windows'], default: 'Linux' },
      { name: 'sku_name', label: 'SKU', type: 'select', options: ['F1', 'B1', 'B2', 'S1', 'S2', 'P1v2', 'P2v2'], default: 'B1' }
    ],
    blockDefaults: {
      sku: { tier: 'Basic', size: 'B1' }
    },
    notes: 'Deprecated in azurerm v4 — use azurerm_service_plan going forward.'
  },
  {
    type: 'azurerm_linux_web_app',
    label: 'Web App (Linux)',
    icon: '🌐',
    color: '#16A085',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'app-main-sketch' },
      LOCATION_FIELD,
      { name: 'runtime_stack', label: 'Runtime', type: 'select', options: ['NODE|18-lts', 'PYTHON|3.11', 'DOTNETCORE|8.0', 'JAVA|17-java17'], default: 'NODE|18-lts' }
    ],
    blockDefaults: {
      site_config: {}
    }
  },
  {
    type: 'azurerm_key_vault',
    label: 'Key Vault',
    icon: '🔑',
    color: '#C0392B',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'kv-main' },
      LOCATION_FIELD,
      { name: 'sku_name', label: 'SKU', type: 'select', options: ['standard', 'premium'], default: 'standard' },
      { name: 'tenant_id', label: 'Tenant ID', type: 'text', default: '00000000-0000-0000-0000-000000000000' },
      { name: 'soft_delete_retention_days', label: 'Soft Delete Days', type: 'text', default: '7' }
    ],
    notes: 'tenant_id default is a placeholder — set to your Azure AD tenant before applying. In real configs, use `data.azurerm_client_config.current.tenant_id`.'
  },
  {
    type: 'azurerm_container_registry',
    label: 'Container Registry',
    icon: '📦',
    color: '#2980B9',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'acrmainsketch' },
      LOCATION_FIELD,
      { name: 'sku', label: 'SKU', type: 'select', options: ['Basic', 'Standard', 'Premium'], default: 'Standard' },
      { name: 'admin_enabled', label: 'Admin Enabled', type: 'select', options: ['true', 'false'], default: 'false' }
    ]
  },
  {
    type: 'azurerm_kubernetes_cluster',
    label: 'AKS Cluster',
    icon: '☸️',
    color: '#2980B9',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'aks-main' },
      LOCATION_FIELD,
      { name: 'dns_prefix', label: 'DNS Prefix', type: 'text', default: 'aksmain' },
      { name: 'kubernetes_version', label: 'K8s Version', type: 'text', default: '1.29' }
    ],
    blockDefaults: {
      default_node_pool: { name: 'default', vm_size: 'Standard_D2s_v3', node_count: 1 },
      identity: { type: 'SystemAssigned' }
    }
  },
  {
    type: 'azurerm_application_gateway',
    label: 'Application Gateway',
    icon: '⚖️',
    color: '#27AE60',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'agw-main' },
      LOCATION_FIELD
    ],
    blockDefaults: {
      sku: { name: 'Standard_v2', tier: 'Standard_v2', capacity: 2 },
      gateway_ip_configuration: { name: 'agw-ipconfig', subnet_id: '' },
      frontend_port: { name: 'agw-feport', port: 80 },
      frontend_ip_configuration: { name: 'agw-feip' },
      backend_address_pool: { name: 'agw-bepool' },
      backend_http_settings: { name: 'agw-be-http', cookie_based_affinity: 'Disabled', port: 80, protocol: 'Http', request_timeout: 30 },
      http_listener: { name: 'agw-listener', frontend_ip_configuration_name: 'agw-feip', frontend_port_name: 'agw-feport', protocol: 'Http' },
      request_routing_rule: { name: 'agw-rrr', rule_type: 'Basic', http_listener_name: 'agw-listener', backend_address_pool_name: 'agw-bepool', backend_http_settings_name: 'agw-be-http', priority: 100 }
    },
    notes: 'gateway_ip_configuration.subnet_id requires a subnet edge — fill manually in the form until subnet edges populate it.'
  },
  {
    type: 'azurerm_log_analytics_workspace',
    label: 'Log Analytics',
    icon: '📈',
    color: '#8E44AD',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'law-main' },
      LOCATION_FIELD,
      { name: 'sku', label: 'SKU', type: 'select', options: ['PerGB2018', 'Free', 'Standalone'], default: 'PerGB2018' },
      { name: 'retention_in_days', label: 'Retention (days)', type: 'text', default: '30' }
    ]
  },
  {
    type: 'azurerm_servicebus_namespace',
    label: 'Service Bus',
    icon: '📨',
    color: '#E74C3C',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'sb-main-sketch' },
      LOCATION_FIELD,
      { name: 'sku', label: 'SKU', type: 'select', options: ['Basic', 'Standard', 'Premium'], default: 'Standard' }
    ]
  },
  {
    type: 'azurerm_cosmosdb_account',
    label: 'Cosmos DB',
    icon: '🌌',
    color: '#2C3E50',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'cosmos-main-sketch' },
      LOCATION_FIELD,
      { name: 'offer_type', label: 'Offer Type', type: 'select', options: ['Standard'], default: 'Standard' },
      { name: 'kind', label: 'Kind', type: 'select', options: ['GlobalDocumentDB', 'MongoDB', 'Parse'], default: 'GlobalDocumentDB' }
    ],
    blockDefaults: {
      consistency_policy: { consistency_level: 'Session' },
      geo_location: { location: 'East US', failover_priority: 0 }
    }
  },
  {
    type: 'azurerm_cdn_profile',
    label: 'CDN Profile',
    icon: '🚀',
    color: '#F39C12',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'cdn-main' },
      LOCATION_FIELD,
      { name: 'sku', label: 'SKU', type: 'select', options: ['Standard_Microsoft', 'Standard_Akamai', 'Premium_Verizon'], default: 'Standard_Microsoft' }
    ]
  },
  {
    type: 'azurerm_user_assigned_identity',
    label: 'Managed Identity',
    icon: '🪪',
    color: '#7159C1',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'id-main' },
      LOCATION_FIELD
    ]
  },
  {
    type: 'azurerm_role_assignment',
    label: 'Role Assignment',
    icon: '🛂',
    color: '#7159C1',
    properties: [
      { name: 'name', label: 'Name (optional)', type: 'text', default: '' },
      { name: 'role_definition_name', label: 'Role', type: 'select',
        options: ['Reader', 'Contributor', 'Owner', 'Storage Blob Data Reader', 'Storage Blob Data Contributor', 'Key Vault Secrets User', 'Key Vault Secrets Officer', 'AcrPull', 'AcrPush'],
        default: 'Reader' },
      { name: 'scope', label: 'Scope (resource ID)', type: 'text', default: '' },
      { name: 'principal_id', label: 'Principal ID', type: 'text', default: '' }
    ],
    notes: 'scope and principal_id auto-fill when connected to a target resource and a Managed Identity. role_definition_name MUST match the target resource type (e.g. AcrPull for Container Registry).'
  },
  {
    type: 'azurerm_private_endpoint',
    label: 'Private Endpoint',
    icon: '🔒',
    color: '#16A085',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'pe-main' },
      LOCATION_FIELD
    ],
    blockDefaults: {
      private_service_connection: {
        name: 'pe-connection',
        is_manual_connection: false,
        subresource_names: ['blob']
      }
    },
    notes: 'subnet_id and resource_group_name come from edges. private_service_connection.private_connection_resource_id auto-fills when connected to a target resource (Storage, Key Vault, SQL Server, etc.). Edit subresource_names to match the target service (e.g. blob/file/queue for storage, vault for key_vault, sqlServer for sql).'
  },
  {
    type: 'azurerm_redis_cache',
    label: 'Redis Cache',
    icon: '🟥',
    color: '#DC382D',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'redis-main' },
      LOCATION_FIELD,
      { name: 'capacity', label: 'Capacity', type: 'text', default: '1' },
      { name: 'family', label: 'Family', type: 'select', options: ['C', 'P'], default: 'C' },
      { name: 'sku_name', label: 'SKU', type: 'select', options: ['Basic', 'Standard', 'Premium'], default: 'Standard' }
    ]
  },
  {
    type: 'azurerm_postgresql_flexible_server',
    label: 'PostgreSQL Flexible',
    icon: '🐘',
    color: '#336791',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'pg-main' },
      LOCATION_FIELD,
      { name: 'sku_name', label: 'SKU', type: 'text', default: 'B_Standard_B1ms' },
      { name: 'version', label: 'Version', type: 'select', options: ['11', '12', '13', '14', '15', '16'], default: '15' },
      { name: 'administrator_login', label: 'Admin Login', type: 'text', default: 'pgadmin' },
      { name: 'administrator_password', label: 'Admin Password', type: 'text', default: 'P@ssw0rd1234!' },
      { name: 'storage_mb', label: 'Storage (MB)', type: 'text', default: '32768' }
    ],
    notes: 'administrator_password default is a placeholder — change before applying. For production, use a Key Vault reference.'
  },
  {
    type: 'azurerm_linux_function_app',
    label: 'Function App (Linux)',
    icon: '⚡',
    color: '#FFD400',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'func-main-sketch' },
      LOCATION_FIELD,
      { name: 'storage_account_name', label: 'Storage Account Name', type: 'text', default: '' },
      { name: 'storage_account_access_key', label: 'Storage Access Key', type: 'text', default: '' }
    ],
    blockDefaults: {
      site_config: {}
    },
    notes: 'storage_account_name auto-fills from a Storage Account edge. storage_account_access_key needs to be wired manually (use a Key Vault reference in real deployments). service_plan_id from an App Service Plan edge.'
  },
  {
    type: 'azurerm_virtual_network_peering',
    label: 'VNet Peering',
    icon: '🔁',
    color: '#0078D4',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'peering-hub-spoke' },
      { name: 'allow_virtual_network_access', label: 'Allow VNet Access', type: 'select', options: ['true', 'false'], default: 'true' },
      { name: 'allow_forwarded_traffic', label: 'Allow Forwarded Traffic', type: 'select', options: ['true', 'false'], default: 'false' }
    ],
    notes: 'Connect to two VNets to wire virtual_network_name (the local one) and remote_virtual_network_id (the remote one). Direction is inferred from edge order on the canvas.'
  }
]

export const RESOURCES_BY_TYPE = AZURE_RESOURCES.reduce((acc, resource) => {
  acc[resource.type] = resource
  return acc
}, {})
