# LHC Web

A starter website built with Vite, Vue 3, and TypeScript.

## Development

```sh
npm install
npx vite
```

Alternatively, start the development server with `npm run dev`.

## Build

```sh
npm run build
npm run preview
```

`npm run build` runs type checking before building with Vite. To run Vite's build command directly, use `npx vite build`.

## Deploy to GitHub Pages

GitHub Actions builds and deploys the site whenever you push to the `main` branch. In your repository, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

Vite's `base` is set to `/lhc-web/` to match this repository's name. If you change the repository name or site URL, update `base` in `vite.config.ts`. For a custom domain served from the root, set it to `/`.
