# Azure TF Sketchboard — Overview

Browser-based drag-and-drop tool that turns a visual diagram of Azure resources into apply-ready Terraform.

## What it does

1. Drag Azure resources from a left palette onto a canvas
2. Connect them with edges (direction doesn't matter)
3. Edit each node's properties in the right panel
4. Click **Generate Terraform** → get a multi-file module structure as a downloadable ZIP

## Tech stack

- **React 18** + **Vite** — UI shell
- **@xyflow/react** — canvas, nodes, edges
- **Zustand** — global store (`nodes`, `edges`, `selectedNodeId`)
- **Tailwind CSS** — all styling
- **JSZip** — bundle generated files for download
- **highlight.js** — syntax-highlight HCL in the modal
- **Terraform CLI** (build-time only) — extracts the AzureRM provider schema

## Architecture

```
┌─────────────┬──────────────────────┬──────────────────┐
│   Palette   │       Canvas         │ PropertiesPanel  │
│  (20 types) │   (React Flow +      │ (Schema-driven   │
│             │    custom nodes)     │  form)           │
└─────────────┴──────────────────────┴──────────────────┘
                       │
                       ▼
              ┌──────────────────┐
              │ Edge resolver    │  direct + transitive
              │ (BFS undirected) │  lookup via EDGE_FIELD_MAP
              └──────────────────┘
                       │
                       ▼
              ┌──────────────────┐
              │ Generator        │  schema-aware HCL
              │ → files[]        │  (omits unset optionals,
              └──────────────────┘   emits required nested blocks)
                       │
                       ▼
              ┌──────────────────┐
              │ Output modal     │  file tree + ZIP download
              └──────────────────┘
```

## Schema-driven everything

All 20 supported resources use the **real AzureRM provider schema** (extracted via `terraform providers schema -json`, normalized into per-resource JSON files under `src/schema/`).

This means:
- Properties panel renders fields by their actual types (string, bool, number, list, map, nested blocks)
- Required fields shown by default, optional fields collapsed under "Advanced"
- Required nested blocks auto-added at node creation (with curated defaults like `Standard_v2` for App Gateway SKU)
- Generator emits HCL that matches what `terraform validate` will accept

## Edge resolution

When you draw an edge between two nodes, the generator wires the dependent fields. Lookup is in two layers:

- **Direct edges** — `[EDGE_FIELD_MAP](src/data/edgeMap.js)` says e.g. "VNet pulls `resource_group_name` from any connected RG"
- **Transitive** — if no direct edge, BFS through neighbors. So Subnet→VNet→RG lets the Subnet auto-fill its RG name without a direct Subnet→RG edge

Edges are **undirected** for resolution; drag direction is just UX.

The Properties panel shows a green "🔗 Linked from X" badge on any field that's auto-resolved, including the path it took ("via vnet-main").

## Output structure

```
azure-terraform.zip
├── providers.tf              # terraform { } + provider "azurerm"
├── main.tf                   # one resource block per canvas node
└── modules/                  # only generated for legacy non-schema resources
    └── <type>/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

Schema-driven nodes (currently all 20) emit as **direct resource blocks** at root since per-instance optional config doesn't fit the reusable-module pattern cleanly.

## File layout

```
src/
├── App.jsx                          # 3-pane shell
├── store.js                         # Zustand store + addNode/removeNode/etc.
├── data/
│   ├── resources.js                 # palette catalog: icon, color, defaults, blockDefaults
│   └── edgeMap.js                   # cross-resource field wiring rules
├── schema/
│   ├── azurerm_*.json               # 20 normalized provider schemas
│   └── schemaUtils.js               # type analysis, defaults, required-block discovery
├── components/
│   ├── Palette.jsx
│   ├── Canvas.jsx
│   ├── AzureNode.jsx                # custom React Flow node + delete button
│   ├── PropertiesPanel.jsx          # routes to SchemaForm when schema exists
│   ├── SchemaForm.jsx               # required-first form + nested-block editor
│   ├── SchemaField.jsx              # type-aware input + linked-from chip
│   └── TerraformOutput.jsx          # modal: file tree + per-file view + ZIP
└── utils/
    ├── edgeResolver.js              # BFS + binding resolution
    ├── generateFromSchema.js        # schema → HCL for one resource
    └── generateTerraform.js         # top-level: validation, sorting, file assembly

schema-source/                       # build-time tooling, not shipped
├── providers.tf                     # used by terraform init
├── extract.mjs                      # dumps & normalizes 20 resource schemas
└── validate-*.mjs                   # generate sample TF + run terraform validate
```

## Validation status

Of the 20 supported resources:
- **18 generate `terraform validate`-clean HCL** when basic edges are drawn (or when transitive resolution can find an RG)
- **2 require follow-up**: Linux VM and Windows VM need a separate `azurerm_network_interface` resource (not yet in the palette) to satisfy `network_interface_ids`

Remaining gaps are documented in the resources' `notes` field in [resources.js](src/data/resources.js).

## Updating the schema

When azurerm gets a new version:

```bash
cd schema-source
terraform init -upgrade
terraform providers schema -json > schema-full.json
node extract.mjs                # regenerates src/schema/*.json
node validate-all.mjs           # spot-checks all 20
```
