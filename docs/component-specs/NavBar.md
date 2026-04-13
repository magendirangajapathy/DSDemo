# NavBar — Component Spec

Anatomy
- Brand/logo area
- Primary navigation links
- Optional utility area (search, profile)

Props
- `items`: array of `{ label, href }`
- `brand`: optional brand element

Accessibility
- Use `nav` and `aria-label` for the navigation region.
- Ensure links are keyboard tabbable and have visible focus styles.

Usage example

```jsx
<NavBar items={[{ label: 'Home', href: '/' }, { label: 'Docs', href: '/docs' }]} />
```
