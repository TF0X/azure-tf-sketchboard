// AUTO-GENERATED — category: Databases
export default [
  {
    type: "azurerm_cosmosdb_cassandra_cluster",
    label: "Cosmosdb Cassandra Cluster",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "default_admin_password", label: "Default Admin Password", type: "text", default: "" },
    { name: "delegated_management_subnet_id", label: "Delegated Management Subnet Id", type: "text", default: "" },
    { name: "version", label: "Version", type: "text", default: "latest" }
  ]
  },
  {
    type: "azurerm_cosmosdb_cassandra_datacenter",
    label: "Cosmosdb Cassandra Datacenter",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "cassandra_cluster_id", label: "Cassandra Cluster Id", type: "text", default: "" },
    { name: "delegated_management_subnet_id", label: "Delegated Management Subnet Id", type: "text", default: "" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" },
    { name: "node_count", label: "Node Count", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_cosmosdb_cassandra_keyspace",
    label: "Cosmosdb Cassandra Keyspace",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "account_name", label: "Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_cassandra_table",
    label: "Cosmosdb Cassandra Table",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cassandra_keyspace_id", label: "Cassandra Keyspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_gremlin_database",
    label: "Cosmosdb Gremlin Database",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "account_name", label: "Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_gremlin_graph",
    label: "Cosmosdb Gremlin Graph",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "database_name", label: "Database Name", type: "text", default: "" },
    { name: "partition_key_path", label: "Partition Key Path", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_mongo_collection",
    label: "Cosmosdb Mongo Collection",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "database_name", label: "Database Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_mongo_database",
    label: "Cosmosdb Mongo Database",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "account_name", label: "Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_mongo_role_definition",
    label: "Cosmosdb Mongo Role Definition",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "cosmos_mongo_database_id", label: "Cosmos Mongo Database Id", type: "text", default: "" },
    { name: "role_name", label: "Role Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_mongo_user_definition",
    label: "Cosmosdb Mongo User Definition",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "cosmos_mongo_database_id", label: "Cosmos Mongo Database Id", type: "text", default: "" },
    { name: "password", label: "Password", type: "text", default: "" },
    { name: "username", label: "Username", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_postgresql_cluster",
    label: "Cosmosdb Postgresql Cluster",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "node_count", label: "Node Count", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_cosmosdb_postgresql_coordinator_configuration",
    label: "Cosmosdb Postgresql Coordinator Configuration",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cluster_id", label: "Cluster Id", type: "text", default: "" },
    { name: "value", label: "Value", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_postgresql_firewall_rule",
    label: "Cosmosdb Postgresql Firewall Rule",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cluster_id", label: "Cluster Id", type: "text", default: "" },
    { name: "end_ip_address", label: "End Ip Address", type: "text", default: "" },
    { name: "start_ip_address", label: "Start Ip Address", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_postgresql_node_configuration",
    label: "Cosmosdb Postgresql Node Configuration",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cluster_id", label: "Cluster Id", type: "text", default: "" },
    { name: "value", label: "Value", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_postgresql_role",
    label: "Cosmosdb Postgresql Role",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cluster_id", label: "Cluster Id", type: "text", default: "" },
    { name: "password", label: "Password", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_sql_database",
    label: "Cosmosdb Sql Database",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "account_name", label: "Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_sql_dedicated_gateway",
    label: "Cosmosdb Sql Dedicated Gateway",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "cosmosdb_account_id", label: "Cosmosdb Account Id", type: "text", default: "" },
    { name: "instance_count", label: "Instance Count", type: "number", default: "1" },
    { name: "instance_size", label: "Instance Size", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_sql_function",
    label: "Cosmosdb Sql Function",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "body", label: "Body", type: "text", default: "" },
    { name: "container_id", label: "Container Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_sql_role_assignment",
    label: "Cosmosdb Sql Role Assignment",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "principal_id", label: "Principal Id", type: "text", default: "" },
    { name: "role_definition_id", label: "Role Definition Id", type: "text", default: "" },
    { name: "scope", label: "Scope", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_sql_role_definition",
    label: "Cosmosdb Sql Role Definition",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "assignable_scopes", label: "Assignable Scopes", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_sql_stored_procedure",
    label: "Cosmosdb Sql Stored Procedure",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "account_name", label: "Account Name", type: "text", default: "" },
    { name: "body", label: "Body", type: "text", default: "" },
    { name: "container_name", label: "Container Name", type: "text", default: "" },
    { name: "database_name", label: "Database Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_sql_trigger",
    label: "Cosmosdb Sql Trigger",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "body", label: "Body", type: "text", default: "" },
    { name: "container_id", label: "Container Id", type: "text", default: "" },
    { name: "operation", label: "Operation", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cosmosdb_table",
    label: "Cosmosdb Table",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "account_name", label: "Account Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_dataset_azure_sql_table",
    label: "Data Factory Dataset Azure Sql Table",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "linked_service_id", label: "Linked Service Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_dataset_cosmosdb_sqlapi",
    label: "Data Factory Dataset Cosmosdb Sqlapi",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "linked_service_name", label: "Linked Service Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_dataset_mysql",
    label: "Data Factory Dataset Mysql",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "linked_service_name", label: "Linked Service Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_dataset_postgresql",
    label: "Data Factory Dataset Postgresql",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "linked_service_name", label: "Linked Service Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_dataset_sql_server_table",
    label: "Data Factory Dataset Sql Server Table",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" },
    { name: "linked_service_name", label: "Linked Service Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_azure_sql_database",
    label: "Data Factory Linked Service Azure Sql Database",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_azure_table_storage",
    label: "Data Factory Linked Service Azure Table Storage",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "connection_string", label: "Connection String", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_cosmosdb",
    label: "Data Factory Linked Service Cosmosdb",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_cosmosdb_mongoapi",
    label: "Data Factory Linked Service Cosmosdb Mongoapi",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_mysql",
    label: "Data Factory Linked Service Mysql",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "connection_string", label: "Connection String", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_postgresql",
    label: "Data Factory Linked Service Postgresql",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "connection_string", label: "Connection String", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_sql_managed_instance",
    label: "Data Factory Linked Service Sql Managed Instance",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_factory_linked_service_sql_server",
    label: "Data Factory Linked Service Sql Server",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "data_factory_id", label: "Data Factory Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_instance_mysql_flexible_server",
    label: "Data Protection Backup Instance Mysql Flexible Server",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "backup_policy_id", label: "Backup Policy Id", type: "text", default: "" },
    { name: "server_id", label: "Server Id", type: "text", default: "" },
    { name: "vault_id", label: "Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_instance_postgresql",
    label: "Data Protection Backup Instance Postgresql",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "backup_policy_id", label: "Backup Policy Id", type: "text", default: "" },
    { name: "database_id", label: "Database Id", type: "text", default: "" },
    { name: "vault_id", label: "Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_instance_postgresql_flexible_server",
    label: "Data Protection Backup Instance Postgresql Flexible Server",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "backup_policy_id", label: "Backup Policy Id", type: "text", default: "" },
    { name: "server_id", label: "Server Id", type: "text", default: "" },
    { name: "vault_id", label: "Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_policy_mysql_flexible_server",
    label: "Data Protection Backup Policy Mysql Flexible Server",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "backup_repeating_time_intervals", label: "Backup Repeating Time Intervals", type: "text", default: "" },
    { name: "vault_id", label: "Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_policy_postgresql",
    label: "Data Protection Backup Policy Postgresql",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "backup_repeating_time_intervals", label: "Backup Repeating Time Intervals", type: "text", default: "" },
    { name: "default_retention_duration", label: "Default Retention Duration", type: "text", default: "" },
    { name: "vault_name", label: "Vault Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_policy_postgresql_flexible_server",
    label: "Data Protection Backup Policy Postgresql Flexible Server",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "backup_repeating_time_intervals", label: "Backup Repeating Time Intervals", type: "text", default: "" },
    { name: "vault_id", label: "Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_database_migration_project",
    label: "Database Migration Project",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "service_name", label: "Service Name", type: "text", default: "" },
    { name: "source_platform", label: "Source Platform", type: "text", default: "" },
    { name: "target_platform", label: "Target Platform", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_database_migration_service",
    label: "Database Migration Service",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_digital_twins_time_series_database_connection",
    label: "Digital Twins Time Series Database Connection",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "digital_twins_id", label: "Digital Twins Id", type: "text", default: "" },
    { name: "eventhub_name", label: "Eventhub Name", type: "text", default: "" },
    { name: "eventhub_namespace_endpoint_uri", label: "Eventhub Namespace Endpoint Uri", type: "text", default: "" },
    { name: "eventhub_namespace_id", label: "Eventhub Namespace Id", type: "text", default: "" },
    { name: "kusto_cluster_id", label: "Kusto Cluster Id", type: "text", default: "" },
    { name: "kusto_cluster_uri", label: "Kusto Cluster Uri", type: "text", default: "" },
    { name: "kusto_database_name", label: "Kusto Database Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_iothub_endpoint_cosmosdb_account",
    label: "Iothub Endpoint Cosmosdb Account",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "container_name", label: "Container Name", type: "text", default: "" },
    { name: "database_name", label: "Database Name", type: "text", default: "" },
    { name: "endpoint_uri", label: "Endpoint Uri", type: "text", default: "" },
    { name: "iothub_id", label: "Iothub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_log_analytics_workspace_table_custom_log",
    label: "Log Analytics Workspace Table Custom Log",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "workspace_id", label: "Workspace Id", type: "text", default: "" },
    { name: "retention_in_days", label: "Retention In Days", type: "number", default: "1" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_managed_redis",
    label: "Managed Redis",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_managed_redis_access_policy_assignment",
    label: "Managed Redis Access Policy Assignment",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "managed_redis_id", label: "Managed Redis Id", type: "text", default: "" },
    { name: "object_id", label: "Object Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_managed_redis_geo_replication",
    label: "Managed Redis Geo Replication",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "linked_managed_redis_ids", label: "Linked Managed Redis Ids", type: "text", default: "" },
    { name: "managed_redis_id", label: "Managed Redis Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mongo_cluster",
    label: "Mongo Cluster",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "version", label: "Version", type: "text", default: "latest" }
  ]
  },
  {
    type: "azurerm_mongo_cluster_firewall_rule",
    label: "Mongo Cluster Firewall Rule",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "end_ip_address", label: "End Ip Address", type: "text", default: "" },
    { name: "mongo_cluster_id", label: "Mongo Cluster Id", type: "text", default: "" },
    { name: "start_ip_address", label: "Start Ip Address", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mongo_cluster_user",
    label: "Mongo Cluster User",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "identity_provider_type", label: "Identity Provider Type", type: "text", default: "" },
    { name: "mongo_cluster_id", label: "Mongo Cluster Id", type: "text", default: "" },
    { name: "object_id", label: "Object Id", type: "text", default: "" },
    { name: "principal_type", label: "Principal Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_database_extended_auditing_policy",
    label: "Mssql Database Extended Auditing Policy",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "database_id", label: "Database Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "retention_in_days", label: "Retention In Days", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_mssql_database_vulnerability_assessment_rule_baseline",
    label: "Mssql Database Vulnerability Assessment Rule Baseline",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "database_name", label: "Database Name", type: "text", default: "" },
    { name: "rule_id", label: "Rule Id", type: "text", default: "" },
    { name: "server_vulnerability_assessment_id", label: "Server Vulnerability Assessment Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_failover_group",
    label: "Mssql Failover Group",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "server_id", label: "Server Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_firewall_rule",
    label: "Mssql Firewall Rule",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "end_ip_address", label: "End Ip Address", type: "text", default: "" },
    { name: "server_id", label: "Server Id", type: "text", default: "" },
    { name: "start_ip_address", label: "Start Ip Address", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_job",
    label: "Mssql Job",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "job_agent_id", label: "Job Agent Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_job_agent",
    label: "Mssql Job Agent",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "database_id", label: "Database Id", type: "text", default: "" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_mssql_job_credential",
    label: "Mssql Job Credential",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "job_agent_id", label: "Job Agent Id", type: "text", default: "" },
    { name: "username", label: "Username", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_job_schedule",
    label: "Mssql Job Schedule",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "job_id", label: "Job Id", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_mssql_job_step",
    label: "Mssql Job Step",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "job_id", label: "Job Id", type: "text", default: "" },
    { name: "job_step_index", label: "Job Step Index", type: "number", default: "1" },
    { name: "job_target_group_id", label: "Job Target Group Id", type: "text", default: "" },
    { name: "sql_script", label: "Sql Script", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_job_target_group",
    label: "Mssql Job Target Group",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "job_agent_id", label: "Job Agent Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_managed_database",
    label: "Mssql Managed Database",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "managed_instance_id", label: "Managed Instance Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_managed_instance",
    label: "Mssql Managed Instance",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "license_type", label: "License Type", type: "text", default: "" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" },
    { name: "storage_size_in_gb", label: "Storage Size In Gb", type: "number", default: "1" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" },
    { name: "vcores", label: "Vcores", type: "number", default: "1" },
    { name: "minimum_tls_version", label: "Minimum Tls Version", type: "text", default: "TLS1_2" },
    { name: "administrator_login", label: "Administrator Login", type: "text", default: "adminuser" },
    { name: "storage_account_type", label: "Storage Account Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_managed_instance_active_directory_administrator",
    label: "Mssql Managed Instance Active Directory Administrator",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "login_username", label: "Login Username", type: "text", default: "" },
    { name: "managed_instance_id", label: "Managed Instance Id", type: "text", default: "" },
    { name: "object_id", label: "Object Id", type: "text", default: "" },
    { name: "tenant_id", label: "Tenant Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_managed_instance_failover_group",
    label: "Mssql Managed Instance Failover Group",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "managed_instance_id", label: "Managed Instance Id", type: "text", default: "" },
    { name: "partner_managed_instance_id", label: "Partner Managed Instance Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_managed_instance_security_alert_policy",
    label: "Mssql Managed Instance Security Alert Policy",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "managed_instance_name", label: "Managed Instance Name", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_mssql_managed_instance_start_stop_schedule",
    label: "Mssql Managed Instance Start Stop Schedule",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "managed_instance_id", label: "Managed Instance Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_managed_instance_transparent_data_encryption",
    label: "Mssql Managed Instance Transparent Data Encryption",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "managed_instance_id", label: "Managed Instance Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_managed_instance_vulnerability_assessment",
    label: "Mssql Managed Instance Vulnerability Assessment",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "managed_instance_id", label: "Managed Instance Id", type: "text", default: "" },
    { name: "storage_container_path", label: "Storage Container Path", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_outbound_firewall_rule",
    label: "Mssql Outbound Firewall Rule",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "server_id", label: "Server Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_server_dns_alias",
    label: "Mssql Server Dns Alias",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "mssql_server_id", label: "Mssql Server Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_server_extended_auditing_policy",
    label: "Mssql Server Extended Auditing Policy",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "server_id", label: "Server Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "retention_in_days", label: "Retention In Days", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_mssql_server_microsoft_support_auditing_policy",
    label: "Mssql Server Microsoft Support Auditing Policy",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "server_id", label: "Server Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_mssql_server_security_alert_policy",
    label: "Mssql Server Security Alert Policy",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "server_name", label: "Server Name", type: "text", default: "" },
    { name: "state", label: "State", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_server_transparent_data_encryption",
    label: "Mssql Server Transparent Data Encryption",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "server_id", label: "Server Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_server_vulnerability_assessment",
    label: "Mssql Server Vulnerability Assessment",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "server_security_alert_policy_id", label: "Server Security Alert Policy Id", type: "text", default: "" },
    { name: "storage_container_path", label: "Storage Container Path", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mssql_virtual_network_rule",
    label: "Mssql Virtual Network Rule",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "server_id", label: "Server Id", type: "text", default: "" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mysql_flexible_database",
    label: "Mysql Flexible Database",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "charset", label: "Charset", type: "text", default: "" },
    { name: "collation", label: "Collation", type: "text", default: "" },
    { name: "server_name", label: "Server Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mysql_flexible_server_active_directory_administrator",
    label: "Mysql Flexible Server Active Directory Administrator",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "identity_id", label: "Identity Id", type: "text", default: "" },
    { name: "login", label: "Login", type: "text", default: "" },
    { name: "object_id", label: "Object Id", type: "text", default: "" },
    { name: "server_id", label: "Server Id", type: "text", default: "" },
    { name: "tenant_id", label: "Tenant Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mysql_flexible_server_configuration",
    label: "Mysql Flexible Server Configuration",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "server_name", label: "Server Name", type: "text", default: "" },
    { name: "value", label: "Value", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_mysql_flexible_server_firewall_rule",
    label: "Mysql Flexible Server Firewall Rule",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "end_ip_address", label: "End Ip Address", type: "text", default: "" },
    { name: "server_name", label: "Server Name", type: "text", default: "" },
    { name: "start_ip_address", label: "Start Ip Address", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_oracle_autonomous_database",
    label: "Oracle Autonomous Database",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "admin_password", label: "Admin Password", type: "text", default: "" },
    { name: "auto_scaling_enabled", label: "Auto Scaling Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "auto_scaling_for_storage_enabled", label: "Auto Scaling For Storage Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "backup_retention_period_in_days", label: "Backup Retention Period In Days", type: "number", default: "1" },
    { name: "character_set", label: "Character Set", type: "text", default: "" },
    { name: "compute_count", label: "Compute Count", type: "number", default: "1" },
    { name: "compute_model", label: "Compute Model", type: "text", default: "" },
    { name: "data_storage_size_in_tbs", label: "Data Storage Size In Tbs", type: "number", default: "1" },
    { name: "db_version", label: "Db Version", type: "text", default: "" },
    { name: "db_workload", label: "Db Workload", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "license_model", label: "License Model", type: "text", default: "" },
    { name: "mtls_connection_required", label: "Mtls Connection Required", type: "select", options: ["true", "false"], default: "false" },
    { name: "national_character_set", label: "National Character Set", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_oracle_autonomous_database_backup",
    label: "Oracle Autonomous Database Backup",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "autonomous_database_id", label: "Autonomous Database Id", type: "text", default: "" },
    { name: "retention_period_in_days", label: "Retention Period In Days", type: "number", default: "1" },
    { name: "type", label: "Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_oracle_autonomous_database_clone_from_backup",
    label: "Oracle Autonomous Database Clone From Backup",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "admin_password", label: "Admin Password", type: "text", default: "" },
    { name: "auto_scaling_enabled", label: "Auto Scaling Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "auto_scaling_for_storage_enabled", label: "Auto Scaling For Storage Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "backup_retention_period_in_days", label: "Backup Retention Period In Days", type: "number", default: "1" },
    { name: "character_set", label: "Character Set", type: "text", default: "" },
    { name: "clone_type", label: "Clone Type", type: "text", default: "" },
    { name: "compute_count", label: "Compute Count", type: "number", default: "1" },
    { name: "compute_model", label: "Compute Model", type: "text", default: "" },
    { name: "data_storage_size_in_tb", label: "Data Storage Size In Tb", type: "number", default: "1" },
    { name: "database_version", label: "Database Version", type: "text", default: "" },
    { name: "database_workload", label: "Database Workload", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "license_model", label: "License Model", type: "text", default: "" },
    { name: "mtls_connection_required", label: "Mtls Connection Required", type: "select", options: ["true", "false"], default: "false" },
    { name: "national_character_set", label: "National Character Set", type: "text", default: "" },
    { name: "source_autonomous_database_id", label: "Source Autonomous Database Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_oracle_autonomous_database_clone_from_database",
    label: "Oracle Autonomous Database Clone From Database",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "admin_password", label: "Admin Password", type: "text", default: "" },
    { name: "auto_scaling_enabled", label: "Auto Scaling Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "auto_scaling_for_storage_enabled", label: "Auto Scaling For Storage Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "backup_retention_period_in_days", label: "Backup Retention Period In Days", type: "number", default: "1" },
    { name: "character_set", label: "Character Set", type: "text", default: "" },
    { name: "clone_type", label: "Clone Type", type: "text", default: "" },
    { name: "compute_count", label: "Compute Count", type: "number", default: "1" },
    { name: "compute_model", label: "Compute Model", type: "text", default: "" },
    { name: "data_storage_size_in_tb", label: "Data Storage Size In Tb", type: "number", default: "1" },
    { name: "database_version", label: "Database Version", type: "text", default: "" },
    { name: "database_workload", label: "Database Workload", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "license_model", label: "License Model", type: "text", default: "" },
    { name: "mtls_connection_required", label: "Mtls Connection Required", type: "select", options: ["true", "false"], default: "false" },
    { name: "national_character_set", label: "National Character Set", type: "text", default: "" },
    { name: "source_autonomous_database_id", label: "Source Autonomous Database Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_oracle_exascale_database_storage_vault",
    label: "Oracle Exascale Database Storage Vault",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "additional_flash_cache_percentage", label: "Additional Flash Cache Percentage", type: "number", default: "1" },
    { name: "display_name", label: "Display Name", type: "text", default: "" },
    { name: "zones", label: "Zones", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_postgresql_active_directory_administrator",
    label: "Postgresql Active Directory Administrator",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "login", label: "Login", type: "text", default: "" },
    { name: "object_id", label: "Object Id", type: "text", default: "" },
    { name: "server_name", label: "Server Name", type: "text", default: "" },
    { name: "tenant_id", label: "Tenant Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_postgresql_configuration",
    label: "Postgresql Configuration",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "server_name", label: "Server Name", type: "text", default: "" },
    { name: "value", label: "Value", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_postgresql_database",
    label: "Postgresql Database",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "charset", label: "Charset", type: "text", default: "" },
    { name: "collation", label: "Collation", type: "text", default: "" },
    { name: "server_name", label: "Server Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_postgresql_firewall_rule",
    label: "Postgresql Firewall Rule",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "end_ip_address", label: "End Ip Address", type: "text", default: "" },
    { name: "server_name", label: "Server Name", type: "text", default: "" },
    { name: "start_ip_address", label: "Start Ip Address", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_postgresql_flexible_server_active_directory_administrator",
    label: "Postgresql Flexible Server Active Directory Administrator",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "object_id", label: "Object Id", type: "text", default: "" },
    { name: "principal_name", label: "Principal Name", type: "text", default: "" },
    { name: "principal_type", label: "Principal Type", type: "text", default: "" },
    { name: "server_name", label: "Server Name", type: "text", default: "" },
    { name: "tenant_id", label: "Tenant Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_postgresql_flexible_server_backup",
    label: "Postgresql Flexible Server Backup",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "server_id", label: "Server Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_postgresql_flexible_server_configuration",
    label: "Postgresql Flexible Server Configuration",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "server_id", label: "Server Id", type: "text", default: "" },
    { name: "value", label: "Value", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_postgresql_flexible_server_database",
    label: "Postgresql Flexible Server Database",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "server_id", label: "Server Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_postgresql_flexible_server_firewall_rule",
    label: "Postgresql Flexible Server Firewall Rule",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "end_ip_address", label: "End Ip Address", type: "text", default: "" },
    { name: "server_id", label: "Server Id", type: "text", default: "" },
    { name: "start_ip_address", label: "Start Ip Address", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_postgresql_flexible_server_virtual_endpoint",
    label: "Postgresql Flexible Server Virtual Endpoint",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "replica_server_id", label: "Replica Server Id", type: "text", default: "" },
    { name: "source_server_id", label: "Source Server Id", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_postgresql_server",
    label: "Postgresql Server",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" },
    { name: "ssl_enforcement_enabled", label: "Ssl Enforcement Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "version", label: "Version", type: "text", default: "latest" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "administrator_login", label: "Administrator Login", type: "text", default: "adminuser" }
  ]
  },
  {
    type: "azurerm_postgresql_server_key",
    label: "Postgresql Server Key",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "key_vault_key_id", label: "Key Vault Key Id", type: "text", default: "" },
    { name: "server_id", label: "Server Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_postgresql_virtual_network_rule",
    label: "Postgresql Virtual Network Rule",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "server_name", label: "Server Name", type: "text", default: "" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_redis_cache_access_policy",
    label: "Redis Cache Access Policy",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "permissions", label: "Permissions", type: "text", default: "" },
    { name: "redis_cache_id", label: "Redis Cache Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_redis_cache_access_policy_assignment",
    label: "Redis Cache Access Policy Assignment",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "access_policy_name", label: "Access Policy Name", type: "text", default: "" },
    { name: "object_id", label: "Object Id", type: "text", default: "" },
    { name: "object_id_alias", label: "Object Id Alias", type: "text", default: "" },
    { name: "redis_cache_id", label: "Redis Cache Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_redis_enterprise_cluster",
    label: "Redis Enterprise Cluster",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" },
    { name: "minimum_tls_version", label: "Minimum Tls Version", type: "text", default: "TLS1_2" }
  ]
  },
  {
    type: "azurerm_redis_enterprise_database",
    label: "Redis Enterprise Database",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cluster_id", label: "Cluster Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_redis_firewall_rule",
    label: "Redis Firewall Rule",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "end_ip", label: "End Ip", type: "text", default: "" },
    { name: "redis_cache_name", label: "Redis Cache Name", type: "text", default: "" },
    { name: "start_ip", label: "Start Ip", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_redis_linked_server",
    label: "Redis Linked Server",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "linked_redis_cache_id", label: "Linked Redis Cache Id", type: "text", default: "" },
    { name: "linked_redis_cache_location", label: "Linked Redis Cache Location", type: "text", default: "" },
    { name: "server_role", label: "Server Role", type: "text", default: "" },
    { name: "target_redis_cache_name", label: "Target Redis Cache Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_table_entity",
    label: "Storage Table Entity",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "entity", label: "Entity", type: "text", default: "" },
    { name: "partition_key", label: "Partition Key", type: "text", default: "" },
    { name: "row_key", label: "Row Key", type: "text", default: "" },
    { name: "storage_table_id", label: "Storage Table Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_subnet_route_table_association",
    label: "Subnet Route Table Association",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "route_table_id", label: "Route Table Id", type: "text", default: "" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_hub_route_table_route",
    label: "Virtual Hub Route Table Route",
    category: "Databases",
    icon: "🗄️",
    color: "#E67E22",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "destinations", label: "Destinations", type: "text", default: "" },
    { name: "destinations_type", label: "Destinations Type", type: "text", default: "" },
    { name: "next_hop", label: "Next Hop", type: "text", default: "" },
    { name: "route_table_id", label: "Route Table Id", type: "text", default: "" }
  ]
  }
]
