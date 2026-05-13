export const EDGE_FIELD_MAP = {
  azurerm_virtual_network: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_subnet: {
    azurerm_virtual_network: {
      field: 'virtual_network_name',
      value: (target) => `azurerm_virtual_network.${target.data.properties.name}.name`
    },
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_linux_virtual_machine: {
    azurerm_network_interface: {
      field: 'network_interface_ids',
      directOnly: true,
      value: (target) => `azurerm_network_interface.${target.data.properties.name}.id`
    },
    azurerm_subnet: {
      field: 'subnet_id',
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
    },
    azurerm_public_ip: {
      field: 'public_ip_address_id',
      directOnly: true,
      value: (target) => `azurerm_public_ip.${target.data.properties.name}.id`
    },
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_windows_virtual_machine: {
    azurerm_network_interface: {
      field: 'network_interface_ids',
      directOnly: true,
      value: (target) => `azurerm_network_interface.${target.data.properties.name}.id`
    },
    azurerm_subnet: {
      field: 'subnet_id',
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
    },
    azurerm_public_ip: {
      field: 'public_ip_address_id',
      directOnly: true,
      value: (target) => `azurerm_public_ip.${target.data.properties.name}.id`
    },
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_storage_account: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_sql_server: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_mssql_database: {
    azurerm_sql_server: {
      field: 'server_id',
      value: (target) => `azurerm_sql_server.${target.data.properties.name}.id`
    }
  },
  azurerm_linux_web_app: {
    azurerm_app_service_plan: {
      field: 'service_plan_id',
      value: (target) => `azurerm_app_service_plan.${target.data.properties.name}.id`
    },
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_app_service_plan: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_key_vault: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_kubernetes_cluster: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_subnet: {
      field: 'default_node_pool.vnet_subnet_id',
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
    }
  },
  azurerm_container_registry: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_network_security_group: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_network_interface: {
    azurerm_subnet: {
      field: 'ip_configuration.subnet_id',
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
    },
    azurerm_public_ip: {
      field: 'ip_configuration.public_ip_address_id',
      directOnly: true,
      value: (target) => `azurerm_public_ip.${target.data.properties.name}.id`
    },
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_public_ip: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_cosmosdb_account: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_servicebus_namespace: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_log_analytics_workspace: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_application_gateway: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_subnet: {
      field: 'gateway_ip_configuration.subnet_id',
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
    }
  },
  azurerm_cdn_profile: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_user_assigned_identity: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_role_assignment: {
    azurerm_user_assigned_identity: {
      field: 'principal_id',
      directOnly: true,
      value: (target) => `azurerm_user_assigned_identity.${target.data.properties.name}.principal_id`
    },
    azurerm_storage_account: {
      field: 'scope',
      directOnly: true,
      value: (target) => `azurerm_storage_account.${target.data.properties.name}.id`
    },
    azurerm_key_vault: {
      field: 'scope',
      directOnly: true,
      value: (target) => `azurerm_key_vault.${target.data.properties.name}.id`
    },
    azurerm_container_registry: {
      field: 'scope',
      directOnly: true,
      value: (target) => `azurerm_container_registry.${target.data.properties.name}.id`
    },
    azurerm_resource_group: {
      field: 'scope',
      directOnly: true,
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.id`
    }
  },
  azurerm_private_endpoint: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_subnet: {
      field: 'subnet_id',
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
    },
    azurerm_storage_account: {
      field: 'private_service_connection.private_connection_resource_id',
      directOnly: true,
      value: (target) => `azurerm_storage_account.${target.data.properties.name}.id`
    },
    azurerm_key_vault: {
      field: 'private_service_connection.private_connection_resource_id',
      directOnly: true,
      value: (target) => `azurerm_key_vault.${target.data.properties.name}.id`
    },
    azurerm_sql_server: {
      field: 'private_service_connection.private_connection_resource_id',
      directOnly: true,
      value: (target) => `azurerm_sql_server.${target.data.properties.name}.id`
    },
    azurerm_postgresql_flexible_server: {
      field: 'private_service_connection.private_connection_resource_id',
      directOnly: true,
      value: (target) => `azurerm_postgresql_flexible_server.${target.data.properties.name}.id`
    },
    azurerm_redis_cache: {
      field: 'private_service_connection.private_connection_resource_id',
      directOnly: true,
      value: (target) => `azurerm_redis_cache.${target.data.properties.name}.id`
    }
  },
  azurerm_redis_cache: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_postgresql_flexible_server: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_linux_function_app: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_app_service_plan: {
      field: 'service_plan_id',
      value: (target) => `azurerm_app_service_plan.${target.data.properties.name}.id`
    },
    azurerm_storage_account: {
      field: 'storage_account_name',
      directOnly: true,
      value: (target) => `azurerm_storage_account.${target.data.properties.name}.name`
    }
  },
  azurerm_virtual_network_peering: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_virtual_network: {
      field: 'virtual_network_name',
      directOnly: true,
      value: (target) => `azurerm_virtual_network.${target.data.properties.name}.name`
    }
  },
  azurerm_lb: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_subnet: {
      field: 'frontend_ip_configuration.subnet_id',
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
    },
    azurerm_public_ip: {
      field: 'frontend_ip_configuration.public_ip_address_id',
      directOnly: true,
      value: (target) => `azurerm_public_ip.${target.data.properties.name}.id`
    }
  },
  azurerm_firewall: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_subnet: {
      field: 'ip_configuration.subnet_id',
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
    },
    azurerm_public_ip: {
      field: 'ip_configuration.public_ip_address_id',
      directOnly: true,
      value: (target) => `azurerm_public_ip.${target.data.properties.name}.id`
    }
  },
  azurerm_nat_gateway: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_public_ip: {
      field: 'public_ip_address_id',
      directOnly: true,
      value: (target) => `azurerm_public_ip.${target.data.properties.name}.id`
    }
  },
  azurerm_dns_zone: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_container_group: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_linux_virtual_machine_scale_set: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_subnet: {
      field: 'network_interface.ip_configuration.subnet_id',
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
    }
  },
  azurerm_mysql_flexible_server: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_eventhub_namespace: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_synapse_workspace: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_storage_account: {
      field: 'storage_data_lake_gen2_filesystem_id',
      directOnly: true,
      value: (target) => `azurerm_storage_account.${target.data.properties.name}.id`
    }
  },
  azurerm_api_management: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_subnet: {
      field: 'virtual_network_configuration.subnet_id',
      directOnly: true,
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
    }
  },
  azurerm_windows_web_app: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_app_service_plan: {
      field: 'service_plan_id',
      value: (target) => `azurerm_app_service_plan.${target.data.properties.name}.id`
    }
  },
  azurerm_application_insights: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_log_analytics_workspace: {
      field: 'workspace_id',
      directOnly: true,
      value: (target) => `azurerm_log_analytics_workspace.${target.data.properties.name}.id`
    }
  },
  azurerm_monitor_action_group: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_logic_app_workflow: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_data_factory: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_cognitive_account: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_machine_learning_workspace: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_key_vault: {
      field: 'key_vault_id',
      directOnly: true,
      value: (target) => `azurerm_key_vault.${target.data.properties.name}.id`
    },
    azurerm_storage_account: {
      field: 'storage_account_id',
      directOnly: true,
      value: (target) => `azurerm_storage_account.${target.data.properties.name}.id`
    },
    azurerm_application_insights: {
      field: 'application_insights_id',
      directOnly: true,
      value: (target) => `azurerm_application_insights.${target.data.properties.name}.id`
    }
  },
  azurerm_search_service: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_databricks_workspace: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_virtual_network: {
      field: 'custom_virtual_network_id',
      directOnly: true,
      value: (target) => `azurerm_virtual_network.${target.data.properties.name}.id`
    }
  },
  azurerm_iothub: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_signalr_service: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_notification_hub_namespace: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_vpn_gateway: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_subnet: {
      field: 'ip_configuration.subnet_id',
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
    },
    azurerm_public_ip: {
      field: 'ip_configuration.public_ip_address_id',
      directOnly: true,
      value: (target) => `azurerm_public_ip.${target.data.properties.name}.id`
    }
  },
  azurerm_cdn_frontdoor_profile: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_recovery_services_vault: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_automation_account: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_static_web_app: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_stream_analytics_job: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_monitor_diagnostic_setting: {
    azurerm_log_analytics_workspace: {
      field: 'log_analytics_workspace_id',
      directOnly: true,
      value: (target) => `azurerm_log_analytics_workspace.${target.data.properties.name}.id`
    }
  },
  azurerm_virtual_hub: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_bastion_host: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_subnet: {
      field: 'ip_configuration.subnet_id',
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
    },
    azurerm_public_ip: {
      field: 'ip_configuration.public_ip_address_id',
      directOnly: true,
      value: (target) => `azurerm_public_ip.${target.data.properties.name}.id`
    }
  },
  azurerm_route_table: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_network_ddos_protection_plan: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_express_route_circuit: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_managed_disk: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_batch_account: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_storage_account: {
      field: 'storage_account_id',
      directOnly: true,
      value: (target) => `azurerm_storage_account.${target.data.properties.name}.id`
    }
  },
  azurerm_storage_data_lake_gen2_filesystem: {
    azurerm_storage_account: {
      field: 'storage_account_id',
      value: (target) => `azurerm_storage_account.${target.data.properties.name}.id`
    }
  },
  azurerm_mssql_server: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_kusto_cluster: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_web_application_firewall_policy: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_app_configuration: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_spring_cloud_service: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_eventgrid_topic: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_monitor_metric_alert: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_monitor_action_group: {
      field: 'action.action_group_id',
      directOnly: true,
      value: (target) => `azurerm_monitor_action_group.${target.data.properties.name}.id`
    }
  },
  azurerm_cognitive_deployment: {
    azurerm_cognitive_account: {
      field: 'cognitive_account_id',
      value: (target) => `azurerm_cognitive_account.${target.data.properties.name}.id`
    }
  },
  azurerm_private_dns_zone: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_application_security_group: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_local_network_gateway: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_virtual_wan: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_availability_set: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_app_service_environment_v3: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_subnet: {
      field: 'subnet_id',
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
    }
  },
  azurerm_mssql_elasticpool: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_mssql_server: {
      field: 'server_id',
      value: (target) => `azurerm_mssql_server.${target.data.properties.name}.id`
    },
    azurerm_sql_server: {
      field: 'server_id',
      value: (target) => `azurerm_sql_server.${target.data.properties.name}.id`
    }
  },
  azurerm_cosmosdb_sql_container: {
    azurerm_cosmosdb_account: {
      field: 'account_name',
      value: (target) => `azurerm_cosmosdb_account.${target.data.properties.name}.name`
    },
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_service_plan: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_windows_function_app: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_app_service_plan: {
      field: 'service_plan_id',
      value: (target) => `azurerm_app_service_plan.${target.data.properties.name}.id`
    },
    azurerm_service_plan: {
      field: 'service_plan_id',
      value: (target) => `azurerm_service_plan.${target.data.properties.name}.id`
    },
    azurerm_storage_account: {
      field: 'storage_account_name',
      directOnly: true,
      value: (target) => `azurerm_storage_account.${target.data.properties.name}.name`
    }
  },
  azurerm_firewall_policy: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_monitor_autoscale_setting: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_linux_virtual_machine_scale_set: {
      field: 'target_resource_id',
      directOnly: true,
      value: (target) => `azurerm_linux_virtual_machine_scale_set.${target.data.properties.name}.id`
    }
  },
  azurerm_eventgrid_system_topic: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_storage_account: {
      field: 'source_arm_resource_id',
      directOnly: true,
      value: (target) => `azurerm_storage_account.${target.data.properties.name}.id`
    },
    azurerm_eventhub_namespace: {
      field: 'source_arm_resource_id',
      directOnly: true,
      value: (target) => `azurerm_eventhub_namespace.${target.data.properties.name}.id`
    },
    azurerm_container_registry: {
      field: 'source_arm_resource_id',
      directOnly: true,
      value: (target) => `azurerm_container_registry.${target.data.properties.name}.id`
    }
  },
  azurerm_monitor_activity_log_alert: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    },
    azurerm_monitor_action_group: {
      field: 'action.action_group_id',
      directOnly: true,
      value: (target) => `azurerm_monitor_action_group.${target.data.properties.name}.id`
    }
  },
  azurerm_bot_service_azure_bot: {
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  }
}
