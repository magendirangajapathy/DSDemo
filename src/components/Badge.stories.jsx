import React from 'react'
import Badge from './Badge'

export default {
  title: 'Data Display/Badge',
  component: Badge,
}

export const Variants = () => (
  <div className="flex gap-2 items-center">
    <Badge>Default</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="destructive">Error</Badge>
    <Badge variant="info">Info</Badge>
    <Badge variant="subtle">Subtle</Badge>
  </div>
)
