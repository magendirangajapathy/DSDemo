import React from 'react'

export default function Sidebar({ items = [] }) {
  return (
    <aside className="hidden md:block w-64 bg-background border-r p-4">
      <nav aria-label="Sidebar" className="space-y-2">
        {items.map((it) => (
          <a key={it.label} href={it.href} className="block px-3 py-2 rounded hover:bg-surface">
            {it.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}
