# Tech Context

## Stack
- **Next.js 16 (App Router) + React 19 + TypeScript**, static export (`output: "export"`).
- **Tailwind CSS 4**.
- **GitHub Pages**, deployed by Actions on push to `main`.
- Repo: `github.com/tahagalata/tahagalata.github.io` (public). Branch `main`.
- Live at **https://tahagalata.com**; `www` 301s to the apex.

Rejected: Astro (less familiar tooling), plain HTML (harder to extend), Vercel (Pages preferred).

## DNS
- Nameservers are **Cloudflare**. The Pages records (apex A/AAAA, `www` CNAME) must stay **grey-cloud / DNS-only**.
- **Cloudflare's proxy breaks GitHub's certificate issuance** — it intercepts the ACME validation, so GitHub can never issue, and Cloudflare then returns `526 Invalid SSL certificate`. This cost a debugging round on 2026-09-20. If HTTPS breaks at renewal, check the orange cloud first.
- If the proxy is ever re-enabled, only after a cert exists, and Cloudflare SSL/TLS must be **Full (strict)** — *Flexible* causes an infinite redirect loop against Pages' own HTTPS redirect.

## Constraints
- **No server runtime.** No API routes, no SSR, no image optimisation loader (`images: { unoptimized: true }`).
- Served at a domain apex, so no `basePath`/`assetPrefix`.
- The absolute site URL is repeated in `public/CNAME`, `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts` — all four move together.
- Route handlers need `export const dynamic = "force-static"`; `robots.ts` and `sitemap.ts` have it. Without it the build fails outright.
- `.nojekyll` in `public/` so Jekyll doesn't strip `_next/`.

## Repo Hygiene
- **Public repo**, so nothing tracked may carry the phone number or personal addresses. History was scrubbed with `filter-branch` before the first push (2026-09-20); `cvContent.md` and `content/cv.ts` both held them.
- `CV Resume.pdf` is git-ignored.
- Commit author email is the user's personal gmail, **by their explicit choice** — do not "fix" it.

## Gotchas Hit
- **Tailwind v4 flattens `@theme` nested in `@media`** — dark values silently overwrote light ones and the site had no light mode. Hence raw `--c-*` on `:root` + `@theme inline`.
- **`var()` is not substituted in SVG presentation attributes.** `stroke="var(--x)"` renders nothing; use `stroke-*` utilities or a style attribute.
- Edge animations rest **drawn** and animate *from* hidden, so a failed animation never erases the graph.
- An SVG favicon cannot load a web font, which is why the icons are PNG.

## Dev Setup
- Node 20+ (local: 26). `npm run dev` on :3000, `npm run build` emits `out/`.
- Screenshots for verification: the Playwright chromium-headless-shell in `~/Library/Caches/ms-playwright/`, against `python3 -m http.server` in `out/`. Dark mode is tested by copying `out/`, rewriting `@media (prefers-color-scheme:dark)` to `@media screen`, and serving that — Chrome's `--force-dark-mode` is auto-darkening and does *not* trigger the media query.
- `pypdf` (pip, user env) extracted the CV text — not a project dependency. `pdftotext`/`pdftoppm` are unavailable locally.

## Tooling Notes
- The CV is a Canva export; extraction comes out of visual order. Use `cvContent.md`, never re-extract.
- `simple-icons` was installed `--no-save` to lift tool mark paths; `content/marks.ts` is generated output, not a live dependency.
