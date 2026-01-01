# Harviera IT Solutions – Marketing Site

Pastel glassmorphism marketing site using Next.js App Router, TypeScript, Tailwind, shadcn/ui, Framer Motion, and Lucide.

## Tech Stack
- **Next.js 14+** (App Router)
- **TypeScript** everywhere
- **Tailwind CSS**
- **shadcn/ui primitives**: Button, Input, Tabs, Dialog, NavigationMenu, Sheet
- **Framer Motion**: Animations & scroll reveals
- **Lucide Icons**: Iconography

## Design System
- **Style**: Pastel + glassmorphism, light & airy.
- **Components**: Glass cards (`rgba(255,255,255,0.35)`, backdrop-blur-xl), rounded corners, subtle gradients.
- **Color Tokens** (defined in `tailwind.config.ts`):
  - Lavender: `#E7D7FF`
  - Baby Blue: `#D9EFFF`
  - Mint: `#DFFFEA`
  - Blush Pink: `#FFE7EF`
  - Peach: `#FFD9C2`
  - Sky: `#CFF3FF`
  - Soft Gray: `#F2F5F8`

## Features & Routes
Authentication or dynamic API routes are not currently implemented (Static Site).

**Available Routes:**
- `/` - Home
- `/about` - About Us
- `/services` - Services Listing
- `/courses` - Courses Listing
- `/industries` - Industries Listing
- `/case-studies` - Case Studies Listing
- `/resources` - Resources Listing
- `/contact` - Contact Page

## Project Structure
```
app/          # Pages and Layouts (App Router)
components/   # React Components
  layout/     # Header, Footer, Background
  sections/   # Page-specific sections
  ui/         # Reusable UI primitives (shadcn)
lib/          # Utilities and Constants
public/       # Static Assets
```

## Getting Started

Run the development server:

```pwsh
npm install
npm run dev
```

Open `http://localhost:3000` with your browser to see the result.

## Deployment

Since there are no server-side requirements (no dynamic API routes), this site is fully compatible with **Static Export**.

**Configuration:**
- `next.config.ts` is configured with `output: 'export'` and `images: { unoptimized: true }`.

**Compatible Hosts:**
- GitHub Pages
- Netlify
- Any static hosting provider
