import { useCallback, useState } from 'react'
import {
  fieldKind,
  isSupportedKind,
  listBlocks,
  partitionAttributes,
  defaultValueForKind
} from '../schema/schemaUtils.js'
import { findBindingForField } from '../utils/edgeResolver.js'
import { SchemaField } from './SchemaField.jsx'

export function SchemaForm({
  schema,
  properties,
  blocks,
  edgeBindings = [],
  onPropertyChange,
  onBlockChange
}) {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const { required, optional } = partitionAttributes(schema.block)
  const nestedBlocks = listBlocks(schema.block)

  return (
    <div className="space-y-5">
      <FieldSection
        title="Required"
        fields={required}
        values={properties}
        onChange={onPropertyChange}
        bindings={edgeBindings}
        required
      />

      {optional.length > 0 ? (
        <div>
          <button
            type="button"
            onClick={() => setShowAdvanced((v) => !v)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-md bg-panel border border-border text-xs font-semibold uppercase tracking-wider text-textDim hover:text-textMain transition-colors"
          >
            <span>Advanced ({optional.length} optional)</span>
            <span>{showAdvanced ? '▾' : '▸'}</span>
          </button>
          {showAdvanced ? (
            <div className="mt-3">
              <FieldSection
                fields={optional}
                values={properties}
                onChange={onPropertyChange}
                bindings={edgeBindings}
              />
            </div>
          ) : null}
        </div>
      ) : null}

      {nestedBlocks.length > 0 ? (
        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-textDim">
            Nested Blocks
          </div>
          {nestedBlocks.map(({ name, def, required }) => (
            <NestedBlockEditor
              key={name}
              name={name}
              def={def}
              required={required}
              value={blocks?.[name] ?? null}
              edgeBindings={edgeBindings}
              onChange={onBlockChange}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

function FieldSection({ title, fields, values, onChange, bindings = [], required = false, fieldPathPrefix = '' }) {
  if (fields.length === 0) return null
  return (
    <div className="space-y-3">
      {title ? (
        <div className="text-xs font-semibold uppercase tracking-wider text-textDim">{title}</div>
      ) : null}
      {fields.map(({ name, kind, attr }) => {
        if (!isSupportedKind(kind)) {
          return (
            <div key={name} className="text-[11px] text-amber-400/80 font-mono">
              {name}: <span className="text-textDim">{kind}</span> (unsupported in form, edit raw HCL)
            </div>
          )
        }
        const fieldPath = fieldPathPrefix ? `${fieldPathPrefix}.${name}` : name
        const binding = findBindingForField(bindings, fieldPath)
        return (
          <SchemaField
            key={name}
            name={name}
            kind={kind}
            value={values?.[name]}
            required={required || attr.required}
            sensitive={attr.sensitive}
            binding={binding}
            onChange={onChange}
          />
        )
      })}
    </div>
  )
}

function NestedBlockEditor({ name, def, value, required: blockRequired, edgeBindings, onChange }) {
  const enabled = value !== null && value !== undefined
  const { required, optional } = partitionAttributes(def.block)
  const [showOptional, setShowOptional] = useState(false)

  const handleToggle = useCallback(() => {
    if (blockRequired) return
    if (enabled) {
      onChange(name, null)
    } else {
      const initial = {}
      for (const { name: fname, kind } of required) {
        initial[fname] = defaultValueForKind(kind)
      }
      onChange(name, initial)
    }
  }, [blockRequired, enabled, name, onChange, required])

  const handleFieldChange = useCallback(
    (fieldName, fieldValue) => {
      onChange(name, { ...(value ?? {}), [fieldName]: fieldValue })
    },
    [name, onChange, value]
  )

  return (
    <div className="rounded-md border border-border bg-panel/50">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xs font-mono text-textMain truncate">{name}</span>
          {blockRequired ? (
            <span className="text-[10px] uppercase font-semibold text-red-300 bg-red-900/30 border border-red-800/40 rounded px-1">
              required
            </span>
          ) : null}
          {def.max_items === 1 ? (
            <span className="text-[10px] uppercase text-textDim/60">single</span>
          ) : null}
        </div>
        {blockRequired ? null : (
          <button
            type="button"
            onClick={handleToggle}
            className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
              enabled
                ? 'bg-red-900/30 border border-red-800/60 text-red-300 hover:bg-red-900/50'
                : 'bg-accent/20 border border-accent/40 text-accent hover:bg-accent/30'
            }`}
          >
            {enabled ? 'Remove block' : 'Add block'}
          </button>
        )}
      </div>
      {enabled ? (
        <div className="px-3 pb-3 space-y-3 border-t border-border">
          <FieldSection
            title=""
            fields={required}
            values={value}
            onChange={handleFieldChange}
            bindings={edgeBindings}
            fieldPathPrefix={name}
            required
          />
          {optional.length > 0 ? (
            <div>
              <button
                type="button"
                onClick={() => setShowOptional((v) => !v)}
                className="text-[11px] font-medium text-textDim hover:text-textMain"
              >
                {showOptional ? '▾' : '▸'} {optional.length} optional fields
              </button>
              {showOptional ? (
                <div className="mt-2">
                  <FieldSection
                    fields={optional}
                    values={value}
                    onChange={handleFieldChange}
                    bindings={edgeBindings}
                    fieldPathPrefix={name}
                  />
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
