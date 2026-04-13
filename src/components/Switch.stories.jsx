import React from 'react'
import Switch from './Switch'

export default {
  title: 'Components/Switch',
  component: Switch,
}

export const Default = () => <Switch label="Enable notifications" />
export const On = () => <Switch label="Enabled" defaultChecked />
