# POS-Universal

POS-Universal is a Next.js 16 universal Point of Sale system using TypeScript, Tailwind CSS, and modern React patterns.

## Project Structure

```
pos-universal/
  app/
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
    layout.tsx
    page.tsx
    globals.css
  lib/
    api/
      products.ts
      users.ts
      index.ts
    db/
      dexiedb.ts
      types/
        product.d.ts
        user.d.ts
  public/
  types/
  package.json
  ...
```

## Routing
- `/auth/login` — Login page
- `/auth/register` — Register page
- `/auth/profile` — User profile (protected)
- `/auth/dashboard` — Dashboard (protected)
- `/common/error` — Error page

## Auth Pages & Layout
- All auth-related pages use a shared layout for consistent UI.
- Common pages (error, etc.) use their own layout.

## Best Practices
- Use Next.js App Router for nested layouts and route groups.
- Place all authentication and user-related logic in `app/(auth)/`.
- Place common/shared pages in `app/(common)/`.
- Use TypeScript interfaces for all data models.
- Centralize API/data access in `lib/api/`.
- Use Dexie for local IndexedDB storage (see `lib/db/dexiedb.ts`).
- Use Tailwind CSS for styling and responsive design.

## Development
- Start dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`

For more details, see `.github/copilot-instructions.md`.
