# DJ Portfolio

Production-ready DJ portfolio site: **DJ YOURNAME** — Afro / Tech House / Festival Energy. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Dark, cinematic, minimal. Static export compatible and ready to deploy on Vercel.

## Tech Stack

- **Next.js** (latest, App Router)
- **TypeScript**
- **Tailwind CSS**
- Static export (`output: 'export'`)
- Minimal JS, CSS-only animations
- Optimized for performance (Lighthouse 95+ target)

## Run Locally

```bash
cd dj-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Produces an optimized production build. For static export, the same command outputs to the `out` directory (see below).

## Static Export

The project is configured for static export in `next.config.ts` (`output: 'export'`). When you run:

```bash
npm run build
```

Next.js will generate a static site in the **`out`** directory. You can serve it with any static host:

```bash
npx serve out
```

## Deploy to Vercel

1. Push the repo to GitHub (or connect another Git provider in Vercel).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. **Add New Project** → Import your `dj-portfolio` repo.
4. Leave **Build Command** as `npm run build` and **Output Directory** as `out` (for static export) or leave default if you use Vercel’s server build.
5. Click **Deploy**.

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

Follow the prompts and deploy.

## Where to Place Images

Put all assets in **`/public`** so they are served from the root:

- **Hero background:** `/public/images/hero-bg.jpg`  
  High-quality dark/cinematic image for the hero section.
- **Gallery:** `/public/images/gallery-1.jpg` … `/public/images/gallery-6.jpg`  
  Used in the Gallery section (see `components/Gallery.tsx`).
- **Favicon:** A placeholder SVG favicon is in `app/icon.svg`. Replace it with your own `app/icon.ico` or `app/icon.svg` as needed.

Paths in code reference `/images/...` (e.g. `/images/hero-bg.jpg`), which map to `public/images/`.

## Project Structure

```
dj-portfolio/
├── app/
│   ├── layout.tsx    # Root layout, SEO & Open Graph metadata
│   ├── page.tsx      # Home page, sections composed here
│   └── globals.css   # Tailwind + global styles
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── LatestMix.tsx   # SoundCloud embed (lazy loaded)
│   ├── UpcomingEvents.tsx
│   ├── Gallery.tsx     # next/image grid
│   ├── Contact.tsx     # Form UI only, no backend
│   └── Footer.tsx
├── public/
│   └── images/        # Add hero-bg.jpg, gallery-1..6.jpg, favicon.ico
├── next.config.ts     # output: 'export', images unoptimized for static
├── tailwind.config.ts
└── package.json
```

## Customization

- **DJ name / copy:** Replace "DJ YOURNAME" and bio text in `app/layout.tsx` (metadata), `components/Hero.tsx`, `components/About.tsx`, and `components/Footer.tsx`.
- **SoundCloud:** In `components/LatestMix.tsx`, replace the embed URL with your track’s SoundCloud embed link.
- **Events:** Edit the `EVENTS` array in `components/UpcomingEvents.tsx`.
- **Social links:** Update `SOCIAL_LINKS` in `components/Footer.tsx`.
- **Contact form:** Form is UI-only; wire to your backend or a service (e.g. Formspree, Vercel serverless) as needed.

## Performance

- Below-the-fold sections use `next/dynamic` for code splitting.
- SoundCloud iframe is lazy loaded when the Latest Mix section enters view.
- Images use `next/image` with responsive `sizes`; with static export, `images.unoptimized: true` is set in `next.config.ts`.
- No heavy animation libraries; animations are CSS-only (Tailwind keyframes).
- Semantic HTML and minimal JS for fast load and strong Lighthouse scores.
