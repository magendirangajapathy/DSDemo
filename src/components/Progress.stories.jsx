import React, { useState } from 'react'
import Progress from './Progress'

export default {
  title: 'Feedback/Progress',
  component: Progress,
}

export const Interactive = () => {
  const [value, setValue] = useState(25)
  return (
    <div className="space-y-4">
      <Progress value={value} max={100} label="Uploading" />
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full"
      />
    </div>
  )
}
