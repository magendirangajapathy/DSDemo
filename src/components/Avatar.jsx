import React from 'react'

function getInitials(name) {
  if (!name) return ''
  const parts = name.trim().split(' ')
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + (parts[1][0] || '')).toUpperCase()
}

const SIZE_CLASSES = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-lg',
}

export default function Avatar({ src, alt, name, size = 'md', className = '' }) {
  const sizeCls = SIZE_CLASSES[size] || SIZE_CLASSES.md

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-surface overflow-hidden ${sizeCls} ${className}`}
      role="img"
      aria-label={alt || name || 'Avatar'}
    >
      {src ? (
        <img src={src} alt={alt || name || 'Avatar'} className="w-full h-full object-cover" />
      ) : (
        <span className="font-medium">{getInitials(name)}</span>
      )}
    </div>
  )
}
