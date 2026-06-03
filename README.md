# Naked Farms — Website

Marketing site for Naked Farms: agritech franchising for city food-system revival.

## Tech stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- Deployed on **Netlify**

## Local development

Requires Node.js (or [Bun](https://bun.sh)).

```sh
# install dependencies
bun install        # or: npm install

# start the dev server (http://localhost:8080)
bun run dev        # or: npm run dev

# production build
bun run build      # or: npm run build

# preview the production build
bun run preview    # or: npm run preview
```

## Project structure

- `src/pages/` — route-level pages
- `src/components/` — shared components (incl. `ui/` shadcn primitives)
- `src/data/` — static content (articles, etc.)
- `src/assets/` — bundled images
- `public/uploads/` — static media served as-is

## Deployment

Pushing to `main` triggers a Netlify build and deploy. SPA routing is handled by
`public/_redirects` (`/* /index.html 200`).
