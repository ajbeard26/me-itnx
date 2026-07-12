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
```

Your hosting panel starts the app with `npm start` and assigns `PORT` automatically (e.g. 3011). Do not hardcode the port in the project.

After each deploy:

1. `git pull origin main`
2. `npm ci`
3. `npm run build`
4. Click **Restart** in your hosting panel

## Customize

- Edit the homepage content in `app/page.tsx`.
- Edit projects in `data/projects.ts`.
- Replace `public/images/hero-ocean.png` with your preferred hero image.
- Update the contact email in `app/page.tsx`.

## Deploy to a VPS

1. Upload the project and run `npm install`.
2. Run `npm run build`.
3. Start with `npm start`, PM2, or your hosting control panel.
4. Point your domain to the server. Your panel/nginx handles the reverse proxy to the assigned port.
