# Azure TF Sketchboard

A visual Azure architecture sketchboard that turns drag-and-drop diagrams into Terraform.

Azure TF Sketchboard is built for people who want to design cloud infrastructure visually and still leave with real, editable Terraform code. Drag resources onto the canvas, connect the services that depend on each other, tune properties in the side panel, then generate a multi-file Terraform project.

## What You Can Do

- Build Azure architecture diagrams with draggable resource nodes.
- Connect resources visually to describe dependencies.
- Auto-fill Terraform references from connected resources.
- Edit required and optional AzureRM properties from a schema-driven form.
- Generate Terraform files grouped into practical modules.
- Download the generated project as a ZIP.
- Use the same canvas as an architecture diagram while you design.

## Quick Start

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

Open the local Vite URL shown in your terminal, usually:

```text
http://localhost:5173
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Basic Workflow

1. Drag an Azure resource from the left palette onto the canvas.
2. Select the node and edit its fields in the properties panel.
3. Connect related resources together.
4. Use the canvas as your architecture sketch.
5. Click **Generate Terraform**.
6. Review the generated files in the modal.
7. Download the ZIP and run Terraform from the exported project.

## Connection Examples

Connections are intentionally simple. Direction does not matter for most relationships; the generator reads the graph and fills relevant Terraform fields.

Common patterns:

```text
Resource Group -> Virtual Network -> Subnet
```

```text
Resource Group -> Public IP -> Network Interface -> Virtual Machine
```

```text
Subnet -> Network Interface -> Virtual Machine
```

```text
App Service Plan -> Linux Web App
```

```text
SQL Server -> SQL Database
```

## VM, NIC, Subnet, and Public IP

For Azure virtual machines, the correct Terraform model is:

```text
Virtual Machine -> Network Interface -> Subnet
Network Interface -> Public IP
```

If you add a Network Interface node, the VM automatically uses its ID:

```hcl
network_interface_ids = var.vm_main_network_interface_ids
```

If you skip the Network Interface node and connect a VM directly to a Subnet, the generator creates a fallback NIC for that VM. If a Public IP is also connected to the VM, that fallback NIC receives the public IP too.

Recommended diagram:

```text
Resource Group
  -> Virtual Network
  -> Subnet
  -> Network Interface
  -> Virtual Machine

Resource Group
  -> Public IP
  -> Network Interface
```

## Generated Terraform Structure

The ZIP contains root files plus grouped feature modules:

```text
azure-terraform.zip
├── providers.tf
├── main.tf
├── outputs.tf
└── modules/
    ├── core/
    │   ├── main.tf
    │   ├── variables.tf
    │   └── outputs.tf
    ├── network/
    │   ├── main.tf
    │   ├── variables.tf
    │   └── outputs.tf
    ├── vm/
    │   ├── main.tf
    │   ├── variables.tf
    │   └── outputs.tf
    ├── app/
    │   ├── main.tf
    │   ├── variables.tf
    │   └── outputs.tf
    └── data/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

The root `main.tf` calls grouped modules. Individual resources are placed inside the module that best matches their role:

- `core`: resource groups
- `network`: VNets, subnets, NICs, public IPs, gateways, CDN
- `vm`: Linux and Windows virtual machines
- `app`: app services, AKS, container registry
- `data`: storage, SQL, Cosmos DB, Key Vault, logs, messaging

## Supported Azure Resources

The app currently supports these AzureRM resources:

- Resource Group
- Virtual Network
- Subnet
- Network Security Group
- Network Interface
- Public IP
- Linux Virtual Machine
- Windows Virtual Machine
- Storage Account
- SQL Server
- SQL Database
- App Service Plan
- Linux Web App
- Key Vault
- Container Registry
- Kubernetes Cluster
- Application Gateway
- Log Analytics Workspace
- Service Bus Namespace
- Cosmos DB Account
- CDN Profile

## How Auto-Wiring Works

The generator uses resource connections to populate Terraform references. For example:

- A VNet connected to a Resource Group receives `resource_group_name`.
- A Subnet connected to a VNet receives `virtual_network_name`.
- A NIC connected to a Subnet receives `ip_configuration.subnet_id`.
- A NIC connected to a Public IP receives `ip_configuration.public_ip_address_id`.
- A VM connected to a NIC receives `network_interface_ids`.
- A Web App connected to an App Service Plan receives `service_plan_id`.
- A SQL Database connected to a SQL Server receives `server_id`.

Some dependencies can be found transitively. For example, if a Subnet is connected to a VNet and the VNet is connected to a Resource Group, the Subnet can inherit the Resource Group through that path.

## Before Applying Terraform

Generated Terraform is a strong starting point, but you should still review it before applying:

- Replace placeholder passwords and tenant IDs.
- Confirm names meet Azure naming rules.
- Confirm locations, SKUs, and address ranges.
- Run `terraform fmt`.
- Run `terraform init`.
- Run `terraform validate`.
- Run `terraform plan` before `terraform apply`.

## Project Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

## Tech Stack

- React
- Vite
- React Flow
- Zustand
- Tailwind CSS
- JSZip
- highlight.js
- AzureRM provider schemas

## Notes

This project is intended to make infrastructure design faster and more visual. It does not replace Terraform review, policy checks, cloud cost review, or security review. Treat the exported Terraform as generated infrastructure code that should be inspected, formatted, validated, and version controlled.
