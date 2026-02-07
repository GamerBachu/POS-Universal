## Local Database: Dexie Setup

Dexie is used for local IndexedDB storage. See `lib/db/dexieDb.ts` for setup.

### Example Dexie Usage
```typescript
import { db } from './lib/db/dexieDb';
// Add a product
await db.products.add({ id: '1', name: 'Sample', price: 10, stock: 100 });
// Query users
const users = await db.users.toArray();
```
# POS-Universal

POS-Universal is a modern Point of Sale (POS) system built with Next.js 16, TypeScript, and Tailwind CSS v4. It is designed to support multiple sales channels (in-store, online, mobile) from a single unified platform.

## Features
- Universal POS: Manage sales across physical stores, e-commerce, and mobile apps
- Modern UI: Responsive design using Tailwind CSS and Geist fonts
- Extensible: Easily add new channels or integrations
- Fast & Secure: Built on Next.js 16 with server-side rendering

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start development server:**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
app/
  layout.tsx        # Root layout, fonts, theme
  page.tsx          # Home page
  globals.css       # Tailwind and custom variables
  [channel]/        # Channel-specific pages (e.g., in-store, online)
public/             # Static assets
```

## Customization
- Add new sales channels by creating subdirectories in `app/` (e.g., `app/online/`, `app/mobile/`)
- Use TypeScript interfaces for products, transactions, and inventory
- Integrate APIs in `app/api/` for backend logic

## Tech Stack
- Next.js 16.1.6
- React 19.2.3
- Tailwind CSS v4
- TypeScript

## License
MIT
