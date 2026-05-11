export const AZURE_LOCATIONS = ['East US', 'West Europe', 'Southeast Asia', 'UK South', 'Australia East']

const LOCATION_FIELD = { name: 'location', label: 'Location', type: 'select', options: AZURE_LOCATIONS, default: 'East US' }

const RESOURCE_CATEGORIES = {
  CORE: 'Core',
  NETWORKING: 'Networking',
  COMPUTE: 'Compute',
  STORAGE_CONTAINERS: 'Storage & Containers',
  DATABASES: 'Databases',
  WEB_APIS: 'Web & APIs',
  SECURITY_IDENTITY: 'Security & Identity',
  MONITORING_INTEGRATION: 'Monitoring & Integration',
  AI_ML: 'AI & ML'
}

export const AZURE_RESOURCES = [
  {
    type: 'azurerm_resource_group',
    label: 'Resource Group',
    category: RESOURCE_CATEGORIES.CORE,
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
    category: RESOURCE_CATEGORIES.NETWORKING,
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
    category: RESOURCE_CATEGORIES.NETWORKING,
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
    category: RESOURCE_CATEGORIES.NETWORKING,
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
    category: RESOURCE_CATEGORIES.NETWORKING,
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
    category: RESOURCE_CATEGORIES.NETWORKING,
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
    category: RESOURCE_CATEGORIES.COMPUTE,
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
    category: RESOURCE_CATEGORIES.COMPUTE,
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
    category: RESOURCE_CATEGORIES.STORAGE_CONTAINERS,
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
    category: RESOURCE_CATEGORIES.DATABASES,
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
    category: RESOURCE_CATEGORIES.DATABASES,
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
    category: RESOURCE_CATEGORIES.WEB_APIS,
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
    category: RESOURCE_CATEGORIES.WEB_APIS,
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
    category: RESOURCE_CATEGORIES.SECURITY_IDENTITY,
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
    category: RESOURCE_CATEGORIES.STORAGE_CONTAINERS,
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
    category: RESOURCE_CATEGORIES.STORAGE_CONTAINERS,
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
    category: RESOURCE_CATEGORIES.NETWORKING,
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
    category: RESOURCE_CATEGORIES.MONITORING_INTEGRATION,
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
    category: RESOURCE_CATEGORIES.MONITORING_INTEGRATION,
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
    category: RESOURCE_CATEGORIES.DATABASES,
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
    category: RESOURCE_CATEGORIES.WEB_APIS,
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
    category: RESOURCE_CATEGORIES.SECURITY_IDENTITY,
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
    category: RESOURCE_CATEGORIES.SECURITY_IDENTITY,
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
    category: RESOURCE_CATEGORIES.NETWORKING,
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
    category: RESOURCE_CATEGORIES.DATABASES,
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
    category: RESOURCE_CATEGORIES.DATABASES,
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
    category: RESOURCE_CATEGORIES.WEB_APIS,
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
    category: RESOURCE_CATEGORIES.NETWORKING,
    icon: '🔁',
    color: '#0078D4',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'peering-hub-spoke' },
      { name: 'allow_virtual_network_access', label: 'Allow VNet Access', type: 'select', options: ['true', 'false'], default: 'true' },
      { name: 'allow_forwarded_traffic', label: 'Allow Forwarded Traffic', type: 'select', options: ['true', 'false'], default: 'false' }
    ],
    notes: 'Connect to two VNets to wire virtual_network_name (the local one) and remote_virtual_network_id (the remote one). Direction is inferred from edge order on the canvas.'
  },
  {
    type: 'azurerm_lb',
    label: 'Load Balancer',
    category: RESOURCE_CATEGORIES.NETWORKING,
    icon: '⚖️',
    color: '#0078D4',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'lb-main' },
      LOCATION_FIELD,
      { name: 'sku', label: 'SKU', type: 'select', options: ['Basic', 'Standard', 'Gateway'], default: 'Standard' }
    ],
    blockDefaults: {
      frontend_ip_configuration: { name: 'lb-feip' }
    },
    notes: 'Connect to a Subnet for internal LB (frontend_ip_configuration.subnet_id) or to a Public IP for internet-facing (frontend_ip_configuration.public_ip_address_id).'
  },
  {
    type: 'azurerm_firewall',
    label: 'Azure Firewall',
    category: RESOURCE_CATEGORIES.NETWORKING,
    icon: '🔥',
    color: '#E74C3C',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'fw-main' },
      LOCATION_FIELD,
      { name: 'sku_name', label: 'SKU Name', type: 'select', options: ['AZFW_VNet', 'AZFW_Hub'], default: 'AZFW_VNet' },
      { name: 'sku_tier', label: 'SKU Tier', type: 'select', options: ['Standard', 'Premium', 'Basic'], default: 'Standard' }
    ],
    blockDefaults: {
      ip_configuration: { name: 'fw-ipconfig', subnet_id: '', public_ip_address_id: '' }
    },
    notes: 'Subnet must be named "AzureFirewallSubnet". Connect to a Subnet and a Public IP to wire ip_configuration.'
  },
  {
    type: 'azurerm_nat_gateway',
    label: 'NAT Gateway',
    category: RESOURCE_CATEGORIES.NETWORKING,
    icon: '🔀',
    color: '#27AE60',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'nat-main' },
      LOCATION_FIELD,
      { name: 'sku_name', label: 'SKU', type: 'select', options: ['Standard'], default: 'Standard' },
      { name: 'idle_timeout_in_minutes', label: 'Idle Timeout (min)', type: 'text', default: '10' }
    ],
    notes: 'Connect to a Public IP to wire public_ip_address_id. Associate with a Subnet via a separate azurerm_subnet_nat_gateway_association resource.'
  },
  {
    type: 'azurerm_dns_zone',
    label: 'DNS Zone',
    category: RESOURCE_CATEGORIES.NETWORKING,
    icon: '🗺️',
    color: '#0078D4',
    properties: [
      { name: 'name', label: 'Zone Name', type: 'text', default: 'example.com' }
    ],
    notes: 'DNS Zone is a global resource — no location field. Connect to a Resource Group for resource_group_name.'
  },
  {
    type: 'azurerm_container_group',
    label: 'Container Instance',
    category: RESOURCE_CATEGORIES.COMPUTE,
    icon: '📫',
    color: '#2980B9',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'aci-main' },
      LOCATION_FIELD,
      { name: 'os_type', label: 'OS Type', type: 'select', options: ['Linux', 'Windows'], default: 'Linux' },
      { name: 'restart_policy', label: 'Restart Policy', type: 'select', options: ['Always', 'Never', 'OnFailure'], default: 'Always' }
    ],
    blockDefaults: {
      container: { name: 'app', image: 'mcr.microsoft.com/hello-world', cpu: 0.5, memory: 1.5 }
    },
    notes: 'Add container blocks for each container in the group. Connect to a Resource Group.'
  },
  {
    type: 'azurerm_linux_virtual_machine_scale_set',
    label: 'VM Scale Set',
    category: RESOURCE_CATEGORIES.COMPUTE,
    icon: '🖥️',
    color: '#8E44AD',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'vmss-main' },
      LOCATION_FIELD,
      { name: 'sku', label: 'VM Size', type: 'select', options: ['Standard_B2s', 'Standard_D2s_v3', 'Standard_D4s_v3'], default: 'Standard_D2s_v3' },
      { name: 'instances', label: 'Instance Count', type: 'text', default: '2' },
      { name: 'admin_username', label: 'Admin Username', type: 'text', default: 'adminuser' }
    ],
    blockDefaults: {
      os_disk: { caching: 'ReadWrite', storage_account_type: 'StandardSSD_LRS' },
      source_image_reference: { publisher: 'Canonical', offer: '0001-com-ubuntu-server-jammy', sku: '22_04-lts-gen2', version: 'latest' },
      network_interface: { name: 'vmss-nic', primary: true, ip_configuration: { name: 'vmss-ipconfig', primary: true } }
    },
    notes: 'Connect to a Subnet to wire network_interface.ip_configuration.subnet_id. Connect to a Resource Group.'
  },
  {
    type: 'azurerm_mysql_flexible_server',
    label: 'MySQL Flexible',
    category: RESOURCE_CATEGORIES.DATABASES,
    icon: '🐬',
    color: '#00758F',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'mysql-main' },
      LOCATION_FIELD,
      { name: 'sku_name', label: 'SKU', type: 'text', default: 'B_Standard_B1ms' },
      { name: 'version', label: 'Version', type: 'select', options: ['5.7', '8.0.21'], default: '8.0.21' },
      { name: 'administrator_login', label: 'Admin Login', type: 'text', default: 'mysqladmin' },
      { name: 'administrator_password', label: 'Admin Password', type: 'text', default: 'P@ssw0rd1234!' },
      { name: 'storage_size_gb', label: 'Storage (GB)', type: 'text', default: '20' }
    ],
    notes: 'administrator_password default is a placeholder — change before applying.'
  },
  {
    type: 'azurerm_eventhub_namespace',
    label: 'Event Hubs',
    category: RESOURCE_CATEGORIES.MONITORING_INTEGRATION,
    icon: '📡',
    color: '#E74C3C',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'evhns-main' },
      LOCATION_FIELD,
      { name: 'sku', label: 'SKU', type: 'select', options: ['Basic', 'Standard', 'Premium'], default: 'Standard' },
      { name: 'capacity', label: 'Throughput Units', type: 'text', default: '1' }
    ]
  },
  {
    type: 'azurerm_synapse_workspace',
    label: 'Synapse Analytics',
    category: RESOURCE_CATEGORIES.DATABASES,
    icon: '🔮',
    color: '#7B2FBE',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'synapse-main' },
      LOCATION_FIELD,
      { name: 'storage_data_lake_gen2_filesystem_id', label: 'ADLS Gen2 Filesystem ID', type: 'text', default: '' },
      { name: 'sql_administrator_login', label: 'SQL Admin Login', type: 'text', default: 'sqladmin' },
      { name: 'sql_administrator_login_password', label: 'SQL Admin Password', type: 'text', default: 'P@ssw0rd1234!' }
    ],
    notes: 'storage_data_lake_gen2_filesystem_id auto-fills when connected to a Storage Account. Password default is a placeholder.'
  },
  {
    type: 'azurerm_api_management',
    label: 'API Management',
    category: RESOURCE_CATEGORIES.WEB_APIS,
    icon: '🔌',
    color: '#16A085',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'apim-main' },
      LOCATION_FIELD,
      { name: 'publisher_name', label: 'Publisher Name', type: 'text', default: 'My Company' },
      { name: 'publisher_email', label: 'Publisher Email', type: 'text', default: 'admin@example.com' },
      { name: 'sku_name', label: 'SKU', type: 'select', options: ['Developer_1', 'Basic_1', 'Standard_1', 'Premium_1'], default: 'Developer_1' }
    ],
    notes: 'sku_name format is <tier>_<capacity> (e.g. Developer_1). Connect to a Subnet for VNet integration (virtual_network_configuration.subnet_id).'
  },
  {
    type: 'azurerm_windows_web_app',
    label: 'Web App (Windows)',
    category: RESOURCE_CATEGORIES.WEB_APIS,
    icon: '🪟',
    color: '#16A085',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'app-win-main' },
      LOCATION_FIELD
    ],
    blockDefaults: {
      site_config: {}
    },
    notes: 'Connect to an App Service Plan (Windows os_type) for service_plan_id. Connect to a Resource Group.'
  },
  {
    type: 'azurerm_application_insights',
    label: 'App Insights',
    category: RESOURCE_CATEGORIES.MONITORING_INTEGRATION,
    icon: '🔭',
    color: '#8E44AD',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'appi-main' },
      LOCATION_FIELD,
      { name: 'application_type', label: 'Application Type', type: 'select', options: ['web', 'ios', 'java', 'MobileCenter', 'Node.JS', 'other'], default: 'web' }
    ],
    notes: 'Connect to a Log Analytics Workspace to wire workspace_id (workspace-based mode). Connect to a Resource Group.'
  },
  {
    type: 'azurerm_monitor_action_group',
    label: 'Action Group',
    category: RESOURCE_CATEGORIES.MONITORING_INTEGRATION,
    icon: '🔔',
    color: '#8E44AD',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'ag-main' },
      { name: 'short_name', label: 'Short Name (max 12)', type: 'text', default: 'ag-main' }
    ],
    notes: 'resource_group_name auto-fills from a Resource Group edge. short_name must be ≤12 characters.'
  },
  {
    type: 'azurerm_logic_app_workflow',
    label: 'Logic App',
    category: RESOURCE_CATEGORIES.MONITORING_INTEGRATION,
    icon: '🔗',
    color: '#F39C12',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'logic-main' },
      LOCATION_FIELD
    ],
    notes: 'Classic (Consumption) Logic App. For Standard tier use azurerm_logic_app_standard. Connect to a Resource Group.'
  },
  {
    type: 'azurerm_data_factory',
    label: 'Data Factory',
    category: RESOURCE_CATEGORIES.MONITORING_INTEGRATION,
    icon: '🏭',
    color: '#2C3E50',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'adf-main' },
      LOCATION_FIELD
    ],
    blockDefaults: {
      identity: { type: 'SystemAssigned' }
    },
    notes: 'Connect to a Resource Group for resource_group_name.'
  },
  {
    type: 'azurerm_cognitive_account',
    label: 'Cognitive Services',
    category: RESOURCE_CATEGORIES.AI_ML,
    icon: '🧠',
    color: '#4B0082',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'cog-main' },
      LOCATION_FIELD,
      { name: 'kind', label: 'Kind', type: 'select', options: ['CognitiveServices', 'OpenAI', 'ComputerVision', 'TextAnalytics', 'SpeechServices', 'FormRecognizer', 'Face'], default: 'OpenAI' },
      { name: 'sku_name', label: 'SKU', type: 'select', options: ['F0', 'S0', 'S1', 'S2', 'S3', 'S4'], default: 'S0' }
    ],
    notes: 'Use kind = "OpenAI" for Azure OpenAI Service. Connect to a Resource Group.'
  },
  {
    type: 'azurerm_machine_learning_workspace',
    label: 'ML Workspace',
    category: RESOURCE_CATEGORIES.AI_ML,
    icon: '🤖',
    color: '#4B0082',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'mlw-main' },
      LOCATION_FIELD,
      { name: 'friendly_name', label: 'Friendly Name', type: 'text', default: 'ML Workspace' }
    ],
    blockDefaults: {
      identity: { type: 'SystemAssigned' }
    },
    notes: 'Requires a Key Vault, Storage Account, and App Insights. Connect edges to wire key_vault_id, storage_account_id, and application_insights_id.'
  },
  {
    type: 'azurerm_search_service',
    label: 'AI Search',
    category: RESOURCE_CATEGORIES.AI_ML,
    icon: '🔍',
    color: '#4B0082',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'srch-main' },
      LOCATION_FIELD,
      { name: 'sku', label: 'SKU', type: 'select', options: ['free', 'basic', 'standard', 'standard2', 'standard3'], default: 'basic' },
      { name: 'replica_count', label: 'Replicas', type: 'text', default: '1' },
      { name: 'partition_count', label: 'Partitions', type: 'text', default: '1' }
    ],
    notes: 'Connect to a Resource Group.'
  },
  {
    type: 'azurerm_databricks_workspace',
    label: 'Databricks',
    category: RESOURCE_CATEGORIES.AI_ML,
    icon: '🧱',
    color: '#FF3621',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'dbw-main' },
      LOCATION_FIELD,
      { name: 'sku', label: 'SKU', type: 'select', options: ['standard', 'premium', 'trial'], default: 'standard' }
    ],
    notes: 'Connect to a Resource Group. For VNet injection, connect to a Virtual Network (custom_virtual_network_id).'
  },
  {
    type: 'azurerm_iothub',
    label: 'IoT Hub',
    category: RESOURCE_CATEGORIES.MONITORING_INTEGRATION,
    icon: '📟',
    color: '#00B4D8',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'iot-main' },
      LOCATION_FIELD,
      { name: 'sku_name', label: 'SKU', type: 'select', options: ['B1', 'B2', 'B3', 'F1', 'S1', 'S2', 'S3'], default: 'S1' },
      { name: 'sku_capacity', label: 'Capacity', type: 'text', default: '1' }
    ],
    blockDefaults: {
      sku: { name: 'S1', capacity: 1 }
    },
    notes: 'Connect to a Resource Group.'
  },
  {
    type: 'azurerm_signalr_service',
    label: 'SignalR Service',
    category: RESOURCE_CATEGORIES.WEB_APIS,
    icon: '🔄',
    color: '#16A085',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'sigr-main' },
      LOCATION_FIELD,
      { name: 'sku', label: 'SKU', type: 'select', options: ['Free_F1', 'Standard_S1', 'Premium_P1'], default: 'Standard_S1' },
      { name: 'capacity', label: 'Capacity', type: 'text', default: '1' },
      { name: 'service_mode', label: 'Service Mode', type: 'select', options: ['Default', 'Serverless', 'Classic'], default: 'Default' }
    ],
    notes: 'Connect to a Resource Group.'
  },
  {
    type: 'azurerm_notification_hub_namespace',
    label: 'Notification Hubs',
    category: RESOURCE_CATEGORIES.MONITORING_INTEGRATION,
    icon: '📣',
    color: '#E74C3C',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'ntfns-main' },
      LOCATION_FIELD,
      { name: 'namespace_type', label: 'Type', type: 'select', options: ['NotificationHub', 'Messaging'], default: 'NotificationHub' },
      { name: 'sku_name', label: 'SKU', type: 'select', options: ['Free', 'Basic', 'Standard'], default: 'Free' }
    ],
    notes: 'Connect to a Resource Group.'
  },
  {
    type: 'azurerm_vpn_gateway',
    label: 'VPN Gateway',
    category: RESOURCE_CATEGORIES.NETWORKING,
    icon: '🔐',
    color: '#0078D4',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'vpng-main' },
      LOCATION_FIELD,
      { name: 'sku', label: 'SKU', type: 'select', options: ['Basic', 'VpnGw1', 'VpnGw2', 'VpnGw3', 'VpnGw4', 'VpnGw5'], default: 'VpnGw1' },
      { name: 'generation', label: 'Generation', type: 'select', options: ['Generation1', 'Generation2'], default: 'Generation1' },
      { name: 'type', label: 'Type', type: 'select', options: ['Vpn', 'ExpressRoute'], default: 'Vpn' },
      { name: 'vpn_type', label: 'VPN Type', type: 'select', options: ['RouteBased', 'PolicyBased'], default: 'RouteBased' }
    ],
    notes: 'Subnet must be named "GatewaySubnet". Connect to a Subnet and a Public IP. Connect to a Resource Group.'
  },
  {
    type: 'azurerm_frontdoor_profile',
    label: 'Front Door',
    category: RESOURCE_CATEGORIES.NETWORKING,
    icon: '🚪',
    color: '#27AE60',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'fd-main' },
      { name: 'sku_name', label: 'SKU', type: 'select', options: ['Standard_AzureFrontDoor', 'Premium_AzureFrontDoor'], default: 'Standard_AzureFrontDoor' },
      { name: 'response_timeout_seconds', label: 'Response Timeout (s)', type: 'text', default: '120' }
    ],
    notes: 'Front Door is a global resource — no location field. Connect to a Resource Group.'
  },
  {
    type: 'azurerm_recovery_services_vault',
    label: 'Recovery Vault',
    category: RESOURCE_CATEGORIES.MONITORING_INTEGRATION,
    icon: '🔰',
    color: '#2C3E50',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'rsv-main' },
      LOCATION_FIELD,
      { name: 'sku', label: 'SKU', type: 'select', options: ['Standard', 'RS0'], default: 'Standard' },
      { name: 'soft_delete_enabled', label: 'Soft Delete', type: 'select', options: ['true', 'false'], default: 'true' }
    ],
    notes: 'Connect to a Resource Group. Used for VM backups and Azure Site Recovery (ASR).'
  },
  {
    type: 'azurerm_automation_account',
    label: 'Automation Account',
    category: RESOURCE_CATEGORIES.MONITORING_INTEGRATION,
    icon: '⚙️',
    color: '#8E44AD',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'aa-main' },
      LOCATION_FIELD,
      { name: 'sku_name', label: 'SKU', type: 'select', options: ['Basic', 'Free'], default: 'Basic' }
    ],
    blockDefaults: {
      identity: { type: 'SystemAssigned' }
    },
    notes: 'Connect to a Resource Group.'
  },
  {
    type: 'azurerm_static_web_app',
    label: 'Static Web App',
    category: RESOURCE_CATEGORIES.WEB_APIS,
    icon: '📄',
    color: '#16A085',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'swa-main' },
      LOCATION_FIELD,
      { name: 'sku_tier', label: 'SKU Tier', type: 'select', options: ['Free', 'Standard'], default: 'Free' },
      { name: 'sku_size', label: 'SKU Size', type: 'select', options: ['Free', 'Standard'], default: 'Free' }
    ],
    notes: 'Connect to a Resource Group.'
  },
  {
    type: 'azurerm_stream_analytics_job',
    label: 'Stream Analytics',
    category: RESOURCE_CATEGORIES.MONITORING_INTEGRATION,
    icon: '🌊',
    color: '#2C3E50',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'asa-main' },
      LOCATION_FIELD,
      { name: 'streaming_units', label: 'Streaming Units', type: 'text', default: '3' },
      { name: 'compatibility_level', label: 'Compatibility', type: 'select', options: ['1.0', '1.1', '1.2'], default: '1.2' }
    ],
    notes: 'Connect to a Resource Group.'
  },
  {
    type: 'azurerm_monitor_diagnostic_setting',
    label: 'Diagnostic Setting',
    category: RESOURCE_CATEGORIES.MONITORING_INTEGRATION,
    icon: '🩺',
    color: '#8E44AD',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'diag-main' },
      { name: 'target_resource_id', label: 'Target Resource ID', type: 'text', default: '' },
      { name: 'log_analytics_workspace_id', label: 'Log Analytics Workspace ID', type: 'text', default: '' }
    ],
    notes: 'Scoped to a target resource, not a Resource Group. Connect to a Log Analytics Workspace to auto-fill log_analytics_workspace_id.'
  },
  {
    type: 'azurerm_virtual_hub',
    label: 'Virtual Hub',
    category: RESOURCE_CATEGORIES.NETWORKING,
    icon: '🕸️',
    color: '#0078D4',
    properties: [
      { name: 'name', label: 'Name', type: 'text', default: 'vhub-main' },
      LOCATION_FIELD,
      { name: 'address_prefix', label: 'Address Prefix', type: 'text', default: '10.100.0.0/23' },
      { name: 'sku', label: 'SKU', type: 'select', options: ['Basic', 'Standard'], default: 'Standard' }
    ],
    notes: 'Requires a Virtual WAN (azurerm_virtual_wan). Connect to a Resource Group.'
  }
]

export const RESOURCES_BY_TYPE = AZURE_RESOURCES.reduce((acc, resource) => {
  acc[resource.type] = resource
  return acc
}, {})
