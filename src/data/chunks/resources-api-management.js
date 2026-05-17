// AUTO-GENERATED — category: API Management
export default [
  {
    type: "azurerm_api_management_api",
    label: "Api Management Api",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "revision", label: "Revision", type: "text", default: "" },
    { name: "version", label: "Version", type: "text", default: "latest" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_api_diagnostic",
    label: "Api Management Api Diagnostic",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_logger_id", label: "Api Management Logger Id", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "api_name", label: "Api Name", type: "text", default: "" },
    { name: "identifier", label: "Identifier", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_api_operation",
    label: "Api Management Api Operation",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "api_name", label: "Api Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "method", label: "Method", type: "text", default: "" },
    { name: "operation_id", label: "Operation Id", type: "text", default: "" },
    { name: "url_template", label: "Url Template", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_api_operation_policy",
    label: "Api Management Api Operation Policy",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "api_name", label: "Api Name", type: "text", default: "" },
    { name: "operation_id", label: "Operation Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_api_operation_tag",
    label: "Api Management Api Operation Tag",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_operation_id", label: "Api Operation Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_api_policy",
    label: "Api Management Api Policy",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "api_name", label: "Api Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_api_release",
    label: "Api Management Api Release",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_id", label: "Api Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_api_schema",
    label: "Api Management Api Schema",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "api_name", label: "Api Name", type: "text", default: "" },
    { name: "content_type", label: "Content Type", type: "text", default: "" },
    { name: "schema_id", label: "Schema Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_api_tag",
    label: "Api Management Api Tag",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_id", label: "Api Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_api_tag_description",
    label: "Api Management Api Tag Description",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_tag_id", label: "Api Tag Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_api_version_set",
    label: "Api Management Api Version Set",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "versioning_scheme", label: "Versioning Scheme", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_authorization_server",
    label: "Api Management Authorization Server",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "authorization_endpoint", label: "Authorization Endpoint", type: "text", default: "" },
    { name: "authorization_methods", label: "Authorization Methods", type: "text", default: "" },
    { name: "client_id", label: "Client Id", type: "text", default: "" },
    { name: "client_registration_endpoint", label: "Client Registration Endpoint", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "grant_types", label: "Grant Types", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_backend",
    label: "Api Management Backend",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "protocol", label: "Protocol", type: "text", default: "Tcp" },
    { name: "url", label: "Url", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_certificate",
    label: "Api Management Certificate",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_custom_domain",
    label: "Api Management Custom Domain",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_id", label: "Api Management Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_diagnostic",
    label: "Api Management Diagnostic",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_logger_id", label: "Api Management Logger Id", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "identifier", label: "Identifier", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_email_template",
    label: "Api Management Email Template",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "body", label: "Body", type: "text", default: "" },
    { name: "subject", label: "Subject", type: "text", default: "" },
    { name: "template_name", label: "Template Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_gateway",
    label: "Api Management Gateway",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_id", label: "Api Management Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_gateway_api",
    label: "Api Management Gateway Api",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_id", label: "Api Id", type: "text", default: "" },
    { name: "gateway_id", label: "Gateway Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_gateway_certificate_authority",
    label: "Api Management Gateway Certificate Authority",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_id", label: "Api Management Id", type: "text", default: "" },
    { name: "certificate_name", label: "Certificate Name", type: "text", default: "" },
    { name: "gateway_name", label: "Gateway Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_gateway_host_name_configuration",
    label: "Api Management Gateway Host Name Configuration",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_id", label: "Api Management Id", type: "text", default: "" },
    { name: "certificate_id", label: "Certificate Id", type: "text", default: "" },
    { name: "gateway_name", label: "Gateway Name", type: "text", default: "" },
    { name: "host_name", label: "Host Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_global_schema",
    label: "Api Management Global Schema",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "schema_id", label: "Schema Id", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" },
    { name: "value", label: "Value", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_group",
    label: "Api Management Group",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_group_user",
    label: "Api Management Group User",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "group_name", label: "Group Name", type: "text", default: "" },
    { name: "user_id", label: "User Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_identity_provider_aad",
    label: "Api Management Identity Provider Aad",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "allowed_tenants", label: "Allowed Tenants", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "client_id", label: "Client Id", type: "text", default: "" },
    { name: "client_secret", label: "Client Secret", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_identity_provider_aadb2c",
    label: "Api Management Identity Provider Aadb2c",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "allowed_tenant", label: "Allowed Tenant", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "authority", label: "Authority", type: "text", default: "" },
    { name: "client_id", label: "Client Id", type: "text", default: "" },
    { name: "client_secret", label: "Client Secret", type: "text", default: "" },
    { name: "signin_policy", label: "Signin Policy", type: "text", default: "" },
    { name: "signin_tenant", label: "Signin Tenant", type: "text", default: "" },
    { name: "signup_policy", label: "Signup Policy", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_identity_provider_facebook",
    label: "Api Management Identity Provider Facebook",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "app_id", label: "App Id", type: "text", default: "" },
    { name: "app_secret", label: "App Secret", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_identity_provider_google",
    label: "Api Management Identity Provider Google",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "client_id", label: "Client Id", type: "text", default: "" },
    { name: "client_secret", label: "Client Secret", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_identity_provider_microsoft",
    label: "Api Management Identity Provider Microsoft",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "client_id", label: "Client Id", type: "text", default: "" },
    { name: "client_secret", label: "Client Secret", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_identity_provider_twitter",
    label: "Api Management Identity Provider Twitter",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_key", label: "Api Key", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "api_secret_key", label: "Api Secret Key", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_logger",
    label: "Api Management Logger",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_named_value",
    label: "Api Management Named Value",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_notification_recipient_email",
    label: "Api Management Notification Recipient Email",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_id", label: "Api Management Id", type: "text", default: "" },
    { name: "email", label: "Email", type: "text", default: "" },
    { name: "notification_type", label: "Notification Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_notification_recipient_user",
    label: "Api Management Notification Recipient User",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_id", label: "Api Management Id", type: "text", default: "" },
    { name: "notification_type", label: "Notification Type", type: "text", default: "" },
    { name: "user_id", label: "User Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_openid_connect_provider",
    label: "Api Management Openid Connect Provider",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "client_id", label: "Client Id", type: "text", default: "" },
    { name: "client_secret", label: "Client Secret", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "metadata_endpoint", label: "Metadata Endpoint", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_policy",
    label: "Api Management Policy",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_id", label: "Api Management Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_policy_fragment",
    label: "Api Management Policy Fragment",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_id", label: "Api Management Id", type: "text", default: "" },
    { name: "value", label: "Value", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_product",
    label: "Api Management Product",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "product_id", label: "Product Id", type: "text", default: "" },
    { name: "published", label: "Published", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_api_management_product_api",
    label: "Api Management Product Api",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "api_name", label: "Api Name", type: "text", default: "" },
    { name: "product_id", label: "Product Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_product_group",
    label: "Api Management Product Group",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "group_name", label: "Group Name", type: "text", default: "" },
    { name: "product_id", label: "Product Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_product_policy",
    label: "Api Management Product Policy",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "product_id", label: "Product Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_product_tag",
    label: "Api Management Product Tag",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "api_management_product_id", label: "Api Management Product Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_redis_cache",
    label: "Api Management Redis Cache",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_id", label: "Api Management Id", type: "text", default: "" },
    { name: "connection_string", label: "Connection String", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_standalone_gateway",
    label: "Api Management Standalone Gateway",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_api_management_subscription",
    label: "Api Management Subscription",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_tag",
    label: "Api Management Tag",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_id", label: "Api Management Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_user",
    label: "Api Management User",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_name", label: "Api Management Name", type: "text", default: "" },
    { name: "email", label: "Email", type: "text", default: "" },
    { name: "first_name", label: "First Name", type: "text", default: "" },
    { name: "last_name", label: "Last Name", type: "text", default: "" },
    { name: "user_id", label: "User Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_workspace",
    label: "Api Management Workspace",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_id", label: "Api Management Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_workspace_api_version_set",
    label: "Api Management Workspace Api Version Set",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_workspace_id", label: "Api Management Workspace Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "versioning_scheme", label: "Versioning Scheme", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_workspace_certificate",
    label: "Api Management Workspace Certificate",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_workspace_id", label: "Api Management Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_workspace_named_value",
    label: "Api Management Workspace Named Value",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_workspace_id", label: "Api Management Workspace Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_workspace_policy",
    label: "Api Management Workspace Policy",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "api_management_workspace_id", label: "Api Management Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_api_management_workspace_policy_fragment",
    label: "Api Management Workspace Policy Fragment",
    category: "API Management",
    icon: "🔌",
    color: "#16A085",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_management_workspace_id", label: "Api Management Workspace Id", type: "text", default: "" },
    { name: "xml_content", label: "Xml Content", type: "text", default: "" }
  ]
  }
]
