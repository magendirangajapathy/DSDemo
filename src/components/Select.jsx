import React from 'react'

export default function Select({ label, id, options = [], value, defaultValue, onChange, className = '' }) {
  const inputId = id || `select-${Math.random().toString(36).slice(2, 7)}`
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-on-surface">
          {label}
        </label>
      )}
      <select
        id={inputId}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
