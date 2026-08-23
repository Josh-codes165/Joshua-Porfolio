# Joshua Okoronkwo — Portfolio

Built with React + TypeScript + Vite + Tailwind CSS v4.

## Run locally
```
npm install
npm run dev
```

## Build for production
```
npm run build
```
Deploys straight to Vercel like your other projects (framework preset: Vite).

## Before you ship this
A few things were intentionally left as placeholders rather than invented — fill these in:

1. **`src/data/site.ts`** — add your real email, LinkedIn, and X/Twitter URLs. GitHub is already filled in.
2. **`public/resume.pdf`** — the hero's "Download Resume" link points here; add your actual resume PDF to `public/`.
3. **`src/components/Contact.tsx`** — the contact form currently just shows a "message received" state on submit. Wire it to Formspree, Resend, or an API route to actually receive messages.
4. **Project screenshots** — each project card currently shows a placeholder tile with the project name. Drop real screenshots into `src/assets/` and swap them into `src/data/projects.ts` / `Projects.tsx` when you have them.
5. **`public/og-image.jpg`** — referenced in the Open Graph meta tags in `index.html` but not included; add a 1200x630 social preview image.

## Design notes
- Dark, near-black base (#0a0a0d) with a violet/magenta accent pulled from your avatar's rim lighting.
- Type system: Space Grotesk (display), Inter (body), JetBrains Mono (labels/eyebrows/nav) - the mono face ties structural labels back to a developer register.
- Signature element: the dev-tools "inspector" corner brackets around your portrait - a nod to frontend work specifically, instead of a generic glow ring.
- All copy is honest: no fabricated years of experience, client counts, or metrics.
