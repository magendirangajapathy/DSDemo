import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Dialog from '../components/Dialog'
import axe from 'axe-core'

test('Dialog opens and has no accessibility violations', async () => {
  const { container } = render(<Dialog triggerLabel="Open test"> <p>Dialog content</p> </Dialog>)

  const btn = screen.getByRole('button', { name: /open test/i })
  fireEvent.click(btn)

  // run axe on document body to include overlay
  const results = await axe.run(document.body)
  expect(results.violations.length).toBe(0)
})
