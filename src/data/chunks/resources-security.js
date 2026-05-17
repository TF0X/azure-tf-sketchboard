// AUTO-GENERATED — category: Security
export default [
  {
    type: "azurerm_advanced_threat_protection",
    label: "Advanced Threat Protection",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_attestation_provider",
    label: "Attestation Provider",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_confidential_ledger",
    label: "Confidential Ledger",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "ledger_type", label: "Ledger Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dedicated_hardware_security_module",
    label: "Dedicated Hardware Security Module",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_key_vault_access_policy",
    label: "Key Vault Access Policy",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "key_vault_id", label: "Key Vault Id", type: "text", default: "" },
    { name: "object_id", label: "Object Id", type: "text", default: "" },
    { name: "tenant_id", label: "Tenant Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_key_vault_certificate",
    label: "Key Vault Certificate",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "key_vault_id", label: "Key Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_key_vault_certificate_contacts",
    label: "Key Vault Certificate Contacts",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "key_vault_id", label: "Key Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_key_vault_certificate_issuer",
    label: "Key Vault Certificate Issuer",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "key_vault_id", label: "Key Vault Id", type: "text", default: "" },
    { name: "provider_name", label: "Provider Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_key_vault_key",
    label: "Key Vault Key",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "key_opts", label: "Key Opts", type: "text", default: "" },
    { name: "key_type", label: "Key Type", type: "text", default: "" },
    { name: "key_vault_id", label: "Key Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_key_vault_managed_hardware_security_module",
    label: "Key Vault Managed Hardware Security Module",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "admin_object_ids", label: "Admin Object Ids", type: "text", default: "" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" },
    { name: "tenant_id", label: "Tenant Id", type: "text", default: "" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "soft_delete_retention_days", label: "Soft Delete Retention Days", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_key_vault_managed_hardware_security_module_key",
    label: "Key Vault Managed Hardware Security Module Key",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "key_opts", label: "Key Opts", type: "text", default: "" },
    { name: "key_type", label: "Key Type", type: "text", default: "" },
    { name: "managed_hsm_id", label: "Managed Hsm Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_key_vault_managed_hardware_security_module_key_rotation_policy",
    label: "Key Vault Managed Hardware Security Module Key Rotation Policy",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "expire_after", label: "Expire After", type: "text", default: "" },
    { name: "managed_hsm_key_id", label: "Managed Hsm Key Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_key_vault_managed_storage_account",
    label: "Key Vault Managed Storage Account",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "key_vault_id", label: "Key Vault Id", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" },
    { name: "storage_account_key", label: "Storage Account Key", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_key_vault_managed_storage_account_sas_token_definition",
    label: "Key Vault Managed Storage Account Sas Token Definition",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "managed_storage_account_id", label: "Managed Storage Account Id", type: "text", default: "" },
    { name: "sas_template_uri", label: "Sas Template Uri", type: "text", default: "" },
    { name: "sas_type", label: "Sas Type", type: "text", default: "" },
    { name: "validity_period", label: "Validity Period", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_key_vault_secret",
    label: "Key Vault Secret",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "key_vault_id", label: "Key Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_security_center_assessment",
    label: "Security Center Assessment",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "assessment_policy_id", label: "Assessment Policy Id", type: "text", default: "" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_security_center_assessment_policy",
    label: "Security Center Assessment Policy",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "description", label: "Description", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "severity", label: "Severity", type: "text", default: "2" }
  ]
  },
  {
    type: "azurerm_security_center_auto_provisioning",
    label: "Security Center Auto Provisioning",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "auto_provision", label: "Auto Provision", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_security_center_automation",
    label: "Security Center Automation",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "scopes", label: "Scopes", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_security_center_contact",
    label: "Security Center Contact",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "alert_notifications", label: "Alert Notifications", type: "select", options: ["true", "false"], default: "false" },
    { name: "alerts_to_admins", label: "Alerts To Admins", type: "select", options: ["true", "false"], default: "false" },
    { name: "email", label: "Email", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_security_center_server_vulnerability_assessments_setting",
    label: "Security Center Server Vulnerability Assessments Setting",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "vulnerability_assessment_provider", label: "Vulnerability Assessment Provider", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_security_center_setting",
    label: "Security Center Setting",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "setting_name", label: "Setting Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_security_center_storage_defender",
    label: "Security Center Storage Defender",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_security_center_workspace",
    label: "Security Center Workspace",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "scope", label: "Scope", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_alert_rule_anomaly_built_in",
    label: "Sentinel Alert Rule Anomaly Built In",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" },
    { name: "mode", label: "Mode", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_alert_rule_anomaly_duplicate",
    label: "Sentinel Alert Rule Anomaly Duplicate",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "built_in_rule_id", label: "Built In Rule Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" },
    { name: "mode", label: "Mode", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_alert_rule_fusion",
    label: "Sentinel Alert Rule Fusion",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "alert_rule_template_guid", label: "Alert Rule Template Guid", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_sentinel_alert_rule_ms_security_incident",
    label: "Sentinel Alert Rule Ms Security Incident",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" },
    { name: "product_filter", label: "Product Filter", type: "text", default: "" },
    { name: "severity_filter", label: "Severity Filter", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_sentinel_alert_rule_nrt",
    label: "Sentinel Alert Rule Nrt",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" },
    { name: "query", label: "Query", type: "text", default: "" },
    { name: "severity", label: "Severity", type: "text", default: "2" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_sentinel_alert_rule_scheduled",
    label: "Sentinel Alert Rule Scheduled",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" },
    { name: "query", label: "Query", type: "text", default: "" },
    { name: "severity", label: "Severity", type: "text", default: "2" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_sentinel_alert_rule_threat_intelligence",
    label: "Sentinel Alert Rule Threat Intelligence",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "alert_rule_template_guid", label: "Alert Rule Template Guid", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_aws_cloud_trail",
    label: "Sentinel Data Connector Aws Cloud Trail",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "aws_role_arn", label: "Aws Role Arn", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_aws_s3",
    label: "Sentinel Data Connector Aws S3",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "aws_role_arn", label: "Aws Role Arn", type: "text", default: "" },
    { name: "destination_table", label: "Destination Table", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" },
    { name: "sqs_urls", label: "Sqs Urls", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_azure_advanced_threat_protection",
    label: "Sentinel Data Connector Azure Advanced Threat Protection",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_azure_security_center",
    label: "Sentinel Data Connector Azure Security Center",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_dynamics_365",
    label: "Sentinel Data Connector Dynamics 365",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_microsoft_cloud_app_security",
    label: "Sentinel Data Connector Microsoft Cloud App Security",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_microsoft_defender_advanced_threat_protection",
    label: "Sentinel Data Connector Microsoft Defender Advanced Threat Protection",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_microsoft_threat_intelligence",
    label: "Sentinel Data Connector Microsoft Threat Intelligence",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" },
    { name: "microsoft_emerging_threat_feed_lookback_date", label: "Microsoft Emerging Threat Feed Lookback Date", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_microsoft_threat_protection",
    label: "Sentinel Data Connector Microsoft Threat Protection",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_office_365",
    label: "Sentinel Data Connector Office 365",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_office_365_project",
    label: "Sentinel Data Connector Office 365 Project",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_office_atp",
    label: "Sentinel Data Connector Office Atp",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_office_irm",
    label: "Sentinel Data Connector Office Irm",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_office_power_bi",
    label: "Sentinel Data Connector Office Power Bi",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_threat_intelligence",
    label: "Sentinel Data Connector Threat Intelligence",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_threat_intelligence_taxii",
    label: "Sentinel Data Connector Threat Intelligence Taxii",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_root_url", label: "Api Root Url", type: "text", default: "" },
    { name: "collection_id", label: "Collection Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_metadata",
    label: "Sentinel Metadata",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "content_id", label: "Content Id", type: "text", default: "" },
    { name: "kind", label: "Kind", type: "text", default: "StorageV2" },
    { name: "parent_id", label: "Parent Id", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" },
    { name: "version", label: "Version", type: "text", default: "latest" }
  ]
  },
  {
    type: "azurerm_sentinel_threat_intelligence_indicator",
    label: "Sentinel Threat Intelligence Indicator",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "pattern", label: "Pattern", type: "text", default: "" },
    { name: "pattern_type", label: "Pattern Type", type: "text", default: "" },
    { name: "source", label: "Source", type: "text", default: "" },
    { name: "validate_from_utc", label: "Validate From Utc", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_watchlist",
    label: "Sentinel Watchlist",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "item_search_key", label: "Item Search Key", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_watchlist_item",
    label: "Sentinel Watchlist Item",
    category: "Security",
    icon: "🔒",
    color: "#C0392B",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "properties", label: "Properties", type: "text", default: "" },
    { name: "watchlist_id", label: "Watchlist Id", type: "text", default: "" }
  ]
  }
]
