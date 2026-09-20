# Tech Context

## Stack (decided 2026-09-20)
- **Next.js (App Router) + TypeScript** — static export (`output: 'export'`).
- **Tailwind CSS** for styling.
- **GitHub Pages** for hosting, deployed via GitHub Actions on push to `main`.
- Domain: **tahagalata.com** (decided 2026-09-20). `public/CNAME` carries it so each deploy re-asserts it. Apex A/AAAA records to GitHub's Pages IPs, `www` CNAME to `tahagalata.github.io.`; DNS not yet configured.

Rejected: Astro (less familiar tooling), plain HTML (harder to extend), Vercel (GH Pages preferred).

## Constraints
- **No server runtime.** No API routes, no SSR, no `next/image` optimization loader — use `images: { unoptimized: true }`.
- Served at a domain apex, so no `basePath`/`assetPrefix` needed.
- The absolute site URL is repeated in `public/CNAME`, `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts` — all four move together.
- Route handlers need `export const dynamic = "force-static"` under `output: "export"`; `robots.ts` and `sitemap.ts` both have it.
- `.nojekyll` file required in output so `_next/` assets aren't stripped by Jekyll.

## Repo State
- Git initialized 2026-09-20. No GitHub remote yet — needed before Pages can deploy.
- `CV Resume.pdf` is git-ignored (carries the phone number).

## Gotchas Hit
- **Tailwind v4 flattens `@theme` nested in `@media`** — dark values silently overwrite light ones. Tokens are therefore raw `--c-*` properties on `:root` (redefined in the dark media query) and mapped through `@theme inline`.
- **`var()` is not substituted in SVG presentation attributes** (`stroke="var(--x)"` renders nothing). Stroke colour comes from `stroke-*` utility classes.
- Edge animations rest in the *drawn* state and animate `from` hidden, so a failed animation never erases the graph.

## Dev Setup
- Node 20+, `npm run dev` on :3000, `npm run build` emits `out/`.
- `pypdf` (pip, user env) was installed to extract CV text — not a project dependency.

## Tooling Notes
- The CV is a Canva export; text extraction is out of visual order (contact/education blocks come first). Use `memory-bank/cvContent.md`, not re-extraction, as the content source.
