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

```
src/
├── App.tsx                        # Top-level app component
├── main.tsx                       # App entry point
├── index.css                      # Global styles & Tailwind config
├── assets/                        # Static assets (images, logos, 404 art)
├── components/
│   ├── common/
│   │   ├── button/                # Reusable Button component with CVA variants
│   │   │   ├── button.tsx
│   │   │   └── index.ts           # buttonVariants (class-variance-authority)
│   │   ├── input/
│   │   │   └── input.tsx
│   │   └── skeleton/              # Reusable Skeleton loader component
│   │       ├── skeleton.tsx
│   │       └── index.ts
│   ├── icons/                     # Custom SVG icon components (Logout, MoneyBag, Notification)
│   │   └── index.ts
│   ├── ui/                        # UI primitives (Header, Footer, Sidebar)
│   │   └── index.ts
│   ├── AboutUs.tsx
│   └── PageHead.tsx
├── features/
│   ├── users/                     # Role-based user management
│   │   ├── Manage.tsx             # Routes to Admin/Rider/Customer app by role
│   │   ├── admin/app.tsx
│   │   ├── customers/app.tsx
│   │   ├── riders/app.tsx
│   │   └── index.ts
│   └── components/                # Feature-specific component stubs (admin, customers, riders)
├── hooks/                         # Custom React hooks (useAuth, useDebounce, useToggle)
├── layouts/
│   ├── AppLayout.tsx              # Authenticated app layout (with Sidebar)
│   ├── AuthLayout.tsx             # Auth pages layout (redirects /auth → /auth/login)
│   └── MainLayout.tsx             # Public pages layout (Header + Footer)
├── lib/
│   ├── utils.ts                   # cn() helper (clsx + tailwind-merge)
│   └── queryClient.ts
├── pages/
│   ├── app/dashboard.tsx          # Dashboard — renders Manage by user role
│   ├── auth/                      # Login, SignUp, ForgetPassword, Verification
│   ├── external/                  # Home, ContactUs (public pages)
│   └── NotFound.tsx               # 404 page with dark/light mode background
├── routes/
│   ├── AppRoutes.tsx              # Router config (public, auth, app, 404)
│   └── ProtectedRoutes.tsx        # Auth guard wrapper
├── services/
│   ├── api/                       # Axios instance, endpoints, interceptors
│   └── authService.ts
├── store/
│   ├── store.ts                   # Zustand store
│   └── slices/authSlice.ts        # Auth state (user, token, role, loading)
└── utils/
    └── logger.ts                  # Logger utility
```

## Important files to note

| File | Purpose |
|------|---------|
| `src/components/common/button/index.ts` | Button variant definitions (CVA). Padding uses longhand (`pl-*`/`pr-*`) so `twMerge` correctly resolves overrides. |
| `src/components/common/button/button.tsx` | Button component — passes `className` separately after variants so user classes take priority. |
| `src/components/common/skeleton/skeleton.tsx` | Reusable animated skeleton loader. Style via `className` for size/shape. |
| `src/components/icons/` | Custom SVG icons accepting `size` and `className` props. Use `fill="currentColor"` to inherit text color. |
| `src/components/ui/Sidebar.tsx` | Role-based sidebar with mobile hamburger menu toggle, skeleton loading states, and hidden-scrollbar overflow. |
| `src/features/users/Manage.tsx` | Maps user role (`Admin`/`Rider`/`User`) to the correct feature app component. |
| `src/layouts/AuthLayout.tsx` | Redirects `/auth` to `/auth/login` using `useNavigate` (not `redirect`). |
| `src/pages/NotFound.tsx` | 404 page with adaptive dark/light background images, respecting both CSS class and OS `prefers-color-scheme`. |
| `src/store/slices/authSlice.ts` | Zustand auth slice — manages user, token, role, loading, and authentication state. |

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
