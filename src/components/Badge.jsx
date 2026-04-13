import React from 'react'

const VARIANTS = {
  default: 'bg-surface text-on-surface border',
  success: 'bg-green-100 text-green-800',
  destructive: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
  subtle: 'bg-transparent text-on-surface/80',
}

export default function Badge({ children, variant = 'default', className = '' }) {
  const cls = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${VARIANTS[variant] || VARIANTS.default} ${className}`
  return <span className={cls}>{children}</span>
}
