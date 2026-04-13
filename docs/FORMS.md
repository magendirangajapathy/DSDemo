# Forms & Validation

This document outlines the recommended form structure, validation rules, and accessibility guidelines for forms.

Structure
- Use semantic `<form>` elements and native input controls when possible.
- Group related fields with a `<fieldset>` and use `<legend>` for complex groups.
- Use consistent spacing and labels placed above inputs for clarity.

Validation
- Use client-side validation for instant feedback and server-side validation for authoritative checks.
- Show error messages inline and associate them with inputs via `aria-describedby`.
- Prefer short, actionable error messages (e.g., "Enter a valid email").
- For required checkboxes (consent), use explicit labels and provide accessible error text.

Accessibility
- Ensure all inputs have a visible label (`<label for="id">`).
- When showing an error, set `aria-invalid="true"` and link the message via `aria-describedby`.
- Use `aria-live` regions for global messages (toasts) and avoid moving keyboard focus unless the interaction requires it.
- Respect `prefers-reduced-motion` for animated placeholders or transitions.

UX patterns
- Validate on blur for field-level checks and on submit for final validation.
- Keep client-side validation permissive (do not block typing) and only show clear errors when appropriate.
- Provide examples and helper text for complex inputs (formatting, lengths).

Implementation notes
- The `useForm` hook in `src/utils/useForm.js` provides a small, framework-agnostic starting point for handling form state and validation.
- Storybook contains an example form at `Forms / Sample Form` that demonstrates accessible error handling and toast feedback.
