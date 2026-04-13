# Accessibility Guidelines

This document summarizes accessibility rules and best practices for components in this design system.

- Use semantic HTML (buttons, links, form controls) instead of generic elements when possible.
- Ensure all interactive controls have keyboard focus and visible focus styles (`:focus` / Tailwind `focus:` classes).
- Provide descriptive labels and ARIA attributes for non-semantic controls. Prefer `aria-label`, `aria-labelledby`, and `aria-describedby`.
- Manage focus when opening/closing overlays (dialogs, popovers). Focus should move into the dialog and return to the trigger on close.
- Ensure color contrast meets WCAG AA (4.5:1 for normal text). Use tokens and test with automated tools.
- Provide skip links for complex layouts to help keyboard users jump to main content.
- Avoid relying on color alone to convey information. Use icons or text as well.
- For motion, respect `prefers-reduced-motion` and minimize non-essential animations.
- Validate forms and expose errors in an accessible manner (associate error text with inputs via `aria-describedby`).

Recommended tools:
- axe-core / axe DevTools
- Lighthouse accessibility audits
- contrast-checker tools (e.g., contrast-ratio.com)

Pattern reference: Use Radix primitives where possible to get correct ARIA and keyboard behavior by default.

Keyboard & focus patterns

- Provide a visible "skip to main content" link at the top of every page (`<a href="#main">Skip to main content</a>`).
- Use `:focus-visible` (or Tailwind's `focus-visible:` utilities) for keyboard-only focus styling so mouse interactions are not visually noisy.
- Ensure overlays (dialogs, popovers, menus) trap focus while open and return focus to the trigger when closed.
- Menus and lists should support arrow-key navigation, Enter/Space to select, and Esc to close. Radix primitives already implement these patterns; for custom components, mirror this behavior.
- Provide logical tab order: document flow should match tab order and interactive elements should be reachable with `Tab`.
- For custom keyboard behavior (e.g., app-wide shortcuts), ensure features can be disabled or overridden and document them in component specs.

Testing keyboard behavior

- Manually test tabbing order and focus for key pages and Storybook examples.
- Use automated accessibility tests (axe) and unit tests that assert focus movement when opening overlays.
- Include a11y stories in Storybook that demonstrate keyboard interactions (e.g., open dialog with keyboard, navigate menu with arrows).
