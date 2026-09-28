# Webcam Circles

A real-time webcam art demo: it captures your webcam feed and re-renders it as a living mosaic of colored circles — a halftone-style effect where every frame is drawn as a grid of dots whose size and color come from the pixels of the video beneath. Open it, allow camera access, wave your hand, and watch yourself dissolve into dots.

## Features

- **Real-time webcam processing** — captures frames with `react-webcam`, samples pixels via `getImageData`, redraws every frame with `requestAnimationFrame`
- **Circle-mosaic rendering** — the frame is divided into a grid (10px circles, 12px spacing); each circle's color is sampled from its underlying pixel
- **Runs fully in the browser** — canvas 2D, no server, no uploads, no recording; your video never leaves your device
- **Fullscreen immersive view** — edge-to-edge canvas that mirrors your camera
- **Fully client-side** — `'use client'` component only; no API routes, no server actions, no database

> Privacy note: the camera stream is processed locally in-page. Nothing is recorded or sent anywhere.

## Tech Stack

| Layer    | Tech                                  |
|----------|---------------------------------------|
| Framework | Next.js 15 (App Router, static export) |
| Language | TypeScript                            |
| Rendering | HTML5 Canvas 2D, `react-webcam`      |
| Styling  | Tailwind CSS 3, shadcn/ui (Radix UI)  |
| Package manager | pnpm                             |

## Quick Start

```bash
# install dependencies
npm install
# or: pnpm install

# run the dev server
npm run dev

# open http://localhost:3000 (allow camera access when prompted)
```

### Build for production

```bash
npm run build
npm start        # serves the production build locally
```

## Project Structure

```
webcam-circles/
├── app/
│   ├── page.tsx          # Fullscreen layout
│   ├── WebcamCircles.tsx # Camera capture + circle-mosaic canvas effect
│   ├── layout.tsx        # Root layout, fonts, theme provider
│   └── globals.css       # Tailwind + theme styles
├── components/
│   ├── theme-provider.tsx
│   └── ui/               # shadcn/ui primitives
├── lib/
│   └── utils.ts          # cn() class-name helper
├── next.config.mjs       # static export config (+ basePath for GitHub Pages)
└── tailwind.config.ts    # Tailwind theme config
```

## Environment Variables

None. The app is fully static — no secrets, API keys, or backend config required.

## Deployment

This app is statically exported (`output: 'export'` in `next.config.mjs`), so it can be hosted on any static host:

- **GitHub Pages** — the `gh-pages` branch of this repo is published at `https://girishlade111.github.io/webcam-circles/`
- **Vercel / Netlify / Cloudflare Pages** — `npm run build` then serve the `out/` directory

> Note: `next.config.mjs` sets `basePath: '/webcam-circles'` so assets resolve under the GitHub Pages subpath. Remove `basePath` if you deploy to a root domain (Vercel/Netlify).
>
> Note: browsers require a **secure context** (HTTPS or localhost) for webcam access — on plain HTTP the camera prompt will not appear.

## How It Works

1. `react-webcam` opens the camera and gives a `<video>` element.
2. Each animation frame, the video frame is drawn to a canvas and `getImageData` reads the pixels.
3. The canvas is cleared, then a grid of circles is drawn — each circle's fill color sampled from the center pixel of its grid cell — producing a real-time dotted portrait.

## License

Free to use and learn from.

---

Built by Girish Lade · [ladestack.in](https://ladestack.in)
