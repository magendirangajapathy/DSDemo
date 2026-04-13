# Design Handoff Guide

This document helps designers and engineers map design tokens and component specs between design tools and the codebase.

Tokens
- Tokens are defined in `src/tokens/design-tokens.json` and exposed as CSS variables in `src/index.css`.
- Colors, spacing, radii, fonts, and breakpoints are centralized here. Use these values when designing mockups.

Naming conventions
- Use semantic token names (e.g., `color.primary`, `radius.md`) rather than raw hex values.
- Prefix UI tokens with their intent: `color.primary`, `color.success`, `color.surface`.

Exporting to design tools
- Export tokens as a JSON file (`src/tokens/design-tokens.json`) which designers can import into Figma plugins (tokens plugin) or other tools.
- Provide component usage and variants in the `docs/component-specs` directory to show expected states and accessibility notes.

Component specs
- Each major component has a spec in `docs/component-specs/` describing anatomy, props, variants, and accessibility requirements.
- These specs are intentionally lightweight and intended for handoff; link to Storybook stories for live examples.

Responsive & layout
- Design at the key breakpoints specified in `design-tokens.json` (`sm`, `md`, `lg`).
- Use the provided spacing scale to keep rhythm consistent.

Accessibility checklist (for handoff)
- Ensure contrast ratios meet WCAG AA for text and UI components.
- Provide keyboard behavior notes and focus states in component specs.
- Mark any non-standard interactions clearly in the handoff docs.

If you want, I can also generate a Figma tokens JSON formatted specifically for common Figma token plugins — say if you'd like that, tell me which plugin to target.
