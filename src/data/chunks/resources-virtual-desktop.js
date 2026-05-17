// AUTO-GENERATED — category: Virtual Desktop
export default [
  {
    type: "azurerm_virtual_desktop_application",
    label: "Virtual Desktop Application",
    category: "Virtual Desktop",
    icon: "🖥️",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "application_group_id", label: "Application Group Id", type: "text", default: "" },
    { name: "command_line_argument_policy", label: "Command Line Argument Policy", type: "text", default: "" },
    { name: "path", label: "Path", type: "text", default: "" },
    { name: "friendly_name", label: "Friendly Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_desktop_application_group",
    label: "Virtual Desktop Application Group",
    category: "Virtual Desktop",
    icon: "🖥️",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "host_pool_id", label: "Host Pool Id", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" },
    { name: "friendly_name", label: "Friendly Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_desktop_host_pool",
    label: "Virtual Desktop Host Pool",
    category: "Virtual Desktop",
    icon: "🖥️",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "load_balancer_type", label: "Load Balancer Type", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" },
    { name: "friendly_name", label: "Friendly Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_desktop_host_pool_registration_info",
    label: "Virtual Desktop Host Pool Registration Info",
    category: "Virtual Desktop",
    icon: "🖥️",
    color: "#0078D4",
    properties: [
    { name: "expiration_date", label: "Expiration Date", type: "text", default: "" },
    { name: "hostpool_id", label: "Hostpool Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_desktop_scaling_plan",
    label: "Virtual Desktop Scaling Plan",
    category: "Virtual Desktop",
    icon: "🖥️",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "time_zone", label: "Time Zone", type: "text", default: "" },
    { name: "friendly_name", label: "Friendly Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_desktop_scaling_plan_host_pool_association",
    label: "Virtual Desktop Scaling Plan Host Pool Association",
    category: "Virtual Desktop",
    icon: "🖥️",
    color: "#0078D4",
    properties: [
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "host_pool_id", label: "Host Pool Id", type: "text", default: "" },
    { name: "scaling_plan_id", label: "Scaling Plan Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_desktop_workspace",
    label: "Virtual Desktop Workspace",
    category: "Virtual Desktop",
    icon: "🖥️",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "friendly_name", label: "Friendly Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_desktop_workspace_application_group_association",
    label: "Virtual Desktop Workspace Application Group Association",
    category: "Virtual Desktop",
    icon: "🖥️",
    color: "#0078D4",
    properties: [
    { name: "application_group_id", label: "Application Group Id", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  }
]
