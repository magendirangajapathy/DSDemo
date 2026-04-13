import React from 'react'
import NavBar from './NavBar'

export default {
  title: 'Components/NavBar',
  component: NavBar,
}

export const Default = () => <NavBar items={[{ label: 'Home', href: '#' }, { label: 'Components', href: '#' }]} />
