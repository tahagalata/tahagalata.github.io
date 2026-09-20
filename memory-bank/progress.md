# Progress

## Current Status
Site built and building clean as a static export (2026-09-20). Not yet deployed — no GitHub remote exists.

## What Works
- CV content extracted to `cvContent.md`; all content questions resolved.
- Next.js 16 + React 19 + Tailwind 4 scaffold, `output: "export"`, typechecks and builds clean.
- Full page: left rail (identity, education, languages, clients) + main column (summary, toolkit with brand marks, lineage graph), full-width footer.
- Light and dark schemes both verified by screenshot; mobile (390px) verified.
- Deploy workflow at `.github/workflows/deploy.yml`.
- Custom domain wired: `public/CNAME`, canonical + OG URL, `robots.txt`, `sitemap.xml` all emit `tahagalata.com`.

## What's Left
- [ ] Create the GitHub repo (`tahagalata.github.io`) and push; enable Pages with Source: GitHub Actions
- [ ] Configure `tahagalata.com` DNS, set the custom domain in repo settings, enforce HTTPS
- [ ] Favicon and an Open Graph image
- [ ] Keyboard + screen-reader pass on real hardware
- [ ] Verify the deployed site once live

## Known Issues
- No GitHub remote yet, so nothing is deployed; `tahagalata.com` DNS not configured.
- No favicon or OG image; link previews will be bare.
- Photo is 431x442 — fine at its current size, too small for a large portrait.
- `pdftotext`/`pdftoppm` unavailable locally; `pypdf` (pip, user env) was used instead. Re-extraction isn't needed — use `cvContent.md`.

## Decision History
- **2026-09-20** — Next.js over Astro/plain HTML: SEO + easy content edits + room to grow, at the cost of a build step.
- **2026-09-20** — GitHub Pages over Vercel: free, matches the `tahagalata` user-site repo name.
- **2026-09-20** — Custom apex domain `tahagalata.com` rather than `tahagalata.github.io`; the contact address is on the same domain.
- **2026-09-20** — Scope held to CV/portfolio; blog and case studies explicitly deferred.
- **2026-09-20** — Phone number excluded from the site (public page is a different exposure than a PDF sent to a named recruiter); photo included.
- **2026-09-20** — Visual direction: lineage/dataflow graph, chosen over a ledger-table and a schematic-Gantt treatment.
- **2026-09-20** — No PDF shipped or linked at all; the page is the only artifact. `CV Resume.pdf` stays a local content source.
