# Usage Guidelines

This page provides concise guidance for designers and developers on how to use the design system consistently.

Tokens
- Use semantic tokens from `src/tokens/design-tokens.json` for colors, spacing, radii and typography.
- Prefer CSS variables (provided in `src/tokens/tokens.css`) inside component styles so runtime theming is possible.

Component usage
- Use primitives (Button, Input, Checkbox, etc.) from `src/components/` rather than recreating UI patterns in pages.
- Prefer composing primitives with utility classes for layout and spacing.
- Provide accessible labels (`<label for>` or `aria-label`) for form controls.

Stories & examples
- Add a Storybook story for each new component and include usage, variants, and an accessibility-focused story when applicable.
- Create example pages (under `src/examples/`) to show how components compose at page scale.

Contribution notes
- New component checklist:
  - Implement component in `src/components/`
  - Add Storybook stories
  - Add a documentation file in `docs/component-specs/` with anatomy, props, and accessibility notes
  - Add unit and a11y tests under `src/__tests__/`

Naming conventions
- Use semantic names for tokens and component props. Prefer `intent` over color names when exposing props (e.g., `variant="destructive"`).

Performance
- Keep components lightweight: avoid large runtime dependencies and prefer CSS transitions over JS animations where possible.

If you need a tailored export for Figma or other design tools, request the specific plugin and I can generate an export file that maps tokens to the plugin format.
