// AUTO-GENERATED — category: Identity & Access
export default [
  {
    type: "azurerm_aadb2c_directory",
    label: "Aadb2c Directory",
    category: "Identity & Access",
    icon: "🪪",
    color: "#7159C1",
    properties: [
    { name: "data_residency_location", label: "Data Residency Location", type: "text", default: "" },
    { name: "domain_name", label: "Domain Name", type: "text", default: "" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_active_directory_domain_service",
    label: "Active Directory Domain Service",
    category: "Identity & Access",
    icon: "🪪",
    color: "#7159C1",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "domain_name", label: "Domain Name", type: "text", default: "" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_active_directory_domain_service_replica_set",
    label: "Active Directory Domain Service Replica Set",
    category: "Identity & Access",
    icon: "🪪",
    color: "#7159C1",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "domain_service_id", label: "Domain Service Id", type: "text", default: "" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_active_directory_domain_service_trust",
    label: "Active Directory Domain Service Trust",
    category: "Identity & Access",
    icon: "🪪",
    color: "#7159C1",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "domain_service_id", label: "Domain Service Id", type: "text", default: "" },
    { name: "password", label: "Password", type: "text", default: "" },
    { name: "trusted_domain_dns_ips", label: "Trusted Domain Dns Ips", type: "text", default: "" },
    { name: "trusted_domain_fqdn", label: "Trusted Domain Fqdn", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_federated_identity_credential",
    label: "Federated Identity Credential",
    category: "Identity & Access",
    icon: "🪪",
    color: "#7159C1",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "audience", label: "Audience", type: "text", default: "" },
    { name: "issuer", label: "Issuer", type: "text", default: "" },
    { name: "subject", label: "Subject", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_key_vault_managed_hardware_security_module_role_assignment",
    label: "Key Vault Managed Hardware Security Module Role Assignment",
    category: "Identity & Access",
    icon: "🪪",
    color: "#7159C1",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "managed_hsm_id", label: "Managed Hsm Id", type: "text", default: "" },
    { name: "principal_id", label: "Principal Id", type: "text", default: "" },
    { name: "role_definition_id", label: "Role Definition Id", type: "text", default: "" },
    { name: "scope", label: "Scope", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_key_vault_managed_hardware_security_module_role_definition",
    label: "Key Vault Managed Hardware Security Module Role Definition",
    category: "Identity & Access",
    icon: "🪪",
    color: "#7159C1",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "managed_hsm_id", label: "Managed Hsm Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_marketplace_role_assignment",
    label: "Marketplace Role Assignment",
    category: "Identity & Access",
    icon: "🪪",
    color: "#7159C1",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "principal_id", label: "Principal Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_monitor_aad_diagnostic_setting",
    label: "Monitor Aad Diagnostic Setting",
    category: "Identity & Access",
    icon: "🪪",
    color: "#7159C1",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_pim_active_role_assignment",
    label: "Pim Active Role Assignment",
    category: "Identity & Access",
    icon: "🪪",
    color: "#7159C1",
    properties: [
    { name: "principal_id", label: "Principal Id", type: "text", default: "" },
    { name: "role_definition_id", label: "Role Definition Id", type: "text", default: "" },
    { name: "scope", label: "Scope", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_pim_eligible_role_assignment",
    label: "Pim Eligible Role Assignment",
    category: "Identity & Access",
    icon: "🪪",
    color: "#7159C1",
    properties: [
    { name: "principal_id", label: "Principal Id", type: "text", default: "" },
    { name: "role_definition_id", label: "Role Definition Id", type: "text", default: "" },
    { name: "scope", label: "Scope", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_role_definition",
    label: "Role Definition",
    category: "Identity & Access",
    icon: "🪪",
    color: "#7159C1",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "scope", label: "Scope", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_role_management_policy",
    label: "Role Management Policy",
    category: "Identity & Access",
    icon: "🪪",
    color: "#7159C1",
    properties: [
    { name: "role_definition_id", label: "Role Definition Id", type: "text", default: "" },
    { name: "scope", label: "Scope", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_azure_active_directory",
    label: "Sentinel Data Connector Azure Active Directory",
    category: "Identity & Access",
    icon: "🪪",
    color: "#7159C1",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  }
]
