import React from 'react'
import { render } from '@testing-library/react'
import Input from '../components/Input'
import axe from 'axe-core'

test('Input has no accessibility violations', async () => {
  const { container } = render(<Input label="Email" />)
  const results = await axe.run(container)
  expect(results.violations.length).toBe(0)
})
