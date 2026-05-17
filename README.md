# 🏗️ Azure TF Sketchboard — Visual Terraform Builder for Azure

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3+-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4+-646CFF?logo=vite)](https://vitejs.dev)
[![AzureRM](https://img.shields.io/badge/AzureRM-4.73.0-0078D4?logo=microsoftazure)](https://registry.terraform.io/providers/hashicorp/azurerm/latest)

> Design Azure infrastructure visually. Export production-ready Terraform — no YAML, no hand-coding.

Azure TF Sketchboard is a browser-based drag-and-drop canvas for designing Azure infrastructure as code. Drop resources, connect dependencies, edit properties, and generate a complete multi-file Terraform project in one click.

![Azure TF Sketchboard Demo](images/image.png)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Drag-and-Drop Canvas** | Visual architecture design with 1,100+ AzureRM resource types |
| 🔗 **Smart Wiring** | Connect nodes to auto-populate Terraform cross-references |
| ⚙️ **Schema-Driven Forms** | Property forms derived from real `azurerm` v4.73.0 provider schemas |
| 📝 **Multi-File Export** | Generates grouped Terraform modules (`core`, `network`, `vm`, `app`, `data`) |
| 📦 **ZIP Download** | Download the full project as a ready-to-use ZIP |
| 🔍 **Live Preview** | Real-time HCL preview as you configure |
| 🗂️ **Category Palette** | 19 collapsible resource categories loaded in parallel for fast startup |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+

### Install & Run

```bash
git clone https://github.com/yourusername/azure-tf-sketchboard.git
cd azure-tf-sketchboard
npm install
npm run dev
```

Open `http://localhost:5173`.

### Build for Production

```bash
npm run build       # output → dist/
npm run preview     # preview production build locally
```

---

## 📖 Workflow

1. **Pick a resource** from the left palette (search or browse categories)
2. **Drop it** onto the canvas
3. **Connect dependencies** by dragging edges between nodes
4. **Configure properties** in the right panel (click any node)
5. **Generate Terraform** — click the button in the header
6. **Download ZIP** — complete module structure, ready for `terraform init`

---

## 🔌 Connection Examples

Connections tell the generator which Terraform references to inject. Direction follows the dependency (child → parent or component → dependency).

```text
Resource Group → Virtual Network → Subnet
Subnet → Network Interface → Virtual Machine
Public IP → Network Interface
App Service Plan → Linux Web App
SQL Server → SQL Database
AKS Cluster → Subnet
```

### VMs, NICs, and Public IPs

The correct Terraform model for a VM with a public IP:

```text
Resource Group → Virtual Network → Subnet → Network Interface → Linux VM
Public IP → Network Interface
```

If you skip the Network Interface node and connect a VM directly to a Subnet, the generator creates a synthetic NIC automatically.

---

## 📁 Generated Project Structure

```
azure-terraform.zip
├── providers.tf
├── main.tf           ← calls all modules
├── outputs.tf
└── modules/
    ├── core/         ← resource groups
    │   ├── main.tf
    │   ├── variables.tf
    │   └── outputs.tf
    ├── network/      ← VNets, subnets, NSGs, NICs, public IPs, gateways
    ├── vm/           ← Linux & Windows VMs
    ├── app/          ← App Service, AKS, Container Registry, Functions
    └── data/         ← Storage, SQL, Cosmos DB, Key Vault, Service Bus, logs
```

Each module gets its own `variables.tf` (inputs from root) and `outputs.tf` (IDs exposed upward).

---

## 🗺️ Auto-Wiring Reference

When you draw an edge between two resources, the generator injects the correct Terraform reference into the source block:

| Source | Target | Injected Field |
|---|---|---|
| Virtual Network | Resource Group | `resource_group_name` |
| Subnet | Virtual Network | `virtual_network_name` |
| Subnet | Resource Group | `resource_group_name` |
| Network Interface | Subnet | `ip_configuration.subnet_id` |
| Network Interface | Public IP | `ip_configuration.public_ip_address_id` |
| Linux / Windows VM | Network Interface | `network_interface_ids` |
| Linux Web App | App Service Plan | `service_plan_id` |
| SQL Database | SQL Server | `server_id` |
| AKS Cluster | Subnet | `default_node_pool.vnet_subnet_id` |
| AI Foundry Hub | Key Vault | `key_vault_id` |
| AI Foundry Hub | Storage Account | `storage_account_id` |
| AI Foundry Project | AI Foundry Hub | `ai_services_hub_id` |
| *(any resource)* | Resource Group | `resource_group_name` |

---

## 🏗️ Resource Coverage

All 1,132 `azurerm` resource types from **provider v4.73.0** are available in the palette, split across 19 categories:

AI & ML · Analytics · API Management · Compute · Containers · Databases · Developer Tools · Governance · Identity & Access · Integration · IoT & Edge · Media & Communication · Monitoring · Networking · Security · Storage · Virtual Desktop · Web & APIs · Other

88 hand-crafted resources (most common types) have enriched property forms and icon/color metadata. The remaining ~1,045 are schema-derived with auto-generated property forms.

---

## 📁 Project Structure

```
src/
├── components/           # React UI components
│   ├── Palette.jsx       # Left sidebar — searchable, collapsible categories
│   ├── Canvas.jsx        # React Flow canvas
│   ├── AzureNode.jsx     # Custom node renderer
│   ├── PropertiesPanel.jsx
│   └── TerraformOutput.jsx
├── data/
│   ├── resources.js      # 88 hand-crafted resource definitions
│   ├── resources-auto.js # 1,045 schema-derived definitions (generated)
│   ├── edgeMap.js        # Edge → Terraform field mappings
│   ├── resourceChunks.js # Dynamic import loaders (19 category chunks)
│   └── chunks/           # Per-category resource files for code-splitting
├── hooks/
│   └── useAllResources.js # Lazy-loads all chunks in parallel
├── schema/
│   ├── schemaUtils.js    # Schema lookup helpers
│   └── *.json            # Per-resource provider schema (1,132 files)
├── utils/
│   └── generateTerraform.js
├── store.js              # Zustand state
└── App.jsx
```

---

## ⚠️ Before Applying

Generated Terraform is a strong starting point — always review before deploying:

- Replace placeholder passwords and tenant IDs
- Confirm resource names meet Azure naming rules
- Verify locations, SKUs, and address ranges
- Run `terraform fmt && terraform init && terraform validate`
- Run `terraform plan` before `terraform apply`

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch (`git checkout -b feature/your-feature`)
3. Commit (`git commit -m 'Add feature'`)
4. Push and open a Pull Request

---

## 📄 License

**MIT** — free to use, modify, and distribute. See [LICENSE](LICENSE).
