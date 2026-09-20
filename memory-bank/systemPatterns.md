# System Patterns

## Architecture
Static site. One route (`app/page.tsx`) composing leaf sections. No client components, no data fetching, no state.

```
app/layout.tsx       fonts, metadata (canonical, OG, Twitter), <html> shell
app/page.tsx         the only composer: two-column grid
app/globals.css      colour tokens, .mono, the edge-draw animation
app/robots.ts        force-static
app/sitemap.ts       force-static
app/icon.png         96px TG monogram  (Next file convention)
app/apple-icon.png   180px                        "
components/          Identity, Capabilities, Glyph, Toolkit, Mark,
                     Experience, Edge, SideSections
content/cv.ts        all copy, as typed data
content/marks.ts     brand mark path data
public/              photo.png, og-v2.png, CNAME, .nojekyll
```

Layout: left rail (Identity, then SideSections = education, languages, clients) + main column (Capabilities, Toolkit, Experience), footer full width below.

## Key Decisions
- **Content lives in `content/cv.ts`, not in JSX.** Components render it; they hold no copy. One data file to edit.
- **Server components throughout.** No `'use client'` anywhere.
- **Semantic HTML first** — `<section>`, `<h2>`, `<time>`, `<ol>`. Core content readable with CSS and JS off, which buys SEO and screen-reader support for free.
- **Colour tokens are raw `--c-*` properties on `:root`**, redefined in a dark media query, mapped into Tailwind via `@theme inline`. Not in a Tailwind config — see the Tailwind v4 gotcha in `techContext.md`.
- **Dark mode via `prefers-color-scheme`.** No toggle, no persistence, no hydration mismatch.
- **Brand marks are inline SVG in `currentColor`**, so they follow the scheme. `tone: "surface"` paths paint the card background for logos with baked-in counters.
- **DOM order is identity → main → aside** so mobile stacking keeps the argument ahead of the supporting detail. The footer sits at page level for the same reason.

## Component Relationships
`page.tsx` composes; sections are leaves reading from `content/cv.ts`. Sections never import each other. `Mark` and `Glyph` are the only shared leaves. No global state, no context.

## Critical Paths
- **Content accuracy**: `CV Resume.pdf` → `memory-bank/cvContent.md` (verbatim) → `content/cv.ts`. Changes start at the CV, never at a component.
- **Deploy**: push `main` → Action runs `next build` → uploads `out/` → Pages → `tahagalata.com`. Check the Actions tab, not just localhost.
- **Verification**: this project is verified by screenshot, in both colour schemes and at 390px. Building clean has repeatedly not meant rendering correctly — see the invisible-SVG and flattened-`@theme` bugs.
