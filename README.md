# Dwarkamai Tours & Travels

A static, frontend-only travel website built with React, TypeScript, Vite, Tailwind CSS, React Router and Motion. Enquiries are prepared in the browser; the site has no backend, database, booking engine or payment flow.

## Run locally

```sh
npm install
npm run dev
```

## Validate and build

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

## Deploy to Vercel

Import the repository into Vercel and use the Vite defaults (`npm run build`, output directory `dist`). The included `vercel.json` rewrites direct route requests to the SPA entry point.

## Business content

- Contact details and WhatsApp settings: `src/config/contact.ts`
- Services, fleet, destinations, trip ideas and gallery: `src/data/`
- The shared light/dark theme follows the system preference by default and saves the visitor’s choice in browser storage.
- Existing photos are retained in `src/assets/`
- Static route metadata: `index.html`; crawler files: `public/robots.txt` and `public/sitemap.xml`

The homepage hero uses an original Dwarkamai coach photo. The WhatsApp action opens a prefilled message only after the visitor reviews the form and chooses to continue. The phone link opens `tel:8999758984`; neither action confirms a booking. Update `contactConfig.whatsappEnabled` if WhatsApp availability changes.
