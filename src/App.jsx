import React from 'react'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <NavBar items={[{ label: 'Home', href: '#' }, { label: 'Components', href: '#' }]} />
      <main id="main" className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Shadcn-inspired Design System</h1>
        <p className="mb-6">React (JS) + Tailwind starter with Storybook and Radix primitives.</p>
      </main>
    </div>
  )
}
