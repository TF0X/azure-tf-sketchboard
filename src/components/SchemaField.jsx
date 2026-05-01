import { useCallback } from 'react'

const baseInputClasses =
  'w-full px-3 py-2 rounded-md text-sm bg-panel border border-border text-textMain focus:outline-none focus:border-accent'

const linkedInputClasses =
  'w-full px-3 py-2 rounded-md text-sm bg-emerald-950/40 border border-emerald-800/40 text-emerald-200 font-mono cursor-not-allowed'

export function SchemaField({ name, kind, value, required, sensitive, binding, onChange }) {
  const handleStringChange = useCallback(
    (event) => {
      onChange(name, event.target.value)
    },
    [name, onChange]
  )

  const handleNumberChange = useCallback(
    (event) => {
      const raw = event.target.value
      if (raw === '') onChange(name, '')
      else {
        const num = Number(raw)
        onChange(name, Number.isFinite(num) ? num : raw)
      }
    },
    [name, onChange]
  )

  const handleBoolChange = useCallback(
    (event) => {
      onChange(name, event.target.checked)
    },
    [name, onChange]
  )

  const handleListChange = useCallback(
    (event) => {
      const items = event.target.value
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
      onChange(name, items)
    },
    [name, onChange]
  )

  const handleMapChange = useCallback(
    (event) => {
      const map = {}
      for (const line of event.target.value.split('\n')) {
        const trimmed = line.trim()
        if (!trimmed) continue
        const eq = trimmed.indexOf('=')
        if (eq === -1) continue
        const k = trimmed.slice(0, eq).trim()
        const v = trimmed.slice(eq + 1).trim()
        if (k) map[k] = v
      }
      onChange(name, map)
    },
    [name, onChange]
  )

  const inputId = `field-${name}`
  const labelLine = (
    <div className="flex items-center justify-between">
      <label className="text-xs font-medium text-textDim font-mono" htmlFor={inputId}>
        {name}
        {required ? <span className="text-red-400 ml-1">*</span> : null}
        {sensitive ? <span className="text-amber-400 ml-1" title="Sensitive">🔒</span> : null}
      </label>
      <span className="text-[10px] uppercase text-textDim/60">{kind}</span>
    </div>
  )

  // When an edge binding fills this field, render the resolved expression
  // read-only and tell the user where it came from.
  if (binding) {
    return (
      <div className="flex flex-col gap-1.5">
        {labelLine}
        <input
          id={inputId}
          type="text"
          value={binding.refExpr}
          readOnly
          className={linkedInputClasses}
          title={binding.refExpr}
        />
        <BindingHint binding={binding} />
      </div>
    )
  }

  if (kind === 'bool') {
    return (
      <div className="flex items-center justify-between gap-3 py-1">
        <label className="text-xs font-medium text-textDim font-mono" htmlFor={inputId}>
          {name}
          {required ? <span className="text-red-400 ml-1">*</span> : null}
        </label>
        <input
          id={inputId}
          type="checkbox"
          checked={Boolean(value)}
          onChange={handleBoolChange}
          className="w-4 h-4 rounded border-border bg-panel accent-accent"
        />
      </div>
    )
  }

  if (kind === 'number') {
    return (
      <div className="flex flex-col gap-1.5">
        {labelLine}
        <input
          id={inputId}
          type="number"
          value={value ?? ''}
          onChange={handleNumberChange}
          className={baseInputClasses}
        />
      </div>
    )
  }

  if (kind === 'list_of_string' || kind === 'set_of_string') {
    const text = Array.isArray(value) ? value.join('\n') : ''
    return (
      <div className="flex flex-col gap-1.5">
        {labelLine}
        <textarea
          id={inputId}
          value={text}
          onChange={handleListChange}
          rows={Math.max(2, Math.min(6, (Array.isArray(value) ? value.length : 0) + 1))}
          placeholder="One value per line"
          className={`${baseInputClasses} font-mono`}
        />
      </div>
    )
  }

  if (kind === 'map_of_string') {
    const text =
      value && typeof value === 'object'
        ? Object.entries(value)
            .map(([k, v]) => `${k} = ${v}`)
            .join('\n')
        : ''
    return (
      <div className="flex flex-col gap-1.5">
        {labelLine}
        <textarea
          id={inputId}
          value={text}
          onChange={handleMapChange}
          rows={Math.max(2, Math.min(6, Object.keys(value ?? {}).length + 1))}
          placeholder="key = value (one per line)"
          className={`${baseInputClasses} font-mono`}
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1.5">
      {labelLine}
      <input
        id={inputId}
        type="text"
        value={value ?? ''}
        onChange={handleStringChange}
        className={baseInputClasses}
      />
    </div>
  )
}

function BindingHint({ binding }) {
  const targetLabel = `${binding.targetName} (${binding.targetType.replace(/^azurerm_/, '')})`
  let pathDescription
  if (!binding.transitive) {
    pathDescription = 'direct edge'
  } else if (binding.path.length === 1) {
    pathDescription = 'direct edge'
  } else {
    const hops = binding.path.slice(0, -1).map((p) => p.name).join(' → ')
    pathDescription = `via ${hops}`
  }
  return (
    <div className="flex items-center gap-1.5 text-[11px] text-emerald-400/90">
      <span>🔗</span>
      <span>
        Linked from <span className="font-mono text-emerald-200">{targetLabel}</span>
        <span className="text-emerald-400/70"> · {pathDescription}</span>
      </span>
    </div>
  )
}
