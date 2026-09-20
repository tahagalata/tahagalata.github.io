# Active Context

## Current Focus
**The site is live at https://tahagalata.com** (2026-09-20), HTTPS enforced, served by GitHub Pages. The build-and-launch phase is done. Remaining work is polish and verification, not construction.

## Settled Decisions (all confirmed by the user, 2026-09-20)
- **Stack:** Next.js + TypeScript + Tailwind, static export → GitHub Pages at the `tahagalata.com` apex.
- **Purpose:** online CV only. No blog, case studies, or consulting landing.
- **Contact:** `contact@tahagalata.com` (mailbox confirmed live) + `linkedin.com/in/tahagalata`. **Phone never published.** The CV's personal gmail is not used on the site.
- **No PDF** shipped or linked anywhere; the page is the only artifact.
- **Photo:** included, full colour, square with a hairline. Grayscale was tried and rejected — do not desaturate again.
- **Visual direction:** lineage / dataflow graph. Tokens and rules in `designContext.md`.

## Next Steps
1. Re-run LinkedIn's Post Inspector after the latest push — the 2x social card needs a forced re-scrape to replace the cached blurry one.
2. Keyboard and screen-reader pass on real hardware (never done; only static screenshots so far).
3. Optional: replace the NovaDSA logo if a clean vector becomes available (current one is an auto-trace).

## Patterns & Preferences
- **The user has a sharp eye and reverses course when something is wrong** — grayscale photo reverted, "Where the current work came from" simplified to "Experience", capabilities section replaced a paragraph. Propose, show, and expect revision; don't defend a choice past one round.
- **They edit `content/cv.ts` directly and commit.** Always check `git log` before assuming the content is as you left it. They removed an invented phrase this way.
- **Show, don't describe, for visual decisions.** Rendering comparison variants (photo treatments, favicon sizes) resolved questions that prose could not.
- CLAUDE.md requires reading the whole memory bank each session and keeping it terse — compact when editing, don't just append.

## Insights
- The CV's real story is enterprise SAP pivoting into AWS data engineering. The lineage graph and the accent-coloured terminal edge exist to make that legible; bullets buried it.
- **Verification by screenshot is not optional here.** Three separate bugs built cleanly and rendered wrong: the flattened `@theme` (no light mode at all), `var()` in SVG attributes (every connector invisible), and the animation resting hidden.
- The photo is 431x442 — fine at its current size, too small for anything larger. A higher-res original would be needed for a big portrait or a photo-based social card.
- The 2020 freelance web work is off-narrative for a data CV but earns its place: it is rendered as an explicit lineage break, and it quietly explains why this site is well built.
