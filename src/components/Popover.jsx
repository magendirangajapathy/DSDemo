import React from 'react'
import * as Popover from '@radix-ui/react-popover'

export default function PopoverComponent({ trigger = 'Open', children }) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="px-3 py-2 border rounded-md">{trigger}</button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="rounded-md bg-white p-3 shadow-md border" sideOffset={6}>
          {children}
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
