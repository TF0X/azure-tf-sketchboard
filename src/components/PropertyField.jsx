import { useCallback } from 'react'

export function PropertyField({ property, value, onChange }) {
  const handleChange = useCallback(
    (event) => {
      onChange(property.name, event.target.value)
    },
    [onChange, property.name]
  )

  const inputId = `prop-${property.name}`
  const baseClasses = 'w-full px-3 py-2 rounded-md text-sm bg-panel border border-border text-textMain focus:outline-none focus:border-accent'

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-textDim" htmlFor={inputId}>
        {property.label}
      </label>
      {property.type === 'select' ? (
        <select id={inputId} value={value} onChange={handleChange} className={baseClasses}>
          {property.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input id={inputId} type="text" value={value} onChange={handleChange} className={baseClasses} />
      )}
    </div>
  )
}
