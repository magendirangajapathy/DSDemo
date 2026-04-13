# Shadcn-inspired Design System

[![CI](https://github.com/<OWNER>/<REPO>/actions/workflows/ci.yml/badge.svg)](https://github.com/<OWNER>/<REPO>/actions/workflows/ci.yml) [![Storybook](https://github.com/<OWNER>/<REPO>/actions/workflows/deploy-storybook.yml/badge.svg)](https://github.com/<OWNER>/<REPO>/actions/workflows/deploy-storybook.yml)

Starter design system built with React (JavaScript), Tailwind CSS, and Storybook.

Quick start

```bash
# install dependencies
npm install

# run dev server
npm run dev

# open Storybook
npm run storybook

# build storybook for publishing
npm run build-storybook

# publish package (requires npm login and package name change)
npm publish --access public
```

Tests

```bash
# run unit & a11y tests (vitest + axe)
npm run test

# run tests once with coverage
npm run test:run
```

Notes

- This repo follows shadcn conventions (Radix primitives + Tailwind utilities). It uses CSS variables for tokens and tailwind config extensions.
- Next steps: add full component library, accessibility checks, docs and design handoff artifacts.

Badges

- Replace `<OWNER>` and `<REPO>` in the badge URLs above with your GitHub owner and repository name to enable live status badges.
