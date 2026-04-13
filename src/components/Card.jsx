import React from 'react'

export default function Card({ title, subtitle, children, footer, className = '' }) {
  return (
    <div className={`bg-white border rounded-md shadow-sm p-4 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-3">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}

      <div className="mb-3">{children}</div>

      {footer && <div className="mt-3 text-sm text-gray-600">{footer}</div>}
    </div>
  )
}
