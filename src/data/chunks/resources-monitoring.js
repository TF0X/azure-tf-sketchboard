// AUTO-GENERATED — category: Monitoring
export default [
  {
    type: "azurerm_application_insights_analytics_item",
    label: "Application Insights Analytics Item",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "application_insights_id", label: "Application Insights Id", type: "text", default: "" },
    { name: "content", label: "Content", type: "text", default: "" },
    { name: "scope", label: "Scope", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_application_insights_api_key",
    label: "Application Insights Api Key",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "application_insights_id", label: "Application Insights Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_application_insights_smart_detection_rule",
    label: "Application Insights Smart Detection Rule",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "application_insights_id", label: "Application Insights Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_application_insights_standard_web_test",
    label: "Application Insights Standard Web Test",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "application_insights_id", label: "Application Insights Id", type: "text", default: "" },
    { name: "geo_locations", label: "Geo Locations", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "frequency", label: "Frequency", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_application_insights_web_test",
    label: "Application Insights Web Test",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "application_insights_id", label: "Application Insights Id", type: "text", default: "" },
    { name: "configuration", label: "Configuration", type: "text", default: "" },
    { name: "geo_locations", label: "Geo Locations", type: "text", default: "" },
    { name: "kind", label: "Kind", type: "text", default: "StorageV2" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "frequency", label: "Frequency", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_application_insights_workbook",
    label: "Application Insights Workbook",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "data_json", label: "Data Json", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_application_insights_workbook_template",
    label: "Application Insights Workbook Template",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "template_data", label: "Template Data", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_certificate",
    label: "Automation Certificate",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" },
    { name: "base64", label: "Base64", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_connection",
    label: "Automation Connection",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" },
    { name: "values", label: "Values", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_connection_certificate",
    label: "Automation Connection Certificate",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" },
    { name: "automation_certificate_name", label: "Automation Certificate Name", type: "text", default: "" },
    { name: "subscription_id", label: "Subscription Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_connection_classic_certificate",
    label: "Automation Connection Classic Certificate",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" },
    { name: "certificate_asset_name", label: "Certificate Asset Name", type: "text", default: "" },
    { name: "subscription_id", label: "Subscription Id", type: "text", default: "" },
    { name: "subscription_name", label: "Subscription Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_connection_service_principal",
    label: "Automation Connection Service Principal",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "application_id", label: "Application Id", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" },
    { name: "certificate_thumbprint", label: "Certificate Thumbprint", type: "text", default: "" },
    { name: "subscription_id", label: "Subscription Id", type: "text", default: "" },
    { name: "tenant_id", label: "Tenant Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_connection_type",
    label: "Automation Connection Type",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_credential",
    label: "Automation Credential",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" },
    { name: "password", label: "Password", type: "text", default: "" },
    { name: "username", label: "Username", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_dsc_configuration",
    label: "Automation Dsc Configuration",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" },
    { name: "content_embedded", label: "Content Embedded", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_dsc_nodeconfiguration",
    label: "Automation Dsc Nodeconfiguration",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" },
    { name: "content_embedded", label: "Content Embedded", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_hybrid_runbook_worker",
    label: "Automation Hybrid Runbook Worker",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" },
    { name: "vm_resource_id", label: "Vm Resource Id", type: "text", default: "" },
    { name: "worker_group_name", label: "Worker Group Name", type: "text", default: "" },
    { name: "worker_id", label: "Worker Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_hybrid_runbook_worker_group",
    label: "Automation Hybrid Runbook Worker Group",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_job_schedule",
    label: "Automation Job Schedule",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" },
    { name: "runbook_name", label: "Runbook Name", type: "text", default: "" },
    { name: "schedule_name", label: "Schedule Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_module",
    label: "Automation Module",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_powershell72_module",
    label: "Automation Powershell72 Module",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_id", label: "Automation Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_python3_package",
    label: "Automation Python3 Package",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" },
    { name: "content_uri", label: "Content Uri", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_runbook",
    label: "Automation Runbook",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" },
    { name: "log_progress", label: "Log Progress", type: "select", options: ["true", "false"], default: "false" },
    { name: "log_verbose", label: "Log Verbose", type: "select", options: ["true", "false"], default: "false" },
    { name: "runbook_type", label: "Runbook Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_runtime_environment",
    label: "Automation Runtime Environment",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "automation_account_id", label: "Automation Account Id", type: "text", default: "" },
    { name: "runtime_language", label: "Runtime Language", type: "text", default: "" },
    { name: "runtime_version", label: "Runtime Version", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_runtime_environment_package",
    label: "Automation Runtime Environment Package",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_runtime_environment_id", label: "Automation Runtime Environment Id", type: "text", default: "" },
    { name: "content_uri", label: "Content Uri", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_schedule",
    label: "Automation Schedule",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" },
    { name: "frequency", label: "Frequency", type: "text", default: "PT5M" }
  ]
  },
  {
    type: "azurerm_automation_software_update_configuration",
    label: "Automation Software Update Configuration",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_id", label: "Automation Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_variable_bool",
    label: "Automation Variable Bool",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_variable_datetime",
    label: "Automation Variable Datetime",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_variable_int",
    label: "Automation Variable Int",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_variable_object",
    label: "Automation Variable Object",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_variable_string",
    label: "Automation Variable String",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_watcher",
    label: "Automation Watcher",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "automation_account_id", label: "Automation Account Id", type: "text", default: "" },
    { name: "execution_frequency_in_seconds", label: "Execution Frequency In Seconds", type: "number", default: "1" },
    { name: "script_name", label: "Script Name", type: "text", default: "" },
    { name: "script_run_on", label: "Script Run On", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_webhook",
    label: "Automation Webhook",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_name", label: "Automation Account Name", type: "text", default: "" },
    { name: "expiry_time", label: "Expiry Time", type: "text", default: "" },
    { name: "runbook_name", label: "Runbook Name", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_backup_container_storage_account",
    label: "Backup Container Storage Account",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "recovery_vault_name", label: "Recovery Vault Name", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_backup_protected_file_share",
    label: "Backup Protected File Share",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "backup_policy_id", label: "Backup Policy Id", type: "text", default: "" },
    { name: "recovery_vault_name", label: "Recovery Vault Name", type: "text", default: "" },
    { name: "source_file_share_name", label: "Source File Share Name", type: "text", default: "" },
    { name: "source_storage_account_id", label: "Source Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_backup_protected_vm",
    label: "Backup Protected Vm",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "recovery_vault_name", label: "Recovery Vault Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dashboard_grafana",
    label: "Dashboard Grafana",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "grafana_major_version", label: "Grafana Major Version", type: "text", default: "" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_dashboard_grafana_managed_private_endpoint",
    label: "Dashboard Grafana Managed Private Endpoint",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "grafana_id", label: "Grafana Id", type: "text", default: "" },
    { name: "private_link_resource_id", label: "Private Link Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_instance_blob_storage",
    label: "Data Protection Backup Instance Blob Storage",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "backup_policy_id", label: "Backup Policy Id", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" },
    { name: "vault_id", label: "Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_instance_disk",
    label: "Data Protection Backup Instance Disk",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "backup_policy_id", label: "Backup Policy Id", type: "text", default: "" },
    { name: "disk_id", label: "Disk Id", type: "text", default: "" },
    { name: "snapshot_resource_group_name", label: "Snapshot Resource Group Name", type: "text", default: "" },
    { name: "vault_id", label: "Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_vault",
    label: "Data Protection Backup Vault",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "datastore_type", label: "Datastore Type", type: "text", default: "" },
    { name: "redundancy", label: "Redundancy", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_vault_customer_managed_key",
    label: "Data Protection Backup Vault Customer Managed Key",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "data_protection_backup_vault_id", label: "Data Protection Backup Vault Id", type: "text", default: "" },
    { name: "key_vault_key_id", label: "Key Vault Key Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_datadog_monitor_sso_configuration",
    label: "Datadog Monitor Sso Configuration",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "datadog_monitor_id", label: "Datadog Monitor Id", type: "text", default: "" },
    { name: "enterprise_application_id", label: "Enterprise Application Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_datadog_monitor_tag_rule",
    label: "Datadog Monitor Tag Rule",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "datadog_monitor_id", label: "Datadog Monitor Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_log_analytics_cluster",
    label: "Log Analytics Cluster",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_log_analytics_cluster_customer_managed_key",
    label: "Log Analytics Cluster Customer Managed Key",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "key_vault_key_id", label: "Key Vault Key Id", type: "text", default: "" },
    { name: "log_analytics_cluster_id", label: "Log Analytics Cluster Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_log_analytics_data_export_rule",
    label: "Log Analytics Data Export Rule",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "destination_resource_id", label: "Destination Resource Id", type: "text", default: "" },
    { name: "table_names", label: "Table Names", type: "text", default: "" },
    { name: "workspace_resource_id", label: "Workspace Resource Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_log_analytics_datasource_windows_event",
    label: "Log Analytics Datasource Windows Event",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "event_log_name", label: "Event Log Name", type: "text", default: "" },
    { name: "event_types", label: "Event Types", type: "text", default: "" },
    { name: "workspace_name", label: "Workspace Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_log_analytics_datasource_windows_performance_counter",
    label: "Log Analytics Datasource Windows Performance Counter",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "counter_name", label: "Counter Name", type: "text", default: "" },
    { name: "instance_name", label: "Instance Name", type: "text", default: "" },
    { name: "interval_seconds", label: "Interval Seconds", type: "number", default: "1" },
    { name: "object_name", label: "Object Name", type: "text", default: "" },
    { name: "workspace_name", label: "Workspace Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_log_analytics_linked_service",
    label: "Log Analytics Linked Service",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_log_analytics_linked_storage_account",
    label: "Log Analytics Linked Storage Account",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "data_source_type", label: "Data Source Type", type: "text", default: "" },
    { name: "storage_account_ids", label: "Storage Account Ids", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_log_analytics_query_pack",
    label: "Log Analytics Query Pack",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_log_analytics_query_pack_query",
    label: "Log Analytics Query Pack Query",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "body", label: "Body", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "query_pack_id", label: "Query Pack Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_log_analytics_saved_search",
    label: "Log Analytics Saved Search",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "category", label: "Category", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" },
    { name: "query", label: "Query", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_log_analytics_solution",
    label: "Log Analytics Solution",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "solution_name", label: "Solution Name", type: "text", default: "" },
    { name: "workspace_name", label: "Workspace Name", type: "text", default: "" },
    { name: "workspace_resource_id", label: "Workspace Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_log_analytics_storage_insights",
    label: "Log Analytics Storage Insights",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" },
    { name: "storage_account_key", label: "Storage Account Key", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_log_analytics_workspace_table",
    label: "Log Analytics Workspace Table",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" },
    { name: "retention_in_days", label: "Retention In Days", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_monitor_alert_processing_rule_action_group",
    label: "Monitor Alert Processing Rule Action Group",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "add_action_group_ids", label: "Add Action Group Ids", type: "text", default: "" },
    { name: "scopes", label: "Scopes", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_monitor_alert_processing_rule_suppression",
    label: "Monitor Alert Processing Rule Suppression",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "scopes", label: "Scopes", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_monitor_alert_prometheus_rule_group",
    label: "Monitor Alert Prometheus Rule Group",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "scopes", label: "Scopes", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_monitor_data_collection_endpoint",
    label: "Monitor Data Collection Endpoint",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "kind", label: "Kind", type: "text", default: "StorageV2" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_monitor_data_collection_rule",
    label: "Monitor Data Collection Rule",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "kind", label: "Kind", type: "text", default: "StorageV2" }
  ]
  },
  {
    type: "azurerm_monitor_data_collection_rule_association",
    label: "Monitor Data Collection Rule Association",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_monitor_private_link_scope",
    label: "Monitor Private Link Scope",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_monitor_private_link_scoped_service",
    label: "Monitor Private Link Scoped Service",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "linked_resource_id", label: "Linked Resource Id", type: "text", default: "" },
    { name: "scope_name", label: "Scope Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_monitor_scheduled_query_rules_alert",
    label: "Monitor Scheduled Query Rules Alert",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "data_source_id", label: "Data Source Id", type: "text", default: "" },
    { name: "frequency", label: "Frequency", type: "number", default: "1" },
    { name: "query", label: "Query", type: "text", default: "" },
    { name: "time_window", label: "Time Window", type: "number", default: "1" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "severity", label: "Severity", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_monitor_scheduled_query_rules_alert_v2",
    label: "Monitor Scheduled Query Rules Alert V2",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "evaluation_frequency", label: "Evaluation Frequency", type: "text", default: "" },
    { name: "scopes", label: "Scopes", type: "text", default: "" },
    { name: "severity", label: "Severity", type: "number", default: "1" },
    { name: "window_duration", label: "Window Duration", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_monitor_scheduled_query_rules_log",
    label: "Monitor Scheduled Query Rules Log",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "data_source_id", label: "Data Source Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_monitor_smart_detector_alert_rule",
    label: "Monitor Smart Detector Alert Rule",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "detector_type", label: "Detector Type", type: "text", default: "" },
    { name: "frequency", label: "Frequency", type: "text", default: "PT5M" },
    { name: "scope_resource_ids", label: "Scope Resource Ids", type: "text", default: "" },
    { name: "severity", label: "Severity", type: "text", default: "2" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_monitor_workspace",
    label: "Monitor Workspace",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_netapp_backup_policy",
    label: "Netapp Backup Policy",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_netapp_backup_vault",
    label: "Netapp Backup Vault",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "account_name", label: "Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_portal_dashboard",
    label: "Portal Dashboard",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "dashboard_properties", label: "Dashboard Properties", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_recovery_services_vault_resource_guard_association",
    label: "Recovery Services Vault Resource Guard Association",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "resource_guard_id", label: "Resource Guard Id", type: "text", default: "" },
    { name: "vault_id", label: "Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_automation_rule",
    label: "Sentinel Automation Rule",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" },
    { name: "order", label: "Order", type: "number", default: "1" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_sentinel_log_analytics_workspace_onboarding",
    label: "Sentinel Log Analytics Workspace Onboarding",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_site_recovery_fabric",
    label: "Site Recovery Fabric",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "recovery_vault_name", label: "Recovery Vault Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_site_recovery_hyperv_network_mapping",
    label: "Site Recovery Hyperv Network Mapping",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "recovery_vault_id", label: "Recovery Vault Id", type: "text", default: "" },
    { name: "source_network_name", label: "Source Network Name", type: "text", default: "" },
    { name: "source_system_center_virtual_machine_manager_name", label: "Source System Center Virtual Machine Manager Name", type: "text", default: "" },
    { name: "target_network_id", label: "Target Network Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_site_recovery_hyperv_replication_policy",
    label: "Site Recovery Hyperv Replication Policy",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "application_consistent_snapshot_frequency_in_hours", label: "Application Consistent Snapshot Frequency In Hours", type: "number", default: "1" },
    { name: "recovery_point_retention_in_hours", label: "Recovery Point Retention In Hours", type: "number", default: "1" },
    { name: "recovery_vault_id", label: "Recovery Vault Id", type: "text", default: "" },
    { name: "replication_interval_in_seconds", label: "Replication Interval In Seconds", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_site_recovery_network_mapping",
    label: "Site Recovery Network Mapping",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "recovery_vault_name", label: "Recovery Vault Name", type: "text", default: "" },
    { name: "source_network_id", label: "Source Network Id", type: "text", default: "" },
    { name: "source_recovery_fabric_name", label: "Source Recovery Fabric Name", type: "text", default: "" },
    { name: "target_network_id", label: "Target Network Id", type: "text", default: "" },
    { name: "target_recovery_fabric_name", label: "Target Recovery Fabric Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_site_recovery_protection_container",
    label: "Site Recovery Protection Container",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "recovery_fabric_name", label: "Recovery Fabric Name", type: "text", default: "" },
    { name: "recovery_vault_name", label: "Recovery Vault Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_site_recovery_protection_container_mapping",
    label: "Site Recovery Protection Container Mapping",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "recovery_fabric_name", label: "Recovery Fabric Name", type: "text", default: "" },
    { name: "recovery_replication_policy_id", label: "Recovery Replication Policy Id", type: "text", default: "" },
    { name: "recovery_source_protection_container_name", label: "Recovery Source Protection Container Name", type: "text", default: "" },
    { name: "recovery_target_protection_container_id", label: "Recovery Target Protection Container Id", type: "text", default: "" },
    { name: "recovery_vault_name", label: "Recovery Vault Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_site_recovery_replicated_vm",
    label: "Site Recovery Replicated Vm",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "recovery_replication_policy_id", label: "Recovery Replication Policy Id", type: "text", default: "" },
    { name: "recovery_vault_name", label: "Recovery Vault Name", type: "text", default: "" },
    { name: "source_recovery_fabric_name", label: "Source Recovery Fabric Name", type: "text", default: "" },
    { name: "source_recovery_protection_container_name", label: "Source Recovery Protection Container Name", type: "text", default: "" },
    { name: "source_vm_id", label: "Source Vm Id", type: "text", default: "" },
    { name: "target_recovery_fabric_id", label: "Target Recovery Fabric Id", type: "text", default: "" },
    { name: "target_recovery_protection_container_id", label: "Target Recovery Protection Container Id", type: "text", default: "" },
    { name: "target_resource_group_id", label: "Target Resource Group Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_site_recovery_replication_policy",
    label: "Site Recovery Replication Policy",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "application_consistent_snapshot_frequency_in_minutes", label: "Application Consistent Snapshot Frequency In Minutes", type: "number", default: "1" },
    { name: "recovery_point_retention_in_minutes", label: "Recovery Point Retention In Minutes", type: "number", default: "1" },
    { name: "recovery_vault_name", label: "Recovery Vault Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_site_recovery_replication_recovery_plan",
    label: "Site Recovery Replication Recovery Plan",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "recovery_vault_id", label: "Recovery Vault Id", type: "text", default: "" },
    { name: "source_recovery_fabric_id", label: "Source Recovery Fabric Id", type: "text", default: "" },
    { name: "target_recovery_fabric_id", label: "Target Recovery Fabric Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_site_recovery_services_vault_hyperv_site",
    label: "Site Recovery Services Vault Hyperv Site",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "recovery_vault_id", label: "Recovery Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_site_recovery_vmware_replicated_vm",
    label: "Site Recovery Vmware Replicated Vm",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "appliance_name", label: "Appliance Name", type: "text", default: "" },
    { name: "physical_server_credential_name", label: "Physical Server Credential Name", type: "text", default: "" },
    { name: "recovery_replication_policy_id", label: "Recovery Replication Policy Id", type: "text", default: "" },
    { name: "recovery_vault_id", label: "Recovery Vault Id", type: "text", default: "" },
    { name: "source_vm_name", label: "Source Vm Name", type: "text", default: "" },
    { name: "target_resource_group_id", label: "Target Resource Group Id", type: "text", default: "" },
    { name: "target_vm_name", label: "Target Vm Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_site_recovery_vmware_replication_policy",
    label: "Site Recovery Vmware Replication Policy",
    category: "Monitoring",
    icon: "📈",
    color: "#8E44AD",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "application_consistent_snapshot_frequency_in_minutes", label: "Application Consistent Snapshot Frequency In Minutes", type: "number", default: "1" },
    { name: "recovery_point_retention_in_minutes", label: "Recovery Point Retention In Minutes", type: "number", default: "1" },
    { name: "recovery_vault_id", label: "Recovery Vault Id", type: "text", default: "" }
  ]
  }
]
