import React from 'react'

export default function Progress({ value = 0, max = 100, label = '', className = '' }) {
  const percent = Math.max(0, Math.min(100, Math.round((value / max) * 100)))
  return (
    <div className={className}>
      {label && (
        <div className="flex items-center justify-between mb-1 text-sm">
          <span>{label}</span>
          <span className="text-xs text-gray-600">{percent}%</span>
        </div>
      )}
      <div className="w-full bg-surface rounded h-3 overflow-hidden">
        <div className="bg-primary h-3 rounded" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}
