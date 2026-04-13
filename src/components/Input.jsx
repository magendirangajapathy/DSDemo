import React from 'react'

export default function Input({ label, id, className = '', ...props }) {
  const inputId = id || `input-${Math.random().toString(36).slice(2, 7)}`
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-on-surface">
          {label}
        </label>
      )}
      <input id={inputId} className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary" {...props} />
    </div>
  )
}
