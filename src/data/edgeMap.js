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
  }
}
