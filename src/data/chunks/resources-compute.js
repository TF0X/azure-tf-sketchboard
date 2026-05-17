// AUTO-GENERATED — category: Compute
export default [
  {
    type: "azurerm_backup_policy_vm_workload",
    label: "Backup Policy Vm Workload",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "recovery_vault_name", label: "Recovery Vault Name", type: "text", default: "" },
    { name: "workload_type", label: "Workload Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_batch_application",
    label: "Batch Application",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_batch_certificate",
    label: "Batch Certificate",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "certificate", label: "Certificate", type: "text", default: "" },
    { name: "format", label: "Format", type: "text", default: "" },
    { name: "thumbprint", label: "Thumbprint", type: "text", default: "" },
    { name: "thumbprint_algorithm", label: "Thumbprint Algorithm", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_batch_job",
    label: "Batch Job",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "batch_pool_id", label: "Batch Pool Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_batch_pool",
    label: "Batch Pool",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "node_agent_sku_id", label: "Node Agent Sku Id", type: "text", default: "" },
    { name: "vm_size", label: "Vm Size", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_capacity_reservation",
    label: "Capacity Reservation",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "capacity_reservation_group_id", label: "Capacity Reservation Group Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_capacity_reservation_group",
    label: "Capacity Reservation Group",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_dedicated_host",
    label: "Dedicated Host",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "dedicated_host_group_id", label: "Dedicated Host Group Id", type: "text", default: "" },
    { name: "platform_fault_domain", label: "Platform Fault Domain", type: "number", default: "1" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_dedicated_host_group",
    label: "Dedicated Host Group",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "platform_fault_domain_count", label: "Platform Fault Domain Count", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_dev_center_gallery",
    label: "Dev Center Gallery",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "dev_center_id", label: "Dev Center Id", type: "text", default: "" },
    { name: "shared_gallery_id", label: "Shared Gallery Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dev_test_global_vm_shutdown_schedule",
    label: "Dev Test Global Vm Shutdown Schedule",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "daily_recurrence_time", label: "Daily Recurrence Time", type: "text", default: "" },
    { name: "timezone", label: "Timezone", type: "text", default: "" },
    { name: "virtual_machine_id", label: "Virtual Machine Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_dev_test_linux_virtual_machine",
    label: "Dev Test Linux Virtual Machine",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "lab_name", label: "Lab Name", type: "text", default: "" },
    { name: "lab_subnet_name", label: "Lab Subnet Name", type: "text", default: "" },
    { name: "lab_virtual_network_id", label: "Lab Virtual Network Id", type: "text", default: "" },
    { name: "size", label: "Size", type: "text", default: "Standard_B2s" },
    { name: "storage_type", label: "Storage Type", type: "text", default: "" },
    { name: "username", label: "Username", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dev_test_windows_virtual_machine",
    label: "Dev Test Windows Virtual Machine",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "lab_name", label: "Lab Name", type: "text", default: "" },
    { name: "lab_subnet_name", label: "Lab Subnet Name", type: "text", default: "" },
    { name: "lab_virtual_network_id", label: "Lab Virtual Network Id", type: "text", default: "" },
    { name: "password", label: "Password", type: "text", default: "" },
    { name: "size", label: "Size", type: "text", default: "Standard_B2s" },
    { name: "storage_type", label: "Storage Type", type: "text", default: "" },
    { name: "username", label: "Username", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_disk_access",
    label: "Disk Access",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_disk_encryption_set",
    label: "Disk Encryption Set",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_gallery_application",
    label: "Gallery Application",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "gallery_id", label: "Gallery Id", type: "text", default: "" },
    { name: "supported_os_type", label: "Supported Os Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_gallery_application_version",
    label: "Gallery Application Version",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "gallery_application_id", label: "Gallery Application Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_image",
    label: "Image",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_logic_app_integration_account_batch_configuration",
    label: "Logic App Integration Account Batch Configuration",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "batch_group_name", label: "Batch Group Name", type: "text", default: "" },
    { name: "integration_account_name", label: "Integration Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_maintenance_assignment_dedicated_host",
    label: "Maintenance Assignment Dedicated Host",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "dedicated_host_id", label: "Dedicated Host Id", type: "text", default: "" },
    { name: "maintenance_configuration_id", label: "Maintenance Configuration Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_maintenance_assignment_virtual_machine",
    label: "Maintenance Assignment Virtual Machine",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "maintenance_configuration_id", label: "Maintenance Configuration Id", type: "text", default: "" },
    { name: "virtual_machine_id", label: "Virtual Machine Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_maintenance_assignment_virtual_machine_scale_set",
    label: "Maintenance Assignment Virtual Machine Scale Set",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "maintenance_configuration_id", label: "Maintenance Configuration Id", type: "text", default: "" },
    { name: "virtual_machine_scale_set_id", label: "Virtual Machine Scale Set Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_managed_disk_sas_token",
    label: "Managed Disk Sas Token",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "access_level", label: "Access Level", type: "text", default: "" },
    { name: "duration_in_seconds", label: "Duration In Seconds", type: "number", default: "1" },
    { name: "managed_disk_id", label: "Managed Disk Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_virtual_machine",
    label: "Mssql Virtual Machine",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "virtual_machine_id", label: "Virtual Machine Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_virtual_machine_availability_group_listener",
    label: "Mssql Virtual Machine Availability Group Listener",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "sql_virtual_machine_group_id", label: "Sql Virtual Machine Group Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_virtual_machine_group",
    label: "Mssql Virtual Machine Group",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sql_image_offer", label: "Sql Image Offer", type: "text", default: "" },
    { name: "sql_image_sku", label: "Sql Image Sku", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_netapp_snapshot",
    label: "Netapp Snapshot",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "pool_name", label: "Pool Name", type: "text", default: "" },
    { name: "volume_name", label: "Volume Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_netapp_snapshot_policy",
    label: "Netapp Snapshot Policy",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_oracle_cloud_vm_cluster",
    label: "Oracle Cloud Vm Cluster",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cloud_exadata_infrastructure_id", label: "Cloud Exadata Infrastructure Id", type: "text", default: "" },
    { name: "cpu_core_count", label: "Cpu Core Count", type: "number", default: "1" },
    { name: "db_servers", label: "Db Servers", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "gi_version", label: "Gi Version", type: "text", default: "" },
    { name: "hostname", label: "Hostname", type: "text", default: "" },
    { name: "license_model", label: "License Model", type: "text", default: "" },
    { name: "ssh_public_keys", label: "Ssh Public Keys", type: "text", default: "" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" },
    { name: "virtual_network_id", label: "Virtual Network Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_orchestrated_virtual_machine_scale_set",
    label: "Orchestrated Virtual Machine Scale Set",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "platform_fault_domain_count", label: "Platform Fault Domain Count", type: "number", default: "1" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" },
    { name: "instances", label: "Instances", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_policy_virtual_machine_configuration_assignment",
    label: "Policy Virtual Machine Configuration Assignment",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "virtual_machine_id", label: "Virtual Machine Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_proximity_placement_group",
    label: "Proximity Placement Group",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_security_center_server_vulnerability_assessment_virtual_machine",
    label: "Security Center Server Vulnerability Assessment Virtual Machine",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "virtual_machine_id", label: "Virtual Machine Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_shared_image",
    label: "Shared Image",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "gallery_name", label: "Gallery Name", type: "text", default: "" },
    { name: "os_type", label: "Os Type", type: "text", default: "Linux" }
  ]
  },
  {
    type: "azurerm_shared_image_gallery",
    label: "Shared Image Gallery",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_shared_image_version",
    label: "Shared Image Version",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "gallery_name", label: "Gallery Name", type: "text", default: "" },
    { name: "image_name", label: "Image Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_snapshot",
    label: "Snapshot",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "create_option", label: "Create Option", type: "text", default: "Empty" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "disk_size_gb", label: "Disk Size Gb", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_stack_hci_marketplace_gallery_image",
    label: "Stack Hci Marketplace Gallery Image",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "custom_location_id", label: "Custom Location Id", type: "text", default: "" },
    { name: "hyperv_generation", label: "Hyperv Generation", type: "text", default: "" },
    { name: "os_type", label: "Os Type", type: "text", default: "Linux" },
    { name: "version", label: "Version", type: "text", default: "latest" }
  ]
  },
  {
    type: "azurerm_system_center_virtual_machine_manager_availability_set",
    label: "System Center Virtual Machine Manager Availability Set",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "custom_location_id", label: "Custom Location Id", type: "text", default: "" },
    { name: "system_center_virtual_machine_manager_server_id", label: "System Center Virtual Machine Manager Server Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_system_center_virtual_machine_manager_cloud",
    label: "System Center Virtual Machine Manager Cloud",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "custom_location_id", label: "Custom Location Id", type: "text", default: "" },
    { name: "system_center_virtual_machine_manager_server_inventory_item_id", label: "System Center Virtual Machine Manager Server Inventory Item Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_system_center_virtual_machine_manager_server",
    label: "System Center Virtual Machine Manager Server",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "custom_location_id", label: "Custom Location Id", type: "text", default: "" },
    { name: "fqdn", label: "Fqdn", type: "text", default: "" },
    { name: "password", label: "Password", type: "text", default: "" },
    { name: "username", label: "Username", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_system_center_virtual_machine_manager_virtual_machine_instance",
    label: "System Center Virtual Machine Manager Virtual Machine Instance",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "custom_location_id", label: "Custom Location Id", type: "text", default: "" },
    { name: "scoped_resource_id", label: "Scoped Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_system_center_virtual_machine_manager_virtual_machine_instance_guest_agent",
    label: "System Center Virtual Machine Manager Virtual Machine Instance Guest Agent",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "password", label: "Password", type: "text", default: "" },
    { name: "scoped_resource_id", label: "Scoped Resource Id", type: "text", default: "" },
    { name: "username", label: "Username", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_system_center_virtual_machine_manager_virtual_machine_template",
    label: "System Center Virtual Machine Manager Virtual Machine Template",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "custom_location_id", label: "Custom Location Id", type: "text", default: "" },
    { name: "system_center_virtual_machine_manager_server_inventory_item_id", label: "System Center Virtual Machine Manager Server Inventory Item Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_system_center_virtual_machine_manager_virtual_network",
    label: "System Center Virtual Machine Manager Virtual Network",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "custom_location_id", label: "Custom Location Id", type: "text", default: "" },
    { name: "system_center_virtual_machine_manager_server_inventory_item_id", label: "System Center Virtual Machine Manager Server Inventory Item Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_machine",
    label: "Virtual Machine",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "network_interface_ids", label: "Network Interface Ids", type: "text", default: "" },
    { name: "vm_size", label: "Vm Size", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_machine_automanage_configuration_assignment",
    label: "Virtual Machine Automanage Configuration Assignment",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "configuration_id", label: "Configuration Id", type: "text", default: "" },
    { name: "virtual_machine_id", label: "Virtual Machine Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_machine_data_disk_attachment",
    label: "Virtual Machine Data Disk Attachment",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "caching", label: "Caching", type: "text", default: "" },
    { name: "lun", label: "Lun", type: "number", default: "1" },
    { name: "managed_disk_id", label: "Managed Disk Id", type: "text", default: "" },
    { name: "virtual_machine_id", label: "Virtual Machine Id", type: "text", default: "" },
    { name: "create_option", label: "Create Option", type: "text", default: "Empty" }
  ]
  },
  {
    type: "azurerm_virtual_machine_extension",
    label: "Virtual Machine Extension",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "publisher", label: "Publisher", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" },
    { name: "type_handler_version", label: "Type Handler Version", type: "text", default: "" },
    { name: "virtual_machine_id", label: "Virtual Machine Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_machine_gallery_application_assignment",
    label: "Virtual Machine Gallery Application Assignment",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "gallery_application_version_id", label: "Gallery Application Version Id", type: "text", default: "" },
    { name: "virtual_machine_id", label: "Virtual Machine Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_machine_implicit_data_disk_from_source",
    label: "Virtual Machine Implicit Data Disk From Source",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "create_option", label: "Create Option", type: "text", default: "Empty" },
    { name: "disk_size_gb", label: "Disk Size Gb", type: "number", default: "1" },
    { name: "lun", label: "Lun", type: "number", default: "1" },
    { name: "source_resource_id", label: "Source Resource Id", type: "text", default: "" },
    { name: "virtual_machine_id", label: "Virtual Machine Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_machine_packet_capture",
    label: "Virtual Machine Packet Capture",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "network_watcher_id", label: "Network Watcher Id", type: "text", default: "" },
    { name: "virtual_machine_id", label: "Virtual Machine Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_machine_restore_point",
    label: "Virtual Machine Restore Point",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "virtual_machine_restore_point_collection_id", label: "Virtual Machine Restore Point Collection Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_machine_restore_point_collection",
    label: "Virtual Machine Restore Point Collection",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "source_virtual_machine_id", label: "Source Virtual Machine Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_machine_run_command",
    label: "Virtual Machine Run Command",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "virtual_machine_id", label: "Virtual Machine Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_machine_scale_set",
    label: "Virtual Machine Scale Set",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "upgrade_policy_mode", label: "Upgrade Policy Mode", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_machine_scale_set_extension",
    label: "Virtual Machine Scale Set Extension",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "publisher", label: "Publisher", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" },
    { name: "type_handler_version", label: "Type Handler Version", type: "text", default: "" },
    { name: "virtual_machine_scale_set_id", label: "Virtual Machine Scale Set Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_machine_scale_set_packet_capture",
    label: "Virtual Machine Scale Set Packet Capture",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "network_watcher_id", label: "Network Watcher Id", type: "text", default: "" },
    { name: "virtual_machine_scale_set_id", label: "Virtual Machine Scale Set Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_machine_scale_set_standby_pool",
    label: "Virtual Machine Scale Set Standby Pool",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "attached_virtual_machine_scale_set_id", label: "Attached Virtual Machine Scale Set Id", type: "text", default: "" },
    { name: "virtual_machine_state", label: "Virtual Machine State", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_windows_virtual_machine_scale_set",
    label: "Windows Virtual Machine Scale Set",
    category: "Compute",
    icon: "🖥️",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "admin_password", label: "Admin Password", type: "text", default: "" },
    { name: "admin_username", label: "Admin Username", type: "text", default: "adminuser" },
    { name: "instances", label: "Instances", type: "number", default: "1" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" }
  ]
  }
]
