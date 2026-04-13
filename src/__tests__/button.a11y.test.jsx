import React from 'react'
import { render } from '@testing-library/react'
import Button from '../components/Button'
import axe from 'axe-core'

test('Button has no accessibility violations', async () => {
  const { container } = render(<Button>Click me</Button>)
  const results = await axe.run(container)
  expect(results.violations.length).toBe(0)
})
