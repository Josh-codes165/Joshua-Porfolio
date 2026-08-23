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

## What's real vs. what's left for you
All contact links, project links, and screenshots are your actual data — nothing invented:

- **Projects**: CareFinder, Startup IQ, Satiate, Kings Palm Homes, Gravity Properties, and Xhrine x De Angels, each with real live/GitHub links and a compressed screenshot of the actual site.
- **Contact**: GitHub, LinkedIn, and X are wired to your real profiles. Email was pulled from your Startup IQ dashboard screenshot (`joshuaokoronkwo54@gmail.com`) — swap it in `src/data/site.ts` if you'd rather use a different inbox.

Still open, by design:

1. **`public/resume.pdf`** — the hero's "Download Resume" link points here; add your actual resume PDF to `public/`.
2. **`src/components/Contact.tsx`** — the contact form currently just shows a "message received" state on submit. Wire it to Formspree, Resend, or an API route to actually receive messages.
3. **`public/og-image.jpg`** — referenced in the Open Graph meta tags in `index.html` but not included; add a 1200x630 social preview image.

## Design notes
- Dark, near-black base (#0a0a0d) with a violet/magenta accent pulled from your avatar's rim lighting.
- Type system: Space Grotesk (display), Inter (body), JetBrains Mono (labels/eyebrows/nav) - the mono face ties structural labels back to a developer register.
- Signature element: the dev-tools "inspector" corner brackets around your portrait - a nod to frontend work specifically, instead of a generic glow ring.
- Project screenshots are cropped (browser chrome removed) and compressed to WebP, ~25-50KB each, so the projects section stays fast on slower connections.
- All copy is honest: no fabricated years of experience, client counts, or metrics.
