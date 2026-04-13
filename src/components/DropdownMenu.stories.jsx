import React from 'react'
import DropdownMenu from './DropdownMenu'

export default {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
}

export const Default = () => (
  <DropdownMenu items={[{ label: 'Profile', href: '#' }, { label: 'Settings', href: '#' }, { label: 'Sign out', href: '#' }]} />
)
