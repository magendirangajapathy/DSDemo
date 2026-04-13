import React from 'react'
import ToastProvider, { useToast } from './Toast'

export default {
  title: 'Feedback/Toast',
}

function Demo() {
  const { show } = useToast()
  return (
    <div className="flex gap-3">
      <button
        className="px-3 py-2 rounded-md btn-primary"
        onClick={() => show({ title: 'Saved', description: 'Your changes were saved.' })}
      >
        Show success
      </button>
      <button
        className="px-3 py-2 rounded-md border"
        onClick={() => show({ title: 'Error', description: 'Something went wrong.', duration: 6000 })}
      >
        Show error
      </button>
    </div>
  )
}

export const Default = () => (
  <ToastProvider>
    <Demo />
  </ToastProvider>
)
