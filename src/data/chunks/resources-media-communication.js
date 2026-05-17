// AUTO-GENERATED — category: Media & Communication
export default [
  {
    type: "azurerm_communication_service",
    label: "Communication Service",
    category: "Media & Communication",
    icon: "🎬",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_communication_service_email_domain_association",
    label: "Communication Service Email Domain Association",
    category: "Media & Communication",
    icon: "🎬",
    color: "#E74C3C",
    properties: [
    { name: "communication_service_id", label: "Communication Service Id", type: "text", default: "" },
    { name: "email_service_domain_id", label: "Email Service Domain Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_email_communication_service",
    label: "Email Communication Service",
    category: "Media & Communication",
    icon: "🎬",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_location", label: "Data Location", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_email_communication_service_domain",
    label: "Email Communication Service Domain",
    category: "Media & Communication",
    icon: "🎬",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "domain_management", label: "Domain Management", type: "text", default: "" },
    { name: "email_service_id", label: "Email Service Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_email_communication_service_domain_sender_username",
    label: "Email Communication Service Domain Sender Username",
    category: "Media & Communication",
    icon: "🎬",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "email_service_domain_id", label: "Email Service Domain Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  }
]
