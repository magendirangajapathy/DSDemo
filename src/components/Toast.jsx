import React, { createContext, useCallback, useContext, useState } from 'react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const show = useCallback(({ title, description, duration = 4000 }) => {
    const id = Math.random().toString(36).slice(2, 9)
    const next = { id, title, description }
    setToasts((v) => [...v, next])
    setTimeout(() => {
      setToasts((v) => v.filter((t) => t.id !== id))
    }, duration)
  }, [])

  const dismiss = useCallback((id) => {
    setToasts((v) => v.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ show, dismiss }}>
      {children}

      <div aria-live="polite" className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className="max-w-sm w-full bg-white border rounded-md shadow-md p-3 flex items-start gap-3"
          >
            <div className="flex-1">
              {t.title && <div className="font-semibold text-sm">{t.title}</div>}
              {t.description && <div className="text-sm text-gray-600">{t.description}</div>}
            </div>
            <button
              aria-label="Dismiss notification"
              onClick={() => dismiss(t.id)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used inside a ToastProvider')
  return ctx
}

export default ToastProvider
