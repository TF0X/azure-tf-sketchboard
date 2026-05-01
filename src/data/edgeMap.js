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
    azurerm_subnet: {
      field: 'subnet_id',
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
    },
    azurerm_resource_group: {
      field: 'resource_group_name',
      value: (target) => `azurerm_resource_group.${target.data.properties.name}.name`
    }
  },
  azurerm_windows_virtual_machine: {
    azurerm_subnet: {
      field: 'subnet_id',
      value: (target) => `azurerm_subnet.${target.data.properties.name}.id`
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
  }
}
