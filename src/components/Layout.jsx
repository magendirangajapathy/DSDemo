import React from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'

export default function Layout({ navItems = [], sidebarItems = [], children }) {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <NavBar items={navItems} />
      <div className="flex">
        <Sidebar items={sidebarItems} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
