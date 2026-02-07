
# POS-Universal

POS-Universal is a Next.js 16 universal Point of Sale system using TypeScript, Tailwind CSS, and modern React patterns.

## Project Structure

```
pos-universal/
	app/                # Next.js App Router pages and layouts
	lib/
		api/              # Shared API fetchers/utilities (e.g., products, users)
		db/               # RXDB database logic
			rxdb.ts         # RXDB initialization
			schemas/        # RXDB collection schemas
			types/          # TypeScript types for collections
	public/             # Static assets
	...
```

## API Utilities
Place all data fetching and API logic in `lib/api/`. Example:

```ts
// lib/api/products.ts
export async function fetchProducts() {
	const res = await fetch('/api/products');
	if (!res.ok) throw new Error('Failed to fetch products');
	return res.json();
}
```

## RXDB Integration
Local database logic is in `lib/db/`:
- `rxdb.ts`: Initializes and exports the RXDB instance
- `schemas/`: Collection schemas (e.g., product.schema.ts)
- `types/`: TypeScript interfaces for documents

Example product schema:
```ts
// lib/db/schemas/product.schema.ts
export const productSchema = {
	title: 'product schema',
	version: 0,
	description: 'Describes a product',
	type: 'object',
	properties: {
		id: { type: 'string', primary: true },
		name: { type: 'string' },
		price: { type: 'number' },
		stock: { type: 'number' },
	},
	required: ['id', 'name', 'price', 'stock'],
};
```

## Dev Dependencies
- RXDB (local database): `npm install --save-dev rxdb @types/rxdb`

---
For more details, see `.github/copilot-instructions.md`.
