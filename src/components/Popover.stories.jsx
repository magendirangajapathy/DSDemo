import React from 'react'
import Popover from './Popover'

export default {
  title: 'Components/Popover',
  component: Popover,
}

export const Default = () => (
  <Popover trigger="More">
    <div className="text-sm">Useful contextual actions or details go here.</div>
  </Popover>
)
