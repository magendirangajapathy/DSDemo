# Button — Component Spec

Anatomy
- Root `button` element
- Optional icon and label

Variants
- `default`: primary filled button
- `ghost`: transparent background, subtle border

Props
- `variant`: `default | ghost`
- `onClick`: function
- `disabled`: boolean

Accessibility
- Use semantic `button` element.
- Provide `aria-label` when no visible text is present.
- Focus states must be visible (use `focus:ring` token).

Usage example

```jsx
<Button onClick={handleSave}>Save</Button>
<Button variant="ghost">Cancel</Button>
```
