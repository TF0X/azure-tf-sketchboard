// AUTO-GENERATED — category: Storage
export default [
  {
    type: "azurerm_hpc_cache",
    label: "Hpc Cache",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cache_size_in_gb", label: "Cache Size In Gb", type: "number", default: "1" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_hpc_cache_access_policy",
    label: "Hpc Cache Access Policy",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "hpc_cache_id", label: "Hpc Cache Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_hpc_cache_blob_nfs_target",
    label: "Hpc Cache Blob Nfs Target",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cache_name", label: "Cache Name", type: "text", default: "" },
    { name: "namespace_path", label: "Namespace Path", type: "text", default: "" },
    { name: "storage_container_id", label: "Storage Container Id", type: "text", default: "" },
    { name: "usage_model", label: "Usage Model", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_hpc_cache_blob_target",
    label: "Hpc Cache Blob Target",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cache_name", label: "Cache Name", type: "text", default: "" },
    { name: "namespace_path", label: "Namespace Path", type: "text", default: "" },
    { name: "storage_container_id", label: "Storage Container Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_hpc_cache_nfs_target",
    label: "Hpc Cache Nfs Target",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cache_name", label: "Cache Name", type: "text", default: "" },
    { name: "target_host_name", label: "Target Host Name", type: "text", default: "" },
    { name: "usage_model", label: "Usage Model", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_netapp_account",
    label: "Netapp Account",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_netapp_account_encryption",
    label: "Netapp Account Encryption",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "encryption_key", label: "Encryption Key", type: "text", default: "" },
    { name: "netapp_account_id", label: "Netapp Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_netapp_pool",
    label: "Netapp Pool",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "service_level", label: "Service Level", type: "text", default: "" },
    { name: "size_in_tb", label: "Size In Tb", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_netapp_volume",
    label: "Netapp Volume",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "pool_name", label: "Pool Name", type: "text", default: "" },
    { name: "service_level", label: "Service Level", type: "text", default: "" },
    { name: "storage_quota_in_gb", label: "Storage Quota In Gb", type: "number", default: "1" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" },
    { name: "volume_path", label: "Volume Path", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_netapp_volume_group_oracle",
    label: "Netapp Volume Group Oracle",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "application_identifier", label: "Application Identifier", type: "text", default: "" },
    { name: "group_description", label: "Group Description", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_netapp_volume_group_sap_hana",
    label: "Netapp Volume Group Sap Hana",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "application_identifier", label: "Application Identifier", type: "text", default: "" },
    { name: "group_description", label: "Group Description", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_netapp_volume_quota_rule",
    label: "Netapp Volume Quota Rule",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "quota_size_in_kib", label: "Quota Size In Kib", type: "number", default: "1" },
    { name: "quota_type", label: "Quota Type", type: "text", default: "" },
    { name: "volume_id", label: "Volume Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stack_hci_storage_path",
    label: "Stack Hci Storage Path",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "custom_location_id", label: "Custom Location Id", type: "text", default: "" },
    { name: "path", label: "Path", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_account_customer_managed_key",
    label: "Storage Account Customer Managed Key",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_account_local_user",
    label: "Storage Account Local User",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_account_queue_properties",
    label: "Storage Account Queue Properties",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_account_static_website",
    label: "Storage Account Static Website",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_blob",
    label: "Storage Blob",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "storage_account_name", label: "Storage Account Name", type: "text", default: "" },
    { name: "storage_container_name", label: "Storage Container Name", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" },
    { name: "size", label: "Size", type: "number", default: "1" },
    { name: "access_tier", label: "Access Tier", type: "text", default: "Hot" }
  ]
  },
  {
    type: "azurerm_storage_blob_inventory_policy",
    label: "Storage Blob Inventory Policy",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_container",
    label: "Storage Container",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_container_immutability_policy",
    label: "Storage Container Immutability Policy",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "immutability_period_in_days", label: "Immutability Period In Days", type: "number", default: "1" },
    { name: "storage_container_resource_manager_id", label: "Storage Container Resource Manager Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_encryption_scope",
    label: "Storage Encryption Scope",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "source", label: "Source", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_management_policy",
    label: "Storage Management Policy",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_mover",
    label: "Storage Mover",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_storage_mover_agent",
    label: "Storage Mover Agent",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "arc_virtual_machine_id", label: "Arc Virtual Machine Id", type: "text", default: "" },
    { name: "arc_virtual_machine_uuid", label: "Arc Virtual Machine Uuid", type: "text", default: "" },
    { name: "storage_mover_id", label: "Storage Mover Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_mover_job_definition",
    label: "Storage Mover Job Definition",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "copy_mode", label: "Copy Mode", type: "text", default: "" },
    { name: "source_name", label: "Source Name", type: "text", default: "" },
    { name: "storage_mover_project_id", label: "Storage Mover Project Id", type: "text", default: "" },
    { name: "target_name", label: "Target Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_mover_project",
    label: "Storage Mover Project",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "storage_mover_id", label: "Storage Mover Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_mover_source_endpoint",
    label: "Storage Mover Source Endpoint",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "host", label: "Host", type: "text", default: "" },
    { name: "storage_mover_id", label: "Storage Mover Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_mover_target_endpoint",
    label: "Storage Mover Target Endpoint",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" },
    { name: "storage_container_name", label: "Storage Container Name", type: "text", default: "" },
    { name: "storage_mover_id", label: "Storage Mover Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_object_replication",
    label: "Storage Object Replication",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "destination_storage_account_id", label: "Destination Storage Account Id", type: "text", default: "" },
    { name: "source_storage_account_id", label: "Source Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_queue",
    label: "Storage Queue",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_share",
    label: "Storage Share",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "quota", label: "Quota", type: "number", default: "1" },
    { name: "access_tier", label: "Access Tier", type: "text", default: "Hot" }
  ]
  },
  {
    type: "azurerm_storage_share_directory",
    label: "Storage Share Directory",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_share_file",
    label: "Storage Share File",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_sync",
    label: "Storage Sync",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_storage_sync_cloud_endpoint",
    label: "Storage Sync Cloud Endpoint",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "file_share_name", label: "File Share Name", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" },
    { name: "storage_sync_group_id", label: "Storage Sync Group Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_sync_group",
    label: "Storage Sync Group",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "storage_sync_id", label: "Storage Sync Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_sync_server_endpoint",
    label: "Storage Sync Server Endpoint",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "registered_server_id", label: "Registered Server Id", type: "text", default: "" },
    { name: "server_local_path", label: "Server Local Path", type: "text", default: "" },
    { name: "storage_sync_group_id", label: "Storage Sync Group Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_table",
    label: "Storage Table",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "storage_account_name", label: "Storage Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_vmware_netapp_volume_attachment",
    label: "Vmware Netapp Volume Attachment",
    category: "Storage",
    icon: "💾",
    color: "#F39C12",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "netapp_volume_id", label: "Netapp Volume Id", type: "text", default: "" },
    { name: "vmware_cluster_id", label: "Vmware Cluster Id", type: "text", default: "" }
  ]
  }
]
