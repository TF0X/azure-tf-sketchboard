// AUTO-GENERATED — category: Networking
export default [
  {
    type: "azurerm_app_service_slot_virtual_network_swift_connection",
    label: "App Service Slot Virtual Network Swift Connection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "app_service_id", label: "App Service Id", type: "text", default: "" },
    { name: "slot_name", label: "Slot Name", type: "text", default: "" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_app_service_virtual_network_swift_connection",
    label: "App Service Virtual Network Swift Connection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "app_service_id", label: "App Service Id", type: "text", default: "" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_application_load_balancer",
    label: "Application Load Balancer",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_application_load_balancer_frontend",
    label: "Application Load Balancer Frontend",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "application_load_balancer_id", label: "Application Load Balancer Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_application_load_balancer_security_policy",
    label: "Application Load Balancer Security Policy",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "application_load_balancer_id", label: "Application Load Balancer Id", type: "text", default: "" },
    { name: "web_application_firewall_policy_id", label: "Web Application Firewall Policy Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_application_load_balancer_subnet_association",
    label: "Application Load Balancer Subnet Association",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "application_load_balancer_id", label: "Application Load Balancer Id", type: "text", default: "" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_arc_private_link_scope",
    label: "Arc Private Link Scope",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_cdn_frontdoor_custom_domain",
    label: "Cdn Frontdoor Custom Domain",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cdn_frontdoor_profile_id", label: "Cdn Frontdoor Profile Id", type: "text", default: "" },
    { name: "host_name", label: "Host Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cdn_frontdoor_custom_domain_association",
    label: "Cdn Frontdoor Custom Domain Association",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "cdn_frontdoor_custom_domain_id", label: "Cdn Frontdoor Custom Domain Id", type: "text", default: "" },
    { name: "cdn_frontdoor_route_ids", label: "Cdn Frontdoor Route Ids", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cdn_frontdoor_endpoint",
    label: "Cdn Frontdoor Endpoint",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cdn_frontdoor_profile_id", label: "Cdn Frontdoor Profile Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_cdn_frontdoor_firewall_policy",
    label: "Cdn Frontdoor Firewall Policy",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "mode", label: "Mode", type: "text", default: "" },
    { name: "sku_name", label: "Sku Name", type: "text", default: "Standard" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_cdn_frontdoor_origin",
    label: "Cdn Frontdoor Origin",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cdn_frontdoor_origin_group_id", label: "Cdn Frontdoor Origin Group Id", type: "text", default: "" },
    { name: "certificate_name_check_enabled", label: "Certificate Name Check Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "host_name", label: "Host Name", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_cdn_frontdoor_origin_group",
    label: "Cdn Frontdoor Origin Group",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cdn_frontdoor_profile_id", label: "Cdn Frontdoor Profile Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cdn_frontdoor_route",
    label: "Cdn Frontdoor Route",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cdn_frontdoor_endpoint_id", label: "Cdn Frontdoor Endpoint Id", type: "text", default: "" },
    { name: "cdn_frontdoor_origin_group_id", label: "Cdn Frontdoor Origin Group Id", type: "text", default: "" },
    { name: "patterns_to_match", label: "Patterns To Match", type: "text", default: "" },
    { name: "supported_protocols", label: "Supported Protocols", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_cdn_frontdoor_rule",
    label: "Cdn Frontdoor Rule",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cdn_frontdoor_rule_set_id", label: "Cdn Frontdoor Rule Set Id", type: "text", default: "" },
    { name: "order", label: "Order", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_cdn_frontdoor_rule_set",
    label: "Cdn Frontdoor Rule Set",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cdn_frontdoor_profile_id", label: "Cdn Frontdoor Profile Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cdn_frontdoor_secret",
    label: "Cdn Frontdoor Secret",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cdn_frontdoor_profile_id", label: "Cdn Frontdoor Profile Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_cdn_frontdoor_security_policy",
    label: "Cdn Frontdoor Security Policy",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "cdn_frontdoor_profile_id", label: "Cdn Frontdoor Profile Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dev_center_network_connection",
    label: "Dev Center Network Connection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "domain_join_type", label: "Domain Join Type", type: "text", default: "" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dev_test_virtual_network",
    label: "Dev Test Virtual Network",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "lab_name", label: "Lab Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dns_a_record",
    label: "Dns A Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dns_aaaa_record",
    label: "Dns Aaaa Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dns_caa_record",
    label: "Dns Caa Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dns_cname_record",
    label: "Dns Cname Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dns_mx_record",
    label: "Dns Mx Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dns_ns_record",
    label: "Dns Ns Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "records", label: "Records", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dns_ptr_record",
    label: "Dns Ptr Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "records", label: "Records", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dns_srv_record",
    label: "Dns Srv Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_dns_txt_record",
    label: "Dns Txt Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_express_route_circuit_authorization",
    label: "Express Route Circuit Authorization",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "express_route_circuit_name", label: "Express Route Circuit Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_express_route_circuit_connection",
    label: "Express Route Circuit Connection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "address_prefix_ipv4", label: "Address Prefix Ipv4", type: "text", default: "" },
    { name: "peer_peering_id", label: "Peer Peering Id", type: "text", default: "" },
    { name: "peering_id", label: "Peering Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_express_route_circuit_peering",
    label: "Express Route Circuit Peering",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "express_route_circuit_name", label: "Express Route Circuit Name", type: "text", default: "" },
    { name: "peering_type", label: "Peering Type", type: "text", default: "" },
    { name: "vlan_id", label: "Vlan Id", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_express_route_connection",
    label: "Express Route Connection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "express_route_circuit_peering_id", label: "Express Route Circuit Peering Id", type: "text", default: "" },
    { name: "express_route_gateway_id", label: "Express Route Gateway Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_express_route_gateway",
    label: "Express Route Gateway",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "scale_units", label: "Scale Units", type: "number", default: "1" },
    { name: "virtual_hub_id", label: "Virtual Hub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_express_route_port",
    label: "Express Route Port",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "bandwidth_in_gbps", label: "Bandwidth In Gbps", type: "number", default: "1" },
    { name: "encapsulation", label: "Encapsulation", type: "text", default: "" },
    { name: "peering_location", label: "Peering Location", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_express_route_port_authorization",
    label: "Express Route Port Authorization",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "express_route_port_name", label: "Express Route Port Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_firewall_application_rule_collection",
    label: "Firewall Application Rule Collection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "action", label: "Action", type: "text", default: "" },
    { name: "azure_firewall_name", label: "Azure Firewall Name", type: "text", default: "" },
    { name: "priority", label: "Priority", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_firewall_nat_rule_collection",
    label: "Firewall Nat Rule Collection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "action", label: "Action", type: "text", default: "" },
    { name: "azure_firewall_name", label: "Azure Firewall Name", type: "text", default: "" },
    { name: "priority", label: "Priority", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_firewall_network_rule_collection",
    label: "Firewall Network Rule Collection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "action", label: "Action", type: "text", default: "" },
    { name: "azure_firewall_name", label: "Azure Firewall Name", type: "text", default: "" },
    { name: "priority", label: "Priority", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_frontdoor",
    label: "Frontdoor",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "friendly_name", label: "Friendly Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_frontdoor_custom_https_configuration",
    label: "Frontdoor Custom Https Configuration",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "custom_https_provisioning_enabled", label: "Custom Https Provisioning Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "frontend_endpoint_id", label: "Frontend Endpoint Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_frontdoor_firewall_policy",
    label: "Frontdoor Firewall Policy",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_frontdoor_rules_engine",
    label: "Frontdoor Rules Engine",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "frontdoor_name", label: "Frontdoor Name", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_ip_group",
    label: "Ip Group",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_ip_group_cidr",
    label: "Ip Group Cidr",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "cidr", label: "Cidr", type: "text", default: "" },
    { name: "ip_group_id", label: "Ip Group Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_lb_nat_pool",
    label: "Lb Nat Pool",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "backend_port", label: "Backend Port", type: "number", default: "1" },
    { name: "frontend_ip_configuration_name", label: "Frontend Ip Configuration Name", type: "text", default: "" },
    { name: "frontend_port_end", label: "Frontend Port End", type: "number", default: "1" },
    { name: "frontend_port_start", label: "Frontend Port Start", type: "number", default: "1" },
    { name: "loadbalancer_id", label: "Loadbalancer Id", type: "text", default: "" },
    { name: "protocol", label: "Protocol", type: "text", default: "Tcp" },
    { name: "idle_timeout_in_minutes", label: "Idle Timeout In Minutes", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_lb_nat_rule",
    label: "Lb Nat Rule",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "backend_port", label: "Backend Port", type: "number", default: "1" },
    { name: "frontend_ip_configuration_name", label: "Frontend Ip Configuration Name", type: "text", default: "" },
    { name: "loadbalancer_id", label: "Loadbalancer Id", type: "text", default: "" },
    { name: "protocol", label: "Protocol", type: "text", default: "Tcp" },
    { name: "idle_timeout_in_minutes", label: "Idle Timeout In Minutes", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_nat_gateway_public_ip_association",
    label: "Nat Gateway Public Ip Association",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "nat_gateway_id", label: "Nat Gateway Id", type: "text", default: "" },
    { name: "public_ip_address_id", label: "Public Ip Address Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_nat_gateway_public_ip_prefix_association",
    label: "Nat Gateway Public Ip Prefix Association",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "nat_gateway_id", label: "Nat Gateway Id", type: "text", default: "" },
    { name: "public_ip_prefix_id", label: "Public Ip Prefix Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_connection_monitor",
    label: "Network Connection Monitor",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "network_watcher_id", label: "Network Watcher Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_function_azure_traffic_collector",
    label: "Network Function Azure Traffic Collector",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_network_function_collector_policy",
    label: "Network Function Collector Policy",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "traffic_collector_id", label: "Traffic Collector Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_interface_application_gateway_backend_address_pool_association",
    label: "Network Interface Application Gateway Backend Address Pool Association",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "backend_address_pool_id", label: "Backend Address Pool Id", type: "text", default: "" },
    { name: "ip_configuration_name", label: "Ip Configuration Name", type: "text", default: "" },
    { name: "network_interface_id", label: "Network Interface Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_interface_application_security_group_association",
    label: "Network Interface Application Security Group Association",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "application_security_group_id", label: "Application Security Group Id", type: "text", default: "" },
    { name: "network_interface_id", label: "Network Interface Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_interface_backend_address_pool_association",
    label: "Network Interface Backend Address Pool Association",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "backend_address_pool_id", label: "Backend Address Pool Id", type: "text", default: "" },
    { name: "ip_configuration_name", label: "Ip Configuration Name", type: "text", default: "" },
    { name: "network_interface_id", label: "Network Interface Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_interface_nat_rule_association",
    label: "Network Interface Nat Rule Association",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "ip_configuration_name", label: "Ip Configuration Name", type: "text", default: "" },
    { name: "nat_rule_id", label: "Nat Rule Id", type: "text", default: "" },
    { name: "network_interface_id", label: "Network Interface Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_interface_security_group_association",
    label: "Network Interface Security Group Association",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "network_interface_id", label: "Network Interface Id", type: "text", default: "" },
    { name: "network_security_group_id", label: "Network Security Group Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager",
    label: "Network Manager",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_network_manager_admin_rule",
    label: "Network Manager Admin Rule",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "action", label: "Action", type: "text", default: "" },
    { name: "admin_rule_collection_id", label: "Admin Rule Collection Id", type: "text", default: "" },
    { name: "direction", label: "Direction", type: "text", default: "" },
    { name: "priority", label: "Priority", type: "number", default: "1" },
    { name: "protocol", label: "Protocol", type: "text", default: "Tcp" }
  ]
  },
  {
    type: "azurerm_network_manager_admin_rule_collection",
    label: "Network Manager Admin Rule Collection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "network_group_ids", label: "Network Group Ids", type: "text", default: "" },
    { name: "security_admin_configuration_id", label: "Security Admin Configuration Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager_connectivity_configuration",
    label: "Network Manager Connectivity Configuration",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "connectivity_topology", label: "Connectivity Topology", type: "text", default: "" },
    { name: "network_manager_id", label: "Network Manager Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager_deployment",
    label: "Network Manager Deployment",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "configuration_ids", label: "Configuration Ids", type: "text", default: "" },
    { name: "network_manager_id", label: "Network Manager Id", type: "text", default: "" },
    { name: "scope_access", label: "Scope Access", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager_ipam_pool",
    label: "Network Manager Ipam Pool",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "address_prefixes", label: "Address Prefixes", type: "text", default: "10.0.1.0/24" },
    { name: "network_manager_id", label: "Network Manager Id", type: "text", default: "" },
    { name: "display_name", label: "Display Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager_ipam_pool_static_cidr",
    label: "Network Manager Ipam Pool Static Cidr",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "ipam_pool_id", label: "Ipam Pool Id", type: "text", default: "" },
    { name: "address_prefixes", label: "Address Prefixes", type: "text", default: "10.0.1.0/24" }
  ]
  },
  {
    type: "azurerm_network_manager_network_group",
    label: "Network Manager Network Group",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "network_manager_id", label: "Network Manager Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager_routing_configuration",
    label: "Network Manager Routing Configuration",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "network_manager_id", label: "Network Manager Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager_routing_rule",
    label: "Network Manager Routing Rule",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "rule_collection_id", label: "Rule Collection Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager_routing_rule_collection",
    label: "Network Manager Routing Rule Collection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "network_group_ids", label: "Network Group Ids", type: "text", default: "" },
    { name: "routing_configuration_id", label: "Routing Configuration Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager_scope_connection",
    label: "Network Manager Scope Connection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "network_manager_id", label: "Network Manager Id", type: "text", default: "" },
    { name: "target_scope_id", label: "Target Scope Id", type: "text", default: "" },
    { name: "tenant_id", label: "Tenant Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager_security_admin_configuration",
    label: "Network Manager Security Admin Configuration",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "network_manager_id", label: "Network Manager Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager_static_member",
    label: "Network Manager Static Member",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "network_group_id", label: "Network Group Id", type: "text", default: "" },
    { name: "target_virtual_network_id", label: "Target Virtual Network Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager_verifier_workspace",
    label: "Network Manager Verifier Workspace",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "network_manager_id", label: "Network Manager Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_manager_verifier_workspace_reachability_analysis_intent",
    label: "Network Manager Verifier Workspace Reachability Analysis Intent",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "destination_resource_id", label: "Destination Resource Id", type: "text", default: "" },
    { name: "source_resource_id", label: "Source Resource Id", type: "text", default: "" },
    { name: "verifier_workspace_id", label: "Verifier Workspace Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_packet_capture",
    label: "Network Packet Capture",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "network_watcher_name", label: "Network Watcher Name", type: "text", default: "" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_profile",
    label: "Network Profile",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_network_security_perimeter",
    label: "Network Security Perimeter",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_network_security_perimeter_access_rule",
    label: "Network Security Perimeter Access Rule",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "direction", label: "Direction", type: "text", default: "" },
    { name: "network_security_perimeter_profile_id", label: "Network Security Perimeter Profile Id", type: "text", default: "" },
    { name: "address_prefixes", label: "Address Prefixes", type: "text", default: "10.0.1.0/24" }
  ]
  },
  {
    type: "azurerm_network_security_perimeter_association",
    label: "Network Security Perimeter Association",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "access_mode", label: "Access Mode", type: "text", default: "" },
    { name: "network_security_perimeter_profile_id", label: "Network Security Perimeter Profile Id", type: "text", default: "" },
    { name: "resource_id", label: "Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_security_perimeter_profile",
    label: "Network Security Perimeter Profile",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "network_security_perimeter_id", label: "Network Security Perimeter Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_network_security_rule",
    label: "Network Security Rule",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "access", label: "Access", type: "text", default: "" },
    { name: "direction", label: "Direction", type: "text", default: "" },
    { name: "network_security_group_name", label: "Network Security Group Name", type: "text", default: "" },
    { name: "priority", label: "Priority", type: "number", default: "1" },
    { name: "protocol", label: "Protocol", type: "text", default: "Tcp" }
  ]
  },
  {
    type: "azurerm_network_watcher",
    label: "Network Watcher",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_network_watcher_flow_log",
    label: "Network Watcher Flow Log",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "network_watcher_name", label: "Network Watcher Name", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" },
    { name: "version", label: "Version", type: "number", default: "1" }
  ]
  },
  {
    type: "azurerm_palo_alto_next_generation_firewall_virtual_hub_local_rulestack",
    label: "Palo Alto Next Generation Firewall Virtual Hub Local Rulestack",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "rulestack_id", label: "Rulestack Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_palo_alto_next_generation_firewall_virtual_hub_panorama",
    label: "Palo Alto Next Generation Firewall Virtual Hub Panorama",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "panorama_base64_config", label: "Panorama Base64 Config", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_palo_alto_next_generation_firewall_virtual_hub_strata_cloud_manager",
    label: "Palo Alto Next Generation Firewall Virtual Hub Strata Cloud Manager",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "strata_cloud_manager_tenant_name", label: "Strata Cloud Manager Tenant Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_palo_alto_next_generation_firewall_virtual_network_local_rulestack",
    label: "Palo Alto Next Generation Firewall Virtual Network Local Rulestack",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "rulestack_id", label: "Rulestack Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_palo_alto_next_generation_firewall_virtual_network_panorama",
    label: "Palo Alto Next Generation Firewall Virtual Network Panorama",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "panorama_base64_config", label: "Panorama Base64 Config", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_palo_alto_next_generation_firewall_virtual_network_strata_cloud_manager",
    label: "Palo Alto Next Generation Firewall Virtual Network Strata Cloud Manager",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "strata_cloud_manager_tenant_name", label: "Strata Cloud Manager Tenant Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_palo_alto_virtual_network_appliance",
    label: "Palo Alto Virtual Network Appliance",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "virtual_hub_id", label: "Virtual Hub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_point_to_site_vpn_gateway",
    label: "Point To Site Vpn Gateway",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "scale_unit", label: "Scale Unit", type: "number", default: "1" },
    { name: "virtual_hub_id", label: "Virtual Hub Id", type: "text", default: "" },
    { name: "vpn_server_configuration_id", label: "Vpn Server Configuration Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_dns_a_record",
    label: "Private Dns A Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "records", label: "Records", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_dns_aaaa_record",
    label: "Private Dns Aaaa Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "records", label: "Records", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_dns_cname_record",
    label: "Private Dns Cname Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "record", label: "Record", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_dns_mx_record",
    label: "Private Dns Mx Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_dns_ptr_record",
    label: "Private Dns Ptr Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "records", label: "Records", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_dns_resolver",
    label: "Private Dns Resolver",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "virtual_network_id", label: "Virtual Network Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_dns_resolver_dns_forwarding_ruleset",
    label: "Private Dns Resolver Dns Forwarding Ruleset",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "private_dns_resolver_outbound_endpoint_ids", label: "Private Dns Resolver Outbound Endpoint Ids", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_dns_resolver_forwarding_rule",
    label: "Private Dns Resolver Forwarding Rule",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "dns_forwarding_ruleset_id", label: "Dns Forwarding Ruleset Id", type: "text", default: "" },
    { name: "domain_name", label: "Domain Name", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_private_dns_resolver_inbound_endpoint",
    label: "Private Dns Resolver Inbound Endpoint",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "private_dns_resolver_id", label: "Private Dns Resolver Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_dns_resolver_outbound_endpoint",
    label: "Private Dns Resolver Outbound Endpoint",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "private_dns_resolver_id", label: "Private Dns Resolver Id", type: "text", default: "" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_dns_resolver_virtual_network_link",
    label: "Private Dns Resolver Virtual Network Link",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "dns_forwarding_ruleset_id", label: "Dns Forwarding Ruleset Id", type: "text", default: "" },
    { name: "virtual_network_id", label: "Virtual Network Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_dns_srv_record",
    label: "Private Dns Srv Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_dns_txt_record",
    label: "Private Dns Txt Record",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "ttl", label: "Ttl", type: "number", default: "1" },
    { name: "zone_name", label: "Zone Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_dns_zone_virtual_network_link",
    label: "Private Dns Zone Virtual Network Link",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "private_dns_zone_name", label: "Private Dns Zone Name", type: "text", default: "" },
    { name: "virtual_network_id", label: "Virtual Network Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_endpoint_application_security_group_association",
    label: "Private Endpoint Application Security Group Association",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "application_security_group_id", label: "Application Security Group Id", type: "text", default: "" },
    { name: "private_endpoint_id", label: "Private Endpoint Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_private_link_service",
    label: "Private Link Service",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_public_ip_prefix",
    label: "Public Ip Prefix",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" },
    { name: "sku_tier", label: "Sku Tier", type: "text", default: "Standard" }
  ]
  },
  {
    type: "azurerm_resource_management_private_link",
    label: "Resource Management Private Link",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_resource_management_private_link_association",
    label: "Resource Management Private Link Association",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "management_group_id", label: "Management Group Id", type: "text", default: "" },
    { name: "public_network_access_enabled", label: "Public Network Access Enabled", type: "select", options: ["true", "false"], default: "false" },
    { name: "resource_management_private_link_id", label: "Resource Management Private Link Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_route_filter",
    label: "Route Filter",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_route_map",
    label: "Route Map",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "virtual_hub_id", label: "Virtual Hub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_route_server",
    label: "Route Server",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "public_ip_address_id", label: "Public Ip Address Id", type: "text", default: "" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_route_server_bgp_connection",
    label: "Route Server Bgp Connection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "peer_asn", label: "Peer Asn", type: "number", default: "1" },
    { name: "peer_ip", label: "Peer Ip", type: "text", default: "" },
    { name: "route_server_id", label: "Route Server Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_search_shared_private_link_service",
    label: "Search Shared Private Link Service",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "search_service_id", label: "Search Service Id", type: "text", default: "" },
    { name: "subresource_name", label: "Subresource Name", type: "text", default: "" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_signalr_service_network_acl",
    label: "Signalr Service Network Acl",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "default_action", label: "Default Action", type: "text", default: "" },
    { name: "signalr_service_id", label: "Signalr Service Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_signalr_shared_private_link_resource",
    label: "Signalr Shared Private Link Resource",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "signalr_service_id", label: "Signalr Service Id", type: "text", default: "" },
    { name: "sub_resource_name", label: "Sub Resource Name", type: "text", default: "" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_stack_hci_network_interface",
    label: "Stack Hci Network Interface",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "custom_location_id", label: "Custom Location Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_storage_account_network_rules",
    label: "Storage Account Network Rules",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "default_action", label: "Default Action", type: "text", default: "" },
    { name: "storage_account_id", label: "Storage Account Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_subnet_nat_gateway_association",
    label: "Subnet Nat Gateway Association",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "nat_gateway_id", label: "Nat Gateway Id", type: "text", default: "" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_subnet_network_security_group_association",
    label: "Subnet Network Security Group Association",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "network_security_group_id", label: "Network Security Group Id", type: "text", default: "" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_subnet_service_endpoint_storage_policy",
    label: "Subnet Service Endpoint Storage Policy",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" }
  ]
  },
  {
    type: "azurerm_traffic_manager_azure_endpoint",
    label: "Traffic Manager Azure Endpoint",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "profile_id", label: "Profile Id", type: "text", default: "" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_traffic_manager_external_endpoint",
    label: "Traffic Manager External Endpoint",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "profile_id", label: "Profile Id", type: "text", default: "" },
    { name: "target", label: "Target", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_traffic_manager_nested_endpoint",
    label: "Traffic Manager Nested Endpoint",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "minimum_child_endpoints", label: "Minimum Child Endpoints", type: "number", default: "1" },
    { name: "profile_id", label: "Profile Id", type: "text", default: "" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" },
    { name: "enabled", label: "Enabled", type: "select", options: ["true", "false"], default: "false" }
  ]
  },
  {
    type: "azurerm_traffic_manager_profile",
    label: "Traffic Manager Profile",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "traffic_routing_method", label: "Traffic Routing Method", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_hub_bgp_connection",
    label: "Virtual Hub Bgp Connection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "peer_asn", label: "Peer Asn", type: "number", default: "1" },
    { name: "peer_ip", label: "Peer Ip", type: "text", default: "" },
    { name: "virtual_hub_id", label: "Virtual Hub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_hub_connection",
    label: "Virtual Hub Connection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "remote_virtual_network_id", label: "Remote Virtual Network Id", type: "text", default: "" },
    { name: "virtual_hub_id", label: "Virtual Hub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_hub_ip",
    label: "Virtual Hub Ip",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "public_ip_address_id", label: "Public Ip Address Id", type: "text", default: "" },
    { name: "subnet_id", label: "Subnet Id", type: "text", default: "" },
    { name: "virtual_hub_id", label: "Virtual Hub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_hub_route_table",
    label: "Virtual Hub Route Table",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "virtual_hub_id", label: "Virtual Hub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_hub_routing_intent",
    label: "Virtual Hub Routing Intent",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "virtual_hub_id", label: "Virtual Hub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_hub_security_partner_provider",
    label: "Virtual Hub Security Partner Provider",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "security_provider_name", label: "Security Provider Name", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_network_dns_servers",
    label: "Virtual Network Dns Servers",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "virtual_network_id", label: "Virtual Network Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_network_gateway",
    label: "Virtual Network Gateway",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "sku", label: "Sku", type: "text", default: "Standard" },
    { name: "type", label: "Type", type: "text", default: "" },
    { name: "generation", label: "Generation", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_network_gateway_connection",
    label: "Virtual Network Gateway Connection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "type", label: "Type", type: "text", default: "" },
    { name: "virtual_network_gateway_id", label: "Virtual Network Gateway Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_virtual_network_gateway_nat_rule",
    label: "Virtual Network Gateway Nat Rule",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "virtual_network_gateway_id", label: "Virtual Network Gateway Id", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_vmware_express_route_authorization",
    label: "Vmware Express Route Authorization",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "private_cloud_id", label: "Private Cloud Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_voice_services_communications_gateway",
    label: "Voice Services Communications Gateway",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "codecs", label: "Codecs", type: "text", default: "" },
    { name: "connectivity", label: "Connectivity", type: "text", default: "" },
    { name: "e911_type", label: "E911 Type", type: "text", default: "" },
    { name: "platforms", label: "Platforms", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_voice_services_communications_gateway_test_line",
    label: "Voice Services Communications Gateway Test Line",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "phone_number", label: "Phone Number", type: "text", default: "" },
    { name: "purpose", label: "Purpose", type: "text", default: "" },
    { name: "voice_services_communications_gateway_id", label: "Voice Services Communications Gateway Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_vpn_gateway_connection",
    label: "Vpn Gateway Connection",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "remote_vpn_site_id", label: "Remote Vpn Site Id", type: "text", default: "" },
    { name: "vpn_gateway_id", label: "Vpn Gateway Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_vpn_gateway_nat_rule",
    label: "Vpn Gateway Nat Rule",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "vpn_gateway_id", label: "Vpn Gateway Id", type: "text", default: "" },
    { name: "type", label: "Type", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_vpn_server_configuration",
    label: "Vpn Server Configuration",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "vpn_authentication_types", label: "Vpn Authentication Types", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_vpn_site",
    label: "Vpn Site",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "location", label: "Location", type: "select", options: ["East US", "West Europe", "Southeast Asia", "UK South", "Australia East"], default: "East US" },
    { name: "virtual_wan_id", label: "Virtual Wan Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_web_pubsub_network_acl",
    label: "Web Pubsub Network Acl",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "web_pubsub_id", label: "Web Pubsub Id", type: "text", default: "" }
  ]
  },
  {
    type: "azurerm_web_pubsub_shared_private_link_resource",
    label: "Web Pubsub Shared Private Link Resource",
    category: "Networking",
    icon: "🌐",
    color: "#0078D4",
    properties: [
    { name: "name", label: "Name", type: "text", default: "" },
    { name: "subresource_name", label: "Subresource Name", type: "text", default: "" },
    { name: "target_resource_id", label: "Target Resource Id", type: "text", default: "" },
    { name: "web_pubsub_id", label: "Web Pubsub Id", type: "text", default: "" }
  ]
  }
]
