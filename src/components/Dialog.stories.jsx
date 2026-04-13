import React from 'react'
import Dialog from './Dialog'

export default {
  title: 'Components/Dialog',
  component: Dialog,
}

export const Default = () => (
  <Dialog title="Delete item" triggerLabel="Open dialog">
    <p className="text-sm">Are you sure you want to delete this item? This action cannot be undone.</p>
    <div className="mt-4 flex justify-end gap-2">
      <button className="px-3 py-2 rounded-md border">Cancel</button>
      <button className="px-3 py-2 rounded-md bg-red-600 text-white">Delete</button>
    </div>
  </Dialog>
)
