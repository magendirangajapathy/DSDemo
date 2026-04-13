import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

export default function DialogComponent({ title = 'Dialog Title', children, triggerLabel = 'Open dialog' }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="btn-primary">{triggerLabel}</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg focus:outline-none">
          <div className="flex items-start justify-between">
            <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>
            <Dialog.Close asChild>
              <button aria-label="Close" className="ml-4 text-xl leading-none">×</button>
            </Dialog.Close>
          </div>
          <div className="mt-4">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
