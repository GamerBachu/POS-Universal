# Gemini Code Assist Instructions

## Project Context
**Name**: POS-Universal
**Type**: Next.js Web Application (App Router)
**Stack**: TypeScript, Tailwind CSS, Dexie.js (IndexedDB)

## Code Style & Conventions

### 1. TypeScript & React
- **Components**: Use functional components. Prefer `export default function` for pages and layouts.
- **React 19**: Use React 19 features. like `useActionState` and the `action` prop for form handling instead of `onSubmit`.
- **Types**: Use `import type` for type definitions. Define interfaces in `@/types/`. do not use any for type first try to resolve type.
- **Strictness**: Avoid `any`. Use `Partial<T>`, `Omit<T, K>` utilities for flexible data handling.

### 2. Project Structure
- `app/`: Next.js App Router pages and layouts.
  - `(auth)/`: Authentication related routes (login, register).
  - `(common)/`: Shared/Common routes.
- `lib/api/`: API abstraction layer.
  - Use `static async` methods within classes (e.g., `userApi`) to encapsulate logic.
- `lib/db/`: Database configuration (Dexie.js).

### 3. Database Interactions (Dexie.js)
- Import the database instance: `import db from "@/lib/db/dexiedb";`.
- When adding data, handle optional IDs. If the ID is auto-generated, omit it from the input type or cast appropriately.
- Example:
  ```typescript
  static async post(userData: Partial<User>) {
    return db.users.add(userData as User);
  }
  ```

### 4. Styling
- Use Tailwind CSS for styling.
- Implement dark mode support using `dark:` variants.
- Example: `bg-white dark:bg-gray-800`.

## Best Practices
- **Error Handling**: Wrap API calls in `try/catch` blocks. Log errors to console.
- **Async/Await**: Always use async/await for database and fetch operations.
- **Navigation**: Use `next/navigation` for routing (e.g., `redirect`).

## Specific Instructions for Gemini
- When generating code, follow the existing patterns in `lib/api/` and `app/`.
- Ensure all new components are responsive and support dark mode.
- Check for existing types in `@/types/` before creating new ones.