import React from 'react'

export default function Skeleton({ width = '100%', height = '1rem', className = '', rounded = true }) {
  const radius = rounded ? 'rounded-md' : ''
  return <div className={`bg-surface animate-pulse ${radius} ${className}`} style={{ width, height }} aria-hidden="true" />
}
