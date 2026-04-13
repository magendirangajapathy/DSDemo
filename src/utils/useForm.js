import { useCallback, useRef, useState } from 'react'

export function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const validators = useRef({})

  const register = useCallback(
    (name, opts = {}) => {
      validators.current[name] = opts

      const onChange = (eOrVal) => {
        let v
        if (eOrVal && typeof eOrVal === 'object' && eOrVal.target !== undefined) {
          const target = eOrVal.target
          if (target.type === 'checkbox') v = target.checked
          else v = target.value
        } else {
          v = eOrVal
        }

        setValues((prev) => ({ ...prev, [name]: v }))

        setErrors((prev) => {
          if (prev[name]) {
            const next = { ...prev }
            delete next[name]
            return next
          }
          return prev
        })
      }

      const type = opts.type || 'text'
      const id = opts.id || name

      if (type === 'checkbox') {
        return {
          name,
          id,
          checked: !!values[name],
          onCheckedChange: onChange,
          onChange,
          'aria-invalid': errors[name] ? 'true' : undefined,
          'aria-describedby': errors[name] ? `${id}-error` : undefined,
        }
      }

      return {
        name,
        id,
        value: values[name] || '',
        onChange,
        'aria-invalid': errors[name] ? 'true' : undefined,
        'aria-describedby': errors[name] ? `${id}-error` : undefined,
      }
    },
    [values, errors]
  )

  const validateAll = useCallback(() => {
    const nextErrors = {}
    const keys = Object.keys(validators.current)
    let valid = true

    for (const key of keys) {
      const opts = validators.current[key] || {}
      const v = values[key]

      if (opts.required) {
        const isEmpty = v === undefined || v === '' || (opts.type === 'checkbox' && !v)
        if (isEmpty) {
          valid = false
          nextErrors[key] = opts.requiredMessage || 'Required'
          continue
        }
      }

      if (opts.pattern && v) {
        const regex = opts.pattern instanceof RegExp ? opts.pattern : new RegExp(opts.pattern)
        if (!regex.test(v)) {
          valid = false
          nextErrors[key] = opts.patternMessage || 'Invalid format'
          continue
        }
      }

      if (opts.validate) {
        const res = opts.validate(v, values)
        if (res === false) {
          valid = false
          nextErrors[key] = opts.validateMessage || 'Invalid value'
          continue
        }
        if (typeof res === 'string') {
          valid = false
          nextErrors[key] = res
          continue
        }
      }
    }

    setErrors(nextErrors)
    return valid
  }, [values])

  const handleSubmit = useCallback(
    (onValid) => (e) => {
      if (e && e.preventDefault) e.preventDefault()
      const isValid = validateAll()
      if (isValid) onValid(values)
    },
    [validateAll, values]
  )

  const setValue = useCallback((name, value) => setValues((prev) => ({ ...prev, [name]: value })), [])
  const setError = useCallback((name, message) => setErrors((prev) => ({ ...prev, [name]: message })), [])
  const clearErrors = useCallback(() => setErrors({}), [])

  return { register, handleSubmit, values, errors, setValue, setError, clearErrors }
}

export default useForm
