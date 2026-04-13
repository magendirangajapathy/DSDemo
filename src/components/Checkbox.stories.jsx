import React from 'react'
import Checkbox from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
}

export const Default = () => <Checkbox label="Accept terms" />
export const Checked = () => <Checkbox label="Checked" defaultChecked />
