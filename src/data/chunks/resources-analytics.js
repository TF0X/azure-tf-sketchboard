// AUTO-GENERATED — category: Analytics
export default [
  {
    type: "azurerm_analysis_services_server",
    label: "Analysis Services Server",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_azure_databricks",
    label: "Data Factory Linked Service Azure Databricks",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "adb_domain", label: "Adb Domain", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_data_lake_storage_gen2",
    label: "Data Factory Linked Service Data Lake Storage Gen2",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "url", label: "Url", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_kusto",
    label: "Data Factory Linked Service Kusto",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "kusto_database_name", label: "Kusto Database Name", type: "text", default: "" },
    { name: "kusto_endpoint", label: "Kusto Endpoint", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_synapse",
    label: "Data Factory Linked Service Synapse",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "connection_string", label: "Connection String", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_instance_data_lake_storage",
    label: "Data Protection Backup Instance Data Lake Storage",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "backup_policy_data_lake_storage_id", label: "Backup Policy Data Lake Storage Id", type: "text", default: "" },
    { name: "data_protection_backup_vault_id", label: "Data Protection Backup Vault Id", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" },
    { name: "storage_container_names", label: "Storage Container Names", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_policy_data_lake_storage",
    label: "Data Protection Backup Policy Data Lake Storage",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "backup_schedule", label: "Backup Schedule", type: "text", default: "" },
    { name: "data_protection_backup_vault_id", label: "Data Protection Backup Vault Id", type: "text", default: "" },
    { name: "default_retention_duration", label: "Default Retention Duration", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_share_dataset_data_lake_gen2",
    label: "Data Share Dataset Data Lake Gen2",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "file_system_name", label: "File System Name", type: "text", default: "" },
    { name: "share_id", label: "Share Id", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_share_dataset_kusto_cluster",
    label: "Data Share Dataset Kusto Cluster",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "kusto_cluster_id", label: "Kusto Cluster Id", type: "text", default: "" },
    { name: "share_id", label: "Share Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_share_dataset_kusto_database",
    label: "Data Share Dataset Kusto Database",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "kusto_database_id", label: "Kusto Database Id", type: "text", default: "" },
    { name: "share_id", label: "Share Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_databricks_access_connector",
    label: "Databricks Access Connector",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_databricks_virtual_network_peering",
    label: "Databricks Virtual Network Peering",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "remote_address_space_prefixes", label: "Remote Address Space Prefixes", type: "text", default: "" },
    { name: "remote_virtual_network_id", label: "Remote Virtual Network Id", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" },
    { name: "allow_forwarded_traffic", label: "Allow Forwarded Traffic", type: "select", options: ["true", "false"], default: "false" },
    { name: "allow_virtual_network_access", label: "Allow Virtual Network Access", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_databricks_workspace_customer_managed_key",
    label: "Databricks Workspace Customer Managed Key",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "key_vault_key_id", label: "Key Vault Key Id", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_databricks_workspace_root_dbfs_customer_managed_key",
    label: "Databricks Workspace Root Dbfs Customer Managed Key",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "key_vault_key_id", label: "Key Vault Key Id", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_hdinsight_hadoop_cluster",
    label: "Hdinsight Hadoop Cluster",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cluster_version", label: "Cluster Version", type: "text", default: "" },
    { name: "tier", label: "Tier", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_hdinsight_hbase_cluster",
    label: "Hdinsight Hbase Cluster",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cluster_version", label: "Cluster Version", type: "text", default: "" },
    { name: "tier", label: "Tier", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_hdinsight_interactive_query_cluster",
    label: "Hdinsight Interactive Query Cluster",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cluster_version", label: "Cluster Version", type: "text", default: "" },
    { name: "tier", label: "Tier", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_hdinsight_kafka_cluster",
    label: "Hdinsight Kafka Cluster",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cluster_version", label: "Cluster Version", type: "text", default: "" },
    { name: "tier", label: "Tier", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_hdinsight_spark_cluster",
    label: "Hdinsight Spark Cluster",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cluster_version", label: "Cluster Version", type: "text", default: "" },
    { name: "tier", label: "Tier", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_kusto_attached_database_configuration",
    label: "Kusto Attached Database Configuration",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cluster_name", label: "Cluster Name", type: "text", default: "" },
    { name: "database_name", label: "Database Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kusto_cluster_customer_managed_key",
    label: "Kusto Cluster Customer Managed Key",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "cluster_id", label: "Cluster Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kusto_cluster_managed_private_endpoint",
    label: "Kusto Cluster Managed Private Endpoint",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cluster_name", label: "Cluster Name", type: "text", default: "" },
    { name: "group_id", label: "Group Id", type: "text", default: "" },
    { name: "private_link_resource_id", label: "Private Link Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kusto_cluster_principal_assignment",
    label: "Kusto Cluster Principal Assignment",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cluster_name", label: "Cluster Name", type: "text", default: "" },
    { name: "principal_id", label: "Principal Id", type: "text", default: "" },
    { name: "principal_type", label: "Principal Type", type: "text", default: "" },
    { name: "role", label: "Role", type: "text", default: "" },
    { name: "tenant_id", label: "Tenant Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kusto_cosmosdb_data_connection",
    label: "Kusto Cosmosdb Data Connection",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cosmosdb_container_id", label: "Cosmosdb Container Id", type: "text", default: "" },
    { name: "kusto_database_id", label: "Kusto Database Id", type: "text", default: "" },
    { name: "managed_identity_id", label: "Managed Identity Id", type: "text", default: "" },
    { name: "table_name", label: "Table Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kusto_database",
    label: "Kusto Database",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cluster_name", label: "Cluster Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kusto_database_principal_assignment",
    label: "Kusto Database Principal Assignment",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cluster_name", label: "Cluster Name", type: "text", default: "" },
    { name: "database_name", label: "Database Name", type: "text", default: "" },
    { name: "principal_id", label: "Principal Id", type: "text", default: "" },
    { name: "principal_type", label: "Principal Type", type: "text", default: "" },
    { name: "role", label: "Role", type: "text", default: "" },
    { name: "tenant_id", label: "Tenant Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kusto_eventgrid_data_connection",
    label: "Kusto Eventgrid Data Connection",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cluster_name", label: "Cluster Name", type: "text", default: "" },
    { name: "database_name", label: "Database Name", type: "text", default: "" },
    { name: "eventhub_consumer_group_name", label: "Eventhub Consumer Group Name", type: "text", default: "" },
    { name: "eventhub_id", label: "Eventhub Id", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kusto_eventhub_data_connection",
    label: "Kusto Eventhub Data Connection",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cluster_name", label: "Cluster Name", type: "text", default: "" },
    { name: "consumer_group", label: "Consumer Group", type: "text", default: "" },
    { name: "database_name", label: "Database Name", type: "text", default: "" },
    { name: "eventhub_id", label: "Eventhub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kusto_iothub_data_connection",
    label: "Kusto Iothub Data Connection",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cluster_name", label: "Cluster Name", type: "text", default: "" },
    { name: "consumer_group", label: "Consumer Group", type: "text", default: "" },
    { name: "database_name", label: "Database Name", type: "text", default: "" },
    { name: "iothub_id", label: "Iothub Id", type: "text", default: "" },
    { name: "shared_access_policy_name", label: "Shared Access Policy Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kusto_script",
    label: "Kusto Script",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "database_id", label: "Database Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_purview_account",
    label: "Purview Account",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_storage_data_lake_gen2_path",
    label: "Storage Data Lake Gen2 Path",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "filesystem_name", label: "Filesystem Name", type: "text", default: "" },
    { name: "path", label: "Path", type: "text", default: "" },
    { name: "resource", label: "Resource", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_cluster",
    label: "Stream Analytics Cluster",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "streaming_capacity", label: "Streaming Capacity", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_stream_analytics_function_javascript_uda",
    label: "Stream Analytics Function Javascript Uda",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "script", label: "Script", type: "text", default: "" },
    { name: "stream_analytics_job_id", label: "Stream Analytics Job Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_function_javascript_udf",
    label: "Stream Analytics Function Javascript Udf",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "script", label: "Script", type: "text", default: "" },
    { name: "stream_analytics_job_name", label: "Stream Analytics Job Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_job_schedule",
    label: "Stream Analytics Job Schedule",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "start_mode", label: "Start Mode", type: "text", default: "" },
    { name: "stream_analytics_job_id", label: "Stream Analytics Job Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_job_storage_account",
    label: "Stream Analytics Job Storage Account",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "authentication_mode", label: "Authentication Mode", type: "text", default: "" },
    { name: "storage_account_name", label: "Storage Account Name", type: "text", default: "" },
    { name: "stream_analytics_job_id", label: "Stream Analytics Job Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_managed_private_endpoint",
    label: "Stream Analytics Managed Private Endpoint",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "stream_analytics_cluster_name", label: "Stream Analytics Cluster Name", type: "text", default: "" },
    { name: "subresource_name", label: "Subresource Name", type: "text", default: "" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_output_blob",
    label: "Stream Analytics Output Blob",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "date_format", label: "Date Format", type: "text", default: "" },
    { name: "path_pattern", label: "Path Pattern", type: "text", default: "" },
    { name: "storage_account_name", label: "Storage Account Name", type: "text", default: "" },
    { name: "storage_container_name", label: "Storage Container Name", type: "text", default: "" },
    { name: "stream_analytics_job_name", label: "Stream Analytics Job Name", type: "text", default: "" },
    { name: "time_format", label: "Time Format", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_output_cosmosdb",
    label: "Stream Analytics Output Cosmosdb",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "container_name", label: "Container Name", type: "text", default: "" },
    { name: "cosmosdb_account_key", label: "Cosmosdb Account Key", type: "text", default: "" },
    { name: "cosmosdb_sql_database_id", label: "Cosmosdb Sql Database Id", type: "text", default: "" },
    { name: "stream_analytics_job_id", label: "Stream Analytics Job Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_output_eventhub",
    label: "Stream Analytics Output Eventhub",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "eventhub_name", label: "Eventhub Name", type: "text", default: "" },
    { name: "servicebus_namespace", label: "Servicebus Namespace", type: "text", default: "" },
    { name: "stream_analytics_job_name", label: "Stream Analytics Job Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_output_function",
    label: "Stream Analytics Output Function",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_key", label: "Api Key", type: "text", default: "" },
    { name: "function_app", label: "Function App", type: "text", default: "" },
    { name: "function_name", label: "Function Name", type: "text", default: "" },
    { name: "stream_analytics_job_name", label: "Stream Analytics Job Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_output_mssql",
    label: "Stream Analytics Output Mssql",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "database", label: "Database", type: "text", default: "" },
    { name: "server", label: "Server", type: "text", default: "" },
    { name: "stream_analytics_job_name", label: "Stream Analytics Job Name", type: "text", default: "" },
    { name: "table", label: "Table", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_output_powerbi",
    label: "Stream Analytics Output Powerbi",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "dataset", label: "Dataset", type: "text", default: "" },
    { name: "group_id", label: "Group Id", type: "text", default: "" },
    { name: "group_name", label: "Group Name", type: "text", default: "" },
    { name: "stream_analytics_job_id", label: "Stream Analytics Job Id", type: "text", default: "" },
    { name: "table", label: "Table", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_output_servicebus_queue",
    label: "Stream Analytics Output Servicebus Queue",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "queue_name", label: "Queue Name", type: "text", default: "" },
    { name: "servicebus_namespace", label: "Servicebus Namespace", type: "text", default: "" },
    { name: "stream_analytics_job_name", label: "Stream Analytics Job Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_output_servicebus_topic",
    label: "Stream Analytics Output Servicebus Topic",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "servicebus_namespace", label: "Servicebus Namespace", type: "text", default: "" },
    { name: "stream_analytics_job_name", label: "Stream Analytics Job Name", type: "text", default: "" },
    { name: "topic_name", label: "Topic Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_output_synapse",
    label: "Stream Analytics Output Synapse",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "database", label: "Database", type: "text", default: "" },
    { name: "password", label: "Password", type: "text", default: "" },
    { name: "server", label: "Server", type: "text", default: "" },
    { name: "stream_analytics_job_name", label: "Stream Analytics Job Name", type: "text", default: "" },
    { name: "table", label: "Table", type: "text", default: "" },
    { name: "user", label: "User", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_output_table",
    label: "Stream Analytics Output Table",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "batch_size", label: "Batch Size", type: "number", default: "1" },
    { name: "partition_key", label: "Partition Key", type: "text", default: "" },
    { name: "row_key", label: "Row Key", type: "text", default: "" },
    { name: "storage_account_key", label: "Storage Account Key", type: "text", default: "" },
    { name: "storage_account_name", label: "Storage Account Name", type: "text", default: "" },
    { name: "stream_analytics_job_name", label: "Stream Analytics Job Name", type: "text", default: "" },
    { name: "table", label: "Table", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_reference_input_blob",
    label: "Stream Analytics Reference Input Blob",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "date_format", label: "Date Format", type: "text", default: "" },
    { name: "path_pattern", label: "Path Pattern", type: "text", default: "" },
    { name: "storage_account_name", label: "Storage Account Name", type: "text", default: "" },
    { name: "storage_container_name", label: "Storage Container Name", type: "text", default: "" },
    { name: "stream_analytics_job_name", label: "Stream Analytics Job Name", type: "text", default: "" },
    { name: "time_format", label: "Time Format", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_reference_input_mssql",
    label: "Stream Analytics Reference Input Mssql",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "database", label: "Database", type: "text", default: "" },
    { name: "full_snapshot_query", label: "Full Snapshot Query", type: "text", default: "" },
    { name: "password", label: "Password", type: "text", default: "" },
    { name: "refresh_type", label: "Refresh Type", type: "text", default: "" },
    { name: "server", label: "Server", type: "text", default: "" },
    { name: "stream_analytics_job_name", label: "Stream Analytics Job Name", type: "text", default: "" },
    { name: "username", label: "Username", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_stream_input_blob",
    label: "Stream Analytics Stream Input Blob",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "date_format", label: "Date Format", type: "text", default: "" },
    { name: "path_pattern", label: "Path Pattern", type: "text", default: "" },
    { name: "storage_account_key", label: "Storage Account Key", type: "text", default: "" },
    { name: "storage_account_name", label: "Storage Account Name", type: "text", default: "" },
    { name: "storage_container_name", label: "Storage Container Name", type: "text", default: "" },
    { name: "stream_analytics_job_name", label: "Stream Analytics Job Name", type: "text", default: "" },
    { name: "time_format", label: "Time Format", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_stream_input_eventhub",
    label: "Stream Analytics Stream Input Eventhub",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "eventhub_name", label: "Eventhub Name", type: "text", default: "" },
    { name: "servicebus_namespace", label: "Servicebus Namespace", type: "text", default: "" },
    { name: "stream_analytics_job_name", label: "Stream Analytics Job Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_stream_input_eventhub_v2",
    label: "Stream Analytics Stream Input Eventhub V2",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "eventhub_name", label: "Eventhub Name", type: "text", default: "" },
    { name: "servicebus_namespace", label: "Servicebus Namespace", type: "text", default: "" },
    { name: "stream_analytics_job_id", label: "Stream Analytics Job Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stream_analytics_stream_input_iothub",
    label: "Stream Analytics Stream Input Iothub",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "endpoint", label: "Endpoint", type: "text", default: "" },
    { name: "eventhub_consumer_group_name", label: "Eventhub Consumer Group Name", type: "text", default: "" },
    { name: "iothub_namespace", label: "Iothub Namespace", type: "text", default: "" },
    { name: "shared_access_policy_key", label: "Shared Access Policy Key", type: "text", default: "" },
    { name: "shared_access_policy_name", label: "Shared Access Policy Name", type: "text", default: "" },
    { name: "stream_analytics_job_name", label: "Stream Analytics Job Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_firewall_rule",
    label: "Synapse Firewall Rule",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "end_ip_address", label: "End Ip Address", type: "text", default: "" },
    { name: "start_ip_address", label: "Start Ip Address", type: "text", default: "" },
    { name: "synapse_workspace_id", label: "Synapse Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_integration_runtime_azure",
    label: "Synapse Integration Runtime Azure",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "synapse_workspace_id", label: "Synapse Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_integration_runtime_self_hosted",
    label: "Synapse Integration Runtime Self Hosted",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "synapse_workspace_id", label: "Synapse Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_linked_service",
    label: "Synapse Linked Service",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "synapse_workspace_id", label: "Synapse Workspace Id", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" },
    { name: "type_properties_json", label: "Type Properties Json", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_managed_private_endpoint",
    label: "Synapse Managed Private Endpoint",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "subresource_name", label: "Subresource Name", type: "text", default: "" },
    { name: "synapse_workspace_id", label: "Synapse Workspace Id", type: "text", default: "" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_private_link_hub",
    label: "Synapse Private Link Hub",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_synapse_role_assignment",
    label: "Synapse Role Assignment",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "principal_id", label: "Principal Id", type: "text", default: "" },
    { name: "role_name", label: "Role Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_spark_pool",
    label: "Synapse Spark Pool",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "node_size", label: "Node Size", type: "text", default: "" },
    { name: "node_size_family", label: "Node Size Family", type: "text", default: "" },
    { name: "spark_version", label: "Spark Version", type: "text", default: "" },
    { name: "synapse_workspace_id", label: "Synapse Workspace Id", type: "text", default: "" },
    { name: "node_count", label: "Node Count", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_synapse_sql_pool",
    label: "Synapse Sql Pool",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" },
    { name: "storage_account_type", label: "Storage Account Type", type: "text", default: "" },
    { name: "synapse_workspace_id", label: "Synapse Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_sql_pool_extended_auditing_policy",
    label: "Synapse Sql Pool Extended Auditing Policy",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "sql_pool_id", label: "Sql Pool Id", type: "text", default: "" },
    { name: "retention_in_days", label: "Retention In Days", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_synapse_sql_pool_security_alert_policy",
    label: "Synapse Sql Pool Security Alert Policy",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "policy_state", label: "Policy State", type: "text", default: "" },
    { name: "sql_pool_id", label: "Sql Pool Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_sql_pool_vulnerability_assessment",
    label: "Synapse Sql Pool Vulnerability Assessment",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "sql_pool_security_alert_policy_id", label: "Sql Pool Security Alert Policy Id", type: "text", default: "" },
    { name: "storage_container_path", label: "Storage Container Path", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_sql_pool_vulnerability_assessment_baseline",
    label: "Synapse Sql Pool Vulnerability Assessment Baseline",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "rule_name", label: "Rule Name", type: "text", default: "" },
    { name: "sql_pool_vulnerability_assessment_id", label: "Sql Pool Vulnerability Assessment Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_sql_pool_workload_classifier",
    label: "Synapse Sql Pool Workload Classifier",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "member_name", label: "Member Name", type: "text", default: "" },
    { name: "workload_group_id", label: "Workload Group Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_sql_pool_workload_group",
    label: "Synapse Sql Pool Workload Group",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "max_resource_percent", label: "Max Resource Percent", type: "number", default: "1" },
    { name: "min_resource_percent", label: "Min Resource Percent", type: "number", default: "1" },
    { name: "sql_pool_id", label: "Sql Pool Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_workspace_aad_admin",
    label: "Synapse Workspace Aad Admin",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "login", label: "Login", type: "text", default: "" },
    { name: "object_id", label: "Object Id", type: "text", default: "" },
    { name: "synapse_workspace_id", label: "Synapse Workspace Id", type: "text", default: "" },
    { name: "tenant_id", label: "Tenant Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_workspace_extended_auditing_policy",
    label: "Synapse Workspace Extended Auditing Policy",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "synapse_workspace_id", label: "Synapse Workspace Id", type: "text", default: "" },
    { name: "retention_in_days", label: "Retention In Days", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_synapse_workspace_key",
    label: "Synapse Workspace Key",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "active", label: "Active", type: "select", options: ["true", "false"], default: "false" },
    { name: "customer_managed_key_name", label: "Customer Managed Key Name", type: "text", default: "" },
    { name: "synapse_workspace_id", label: "Synapse Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_workspace_security_alert_policy",
    label: "Synapse Workspace Security Alert Policy",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "policy_state", label: "Policy State", type: "text", default: "" },
    { name: "synapse_workspace_id", label: "Synapse Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_workspace_sql_aad_admin",
    label: "Synapse Workspace Sql Aad Admin",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "login", label: "Login", type: "text", default: "" },
    { name: "object_id", label: "Object Id", type: "text", default: "" },
    { name: "synapse_workspace_id", label: "Synapse Workspace Id", type: "text", default: "" },
    { name: "tenant_id", label: "Tenant Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_synapse_workspace_vulnerability_assessment",
    label: "Synapse Workspace Vulnerability Assessment",
    category: "Analytics",
    icon: "📊",
    color: "#7B2FBE",
    properties: [
    { name: "storage_container_path", label: "Storage Container Path", type: "text", default: "" },
    { name: "workspace_security_alert_policy_id", label: "Workspace Security Alert Policy Id", type: "text", default: "" }
  ]
  }
]
