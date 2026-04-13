import React from 'react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
}

export const Default = () => <Button>Primary Button</Button>
export const Ghost = () => <Button variant="ghost">Ghost Button</Button>
