import React from 'react'
import Input from './Input'

export default {
  title: 'Components/Input',
  component: Input,
}

export const WithLabel = () => <Input label="Name" placeholder="Enter your name" />
export const Plain = () => <Input placeholder="No label" />
