# EDHF Logistics — Frontend

This repository contains the frontend for EDHF Logistics — a React + TypeScript application bootstrapped with Vite.

This README gives a quick orientation, how to run the project locally, and where to look for key pieces of the codebase.

## Features

- React 19 + TypeScript
- Vite dev server with fast refresh
- ESLint + Prettier for linting & formatting
- Tailwind CSS for styling
- Simple state management (zustand) and routing (react-router-dom)

## Prerequisites

- Node.js (recommended >= 18)
- npm (or yarn/pnpm) — examples below use npm

## Getting started

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Open the app

Visit http://localhost:5173 (Vite's default) in your browser.

## Available scripts

The `package.json` contains the following useful scripts:

- `npm run dev` — start Vite dev server
- `npm run build` — run TypeScript build and create a production bundle with Vite
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint (auto-fix enabled)
- `npm run format` — format source files with Prettier
- `npm run check-format` — check formatting with Prettier

Run them with `npm run <script>`.

## Project structure (high level)

- `src/` — application source code
  - `assets/` — static assets
  - `components/` — reusable components and UI primitives
  - `pages/` — route pages
  - `layouts/` — layout components
  - `services/` — API and service layer
  - `store/` — global state (zustand)
  - `hooks/` — custom React hooks
- `public/` — static files served as-is

Example entry files:

- `src/main.tsx` — app entry
- `src/App.tsx` — top-level app component and router

## Linting & formatting

This project includes ESLint and Prettier. Run the formatter and linter with:

```bash
npm run format
npm run lint
```

Husky is configured (see `prepare` script) to run git hooks if present in the repo.

## Contributing

Please see `CONTRIBUTING.md` for contribution guidelines and the preferred development workflow.

## Notes & further steps

- If you add backend API endpoints or environment variables, document them here.
- Consider adding a `LICENSE` file if you want to make the project's license explicit.

---

If you'd like, I can also add a short development checklist, an example `.env` file template, or a section on testing and CI next.
