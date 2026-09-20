# Active Context

## Current Focus
Site is built (2026-09-20) and builds clean as a static export. Next move is creating the GitHub repo and deploying.

## Recent Changes
- Scaffolded Next.js 16 / React 19 / Tailwind 4, wrote all sections, verified light + dark + mobile by screenshot.
- `CV Resume.pdf` git-ignored: a public repo would have published the phone number the site deliberately omits.

## Decisions Made (2026-09-20, confirmed by user)
- **Stack:** Next.js (App Router) + TypeScript + Tailwind, static export.
- **Hosting:** GitHub Pages.
- **Purpose:** Online CV / portfolio only — no blog, no consulting landing, no project case studies.
- **Contact:** email + `https://linkedin.com/in/tahagalata`. Phone is deliberately omitted from the site.
- **Photo:** included, `photo.png`.
- **No PDF on the site** — not in `public/`, not linked. The page is the only artifact.
- **Visual direction:** Lineage / dataflow graph. Full token system in `designContext.md`.

## Next Steps
1. Create the `tahagalata.github.io` repo, push, enable Pages (Source: GitHub Actions).
2. Favicon + Open Graph image.
3. Verify the live site, then keyboard/screen-reader pass.

## Patterns & Preferences
- The user's working directory is named `tahagalata` — suggests the repo is intended as the GitHub user site (`tahagalata.github.io`), which avoids `basePath` complications.
- CLAUDE.md demands the memory bank be read in full every session and kept terse — compact these files when editing rather than appending.

## Insights
- The CV is enterprise-SAP-heavy with a recent AWS pivot (Vakko data lake, SageMaker). The site should make that trajectory legible — it's the most interesting thing about the profile and bullets alone bury it.
- Photo is only 431x442, so it works as a circular avatar up to ~200px displayed (retina) but will look soft as a large hero image. Design around that; ask for a higher-res original if a big portrait is ever wanted.
- The 2020 freelance web design role is off-narrative for a data analytics CV but worth keeping; it quietly explains why the site exists and is well built.
