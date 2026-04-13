# Feedback Components

This document describes the feedback components in the design system and accessibility notes.

## Toast
- Use for ephemeral, time-limited messages (success, error, info).
- Keep messages short and actionable. Include a dismiss control when appropriate.
- Accessibility: render toasts in an `aria-live="polite"` region so screen readers are notified. Do not move focus into the toast unless it requires immediate interaction.

## Skeleton
- Use Skeleton placeholders to indicate loading content and reduce perceived latency.
- Keep the shape close to the final content (avatar, text line, card block).
- Respect `prefers-reduced-motion` — Tailwind's `animate-pulse` should be omitted if the user prefers reduced motion.

## Progress
- Use for long-running tasks with a known completion percentage.
- Provide textual context near the progress (label + percent). For indeterminate progress, use a spinner instead.
- Ensure color contrast of the track and bar meets WCAG for visibility.

## General
- Avoid blocking the UI with many toasts; queue or limit toasts to a small number (2-3).
- Provide consistent placement (bottom-right by default in this system).

Examples are available in Storybook under the `Feedback` section.
