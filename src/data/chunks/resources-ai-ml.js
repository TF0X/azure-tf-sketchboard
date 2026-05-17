// AUTO-GENERATED — category: AI & ML
export default [
  {
    type: "azurerm_ai_services",
    label: "Ai Services",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_cognitive_account_customer_managed_key",
    label: "Cognitive Account Customer Managed Key",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "cognitive_account_id", label: "Cognitive Account Id", type: "text", default: "" },
    { name: "key_vault_key_id", label: "Key Vault Key Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cognitive_account_project",
    label: "Cognitive Account Project",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cognitive_account_id", label: "Cognitive Account Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cognitive_account_rai_blocklist",
    label: "Cognitive Account Rai Blocklist",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cognitive_account_id", label: "Cognitive Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cognitive_account_rai_policy",
    label: "Cognitive Account Rai Policy",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "base_policy_name", label: "Base Policy Name", type: "text", default: "" },
    { name: "cognitive_account_id", label: "Cognitive Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_machine_learning_compute_cluster",
    label: "Machine Learning Compute Cluster",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "machine_learning_workspace_id", label: "Machine Learning Workspace Id", type: "text", default: "" },
    { name: "vm_priority", label: "Vm Priority", type: "text", default: "" },
    { name: "vm_size", label: "Vm Size", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_machine_learning_compute_instance",
    label: "Machine Learning Compute Instance",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "machine_learning_workspace_id", label: "Machine Learning Workspace Id", type: "text", default: "" },
    { name: "virtual_machine_size", label: "Virtual Machine Size", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_machine_learning_datastore_blobstorage",
    label: "Machine Learning Datastore Blobstorage",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "storage_container_id", label: "Storage Container Id", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_machine_learning_datastore_datalake_gen2",
    label: "Machine Learning Datastore Datalake Gen2",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "storage_container_id", label: "Storage Container Id", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_machine_learning_datastore_fileshare",
    label: "Machine Learning Datastore Fileshare",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "storage_fileshare_id", label: "Storage Fileshare Id", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_machine_learning_inference_cluster",
    label: "Machine Learning Inference Cluster",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "kubernetes_cluster_id", label: "Kubernetes Cluster Id", type: "text", default: "" },
    { name: "machine_learning_workspace_id", label: "Machine Learning Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_machine_learning_synapse_spark",
    label: "Machine Learning Synapse Spark",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "machine_learning_workspace_id", label: "Machine Learning Workspace Id", type: "text", default: "" },
    { name: "synapse_spark_pool_id", label: "Synapse Spark Pool Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_machine_learning_workspace_network_outbound_rule_fqdn",
    label: "Machine Learning Workspace Network Outbound Rule Fqdn",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "destination_fqdn", label: "Destination Fqdn", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_machine_learning_workspace_network_outbound_rule_private_endpoint",
    label: "Machine Learning Workspace Network Outbound Rule Private Endpoint",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "service_resource_id", label: "Service Resource Id", type: "text", default: "" },
    { name: "sub_resource_target", label: "Sub Resource Target", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_machine_learning_workspace_network_outbound_rule_service_tag",
    label: "Machine Learning Workspace Network Outbound Rule Service Tag",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "port_ranges", label: "Port Ranges", type: "text", default: "" },
    { name: "protocol", label: "Protocol", type: "text", default: "Tcp" },
    { name: "service_tag", label: "Service Tag", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_alert_rule_machine_learning_behavior_analytics",
    label: "Sentinel Alert Rule Machine Learning Behavior Analytics",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "alert_rule_template_guid", label: "Alert Rule Template Guid", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_video_indexer_account",
    label: "Video Indexer Account",
    category: "AI & ML",
    icon: "🧠",
    color: "#4B0082",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  }
]
