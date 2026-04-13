import React from 'react'
import { useForm } from '../utils/useForm'
import ToastProvider, { useToast } from './Toast'
import Checkbox from './Checkbox'

export default {
  title: 'Forms/Sample Form',
}

function DemoForm() {
  const { register, handleSubmit, errors } = useForm({ name: '', email: '', agree: false })
  const { show } = useToast()

  const onSubmit = (vals) => {
    show({ title: 'Submitted', description: 'Form submitted successfully.' })
    // In a real app, send `vals` to the server here.
  }

  const agreeProps = register('agree', { type: 'checkbox', required: true, requiredMessage: 'Please accept the terms' })
  const nameProps = register('name', { required: true, requiredMessage: 'Name is required' })
  const emailProps = register('email', {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    patternMessage: 'Enter a valid email',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md p-4 bg-white border rounded">
      <div>
        <label htmlFor={nameProps.id} className="text-sm font-medium">
          Name
        </label>
        <input
          id={nameProps.id}
          name={nameProps.name}
          value={nameProps.value}
          onChange={nameProps.onChange}
          className="mt-1 block w-full border rounded-md px-3 py-2"
        />
        {errors.name && (
          <p id={`${nameProps.id}-error`} className="text-xs text-red-600 mt-1">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={emailProps.id} className="text-sm font-medium">
          Email
        </label>
        <input
          id={emailProps.id}
          name={emailProps.name}
          value={emailProps.value}
          onChange={emailProps.onChange}
          className="mt-1 block w-full border rounded-md px-3 py-2"
        />
        {errors.email && (
          <p id={`${emailProps.id}-error`} className="text-xs text-red-600 mt-1">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Checkbox {...agreeProps} />
        <label htmlFor={agreeProps.id} className="text-sm select-none">
          I accept the terms
        </label>
      </div>
      {errors.agree && (
        <p id={`${agreeProps.id}-error`} className="text-xs text-red-600">
          {errors.agree}
        </p>
      )}

      <div>
        <button type="submit" className="btn-primary px-3 py-2 rounded-md">
          Submit
        </button>
      </div>
    </form>
  )
}

export const Basic = () => (
  <ToastProvider>
    <DemoForm />
  </ToastProvider>
)
