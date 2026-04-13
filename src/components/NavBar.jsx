import React from 'react'

export default function NavBar({ items = [] }) {
  return (
    <nav aria-label="Main navigation" className="bg-background border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold">DesignSystem</div>
        <ul role="menubar" className="flex gap-4">
          {items.map((it) => (
            <li key={it.label}>
              <a href={it.href} className="text-on-surface hover:text-primary">
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
