// AUTO-GENERATED — category: IoT & Edge
export default [
  {
    type: "azurerm_iotcentral_application",
    label: "Iotcentral Application",
    category: "IoT & Edge",
    icon: "📡",
    color: "#00B4D8",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sub_domain", label: "Sub Domain", type: "text", default: "" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iotcentral_application_network_rule_set",
    label: "Iotcentral Application Network Rule Set",
    category: "IoT & Edge",
    icon: "📡",
    color: "#00B4D8",
    properties: [
    { name: "iotcentral_application_id", label: "Iotcentral Application Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iotcentral_organization",
    label: "Iotcentral Organization",
    category: "IoT & Edge",
    icon: "📡",
    color: "#00B4D8",
    properties: [
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "iotcentral_application_id", label: "Iotcentral Application Id", type: "text", default: "" },
    { name: "organization_id", label: "Organization Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_sentinel_data_connector_iot",
    label: "Sentinel Data Connector Iot",
    category: "IoT & Edge",
    icon: "📡",
    color: "#00B4D8",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "log_analytics_workspace_id", label: "Log Analytics Workspace Id", type: "text", default: "" }
  ]
  }
]
