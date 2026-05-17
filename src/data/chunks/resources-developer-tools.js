// AUTO-GENERATED — category: Developer Tools
export default [
  {
    type: "azurerm_app_service_hybrid_connection",
    label: "App Service Hybrid Connection",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "app_service_name", label: "App Service Name", type: "text", default: "" },
    { name: "hostname", label: "Hostname", type: "text", default: "" },
    { name: "port", label: "Port", type: "number", default: "1" },
    { name: "relay_id", label: "Relay Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_app_service_source_control",
    label: "App Service Source Control",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "app_id", label: "App Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_app_service_source_control_slot",
    label: "App Service Source Control Slot",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "slot_id", label: "Slot Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_app_service_source_control_token",
    label: "App Service Source Control Token",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "token", label: "Token", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_automation_source_control",
    label: "Automation Source Control",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "automation_account_id", label: "Automation Account Id", type: "text", default: "" },
    { name: "folder_path", label: "Folder Path", type: "text", default: "" },
    { name: "repository_url", label: "Repository Url", type: "text", default: "" },
    { name: "source_control_type", label: "Source Control Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_fluid_relay_server",
    label: "Fluid Relay Server",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_function_app_hybrid_connection",
    label: "Function App Hybrid Connection",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "function_app_id", label: "Function App Id", type: "text", default: "" },
    { name: "hostname", label: "Hostname", type: "text", default: "" },
    { name: "port", label: "Port", type: "number", default: "1" },
    { name: "relay_id", label: "Relay Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_managed_devops_pool",
    label: "Managed Devops Pool",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "dev_center_project_id", label: "Dev Center Project Id", type: "text", default: "" },
    { name: "maximum_concurrency", label: "Maximum Concurrency", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_notification_hub",
    label: "Notification Hub",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "namespace_name", label: "Namespace Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_notification_hub_authorization_rule",
    label: "Notification Hub Authorization Rule",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "namespace_name", label: "Namespace Name", type: "text", default: "" },
    { name: "notification_hub_name", label: "Notification Hub Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_relay_hybrid_connection",
    label: "Relay Hybrid Connection",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "relay_namespace_name", label: "Relay Namespace Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_relay_hybrid_connection_authorization_rule",
    label: "Relay Hybrid Connection Authorization Rule",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "hybrid_connection_name", label: "Hybrid Connection Name", type: "text", default: "" },
    { name: "namespace_name", label: "Namespace Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_relay_namespace",
    label: "Relay Namespace",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_relay_namespace_authorization_rule",
    label: "Relay Namespace Authorization Rule",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "namespace_name", label: "Namespace Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_source_control_token",
    label: "Source Control Token",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "token", label: "Token", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_web_app_hybrid_connection",
    label: "Web App Hybrid Connection",
    category: "Developer Tools",
    icon: "🛠️",
    color: "#27AE60",
    properties: [
    { name: "hostname", label: "Hostname", type: "text", default: "" },
    { name: "port", label: "Port", type: "number", default: "1" },
    { name: "relay_id", label: "Relay Id", type: "text", default: "" },
    { name: "web_app_id", label: "Web App Id", type: "text", default: "" }
  ]
  }
]
