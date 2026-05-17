// AUTO-GENERATED — category: Other
export default [
  {
    type: "azurerm_ai_foundry",
    label: "Ai Foundry",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "key_vault_id", label: "Key Vault Id", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" },
    { name: "friendly_name", label: "Friendly Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_ai_foundry_project",
    label: "Ai Foundry Project",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "ai_services_hub_id", label: "Ai Services Hub Id", type: "text", default: "" },
    { name: "friendly_name", label: "Friendly Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_app_configuration_feature",
    label: "App Configuration Feature",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "configuration_store_id", label: "Configuration Store Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_app_configuration_key",
    label: "App Configuration Key",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "configuration_store_id", label: "Configuration Store Id", type: "text", default: "" },
    { name: "key", label: "Key", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_arc_machine",
    label: "Arc Machine",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "kind", label: "Kind", type: "text", default: "StorageV2" }
  ]
  },
  {
    type: "azurerm_arc_machine_automanage_configuration_assignment",
    label: "Arc Machine Automanage Configuration Assignment",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "arc_machine_id", label: "Arc Machine Id", type: "text", default: "" },
    { name: "configuration_id", label: "Configuration Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_arc_machine_extension",
    label: "Arc Machine Extension",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "arc_machine_id", label: "Arc Machine Id", type: "text", default: "" },
    { name: "publisher", label: "Publisher", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_arc_resource_bridge_appliance",
    label: "Arc Resource Bridge Appliance",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "distro", label: "Distro", type: "text", default: "" },
    { name: "infrastructure_provider", label: "Infrastructure Provider", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automanage_configuration",
    label: "Automanage Configuration",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_bot_channel_alexa",
    label: "Bot Channel Alexa",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "bot_name", label: "Bot Name", type: "text", default: "" },
    { name: "skill_id", label: "Skill Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_bot_channel_direct_line_speech",
    label: "Bot Channel Direct Line Speech",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "bot_name", label: "Bot Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_bot_channel_directline",
    label: "Bot Channel Directline",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "bot_name", label: "Bot Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_bot_channel_email",
    label: "Bot Channel Email",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "bot_name", label: "Bot Name", type: "text", default: "" },
    { name: "email_address", label: "Email Address", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_bot_channel_facebook",
    label: "Bot Channel Facebook",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "bot_name", label: "Bot Name", type: "text", default: "" },
    { name: "facebook_application_id", label: "Facebook Application Id", type: "text", default: "" },
    { name: "facebook_application_secret", label: "Facebook Application Secret", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_bot_channel_line",
    label: "Bot Channel Line",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "bot_name", label: "Bot Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_bot_channel_ms_teams",
    label: "Bot Channel Ms Teams",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "bot_name", label: "Bot Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_bot_channel_slack",
    label: "Bot Channel Slack",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "bot_name", label: "Bot Name", type: "text", default: "" },
    { name: "client_id", label: "Client Id", type: "text", default: "" },
    { name: "client_secret", label: "Client Secret", type: "text", default: "" },
    { name: "verification_token", label: "Verification Token", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_bot_channel_sms",
    label: "Bot Channel Sms",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "bot_name", label: "Bot Name", type: "text", default: "" },
    { name: "phone_number", label: "Phone Number", type: "text", default: "" },
    { name: "sms_channel_account_security_id", label: "Sms Channel Account Security Id", type: "text", default: "" },
    { name: "sms_channel_auth_token", label: "Sms Channel Auth Token", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_bot_channel_web_chat",
    label: "Bot Channel Web Chat",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "bot_name", label: "Bot Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_bot_channels_registration",
    label: "Bot Channels Registration",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "microsoft_app_id", label: "Microsoft App Id", type: "text", default: "" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "microsoft_app_type", label: "Microsoft App Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_bot_connection",
    label: "Bot Connection",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "bot_name", label: "Bot Name", type: "text", default: "" },
    { name: "client_id", label: "Client Id", type: "text", default: "" },
    { name: "client_secret", label: "Client Secret", type: "text", default: "" },
    { name: "service_provider_name", label: "Service Provider Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_chaos_studio_capability",
    label: "Chaos Studio Capability",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "capability_type", label: "Capability Type", type: "text", default: "" },
    { name: "chaos_studio_target_id", label: "Chaos Studio Target Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_chaos_studio_experiment",
    label: "Chaos Studio Experiment",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_chaos_studio_target",
    label: "Chaos Studio Target",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" },
    { name: "target_type", label: "Target Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_consumption_budget_resource_group",
    label: "Consumption Budget Resource Group",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "amount", label: "Amount", type: "number", default: "1" },
    { name: "resource_group_id", label: "Resource Group Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_container_connected_registry",
    label: "Container Connected Registry",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "container_registry_id", label: "Container Registry Id", type: "text", default: "" },
    { name: "sync_token_id", label: "Sync Token Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cost_anomaly_alert",
    label: "Cost Anomaly Alert",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "email_addresses", label: "Email Addresses", type: "text", default: "" },
    { name: "email_subject", label: "Email Subject", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_custom_ip_prefix",
    label: "Custom Ip Prefix",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cidr", label: "Cidr", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_custom_provider",
    label: "Custom Provider",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_data_protection_resource_guard",
    label: "Data Protection Resource Guard",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_data_share",
    label: "Data Share",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "account_id", label: "Account Id", type: "text", default: "" },
    { name: "kind", label: "Kind", type: "text", default: "StorageV2" }
  ]
  },
  {
    type: "azurerm_data_share_account",
    label: "Data Share Account",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_data_share_dataset_blob_storage",
    label: "Data Share Dataset Blob Storage",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "container_name", label: "Container Name", type: "text", default: "" },
    { name: "data_share_id", label: "Data Share Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_databox_edge_device",
    label: "Databox Edge Device",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_datadog_monitor",
    label: "Datadog Monitor",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_dev_center",
    label: "Dev Center",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_dev_center_attached_network",
    label: "Dev Center Attached Network",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "dev_center_id", label: "Dev Center Id", type: "text", default: "" },
    { name: "network_connection_id", label: "Network Connection Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dev_center_catalog",
    label: "Dev Center Catalog",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "dev_center_id", label: "Dev Center Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dev_center_dev_box_definition",
    label: "Dev Center Dev Box Definition",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "dev_center_id", label: "Dev Center Id", type: "text", default: "" },
    { name: "image_reference_id", label: "Image Reference Id", type: "text", default: "" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_dev_center_environment_type",
    label: "Dev Center Environment Type",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "dev_center_id", label: "Dev Center Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dev_center_project",
    label: "Dev Center Project",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "dev_center_id", label: "Dev Center Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dev_center_project_environment_type",
    label: "Dev Center Project Environment Type",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "deployment_target_id", label: "Deployment Target Id", type: "text", default: "" },
    { name: "dev_center_project_id", label: "Dev Center Project Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dev_center_project_pool",
    label: "Dev Center Project Pool",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "dev_box_definition_name", label: "Dev Box Definition Name", type: "text", default: "" },
    { name: "dev_center_attached_network_name", label: "Dev Center Attached Network Name", type: "text", default: "" },
    { name: "dev_center_project_id", label: "Dev Center Project Id", type: "text", default: "" },
    { name: "local_administrator_enabled", label: "Local Administrator Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_dev_test_lab",
    label: "Dev Test Lab",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_dev_test_policy",
    label: "Dev Test Policy",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "evaluator_type", label: "Evaluator Type", type: "text", default: "" },
    { name: "lab_name", label: "Lab Name", type: "text", default: "" },
    { name: "policy_set_name", label: "Policy Set Name", type: "text", default: "" },
    { name: "threshold", label: "Threshold", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dev_test_schedule",
    label: "Dev Test Schedule",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "lab_name", label: "Lab Name", type: "text", default: "" },
    { name: "task_type", label: "Task Type", type: "text", default: "" },
    { name: "time_zone_id", label: "Time Zone Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dynatrace_monitor",
    label: "Dynatrace Monitor",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "marketplace_subscription", label: "Marketplace Subscription", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dynatrace_tag_rules",
    label: "Dynatrace Tag Rules",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "monitor_id", label: "Monitor Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_elastic_cloud_elasticsearch",
    label: "Elastic Cloud Elasticsearch",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "elastic_cloud_email_address", label: "Elastic Cloud Email Address", type: "text", default: "" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_elastic_san",
    label: "Elastic San",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "base_size_in_tib", label: "Base Size In Tib", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_elastic_san_volume",
    label: "Elastic San Volume",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "size_in_gib", label: "Size In Gib", type: "number", default: "1" },
    { name: "volume_group_id", label: "Volume Group Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_elastic_san_volume_group",
    label: "Elastic San Volume Group",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "elastic_san_id", label: "Elastic San Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_extended_custom_location",
    label: "Extended Custom Location",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cluster_extension_ids", label: "Cluster Extension Ids", type: "text", default: "" },
    { name: "host_resource_id", label: "Host Resource Id", type: "text", default: "" },
    { name: "namespace", label: "Namespace", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_extended_location_custom_location",
    label: "Extended Location Custom Location",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cluster_extension_ids", label: "Cluster Extension Ids", type: "text", default: "" },
    { name: "host_resource_id", label: "Host Resource Id", type: "text", default: "" },
    { name: "namespace", label: "Namespace", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_fabric_capacity",
    label: "Fabric Capacity",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_graph_services_account",
    label: "Graph Services Account",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "application_id", label: "Application Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_healthbot",
    label: "Healthbot",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_healthcare_dicom_service",
    label: "Healthcare Dicom Service",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_healthcare_fhir_service",
    label: "Healthcare Fhir Service",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" },
    { name: "kind", label: "Kind", type: "text", default: "StorageV2" }
  ]
  },
  {
    type: "azurerm_healthcare_medtech_service",
    label: "Healthcare Medtech Service",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "device_mapping_json", label: "Device Mapping Json", type: "text", default: "" },
    { name: "eventhub_consumer_group_name", label: "Eventhub Consumer Group Name", type: "text", default: "" },
    { name: "eventhub_name", label: "Eventhub Name", type: "text", default: "" },
    { name: "eventhub_namespace_name", label: "Eventhub Namespace Name", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_healthcare_medtech_service_fhir_destination",
    label: "Healthcare Medtech Service Fhir Destination",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "destination_fhir_mapping_json", label: "Destination Fhir Mapping Json", type: "text", default: "" },
    { name: "destination_fhir_service_id", label: "Destination Fhir Service Id", type: "text", default: "" },
    { name: "destination_identity_resolution_type", label: "Destination Identity Resolution Type", type: "text", default: "" },
    { name: "medtech_service_id", label: "Medtech Service Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_healthcare_service",
    label: "Healthcare Service",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "kind", label: "Kind", type: "text", default: "StorageV2" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_healthcare_workspace",
    label: "Healthcare Workspace",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_lb_backend_address_pool",
    label: "Lb Backend Address Pool",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "loadbalancer_id", label: "Loadbalancer Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_lb_backend_address_pool_address",
    label: "Lb Backend Address Pool Address",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "backend_address_pool_id", label: "Backend Address Pool Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_lb_outbound_rule",
    label: "Lb Outbound Rule",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "backend_address_pool_id", label: "Backend Address Pool Id", type: "text", default: "" },
    { name: "loadbalancer_id", label: "Loadbalancer Id", type: "text", default: "" },
    { name: "protocol", label: "Protocol", type: "text", default: "Tcp" },
    { name: "idle_timeout_in_minutes", label: "Idle Timeout In Minutes", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_lb_probe",
    label: "Lb Probe",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "loadbalancer_id", label: "Loadbalancer Id", type: "text", default: "" },
    { name: "port", label: "Port", type: "number", default: "1" },
    { name: "protocol", label: "Protocol", type: "text", default: "Tcp" }
  ]
  },
  {
    type: "azurerm_lb_rule",
    label: "Lb Rule",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "backend_port", label: "Backend Port", type: "number", default: "1" },
    { name: "frontend_ip_configuration_name", label: "Frontend Ip Configuration Name", type: "text", default: "" },
    { name: "frontend_port", label: "Frontend Port", type: "number", default: "1" },
    { name: "loadbalancer_id", label: "Loadbalancer Id", type: "text", default: "" },
    { name: "protocol", label: "Protocol", type: "text", default: "Tcp" },
    { name: "idle_timeout_in_minutes", label: "Idle Timeout In Minutes", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_load_test",
    label: "Load Test",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_maintenance_assignment_dynamic_scope",
    label: "Maintenance Assignment Dynamic Scope",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "maintenance_configuration_id", label: "Maintenance Configuration Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_maintenance_configuration",
    label: "Maintenance Configuration",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "scope", label: "Scope", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_managed_application",
    label: "Managed Application",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "kind", label: "Kind", type: "text", default: "StorageV2" },
    { name: "managed_resource_group_name", label: "Managed Resource Group Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_managed_application_definition",
    label: "Managed Application Definition",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "lock_level", label: "Lock Level", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_managed_lustre_file_system",
    label: "Managed Lustre File System",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" },
    { name: "storage_capacity_in_tb", label: "Storage Capacity In Tb", type: "number", default: "1" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" },
    { name: "zones", label: "Zones", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_management_lock",
    label: "Management Lock",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "lock_level", label: "Lock Level", type: "text", default: "" },
    { name: "scope", label: "Scope", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_marketplace_agreement",
    label: "Marketplace Agreement",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "offer", label: "Offer", type: "text", default: "" },
    { name: "plan", label: "Plan", type: "text", default: "" },
    { name: "publisher", label: "Publisher", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_new_relic_monitor",
    label: "New Relic Monitor",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_new_relic_tag_rule",
    label: "New Relic Tag Rule",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "monitor_id", label: "Monitor Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_nginx_api_key",
    label: "Nginx Api Key",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "end_date_time", label: "End Date Time", type: "text", default: "" },
    { name: "nginx_deployment_id", label: "Nginx Deployment Id", type: "text", default: "" },
    { name: "secret_text", label: "Secret Text", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_nginx_certificate",
    label: "Nginx Certificate",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "certificate_virtual_path", label: "Certificate Virtual Path", type: "text", default: "" },
    { name: "key_vault_secret_id", label: "Key Vault Secret Id", type: "text", default: "" },
    { name: "key_virtual_path", label: "Key Virtual Path", type: "text", default: "" },
    { name: "nginx_deployment_id", label: "Nginx Deployment Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_nginx_configuration",
    label: "Nginx Configuration",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "nginx_deployment_id", label: "Nginx Deployment Id", type: "text", default: "" },
    { name: "root_file", label: "Root File", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_nginx_deployment",
    label: "Nginx Deployment",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" },
    { name: "capacity", label: "Capacity", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_oracle_exadata_infrastructure",
    label: "Oracle Exadata Infrastructure",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "compute_count", label: "Compute Count", type: "number", default: "1" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "shape", label: "Shape", type: "text", default: "" },
    { name: "storage_count", label: "Storage Count", type: "number", default: "1" },
    { name: "zones", label: "Zones", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_oracle_resource_anchor",
    label: "Oracle Resource Anchor",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_orbital_contact",
    label: "Orbital Contact",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "contact_profile_id", label: "Contact Profile Id", type: "text", default: "" },
    { name: "ground_station_name", label: "Ground Station Name", type: "text", default: "" },
    { name: "reservation_end_time", label: "Reservation End Time", type: "text", default: "" },
    { name: "reservation_start_time", label: "Reservation Start Time", type: "text", default: "" },
    { name: "spacecraft_id", label: "Spacecraft Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_orbital_contact_profile",
    label: "Orbital Contact Profile",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "auto_tracking", label: "Auto Tracking", type: "text", default: "" },
    { name: "minimum_variable_contact_duration", label: "Minimum Variable Contact Duration", type: "text", default: "" },
    { name: "network_configuration_subnet_id", label: "Network Configuration Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_orbital_spacecraft",
    label: "Orbital Spacecraft",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "norad_id", label: "Norad Id", type: "text", default: "" },
    { name: "title_line", label: "Title Line", type: "text", default: "" },
    { name: "two_line_elements", label: "Two Line Elements", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_palo_alto_local_rulestack",
    label: "Palo Alto Local Rulestack",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_palo_alto_local_rulestack_certificate",
    label: "Palo Alto Local Rulestack Certificate",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "rulestack_id", label: "Rulestack Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_palo_alto_local_rulestack_fqdn_list",
    label: "Palo Alto Local Rulestack Fqdn List",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "fully_qualified_domain_names", label: "Fully Qualified Domain Names", type: "text", default: "" },
    { name: "rulestack_id", label: "Rulestack Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_palo_alto_local_rulestack_outbound_trust_certificate_association",
    label: "Palo Alto Local Rulestack Outbound Trust Certificate Association",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "certificate_id", label: "Certificate Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_palo_alto_local_rulestack_outbound_untrust_certificate_association",
    label: "Palo Alto Local Rulestack Outbound Untrust Certificate Association",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "certificate_id", label: "Certificate Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_palo_alto_local_rulestack_prefix_list",
    label: "Palo Alto Local Rulestack Prefix List",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "prefix_list", label: "Prefix List", type: "text", default: "" },
    { name: "rulestack_id", label: "Rulestack Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_palo_alto_local_rulestack_rule",
    label: "Palo Alto Local Rulestack Rule",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "action", label: "Action", type: "text", default: "" },
    { name: "applications", label: "Applications", type: "text", default: "" },
    { name: "priority", label: "Priority", type: "number", default: "1" },
    { name: "rulestack_id", label: "Rulestack Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "protocol", label: "Protocol", type: "text", default: "Tcp" }
  ]
  },
  {
    type: "azurerm_powerbi_embedded",
    label: "Powerbi Embedded",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "administrators", label: "Administrators", type: "text", default: "" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_qumulo_file_system",
    label: "Qumulo File System",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "admin_password", label: "Admin Password", type: "text", default: "" },
    { name: "email", label: "Email", type: "text", default: "" },
    { name: "storage_sku", label: "Storage Sku", type: "text", default: "" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" },
    { name: "zone", label: "Zone", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_redhat_openshift_cluster",
    label: "Redhat Openshift Cluster",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_resource_group_template_deployment",
    label: "Resource Group Template Deployment",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "deployment_mode", label: "Deployment Mode", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_resource_provider_feature_registration",
    label: "Resource Provider Feature Registration",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "provider_name", label: "Provider Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_resource_provider_registration",
    label: "Resource Provider Registration",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_restore_point_collection",
    label: "Restore Point Collection",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "source_virtual_machine_id", label: "Source Virtual Machine Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_route",
    label: "Route",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "address_prefix", label: "Address Prefix", type: "text", default: "10.0.0.0/23" },
    { name: "next_hop_type", label: "Next Hop Type", type: "text", default: "" },
    { name: "route_table_name", label: "Route Table Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_service_fabric_cluster",
    label: "Service Fabric Cluster",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "management_endpoint", label: "Management Endpoint", type: "text", default: "" },
    { name: "reliability_level", label: "Reliability Level", type: "text", default: "" },
    { name: "upgrade_mode", label: "Upgrade Mode", type: "text", default: "" },
    { name: "vm_image", label: "Vm Image", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_service_fabric_managed_cluster",
    label: "Service Fabric Managed Cluster",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "client_connection_port", label: "Client Connection Port", type: "number", default: "1" },
    { name: "http_gateway_port", label: "Http Gateway Port", type: "number", default: "1" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_ssh_public_key",
    label: "Ssh Public Key",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "public_key", label: "Public Key", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stack_hci_cluster",
    label: "Stack Hci Cluster",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_stack_hci_deployment_setting",
    label: "Stack Hci Deployment Setting",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "arc_resource_ids", label: "Arc Resource Ids", type: "text", default: "" },
    { name: "stack_hci_cluster_id", label: "Stack Hci Cluster Id", type: "text", default: "" },
    { name: "version", label: "Version", type: "text", default: "latest" }
  ]
  },
  {
    type: "azurerm_stack_hci_extension",
    label: "Stack Hci Extension",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "arc_setting_id", label: "Arc Setting Id", type: "text", default: "" },
    { name: "publisher", label: "Publisher", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stack_hci_logical_network",
    label: "Stack Hci Logical Network",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "custom_location_id", label: "Custom Location Id", type: "text", default: "" },
    { name: "virtual_switch_name", label: "Virtual Switch Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stack_hci_virtual_hard_disk",
    label: "Stack Hci Virtual Hard Disk",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "custom_location_id", label: "Custom Location Id", type: "text", default: "" },
    { name: "disk_size_in_gb", label: "Disk Size In Gb", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_static_site",
    label: "Static Site",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_tier", label: "Sku Tier", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_static_site_custom_domain",
    label: "Static Site Custom Domain",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "domain_name", label: "Domain Name", type: "text", default: "" },
    { name: "static_site_id", label: "Static Site Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_trusted_signing_account",
    label: "Trusted Signing Account",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_vmware_cluster",
    label: "Vmware Cluster",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cluster_node_count", label: "Cluster Node Count", type: "number", default: "1" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" },
    { name: "vmware_cloud_id", label: "Vmware Cloud Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_vmware_private_cloud",
    label: "Vmware Private Cloud",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "network_subnet_cidr", label: "Network Subnet Cidr", type: "text", default: "" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_web_pubsub",
    label: "Web Pubsub",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" },
    { name: "capacity", label: "Capacity", type: "number", default: "1" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_web_pubsub_custom_certificate",
    label: "Web Pubsub Custom Certificate",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "custom_certificate_id", label: "Custom Certificate Id", type: "text", default: "" },
    { name: "web_pubsub_id", label: "Web Pubsub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_web_pubsub_custom_domain",
    label: "Web Pubsub Custom Domain",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "domain_name", label: "Domain Name", type: "text", default: "" },
    { name: "web_pubsub_custom_certificate_id", label: "Web Pubsub Custom Certificate Id", type: "text", default: "" },
    { name: "web_pubsub_id", label: "Web Pubsub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_web_pubsub_hub",
    label: "Web Pubsub Hub",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "web_pubsub_id", label: "Web Pubsub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_web_pubsub_socketio",
    label: "Web Pubsub Socketio",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "service_mode", label: "Service Mode", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_workloads_sap_discovery_virtual_instance",
    label: "Workloads Sap Discovery Virtual Instance",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "central_server_virtual_machine_id", label: "Central Server Virtual Machine Id", type: "text", default: "" },
    { name: "environment", label: "Environment", type: "text", default: "" },
    { name: "sap_product", label: "Sap Product", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_workloads_sap_single_node_virtual_instance",
    label: "Workloads Sap Single Node Virtual Instance",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "app_location", label: "App Location", type: "text", default: "" },
    { name: "environment", label: "Environment", type: "text", default: "" },
    { name: "sap_fqdn", label: "Sap Fqdn", type: "text", default: "" },
    { name: "sap_product", label: "Sap Product", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_workloads_sap_three_tier_virtual_instance",
    label: "Workloads Sap Three Tier Virtual Instance",
    category: "Other",
    icon: "☁️",
    color: "#95A5A6",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "app_location", label: "App Location", type: "text", default: "" },
    { name: "environment", label: "Environment", type: "text", default: "" },
    { name: "sap_fqdn", label: "Sap Fqdn", type: "text", default: "" },
    { name: "sap_product", label: "Sap Product", type: "text", default: "" }
  ]
  }
]
