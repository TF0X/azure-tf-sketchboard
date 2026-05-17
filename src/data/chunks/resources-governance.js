// AUTO-GENERATED — category: Governance
export default [
  {
    type: "azurerm_advisor_suppression",
    label: "Advisor Suppression",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "recommendation_id", label: "Recommendation Id", type: "text", default: "" },
    { name: "resource_id", label: "Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_backup_policy_file_share",
    label: "Backup Policy File Share",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "recovery_vault_name", label: "Recovery Vault Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_backup_policy_vm",
    label: "Backup Policy Vm",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "recovery_vault_name", label: "Recovery Vault Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_billing_account_cost_management_export",
    label: "Billing Account Cost Management Export",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "billing_account_id", label: "Billing Account Id", type: "text", default: "" },
    { name: "recurrence_period_end_date", label: "Recurrence Period End Date", type: "text", default: "" },
    { name: "recurrence_period_start_date", label: "Recurrence Period Start Date", type: "text", default: "" },
    { name: "recurrence_type", label: "Recurrence Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_blueprint_assignment",
    label: "Blueprint Assignment",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "target_subscription_id", label: "Target Subscription Id", type: "text", default: "" },
    { name: "version_id", label: "Version Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_consumption_budget_management_group",
    label: "Consumption Budget Management Group",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "amount", label: "Amount", type: "number", default: "1" },
    { name: "management_group_id", label: "Management Group Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_consumption_budget_subscription",
    label: "Consumption Budget Subscription",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "amount", label: "Amount", type: "number", default: "1" },
    { name: "subscription_id", label: "Subscription Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cost_management_scheduled_action",
    label: "Cost Management Scheduled Action",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "email_address_sender", label: "Email Address Sender", type: "text", default: "" },
    { name: "email_addresses", label: "Email Addresses", type: "text", default: "" },
    { name: "email_subject", label: "Email Subject", type: "text", default: "" },
    { name: "end_date", label: "End Date", type: "text", default: "" },
    { name: "frequency", label: "Frequency", type: "text", default: "PT5M" },
    { name: "start_date", label: "Start Date", type: "text", default: "" },
    { name: "view_id", label: "View Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_policy_blob_storage",
    label: "Data Protection Backup Policy Blob Storage",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "vault_id", label: "Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_policy_disk",
    label: "Data Protection Backup Policy Disk",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "backup_repeating_time_intervals", label: "Backup Repeating Time Intervals", type: "text", default: "" },
    { name: "default_retention_duration", label: "Default Retention Duration", type: "text", default: "" },
    { name: "vault_id", label: "Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_eventgrid_event_subscription",
    label: "Eventgrid Event Subscription",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "scope", label: "Scope", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_eventgrid_system_topic_event_subscription",
    label: "Eventgrid System Topic Event Subscription",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "system_topic", label: "System Topic", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_firewall_policy_rule_collection_group",
    label: "Firewall Policy Rule Collection Group",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "firewall_policy_id", label: "Firewall Policy Id", type: "text", default: "" },
    { name: "priority", label: "Priority", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_lighthouse_assignment",
    label: "Lighthouse Assignment",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "lighthouse_definition_id", label: "Lighthouse Definition Id", type: "text", default: "" },
    { name: "scope", label: "Scope", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_lighthouse_definition",
    label: "Lighthouse Definition",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "managing_tenant_id", label: "Managing Tenant Id", type: "text", default: "" },
    { name: "scope", label: "Scope", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_management_group",
    label: "Management Group",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_management_group_policy_assignment",
    label: "Management Group Policy Assignment",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "management_group_id", label: "Management Group Id", type: "text", default: "" },
    { name: "policy_definition_id", label: "Policy Definition Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_management_group_policy_exemption",
    label: "Management Group Policy Exemption",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "exemption_category", label: "Exemption Category", type: "text", default: "" },
    { name: "management_group_id", label: "Management Group Id", type: "text", default: "" },
    { name: "policy_assignment_id", label: "Policy Assignment Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_management_group_policy_remediation",
    label: "Management Group Policy Remediation",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "management_group_id", label: "Management Group Id", type: "text", default: "" },
    { name: "policy_assignment_id", label: "Policy Assignment Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_management_group_policy_set_definition",
    label: "Management Group Policy Set Definition",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "management_group_id", label: "Management Group Id", type: "text", default: "" },
    { name: "policy_type", label: "Policy Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_management_group_subscription_association",
    label: "Management Group Subscription Association",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "management_group_id", label: "Management Group Id", type: "text", default: "" },
    { name: "subscription_id", label: "Subscription Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_management_group_template_deployment",
    label: "Management Group Template Deployment",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "management_group_id", label: "Management Group Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager_management_group_connection",
    label: "Network Manager Management Group Connection",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "management_group_id", label: "Management Group Id", type: "text", default: "" },
    { name: "network_manager_id", label: "Network Manager Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager_subscription_connection",
    label: "Network Manager Subscription Connection",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "network_manager_id", label: "Network Manager Id", type: "text", default: "" },
    { name: "subscription_id", label: "Subscription Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_policy_definition",
    label: "Policy Definition",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "mode", label: "Mode", type: "text", default: "" },
    { name: "policy_type", label: "Policy Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_policy_set_definition",
    label: "Policy Set Definition",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "policy_type", label: "Policy Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_portal_tenant_configuration",
    label: "Portal Tenant Configuration",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "private_markdown_storage_enforced", label: "Private Markdown Storage Enforced", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_resource_deployment_script_azure_cli",
    label: "Resource Deployment Script Azure Cli",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "retention_interval", label: "Retention Interval", type: "text", default: "" },
    { name: "version", label: "Version", type: "text", default: "latest" }
  ]
  },
  {
    type: "azurerm_resource_deployment_script_azure_power_shell",
    label: "Resource Deployment Script Azure Power Shell",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "retention_interval", label: "Retention Interval", type: "text", default: "" },
    { name: "version", label: "Version", type: "text", default: "latest" }
  ]
  },
  {
    type: "azurerm_resource_group_cost_management_export",
    label: "Resource Group Cost Management Export",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "recurrence_period_end_date", label: "Recurrence Period End Date", type: "text", default: "" },
    { name: "recurrence_period_start_date", label: "Recurrence Period Start Date", type: "text", default: "" },
    { name: "recurrence_type", label: "Recurrence Type", type: "text", default: "" },
    { name: "resource_group_id", label: "Resource Group Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_resource_group_cost_management_view",
    label: "Resource Group Cost Management View",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "accumulated", label: "Accumulated", type: "select", options: ["true", "false"], default: "false" },
    { name: "chart_type", label: "Chart Type", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "report_type", label: "Report Type", type: "text", default: "" },
    { name: "resource_group_id", label: "Resource Group Id", type: "text", default: "" },
    { name: "timeframe", label: "Timeframe", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_resource_group_policy_assignment",
    label: "Resource Group Policy Assignment",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "policy_definition_id", label: "Policy Definition Id", type: "text", default: "" },
    { name: "resource_group_id", label: "Resource Group Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_resource_group_policy_exemption",
    label: "Resource Group Policy Exemption",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "exemption_category", label: "Exemption Category", type: "text", default: "" },
    { name: "policy_assignment_id", label: "Policy Assignment Id", type: "text", default: "" },
    { name: "resource_group_id", label: "Resource Group Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_resource_group_policy_remediation",
    label: "Resource Group Policy Remediation",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "policy_assignment_id", label: "Policy Assignment Id", type: "text", default: "" },
    { name: "resource_group_id", label: "Resource Group Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_resource_policy_assignment",
    label: "Resource Policy Assignment",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "policy_definition_id", label: "Policy Definition Id", type: "text", default: "" },
    { name: "resource_id", label: "Resource Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_resource_policy_exemption",
    label: "Resource Policy Exemption",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "exemption_category", label: "Exemption Category", type: "text", default: "" },
    { name: "policy_assignment_id", label: "Policy Assignment Id", type: "text", default: "" },
    { name: "resource_id", label: "Resource Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_resource_policy_remediation",
    label: "Resource Policy Remediation",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "policy_assignment_id", label: "Policy Assignment Id", type: "text", default: "" },
    { name: "resource_id", label: "Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_security_center_subscription_pricing",
    label: "Security Center Subscription Pricing",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "tier", label: "Tier", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_servicebus_subscription",
    label: "Servicebus Subscription",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "max_delivery_count", label: "Max Delivery Count", type: "number", default: "1" },
    { name: "topic_id", label: "Topic Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_servicebus_subscription_rule",
    label: "Servicebus Subscription Rule",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "filter_type", label: "Filter Type", type: "text", default: "" },
    { name: "subscription_id", label: "Subscription Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_site_recovery_hyperv_replication_policy_association",
    label: "Site Recovery Hyperv Replication Policy Association",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "hyperv_site_id", label: "Hyperv Site Id", type: "text", default: "" },
    { name: "policy_id", label: "Policy Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_site_recovery_vmware_replication_policy_association",
    label: "Site Recovery Vmware Replication Policy Association",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "policy_id", label: "Policy Id", type: "text", default: "" },
    { name: "recovery_vault_id", label: "Recovery Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_subscription",
    label: "Subscription",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "subscription_name", label: "Subscription Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_subscription_cost_management_export",
    label: "Subscription Cost Management Export",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "recurrence_period_end_date", label: "Recurrence Period End Date", type: "text", default: "" },
    { name: "recurrence_period_start_date", label: "Recurrence Period Start Date", type: "text", default: "" },
    { name: "recurrence_type", label: "Recurrence Type", type: "text", default: "" },
    { name: "subscription_id", label: "Subscription Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_subscription_cost_management_view",
    label: "Subscription Cost Management View",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "accumulated", label: "Accumulated", type: "select", options: ["true", "false"], default: "false" },
    { name: "chart_type", label: "Chart Type", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "report_type", label: "Report Type", type: "text", default: "" },
    { name: "subscription_id", label: "Subscription Id", type: "text", default: "" },
    { name: "timeframe", label: "Timeframe", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_subscription_policy_assignment",
    label: "Subscription Policy Assignment",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "policy_definition_id", label: "Policy Definition Id", type: "text", default: "" },
    { name: "subscription_id", label: "Subscription Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_subscription_policy_exemption",
    label: "Subscription Policy Exemption",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "exemption_category", label: "Exemption Category", type: "text", default: "" },
    { name: "policy_assignment_id", label: "Policy Assignment Id", type: "text", default: "" },
    { name: "subscription_id", label: "Subscription Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_subscription_policy_remediation",
    label: "Subscription Policy Remediation",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "policy_assignment_id", label: "Policy Assignment Id", type: "text", default: "" },
    { name: "subscription_id", label: "Subscription Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_subscription_template_deployment",
    label: "Subscription Template Deployment",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_tenant_template_deployment",
    label: "Tenant Template Deployment",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_vpn_server_configuration_policy_group",
    label: "Vpn Server Configuration Policy Group",
    category: "Governance",
    icon: "⚖️",
    color: "#7F8C8D",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "vpn_server_configuration_id", label: "Vpn Server Configuration Id", type: "text", default: "" }
  ]
  }
]
