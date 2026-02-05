# POS-Universal Copilot Instructions

## Project Overview
POS-Universal is a Next.js 16 application built with the App Router, TypeScript, and Tailwind CSS v4 for a universal Point of Sale system. The project emphasizes modern React patterns, server-side rendering, and responsive design.

## Architecture
- **Framework**: Next.js 16 with App Router (`app/` directory)
- **Styling**: Tailwind CSS v4 with custom CSS variables for theming
- **Language**: TypeScript with strict mode enabled
- **Linting**: ESLint with Next.js core web vitals and TypeScript rules

## Key Conventions
- Use path alias `@/*` for imports (maps to project root)
- Font setup: Geist Sans and Geist Mono via `next/font/google`
- Theme variables: `--background`, `--foreground` with dark mode support
- Component structure: Place pages in `app/` directory, shared components in `app/components/`

## Development Workflow
- **Start dev server**: `npm run dev` (runs on http://localhost:3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (uses ESLint config from `eslint.config.mjs`)
- **Type checking**: Integrated with Next.js build process

## Code Patterns
- **Layout**: Root layout in `app/layout.tsx` handles fonts and metadata
- **Pages**: Create route-based components in `app/` subdirectories (e.g., `app/dashboard/page.tsx`)
- **Styling**: Use Tailwind classes with CSS custom properties for consistent theming
- **Images**: Use Next.js `Image` component for optimization

## File Structure Examples
```
app/
  layout.tsx          # Root layout with fonts and theme
  page.tsx            # Home page
  globals.css         # Tailwind imports and custom variables
  dashboard/
    page.tsx          # /dashboard route
    components/
      SalesChart.tsx  # Dashboard-specific components
```

## Best Practices
- Leverage Next.js App Router for nested layouts and loading states
- Use TypeScript interfaces for POS data models (products, transactions, inventory)
- Implement responsive design with Tailwind's mobile-first approach
- Follow Next.js conventions for API routes in `app/api/` when adding backend functionality

## Dependencies
- Next.js 16.1.6: Core framework
- React 19.2.3: UI library
- Tailwind CSS v4: Styling framework
- ESLint 9: Linting with Next.js presets