# NCube Identity Premium Website

Premium React + Vite website for NCube Identity.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Cloudflare Pages settings

- Framework preset: React (Vite) or Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank
- Production branch: `main`

## Important GitHub structure

Upload the project so the repository root contains:

```text
index.html
package.json
vite.config.js
src/
public/
```

Do not upload `App.jsx`, `main.jsx`, or `styles.css` directly into the repository root. They must remain inside `src/`.
