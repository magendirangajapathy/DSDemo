import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export default function DropdownMenuComponent({ label = 'Open menu', items = [] }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="px-3 py-2 border rounded-md">{label}</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mt-2 rounded-md bg-white shadow-md p-1 border">
          {items.map((it, idx) => (
            <DropdownMenu.Item key={idx} className="px-3 py-2 text-sm hover:bg-surface">
              <a href={it.href}>{it.label}</a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
