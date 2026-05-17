// AUTO-GENERATED — category: Web & APIs
export default [
  {
    type: "azurerm_api_connection",
    label: "Api Connection",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "managed_api_id", label: "Managed Api Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_app_service",
    label: "App Service",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "app_service_plan_id", label: "App Service Plan Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "https_only", label: "Https Only", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_app_service_active_slot",
    label: "App Service Active Slot",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "app_service_name", label: "App Service Name", type: "text", default: "" },
    { name: "app_service_slot_name", label: "App Service Slot Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_app_service_certificate",
    label: "App Service Certificate",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_app_service_certificate_binding",
    label: "App Service Certificate Binding",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "certificate_id", label: "Certificate Id", type: "text", default: "" },
    { name: "hostname_binding_id", label: "Hostname Binding Id", type: "text", default: "" },
    { name: "ssl_state", label: "Ssl State", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_app_service_certificate_order",
    label: "App Service Certificate Order",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_app_service_connection",
    label: "App Service Connection",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "app_service_id", label: "App Service Id", type: "text", default: "" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_app_service_custom_hostname_binding",
    label: "App Service Custom Hostname Binding",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "app_service_name", label: "App Service Name", type: "text", default: "" },
    { name: "hostname", label: "Hostname", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_app_service_managed_certificate",
    label: "App Service Managed Certificate",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "custom_hostname_binding_id", label: "Custom Hostname Binding Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_app_service_public_certificate",
    label: "App Service Public Certificate",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "app_service_name", label: "App Service Name", type: "text", default: "" },
    { name: "blob", label: "Blob", type: "text", default: "" },
    { name: "certificate_location", label: "Certificate Location", type: "text", default: "" },
    { name: "certificate_name", label: "Certificate Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_app_service_slot",
    label: "App Service Slot",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "app_service_name", label: "App Service Name", type: "text", default: "" },
    { name: "app_service_plan_id", label: "App Service Plan Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "https_only", label: "Https Only", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_app_service_slot_custom_hostname_binding",
    label: "App Service Slot Custom Hostname Binding",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "app_service_slot_id", label: "App Service Slot Id", type: "text", default: "" },
    { name: "hostname", label: "Hostname", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_bot_web_app",
    label: "Bot Web App",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "microsoft_app_id", label: "Microsoft App Id", type: "text", default: "" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "microsoft_app_type", label: "Microsoft App Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cdn_endpoint",
    label: "Cdn Endpoint",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "profile_name", label: "Profile Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cdn_endpoint_custom_domain",
    label: "Cdn Endpoint Custom Domain",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cdn_endpoint_id", label: "Cdn Endpoint Id", type: "text", default: "" },
    { name: "host_name", label: "Host Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_function_app",
    label: "Function App",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "app_service_plan_id", label: "App Service Plan Id", type: "text", default: "" },
    { name: "storage_account_access_key", label: "Storage Account Access Key", type: "text", default: "" },
    { name: "storage_account_name", label: "Storage Account Name", type: "text", default: "" },
    { name: "version", label: "Version", type: "text", default: "latest" },
    { name: "os_type", label: "Os Type", type: "text", default: "Linux" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "https_only", label: "Https Only", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_function_app_active_slot",
    label: "Function App Active Slot",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "slot_id", label: "Slot Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_function_app_connection",
    label: "Function App Connection",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "function_app_id", label: "Function App Id", type: "text", default: "" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_function_app_flex_consumption",
    label: "Function App Flex Consumption",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "runtime_name", label: "Runtime Name", type: "text", default: "" },
    { name: "runtime_version", label: "Runtime Version", type: "text", default: "" },
    { name: "service_plan_id", label: "Service Plan Id", type: "text", default: "" },
    { name: "storage_authentication_type", label: "Storage Authentication Type", type: "text", default: "" },
    { name: "storage_container_endpoint", label: "Storage Container Endpoint", type: "text", default: "" },
    { name: "storage_container_type", label: "Storage Container Type", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "https_only", label: "Https Only", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_function_app_function",
    label: "Function App Function",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "config_json", label: "Config Json", type: "text", default: "" },
    { name: "function_app_id", label: "Function App Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_function_app_slot",
    label: "Function App Slot",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "app_service_plan_id", label: "App Service Plan Id", type: "text", default: "" },
    { name: "function_app_name", label: "Function App Name", type: "text", default: "" },
    { name: "storage_account_access_key", label: "Storage Account Access Key", type: "text", default: "" },
    { name: "storage_account_name", label: "Storage Account Name", type: "text", default: "" },
    { name: "version", label: "Version", type: "text", default: "latest" },
    { name: "os_type", label: "Os Type", type: "text", default: "Linux" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "https_only", label: "Https Only", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_linux_function_app_slot",
    label: "Linux Function App Slot",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "function_app_id", label: "Function App Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "https_only", label: "Https Only", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_linux_web_app_slot",
    label: "Linux Web App Slot",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "app_service_id", label: "App Service Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "https_only", label: "Https Only", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_signalr_service_custom_certificate",
    label: "Signalr Service Custom Certificate",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "custom_certificate_id", label: "Custom Certificate Id", type: "text", default: "" },
    { name: "signalr_service_id", label: "Signalr Service Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_signalr_service_custom_domain",
    label: "Signalr Service Custom Domain",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "domain_name", label: "Domain Name", type: "text", default: "" },
    { name: "signalr_custom_certificate_id", label: "Signalr Custom Certificate Id", type: "text", default: "" },
    { name: "signalr_service_id", label: "Signalr Service Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_static_web_app_custom_domain",
    label: "Static Web App Custom Domain",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "domain_name", label: "Domain Name", type: "text", default: "" },
    { name: "static_web_app_id", label: "Static Web App Id", type: "text", default: "" },
    { name: "validation_type", label: "Validation Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_static_web_app_function_app_registration",
    label: "Static Web App Function App Registration",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "function_app_id", label: "Function App Id", type: "text", default: "" },
    { name: "static_web_app_id", label: "Static Web App Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_web_app_active_slot",
    label: "Web App Active Slot",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "slot_id", label: "Slot Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_windows_function_app_slot",
    label: "Windows Function App Slot",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "function_app_id", label: "Function App Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "https_only", label: "Https Only", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_windows_web_app_slot",
    label: "Windows Web App Slot",
    category: "Web & APIs",
    icon: "🌍",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "app_service_id", label: "App Service Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "https_only", label: "Https Only", type: "select", options: ["true", "false"], default: "false" }
  ]
  }
]
