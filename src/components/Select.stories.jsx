import React from 'react'
import Select from './Select'

export default {
  title: 'Components/Select',
  component: Select,
}

export const WithLabel = () => (
  <Select
    label="Choose option"
    options={[{ label: 'One', value: '1' }, { label: 'Two', value: '2' }, { label: 'Three', value: '3' }]}
  />
)

export const Plain = () => (
  <Select options={[{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }]} />
)
