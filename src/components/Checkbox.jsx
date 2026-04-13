import React from 'react'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

export default function Checkbox({ label, checked, defaultChecked, onCheckedChange, id, className = '', ...props }) {
  const inputId = id || `checkbox-${Math.random().toString(36).slice(2, 7)}`
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <RadixCheckbox.Root
        id={inputId}
        className="w-5 h-5 inline-flex items-center justify-center rounded-sm border bg-white focus:outline-none"
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        {...props}
      >
        <RadixCheckbox.Indicator>
          <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {label && (
        <label htmlFor={inputId} className="text-sm select-none">
          {label}
        </label>
      )}
    </div>
  )
}
