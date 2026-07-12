# AJ Beard Portfolio

A responsive Next.js portfolio site designed for `portfolio.nxrent.com`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Customize

- Edit the homepage content in `app/page.tsx`.
- Edit projects in `data/projects.ts`.
- Replace `public/images/hero-ocean.png` with your preferred hero image.
- Update the contact email in `app/page.tsx`.

## Deploy to a VPS

1. Upload the project and run `npm install`.
2. Run `npm run build`.
3. Start with `npm start`, PM2, or your hosting control panel.
4. Point `portfolio.nxrent.com` to the server and configure a reverse proxy to port 3000.
