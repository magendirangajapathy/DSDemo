# Dialog — Component Spec

Anatomy
- Trigger (button/link)
- Overlay (backdrop)
- Content panel with title, body, and actions

Variants
- Centered modal (default)
- Fullscreen or side-sheet (optional)

Props
- `open` / `defaultOpen`
- `onOpenChange`
- `aria-labelledby` / `aria-describedby` connections for title and content

Accessibility
- Move focus into the dialog when opened and return focus to the trigger on close.
- Use `role="dialog"` and label with `aria-labelledby`.
- Provide dismiss controls and close on `Escape`.

Usage example

```jsx
<Dialog>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Confirm</Dialog.Title>
    <p>Are you sure?</p>
  </Dialog.Content>
</Dialog>
```
