# X-Market Admin Dashboard

## Project Overview

E-commerce admin dashboard built with React 19 + TypeScript + Vite 7. Manages products via Supabase with React Query hooks. Includes a Vercel serverless proxy for a secondary REST API and Grafana Faro for observability.

## Tech Stack

- **Framework**: React 19, TypeScript 5.8, Vite 7
- **UI**: MUI 7 (Material UI), SCSS Modules, styled-components
- **State/Data**: React Query (TanStack Query 5), React Hook Form 7
- **Database**: Supabase (products CRUD)
- **API Proxy**: Vercel serverless (`api/[...path].ts`) → backend (configured via `API_BACKEND_URL` env var)
- **Monitoring**: Grafana Faro (tracing + web instrumentations)
- **Routing**: React Router DOM 6

## Commands

- `npm run dev` — Start dev server (Vite)
- `npm run build` — Type-check + production build (`tsc -b && vite build`)
- `npm run lint` — ESLint
- `npm run preview` — Preview production build

## Project Structure

```
src/
├── main.tsx              # Entry: Faro init, QueryClient, renders App
├── App.tsx               # Routes definition (React Router)
├── faro.tsx              # Grafana Faro monitoring setup
├── components/           # Reusable UI components
│   ├── AddForms/         # Product creation form
│   ├── EditForm/         # Product edit form
│   ├── Input/            # Form input (react-hook-form integrated)
│   ├── ImageInput/       # Image URL input field
│   ├── BasicSelect/      # Stock state selector
│   ├── MultipleSelect/   # Color multi-select
│   ├── PickFile/         # File picker (unused in forms)
│   ├── MediaCard/        # Single product card
│   ├── ProductsCard/     # Product grid container
│   ├── Table/            # Hardcoded product table
│   ├── SideBarMenu/      # Navigation sidebar
│   ├── Common/Header/    # Top header bar
│   ├── Graphs/           # Dashboard charts (Revenue, Pie, Map)
│   ├── Button.tsx        # MUI Button wrapper
│   └── LinearProgressBar/ # Progress bar with label
├── pages/
│   ├── Overview/         # Dashboard home (charts, metrics, table)
│   ├── Products/         # Product list, add, detail, edit pages
│   ├── Orders/           # Placeholder
│   ├── HelpCenter/       # Placeholder
│   ├── Settings/         # Placeholder
│   └── Logout/           # Placeholder
├── hooks/useProducts.ts  # React Query hooks (useProducts, useProduct, useDeleteProduct, useCreateProduct) via Supabase
├── lib/axios.ts          # Axios instance (baseURL from VITE_API_BASE_URL env var)
├── supabase/             # Supabase client init
├── types/FormTypes.ts    # Product types + form types
├── helpers/              # Constants + chart datasets
├── styles/               # Global SCSS, variables, mixins, MUI theme
└── layout/Layouts.tsx    # Grid layout (sidebar + content)
api/
└── [...path].ts          # Vercel serverless proxy to backend
```

## Path Aliases (vite.config.ts)

- `@` → `./src`
- `@components` → `./src/components`
- `@pages` → `./src/pages`
- `@assets` → `./src/assets`

## Data Layer

- **Supabase** is the unified data source for all product CRUD, accessed exclusively through React Query hooks in `src/hooks/useProducts.ts`
- **Axios/REST API** exists as a secondary backend (configured via env vars), available but not used for product operations
- All product mutations (create, delete) use React Query mutations with automatic query invalidation — no manual `window.location.reload()`

## Key Patterns

- Forms use `react-hook-form` with `Controller` for MUI components
- Product images stored as `image_url: string[]` in Supabase
- SCSS Modules for component-level styling (`.module.scss`)
- MUI Grid v2 API (`size={{ xs: 12, md: 6 }}`)
- Responsive breakpoints: xs(0), sm(375), md(768), lg/xl(1440)

## Environment Variables

- `VITE_SUPABASE_URL` — Supabase project URL
- `VITE_SUPABASE_KEY` — Supabase anon key
- `VITE_API_BASE_URL` — REST API base URL (used by Axios instance)
- `VITE_FARO_COLLECTOR_URL` — Grafana Faro collector endpoint
- `API_BACKEND_URL` — Backend URL for Vercel serverless proxy (server-side only)
