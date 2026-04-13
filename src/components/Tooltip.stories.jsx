import React from 'react'
import Tooltip from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
}

export const Default = () => (
  <Tooltip content="Helpful tip">
    <button className="px-3 py-2 border rounded-md">Hover me</button>
  </Tooltip>
)
