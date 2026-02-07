# POS-Universal Copilot Instructions

## Project Overview
POS-Universal is a Next.js 16 application built with the App Router, TypeScript, and Tailwind CSS v4 for a universal Point of Sale system. The project emphasizes modern React patterns, server-side rendering, and responsive design.

## Architecture
- **Framework**: Next.js 16 with App Router (`app/` directory)
- **Styling**: Tailwind CSS v4 with custom CSS variables for theming
- **Language**: TypeScript with strict mode enabled
- **Linting**: ESLint with Next.js core web vitals and TypeScript rules
- **API Utilities**: Shared fetchers in `lib/api/`
- **Local Database**: Dexie setup in `lib/db/dexieDb.ts`

## Key Conventions
- Use path alias `@/*` for imports (maps to project root)
- Font setup: Geist Sans and Geist Mono via `next/font/google`
- Theme variables: `--background`, `--foreground` with dark mode support
- Component structure: Place pages in `app/` directory, shared components in `app/components/`
- Place all API/data fetch logic in `lib/api/` for reusability
- Place all Dexie logic, schemas, and types in `lib/db/`

## Development Workflow
- **Start dev server**: `npm run dev` (runs on http://localhost:3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (uses ESLint config from `eslint.config.mjs`)
- **Type checking**: Integrated with Next.js build process

## Code Patterns
- **Layout**: Root layout in `app/layout.tsx` handles fonts and metadata
- **Pages**: Create route-based components in `app/` subdirectories (e.g., `app/(auth)/dashboard/page.tsx`)
- **Styling**: Use Tailwind classes with CSS custom properties for consistent theming
- **Images**: Use Next.js `Image` component for optimization

## File Structure Examples
```
app/
  layout.tsx          # Root layout with fonts and theme
  page.tsx            # Home page
  globals.css         # Tailwind imports and custom variables
  (auth)/
    login/page.tsx
    register/page.tsx
    profile/page.tsx
    dashboard/page.tsx
    layout.tsx
    page.tsx
  (common)/
    error/page.tsx
    layout.tsx
    page.tsx
lib/
  api/                # Shared API fetchers/utilities
    products.ts       # Example: product API
    users.ts          # Example: user API
    index.ts          # Central API exports
  db/                 # Dexie database logic
    dexiedb.ts        # Dexie initialization
    types/            # TypeScript types for collections
      product.d.ts
      user.d.ts
public/
types/
```

## Best Practices
- Use Dexie for local IndexedDB storage. See `lib/db/dexiedb.ts` for setup and usage examples.
- Leverage Next.js App Router for nested layouts and loading states
- Use TypeScript interfaces for POS data models (products, transactions, inventory)
- Centralize all data access in `lib/api/` and local DB logic in `lib/db/` for maintainability
- Implement responsive design with Tailwind's mobile-first approach
- Follow Next.js conventions for API routes in `app/api/` when adding backend functionality

## Dependencies
- Next.js 16.1.6: Core framework
- React 19.2.3: UI library
- Tailwind CSS v4: Styling framework
- ESLint 9: Linting with Next.js presets
- RXDB: Local database (installed as dev dependency)