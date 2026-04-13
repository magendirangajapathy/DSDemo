import React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

export default function Switch({ label, checked, defaultChecked, onCheckedChange, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SwitchPrimitive.Root
        className="switch-root inline-flex relative h-6 w-11 cursor-pointer rounded-full"
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        aria-checked={checked}
      >
        <SwitchPrimitive.Thumb className="switch-thumb block h-5 w-5 rounded-full bg-white shadow-md" />
      </SwitchPrimitive.Root>
      {label && <span className="text-sm select-none">{label}</span>}
    </div>
  )
}
