import React from 'react'

export default function Button({ children, variant = 'default', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants = {
    default: 'bg-primary text-primary-foreground hover:brightness-90 focus:ring-primary',
    ghost: 'bg-transparent hover:bg-surface',
  }
  const cls = [base, variants[variant] || variants.default, className].join(' ')
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
