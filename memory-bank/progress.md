# Progress

## Current Status
**Live at https://tahagalata.com** since 2026-09-20 — GitHub Pages, custom apex domain, HTTPS enforced, `www` redirecting to the apex.

## What Works
- Next.js 16 / React 19 / Tailwind 4 static export; typechecks and builds clean.
- Left rail (identity, education, languages, clients) + main column (capabilities, toolkit, experience lineage graph) + full-width footer.
- Light and dark schemes and 390px mobile, all verified by screenshot.
- Brand marks for SAP, AWS, Python and friends, plus NovaDSA, NTT DATA and BSH, all monochrome and scheme-aware.
- SEO and sharing: canonical URL, `robots.txt`, `sitemap.xml`, TG favicon, apple touch icon, 2400x1260 Open Graph card.
- Deploy: push `main` → Action → Pages.

## What's Left
- [ ] Force a LinkedIn re-scrape so the cached blurry social card is replaced
- [ ] Keyboard and screen-reader pass on real hardware
- [ ] Optional: a clean NovaDSA vector to replace the auto-trace

## Known Issues
- The NovaDSA logo is a VTracer auto-trace — approximated curves and stray artefact paths. Acceptable at its rendered size.
- Photo is 431x442; too small for a large portrait.
- Local git holds a `backup-before-scrub` tag pointing at pre-scrub history containing the phone number. It is local-only and never pushed; delete once confident.

## Decision History
- **Stack** — Next.js over Astro and plain HTML: SEO, easy content edits, room to grow, at the cost of a build step.
- **Hosting** — GitHub Pages over Vercel; custom apex `tahagalata.com`, matching the contact address.
- **Scope** — CV only; blog and case studies deferred.
- **Privacy** — phone excluded from site *and* repo (a public page and a public repo are both different from a PDF mailed to a named recruiter); no PDF shipped at all; git history scrubbed before the first push.
- **Visual** — lineage/dataflow graph, chosen over a ledger-table and a schematic-Gantt treatment.
- **Content** — the CV's summary paragraph replaced by a lede plus four capability points; clients shown as typographic names, never borrowed logos, to avoid implying endorsement.
- **Photo** — full colour kept; grayscale tried and rejected by the user.
