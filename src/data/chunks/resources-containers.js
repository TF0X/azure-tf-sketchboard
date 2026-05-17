// AUTO-GENERATED — category: Containers
export default [
  {
    type: "azurerm_arc_kubernetes_cluster",
    label: "Arc Kubernetes Cluster",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "agent_public_key_certificate", label: "Agent Public Key Certificate", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_arc_kubernetes_cluster_extension",
    label: "Arc Kubernetes Cluster Extension",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cluster_id", label: "Cluster Id", type: "text", default: "" },
    { name: "extension_type", label: "Extension Type", type: "text", default: "" },
    { name: "version", label: "Version", type: "text", default: "latest" }
  ]
  },
  {
    type: "azurerm_arc_kubernetes_flux_configuration",
    label: "Arc Kubernetes Flux Configuration",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cluster_id", label: "Cluster Id", type: "text", default: "" },
    { name: "namespace", label: "Namespace", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_arc_kubernetes_provisioned_cluster",
    label: "Arc Kubernetes Provisioned Cluster",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_container_app",
    label: "Container App",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "container_app_environment_id", label: "Container App Environment Id", type: "text", default: "" },
    { name: "revision_mode", label: "Revision Mode", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_container_app_custom_domain",
    label: "Container App Custom Domain",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "container_app_id", label: "Container App Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_container_app_environment",
    label: "Container App Environment",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_container_app_environment_certificate",
    label: "Container App Environment Certificate",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "container_app_environment_id", label: "Container App Environment Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_container_app_environment_custom_domain",
    label: "Container App Environment Custom Domain",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "certificate_blob_base64", label: "Certificate Blob Base64", type: "text", default: "" },
    { name: "certificate_password", label: "Certificate Password", type: "text", default: "" },
    { name: "container_app_environment_id", label: "Container App Environment Id", type: "text", default: "" },
    { name: "dns_suffix", label: "Dns Suffix", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_container_app_environment_dapr_component",
    label: "Container App Environment Dapr Component",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "component_type", label: "Component Type", type: "text", default: "" },
    { name: "container_app_environment_id", label: "Container App Environment Id", type: "text", default: "" },
    { name: "version", label: "Version", type: "text", default: "latest" }
  ]
  },
  {
    type: "azurerm_container_app_environment_managed_certificate",
    label: "Container App Environment Managed Certificate",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "container_app_environment_id", label: "Container App Environment Id", type: "text", default: "" },
    { name: "subject_name", label: "Subject Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_container_app_environment_storage",
    label: "Container App Environment Storage",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "access_mode", label: "Access Mode", type: "text", default: "" },
    { name: "container_app_environment_id", label: "Container App Environment Id", type: "text", default: "" },
    { name: "share_name", label: "Share Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_container_app_job",
    label: "Container App Job",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "container_app_environment_id", label: "Container App Environment Id", type: "text", default: "" },
    { name: "replica_timeout_in_seconds", label: "Replica Timeout In Seconds", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_container_registry_agent_pool",
    label: "Container Registry Agent Pool",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "container_registry_name", label: "Container Registry Name", type: "text", default: "" },
    { name: "tier", label: "Tier", type: "text", default: "Standard" },
    { name: "instance_count", label: "Instance Count", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_container_registry_cache_rule",
    label: "Container Registry Cache Rule",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "container_registry_id", label: "Container Registry Id", type: "text", default: "" },
    { name: "source_repo", label: "Source Repo", type: "text", default: "" },
    { name: "target_repo", label: "Target Repo", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_container_registry_credential_set",
    label: "Container Registry Credential Set",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "container_registry_id", label: "Container Registry Id", type: "text", default: "" },
    { name: "login_server", label: "Login Server", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_container_registry_scope_map",
    label: "Container Registry Scope Map",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "actions", label: "Actions", type: "text", default: "" },
    { name: "container_registry_name", label: "Container Registry Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_container_registry_task",
    label: "Container Registry Task",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "container_registry_id", label: "Container Registry Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_container_registry_task_schedule_run_now",
    label: "Container Registry Task Schedule Run Now",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "container_registry_task_id", label: "Container Registry Task Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_container_registry_token",
    label: "Container Registry Token",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "container_registry_name", label: "Container Registry Name", type: "text", default: "" },
    { name: "scope_map_id", label: "Scope Map Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_container_registry_token_password",
    label: "Container Registry Token Password",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "container_registry_token_id", label: "Container Registry Token Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_container_registry_webhook",
    label: "Container Registry Webhook",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "actions", label: "Actions", type: "text", default: "" },
    { name: "registry_name", label: "Registry Name", type: "text", default: "" },
    { name: "service_uri", label: "Service Uri", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_instance_kubernetes_cluster",
    label: "Data Protection Backup Instance Kubernetes Cluster",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "backup_policy_id", label: "Backup Policy Id", type: "text", default: "" },
    { name: "kubernetes_cluster_id", label: "Kubernetes Cluster Id", type: "text", default: "" },
    { name: "snapshot_resource_group_name", label: "Snapshot Resource Group Name", type: "text", default: "" },
    { name: "vault_id", label: "Vault Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_data_protection_backup_policy_kubernetes_cluster",
    label: "Data Protection Backup Policy Kubernetes Cluster",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "backup_repeating_time_intervals", label: "Backup Repeating Time Intervals", type: "text", default: "" },
    { name: "vault_name", label: "Vault Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kubernetes_cluster_deployment_safeguard",
    label: "Kubernetes Cluster Deployment Safeguard",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "kubernetes_cluster_id", label: "Kubernetes Cluster Id", type: "text", default: "" },
    { name: "level", label: "Level", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kubernetes_cluster_extension",
    label: "Kubernetes Cluster Extension",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cluster_id", label: "Cluster Id", type: "text", default: "" },
    { name: "extension_type", label: "Extension Type", type: "text", default: "" },
    { name: "version", label: "Version", type: "text", default: "latest" }
  ]
  },
  {
    type: "azurerm_kubernetes_cluster_node_pool",
    label: "Kubernetes Cluster Node Pool",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "kubernetes_cluster_id", label: "Kubernetes Cluster Id", type: "text", default: "" },
    { name: "os_type", label: "Os Type", type: "text", default: "Linux" },
    { name: "node_count", label: "Node Count", type: "number", default: "1" },
    { name: "vm_size", label: "Vm Size", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kubernetes_cluster_trusted_access_role_binding",
    label: "Kubernetes Cluster Trusted Access Role Binding",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "kubernetes_cluster_id", label: "Kubernetes Cluster Id", type: "text", default: "" },
    { name: "roles", label: "Roles", type: "text", default: "" },
    { name: "source_resource_id", label: "Source Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kubernetes_fleet_manager",
    label: "Kubernetes Fleet Manager",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_kubernetes_fleet_member",
    label: "Kubernetes Fleet Member",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "kubernetes_cluster_id", label: "Kubernetes Cluster Id", type: "text", default: "" },
    { name: "kubernetes_fleet_id", label: "Kubernetes Fleet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kubernetes_fleet_update_run",
    label: "Kubernetes Fleet Update Run",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "kubernetes_fleet_manager_id", label: "Kubernetes Fleet Manager Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kubernetes_fleet_update_strategy",
    label: "Kubernetes Fleet Update Strategy",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "kubernetes_fleet_manager_id", label: "Kubernetes Fleet Manager Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_kubernetes_flux_configuration",
    label: "Kubernetes Flux Configuration",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cluster_id", label: "Cluster Id", type: "text", default: "" },
    { name: "namespace", label: "Namespace", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_accelerator",
    label: "Spring Cloud Accelerator",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_service_id", label: "Spring Cloud Service Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_active_deployment",
    label: "Spring Cloud Active Deployment",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "deployment_name", label: "Deployment Name", type: "text", default: "" },
    { name: "spring_cloud_app_id", label: "Spring Cloud App Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_api_portal",
    label: "Spring Cloud Api Portal",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_service_id", label: "Spring Cloud Service Id", type: "text", default: "" },
    { name: "instance_count", label: "Instance Count", type: "number", default: "1" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_spring_cloud_api_portal_custom_domain",
    label: "Spring Cloud Api Portal Custom Domain",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_api_portal_id", label: "Spring Cloud Api Portal Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_app",
    label: "Spring Cloud App",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "service_name", label: "Service Name", type: "text", default: "" },
    { name: "https_only", label: "Https Only", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_spring_cloud_app_cosmosdb_association",
    label: "Spring Cloud App Cosmosdb Association",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "api_type", label: "Api Type", type: "text", default: "" },
    { name: "cosmosdb_access_key", label: "Cosmosdb Access Key", type: "text", default: "" },
    { name: "cosmosdb_account_id", label: "Cosmosdb Account Id", type: "text", default: "" },
    { name: "spring_cloud_app_id", label: "Spring Cloud App Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_app_dynamics_application_performance_monitoring",
    label: "Spring Cloud App Dynamics Application Performance Monitoring",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "agent_account_access_key", label: "Agent Account Access Key", type: "text", default: "" },
    { name: "agent_account_name", label: "Agent Account Name", type: "text", default: "" },
    { name: "controller_host_name", label: "Controller Host Name", type: "text", default: "" },
    { name: "spring_cloud_service_id", label: "Spring Cloud Service Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_app_mysql_association",
    label: "Spring Cloud App Mysql Association",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "database_name", label: "Database Name", type: "text", default: "" },
    { name: "mysql_server_id", label: "Mysql Server Id", type: "text", default: "" },
    { name: "password", label: "Password", type: "text", default: "" },
    { name: "spring_cloud_app_id", label: "Spring Cloud App Id", type: "text", default: "" },
    { name: "username", label: "Username", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_app_redis_association",
    label: "Spring Cloud App Redis Association",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "redis_access_key", label: "Redis Access Key", type: "text", default: "" },
    { name: "redis_cache_id", label: "Redis Cache Id", type: "text", default: "" },
    { name: "spring_cloud_app_id", label: "Spring Cloud App Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_application_insights_application_performance_monitoring",
    label: "Spring Cloud Application Insights Application Performance Monitoring",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_service_id", label: "Spring Cloud Service Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_application_live_view",
    label: "Spring Cloud Application Live View",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_service_id", label: "Spring Cloud Service Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_build_deployment",
    label: "Spring Cloud Build Deployment",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "build_result_id", label: "Build Result Id", type: "text", default: "" },
    { name: "spring_cloud_app_id", label: "Spring Cloud App Id", type: "text", default: "" },
    { name: "instance_count", label: "Instance Count", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_spring_cloud_build_pack_binding",
    label: "Spring Cloud Build Pack Binding",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_builder_id", label: "Spring Cloud Builder Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_builder",
    label: "Spring Cloud Builder",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_service_id", label: "Spring Cloud Service Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_certificate",
    label: "Spring Cloud Certificate",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "service_name", label: "Service Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_configuration_service",
    label: "Spring Cloud Configuration Service",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_service_id", label: "Spring Cloud Service Id", type: "text", default: "" },
    { name: "generation", label: "Generation", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_connection",
    label: "Spring Cloud Connection",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_id", label: "Spring Cloud Id", type: "text", default: "" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_container_deployment",
    label: "Spring Cloud Container Deployment",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "image", label: "Image", type: "text", default: "" },
    { name: "server", label: "Server", type: "text", default: "" },
    { name: "spring_cloud_app_id", label: "Spring Cloud App Id", type: "text", default: "" },
    { name: "instance_count", label: "Instance Count", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_spring_cloud_custom_domain",
    label: "Spring Cloud Custom Domain",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_app_id", label: "Spring Cloud App Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_customized_accelerator",
    label: "Spring Cloud Customized Accelerator",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_accelerator_id", label: "Spring Cloud Accelerator Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_dev_tool_portal",
    label: "Spring Cloud Dev Tool Portal",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_service_id", label: "Spring Cloud Service Id", type: "text", default: "" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_spring_cloud_dynatrace_application_performance_monitoring",
    label: "Spring Cloud Dynatrace Application Performance Monitoring",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "connection_point", label: "Connection Point", type: "text", default: "" },
    { name: "spring_cloud_service_id", label: "Spring Cloud Service Id", type: "text", default: "" },
    { name: "tenant", label: "Tenant", type: "text", default: "" },
    { name: "tenant_token", label: "Tenant Token", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_elastic_application_performance_monitoring",
    label: "Spring Cloud Elastic Application Performance Monitoring",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "application_packages", label: "Application Packages", type: "text", default: "" },
    { name: "server_url", label: "Server Url", type: "text", default: "" },
    { name: "service_name", label: "Service Name", type: "text", default: "" },
    { name: "spring_cloud_service_id", label: "Spring Cloud Service Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_gateway",
    label: "Spring Cloud Gateway",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_service_id", label: "Spring Cloud Service Id", type: "text", default: "" },
    { name: "instance_count", label: "Instance Count", type: "number", default: "1" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "https_only", label: "Https Only", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_spring_cloud_gateway_custom_domain",
    label: "Spring Cloud Gateway Custom Domain",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_gateway_id", label: "Spring Cloud Gateway Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_gateway_route_config",
    label: "Spring Cloud Gateway Route Config",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "protocol", label: "Protocol", type: "text", default: "Tcp" },
    { name: "spring_cloud_gateway_id", label: "Spring Cloud Gateway Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_java_deployment",
    label: "Spring Cloud Java Deployment",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_app_id", label: "Spring Cloud App Id", type: "text", default: "" },
    { name: "instance_count", label: "Instance Count", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_spring_cloud_new_relic_application_performance_monitoring",
    label: "Spring Cloud New Relic Application Performance Monitoring",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "app_name", label: "App Name", type: "text", default: "" },
    { name: "license_key", label: "License Key", type: "text", default: "" },
    { name: "spring_cloud_service_id", label: "Spring Cloud Service Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_spring_cloud_storage",
    label: "Spring Cloud Storage",
    category: "Containers",
    icon: "📦",
    color: "#2980B9",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "spring_cloud_service_id", label: "Spring Cloud Service Id", type: "text", default: "" },
    { name: "storage_account_key", label: "Storage Account Key", type: "text", default: "" },
    { name: "storage_account_name", label: "Storage Account Name", type: "text", default: "" }
  ]
  }
]
