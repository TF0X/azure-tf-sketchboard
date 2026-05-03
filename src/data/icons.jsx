// Inline SVG icons per resource type. Designed at 24x24, monochrome white,
// rendered against the resource's accent color in AzureNode.
// Custom drawn — not the official Azure icon set, but visually distinct enough
// to read as architecture diagrams.

const ICONS = {
  // --- Core ---
  azurerm_resource_group: (
    <path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z" fill="currentColor" />
  ),

  // --- Network ---
  azurerm_virtual_network: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
    </g>
  ),
  azurerm_subnet: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" fill="currentColor" fillOpacity="0.4" />
    </g>
  ),
  azurerm_network_security_group: (
    <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" fill="currentColor" fillOpacity="0.9" />
  ),
  azurerm_network_interface: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <rect x="3" y="9" width="18" height="10" rx="1.5" />
      <path d="M7 9V6M11 9V6M15 9V6M19 9V6" />
      <circle cx="8" cy="14" r="1" fill="currentColor" />
      <circle cx="16" cy="14" r="1" fill="currentColor" />
    </g>
  ),
  azurerm_public_ip: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </g>
  ),
  azurerm_application_gateway: (
    <g fill="currentColor">
      <rect x="3" y="10" width="18" height="6" rx="2" />
      <path d="M6 10V7h3v3M11 10V5h2v5M15 10V7h3v3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </g>
  ),
  azurerm_virtual_network_peering: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8a4 4 0 0 1 8 0v8a4 4 0 0 0 8 0M16 8l4 0M16 8l0 4M8 16l-4 0M8 16l0-4" />
    </g>
  ),
  azurerm_private_endpoint: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <rect x="5" y="11" width="14" height="9" rx="1.5" fill="currentColor" fillOpacity="0.85" stroke="none" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </g>
  ),
  azurerm_cdn_profile: (
    <g fill="currentColor">
      <path d="M12 2 9 9 2 9.7l5.5 4.6L5.6 22 12 18l6.4 4-1.9-7.7 5.5-4.6L15 9 12 2Z" />
    </g>
  ),

  // --- Compute ---
  azurerm_linux_virtual_machine: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="13" rx="1.5" />
      <path d="M7 9l3 3-3 3M12 15h5" />
      <path d="M9 21h6" />
    </g>
  ),
  azurerm_windows_virtual_machine: (
    <g fill="currentColor">
      <rect x="3" y="3" width="8.5" height="8.5" />
      <rect x="12.5" y="3" width="8.5" height="8.5" />
      <rect x="3" y="12.5" width="8.5" height="8.5" />
      <rect x="12.5" y="12.5" width="8.5" height="8.5" />
    </g>
  ),
  azurerm_kubernetes_cluster: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <polygon points="12,3 20,7 20,17 12,21 4,17 4,7" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <path d="M12 3v6M20 7l-5.5 3.5M20 17l-5.5-3.5M12 21v-6M4 17l5.5-3.5M4 7l5.5 3.5" />
    </g>
  ),

  // --- App ---
  azurerm_app_service_plan: (
    <g fill="currentColor">
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </g>
  ),
  azurerm_linux_web_app: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      <path d="M9 9l-2 3 2 3M15 9l2 3-2 3" />
    </g>
  ),
  azurerm_linux_function_app: (
    <path d="M13 2 4 14h7l-2 8 9-12h-7l2-8Z" fill="currentColor" />
  ),
  azurerm_container_registry: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M3 6 12 2l9 4-9 4-9-4Z" fill="currentColor" fillOpacity="0.85" />
      <path d="M3 6v12l9 4 9-4V6" />
      <path d="M12 10v12" />
    </g>
  ),

  // --- Data ---
  azurerm_storage_account: (
    <g fill="currentColor">
      <ellipse cx="12" cy="5" rx="8" ry="2.5" />
      <path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
      <path d="M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" />
    </g>
  ),
  azurerm_sql_server: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7">
      <ellipse cx="12" cy="5" rx="8" ry="2.5" fill="currentColor" />
      <path d="M4 5v14c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
      <path d="M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" />
    </g>
  ),
  azurerm_mssql_database: (
    <g fill="currentColor">
      <ellipse cx="12" cy="5" rx="8" ry="2.5" />
      <path d="M4 5v14c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5c0 1.4-3.6 2.5-8 2.5S4 6.4 4 5Z" />
    </g>
  ),
  azurerm_cosmosdb_account: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="3.5" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    </g>
  ),
  azurerm_postgresql_flexible_server: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <path d="M5 7c0-2 2-4 7-4s7 2 7 4v10c0 2-2 4-7 4s-7-2-7-4V7Z" fill="currentColor" fillOpacity="0.7" stroke="none" />
      <path d="M9 11v5M12 11v5M15 11v5" stroke="#000" strokeWidth="1.4" strokeOpacity="0.4" />
    </g>
  ),
  azurerm_redis_cache: (
    <g fill="currentColor">
      <path d="M3 5l9-3 9 3-9 3-9-3Z" />
      <path d="M3 12l9-3 9 3-9 3-9-3Z" fillOpacity="0.85" />
      <path d="M3 19l9-3 9 3-9 3-9-3Z" fillOpacity="0.7" />
    </g>
  ),
  azurerm_key_vault: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <circle cx="9" cy="12" r="4" fill="currentColor" />
      <path d="M13 12h7M17 12v4M20 12v3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </g>
  ),

  // --- Ops / Misc ---
  azurerm_log_analytics_workspace: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V5M3 21h18" />
      <path d="M7 17l4-5 3 3 6-8" />
    </g>
  ),
  azurerm_servicebus_namespace: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="12" rx="1.5" fill="currentColor" fillOpacity="0.85" stroke="none" />
      <path d="M3 7l9 7 9-7" stroke="#000" strokeOpacity="0.5" strokeWidth="1.6" />
    </g>
  ),

  // --- Identity & RBAC ---
  azurerm_user_assigned_identity: (
    <g fill="currentColor">
      <rect x="3" y="5" width="18" height="14" rx="2" fillOpacity="0.85" />
      <circle cx="9" cy="11" r="2.4" fill="#000" fillOpacity="0.45" />
      <path d="M5.5 17c0-2 1.6-3.4 3.5-3.4s3.5 1.4 3.5 3.4" fill="none" stroke="#000" strokeOpacity="0.45" strokeWidth="1.4" />
      <path d="M14 10h5M14 13h5M14 16h3" stroke="#000" strokeOpacity="0.45" strokeWidth="1.4" strokeLinecap="round" />
    </g>
  ),
  azurerm_role_assignment: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
      <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" fill="currentColor" fillOpacity="0.85" stroke="none" />
      <path d="M8 12l3 3 5-6" stroke="#000" strokeOpacity="0.55" strokeWidth="2" />
    </g>
  )
}

const FALLBACK = (
  <g fill="none" stroke="currentColor" strokeWidth="1.7">
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M9 9h6v6H9z" fill="currentColor" />
  </g>
)

export function ResourceIcon({ resourceType, size = 24 }) {
  const inner = ICONS[resourceType] ?? FALLBACK
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {inner}
    </svg>
  )
}

export function hasIconFor(resourceType) {
  return Object.prototype.hasOwnProperty.call(ICONS, resourceType)
}
