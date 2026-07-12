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

The app reads `PORT` and `HOSTNAME` from the environment. This project is configured for **port 3011** (nginx proxy target).

```bash
npm run build
pm2 start ecosystem.config.cjs
# or after updates:
pm2 restart me-itnx --update-env
pm2 save
```

Check it is listening on the right port:

```bash
pm2 logs me-itnx --lines 20
curl -I http://127.0.0.1:3011
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
4. Point `portfolio.nxrent.com` to the server and configure a reverse proxy to the assigned `PORT`.
