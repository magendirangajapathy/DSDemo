# Navigation Patterns

This document captures recommended navigation patterns and when to use them.

Primary navigation
- Use a single primary nav for top-level sections. Keep items concise (6-8 items max).
- On mobile, collapse into a hamburger menu or bottom navigation depending on context.

Secondary navigation
- Use side navigation for complex apps with many sections (dashboards, admin tools).
- Keep hierarchy shallow where possible; prefer progressive disclosure.

Breadcrumbs
- Use breadcrumbs for deep hierarchies to allow users to orient and navigate up the tree.

Sidebar
- Collapsible sidebar works well for larger screens. Ensure collapse preserves focus order.

Dropdowns and flyouts
- Use dropdowns for contextual actions. Ensure keyboard navigability (arrow keys, Esc to close).

Pagination & infinite scroll
- Use pagination for data that has clear pages (tables). Use infinite scroll only for continuous reading experiences.

ARIA + keyboard
- Mark navigation regions with `nav` and `aria-label`.
- Provide visible focus for links and menu items. Ensure arrow-key navigation in menus where appropriate.

Responsive considerations
- Choose a mobile navigation pattern (bottom nav, drawer, or hamburger) based on the app's hierarchy and frequency of access.

Examples and when to use each pattern are documented in the Storybook examples directory.
