// AUTO-GENERATED — category: Integration
export default [
  {
    type: "azurerm_data_factory_credential_service_principal",
    label: "Data Factory Credential Service Principal",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "service_principal_id", label: "Service Principal Id", type: "text", default: "" },
    { name: "tenant_id", label: "Tenant Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_credential_user_managed_identity",
    label: "Data Factory Credential User Managed Identity",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "identity_id", label: "Identity Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_custom_dataset",
    label: "Data Factory Custom Dataset",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" },
    { name: "type_properties_json", label: "Type Properties Json", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_customer_managed_key",
    label: "Data Factory Customer Managed Key",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "customer_managed_key_id", label: "Customer Managed Key Id", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_data_flow",
    label: "Data Factory Data Flow",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_dataset_azure_blob",
    label: "Data Factory Dataset Azure Blob",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "linked_service_name", label: "Linked Service Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_dataset_binary",
    label: "Data Factory Dataset Binary",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "linked_service_name", label: "Linked Service Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_dataset_delimited_text",
    label: "Data Factory Dataset Delimited Text",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "linked_service_name", label: "Linked Service Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_dataset_http",
    label: "Data Factory Dataset Http",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "linked_service_name", label: "Linked Service Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_dataset_json",
    label: "Data Factory Dataset Json",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "linked_service_name", label: "Linked Service Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_dataset_parquet",
    label: "Data Factory Dataset Parquet",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "linked_service_name", label: "Linked Service Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_dataset_snowflake",
    label: "Data Factory Dataset Snowflake",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "linked_service_name", label: "Linked Service Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_flowlet_data_flow",
    label: "Data Factory Flowlet Data Flow",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_integration_runtime_azure",
    label: "Data Factory Integration Runtime Azure",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_integration_runtime_azure_ssis",
    label: "Data Factory Integration Runtime Azure Ssis",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "node_size", label: "Node Size", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_integration_runtime_self_hosted",
    label: "Data Factory Integration Runtime Self Hosted",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_custom_service",
    label: "Data Factory Linked Custom Service",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" },
    { name: "type_properties_json", label: "Type Properties Json", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_azure_blob_storage",
    label: "Data Factory Linked Service Azure Blob Storage",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_azure_file_storage",
    label: "Data Factory Linked Service Azure File Storage",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "connection_string", label: "Connection String", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_azure_function",
    label: "Data Factory Linked Service Azure Function",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "url", label: "Url", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_azure_search",
    label: "Data Factory Linked Service Azure Search",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "search_service_key", label: "Search Service Key", type: "text", default: "" },
    { name: "url", label: "Url", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_key_vault",
    label: "Data Factory Linked Service Key Vault",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "key_vault_id", label: "Key Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_odata",
    label: "Data Factory Linked Service Odata",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "url", label: "Url", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_odbc",
    label: "Data Factory Linked Service Odbc",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "connection_string", label: "Connection String", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_sftp",
    label: "Data Factory Linked Service Sftp",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "authentication_type", label: "Authentication Type", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "host", label: "Host", type: "text", default: "" },
    { name: "port", label: "Port", type: "number", default: "1" },
    { name: "username", label: "Username", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_snowflake",
    label: "Data Factory Linked Service Snowflake",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "connection_string", label: "Connection String", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_web",
    label: "Data Factory Linked Service Web",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "authentication_type", label: "Authentication Type", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "url", label: "Url", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_managed_private_endpoint",
    label: "Data Factory Managed Private Endpoint",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_pipeline",
    label: "Data Factory Pipeline",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_trigger_blob_event",
    label: "Data Factory Trigger Blob Event",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "events", label: "Events", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_trigger_custom_event",
    label: "Data Factory Trigger Custom Event",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "eventgrid_topic_id", label: "Eventgrid Topic Id", type: "text", default: "" },
    { name: "events", label: "Events", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_trigger_schedule",
    label: "Data Factory Trigger Schedule",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "frequency", label: "Frequency", type: "text", default: "PT5M" }
  ]
  },
  {
    type: "azurerm_data_factory_trigger_tumbling_window",
    label: "Data Factory Trigger Tumbling Window",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "frequency", label: "Frequency", type: "text", default: "PT5M" },
    { name: "interval", label: "Interval", type: "number", default: "1" },
    { name: "start_time", label: "Start Time", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_digital_twins_endpoint_eventgrid",
    label: "Digital Twins Endpoint Eventgrid",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "digital_twins_id", label: "Digital Twins Id", type: "text", default: "" },
    { name: "eventgrid_topic_endpoint", label: "Eventgrid Topic Endpoint", type: "text", default: "" },
    { name: "eventgrid_topic_primary_access_key", label: "Eventgrid Topic Primary Access Key", type: "text", default: "" },
    { name: "eventgrid_topic_secondary_access_key", label: "Eventgrid Topic Secondary Access Key", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_digital_twins_endpoint_eventhub",
    label: "Digital Twins Endpoint Eventhub",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "digital_twins_id", label: "Digital Twins Id", type: "text", default: "" },
    { name: "eventhub_primary_connection_string", label: "Eventhub Primary Connection String", type: "text", default: "" },
    { name: "eventhub_secondary_connection_string", label: "Eventhub Secondary Connection String", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_digital_twins_endpoint_servicebus",
    label: "Digital Twins Endpoint Servicebus",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "digital_twins_id", label: "Digital Twins Id", type: "text", default: "" },
    { name: "servicebus_primary_connection_string", label: "Servicebus Primary Connection String", type: "text", default: "" },
    { name: "servicebus_secondary_connection_string", label: "Servicebus Secondary Connection String", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_digital_twins_instance",
    label: "Digital Twins Instance",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_eventgrid_domain",
    label: "Eventgrid Domain",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "input_schema", label: "Input Schema", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_eventgrid_domain_topic",
    label: "Eventgrid Domain Topic",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "domain_name", label: "Domain Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_eventgrid_namespace",
    label: "Eventgrid Namespace",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" },
    { name: "capacity", label: "Capacity", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_eventgrid_namespace_topic",
    label: "Eventgrid Namespace Topic",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "eventgrid_namespace_id", label: "Eventgrid Namespace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_eventgrid_partner_configuration",
    label: "Eventgrid Partner Configuration",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: []
  },
  {
    type: "azurerm_eventgrid_partner_namespace",
    label: "Eventgrid Partner Namespace",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "partner_registration_id", label: "Partner Registration Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_eventgrid_partner_registration",
    label: "Eventgrid Partner Registration",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_eventhub",
    label: "Eventhub",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "partition_count", label: "Partition Count", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_eventhub_authorization_rule",
    label: "Eventhub Authorization Rule",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "eventhub_name", label: "Eventhub Name", type: "text", default: "" },
    { name: "namespace_name", label: "Namespace Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_eventhub_cluster",
    label: "Eventhub Cluster",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_eventhub_consumer_group",
    label: "Eventhub Consumer Group",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "eventhub_name", label: "Eventhub Name", type: "text", default: "" },
    { name: "namespace_name", label: "Namespace Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_eventhub_namespace_authorization_rule",
    label: "Eventhub Namespace Authorization Rule",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "namespace_name", label: "Namespace Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_eventhub_namespace_customer_managed_key",
    label: "Eventhub Namespace Customer Managed Key",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "eventhub_namespace_id", label: "Eventhub Namespace Id", type: "text", default: "" },
    { name: "key_vault_key_ids", label: "Key Vault Key Ids", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_eventhub_namespace_disaster_recovery_config",
    label: "Eventhub Namespace Disaster Recovery Config",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "namespace_name", label: "Namespace Name", type: "text", default: "" },
    { name: "partner_namespace_id", label: "Partner Namespace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_eventhub_namespace_schema_group",
    label: "Eventhub Namespace Schema Group",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "namespace_id", label: "Namespace Id", type: "text", default: "" },
    { name: "schema_compatibility", label: "Schema Compatibility", type: "text", default: "" },
    { name: "schema_type", label: "Schema Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iot_security_device_group",
    label: "Iot Security Device Group",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "iothub_id", label: "Iothub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iot_security_solution",
    label: "Iot Security Solution",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "iothub_ids", label: "Iothub Ids", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_iothub_certificate",
    label: "Iothub Certificate",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "certificate_content", label: "Certificate Content", type: "text", default: "" },
    { name: "iothub_name", label: "Iothub Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iothub_consumer_group",
    label: "Iothub Consumer Group",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "eventhub_endpoint_name", label: "Eventhub Endpoint Name", type: "text", default: "" },
    { name: "iothub_name", label: "Iothub Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iothub_device_update_account",
    label: "Iothub Device Update Account",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_iothub_device_update_instance",
    label: "Iothub Device Update Instance",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "device_update_account_id", label: "Device Update Account Id", type: "text", default: "" },
    { name: "iothub_id", label: "Iothub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iothub_dps",
    label: "Iothub Dps",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_iothub_dps_certificate",
    label: "Iothub Dps Certificate",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "certificate_content", label: "Certificate Content", type: "text", default: "" },
    { name: "iot_dps_name", label: "Iot Dps Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iothub_dps_shared_access_policy",
    label: "Iothub Dps Shared Access Policy",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "iothub_dps_name", label: "Iothub Dps Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iothub_endpoint_eventhub",
    label: "Iothub Endpoint Eventhub",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "iothub_id", label: "Iothub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iothub_endpoint_servicebus_queue",
    label: "Iothub Endpoint Servicebus Queue",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "iothub_id", label: "Iothub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iothub_endpoint_servicebus_topic",
    label: "Iothub Endpoint Servicebus Topic",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "iothub_id", label: "Iothub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iothub_endpoint_storage_container",
    label: "Iothub Endpoint Storage Container",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "container_name", label: "Container Name", type: "text", default: "" },
    { name: "iothub_id", label: "Iothub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iothub_enrichment",
    label: "Iothub Enrichment",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "endpoint_names", label: "Endpoint Names", type: "text", default: "" },
    { name: "iothub_name", label: "Iothub Name", type: "text", default: "" },
    { name: "key", label: "Key", type: "text", default: "" },
    { name: "value", label: "Value", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iothub_fallback_route",
    label: "Iothub Fallback Route",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "endpoint_names", label: "Endpoint Names", type: "text", default: "" },
    { name: "iothub_name", label: "Iothub Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iothub_file_upload",
    label: "Iothub File Upload",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "connection_string", label: "Connection String", type: "text", default: "" },
    { name: "container_name", label: "Container Name", type: "text", default: "" },
    { name: "iothub_id", label: "Iothub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iothub_route",
    label: "Iothub Route",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "endpoint_names", label: "Endpoint Names", type: "text", default: "" },
    { name: "iothub_name", label: "Iothub Name", type: "text", default: "" },
    { name: "source", label: "Source", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iothub_shared_access_policy",
    label: "Iothub Shared Access Policy",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "iothub_name", label: "Iothub Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_logic_app_action_custom",
    label: "Logic App Action Custom",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "body", label: "Body", type: "text", default: "" },
    { name: "logic_app_id", label: "Logic App Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_logic_app_action_http",
    label: "Logic App Action Http",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "logic_app_id", label: "Logic App Id", type: "text", default: "" },
    { name: "method", label: "Method", type: "text", default: "" },
    { name: "uri", label: "Uri", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_logic_app_integration_account",
    label: "Logic App Integration Account",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_logic_app_integration_account_agreement",
    label: "Logic App Integration Account Agreement",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "agreement_type", label: "Agreement Type", type: "text", default: "" },
    { name: "content", label: "Content", type: "text", default: "" },
    { name: "guest_partner_name", label: "Guest Partner Name", type: "text", default: "" },
    { name: "host_partner_name", label: "Host Partner Name", type: "text", default: "" },
    { name: "integration_account_name", label: "Integration Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_logic_app_integration_account_assembly",
    label: "Logic App Integration Account Assembly",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "assembly_name", label: "Assembly Name", type: "text", default: "" },
    { name: "integration_account_name", label: "Integration Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_logic_app_integration_account_certificate",
    label: "Logic App Integration Account Certificate",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "integration_account_name", label: "Integration Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_logic_app_integration_account_map",
    label: "Logic App Integration Account Map",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "content", label: "Content", type: "text", default: "" },
    { name: "integration_account_name", label: "Integration Account Name", type: "text", default: "" },
    { name: "map_type", label: "Map Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_logic_app_integration_account_partner",
    label: "Logic App Integration Account Partner",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "integration_account_name", label: "Integration Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_logic_app_integration_account_schema",
    label: "Logic App Integration Account Schema",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "content", label: "Content", type: "text", default: "" },
    { name: "integration_account_name", label: "Integration Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_logic_app_integration_account_session",
    label: "Logic App Integration Account Session",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "content", label: "Content", type: "text", default: "" },
    { name: "integration_account_name", label: "Integration Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_logic_app_standard",
    label: "Logic App Standard",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "app_service_plan_id", label: "App Service Plan Id", type: "text", default: "" },
    { name: "storage_account_access_key", label: "Storage Account Access Key", type: "text", default: "" },
    { name: "storage_account_name", label: "Storage Account Name", type: "text", default: "" },
    { name: "version", label: "Version", type: "text", default: "latest" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "https_only", label: "Https Only", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_logic_app_trigger_custom",
    label: "Logic App Trigger Custom",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "body", label: "Body", type: "text", default: "" },
    { name: "logic_app_id", label: "Logic App Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_logic_app_trigger_http_request",
    label: "Logic App Trigger Http Request",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "logic_app_id", label: "Logic App Id", type: "text", default: "" },
    { name: "schema", label: "Schema", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_logic_app_trigger_recurrence",
    label: "Logic App Trigger Recurrence",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "frequency", label: "Frequency", type: "text", default: "PT5M" },
    { name: "interval", label: "Interval", type: "number", default: "1" },
    { name: "logic_app_id", label: "Logic App Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_maps_account",
    label: "Maps Account",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_maps_creator",
    label: "Maps Creator",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "maps_account_id", label: "Maps Account Id", type: "text", default: "" },
    { name: "storage_units", label: "Storage Units", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_servicebus_namespace_authorization_rule",
    label: "Servicebus Namespace Authorization Rule",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "namespace_id", label: "Namespace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_servicebus_namespace_customer_managed_key",
    label: "Servicebus Namespace Customer Managed Key",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "key_vault_key_id", label: "Key Vault Key Id", type: "text", default: "" },
    { name: "namespace_id", label: "Namespace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_servicebus_namespace_disaster_recovery_config",
    label: "Servicebus Namespace Disaster Recovery Config",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "partner_namespace_id", label: "Partner Namespace Id", type: "text", default: "" },
    { name: "primary_namespace_id", label: "Primary Namespace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_servicebus_queue",
    label: "Servicebus Queue",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "namespace_id", label: "Namespace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_servicebus_queue_authorization_rule",
    label: "Servicebus Queue Authorization Rule",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "queue_id", label: "Queue Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_servicebus_topic",
    label: "Servicebus Topic",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "namespace_id", label: "Namespace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_servicebus_topic_authorization_rule",
    label: "Servicebus Topic Authorization Rule",
    category: "Integration",
    icon: "🔗",
    color: "#E74C3C",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "topic_id", label: "Topic Id", type: "text", default: "" }
  ]
  }
]
