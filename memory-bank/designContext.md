# Design Context

Direction chosen 2026-09-20: **Lineage — dataflow graph**.

## Core Concept
The experience section is a **provenance trace**, not a timeline. Present role sits at the top; edges point *upward* into it from the roles that fed it. This is how a data lineage graph is actually read — you start at the number you care about and trace where it came from — and it happens to match what a recruiter wants (current work first). The concept is the layout; it is not decoration applied to a generic timeline.

Rules that keep it honest:
- Edge labels carry what actually propagated forward (e.g. BSH → NTT DATA: "BW/4HANA migration"). Never invent a link that isn't in the CV.
- The SAP → AWS pivot is the terminal edge at the top of the graph; it gets the accent color. Nothing else does.
- No numbered markers (01/02/03) — provenance is a graph, not a sequence.

## Tokens

Color (light):
- `ink` #0E1317 — primary text
- `muted` #5A6773 — secondary text
- `canvas` #E9EDF0 — page background (cool grey, reads as schematic surface)
- `surface` #FFFFFF — node fill
- `edge` #A8B4BF — connector strokes, hairlines
- `accent` #00857A — deep teal; signal only

Color (dark, via `prefers-color-scheme`, no toggle):
- canvas #0E1317 · surface #161D24 · edge #2C3844 · ink #E6ECF1 · muted #94A3B0 · accent #2FB3A3

Type:
- **IBM Plex Sans** 400/500/600 — headings and body. Chosen for enterprise-computing heritage, not neutrality.
- **IBM Plex Mono** 400/500 — restricted to genuine machine strings: year ranges, technology tokens, node identifiers. Not used as decorative small-caps labels.
- Modular scale ~1.25. Body measure under 70ch.

Layout (revised 2026-09-20 after user feedback: too text-heavy, skills buried, desktop gutters too wide):
- `max-w-7xl` container; on `lg` a two-column grid — left rail (19rem) + main column. The rail is not sticky: it carries too much content to pin.
- **Left rail** (user's requested order): identity, contact, then Education, Languages, Delivered for. **Main column**: summary, toolkit, experience graph. Footer spans the full width below both.
- Grid rows are `[auto_1fr]` with the aside `self-start`; without that, main spanning both rows stretches row 1 and strands the aside far below the identity block.
- DOM order is identity → main → aside, so mobile stacking keeps the summary and experience ahead of education and languages. The footer lives at page level for the same reason — inside `main` it landed mid-page on mobile.
- Toolkit items are **bounded tags** (hairline border, 2px radius), not space-separated text: several items contain spaces of their own ("SAP Analytics Cloud", "Native HANA views"), so whitespace alone read as one running sentence.
- **The page opens with `Capabilities`, not a paragraph** (2026-09-20, user feedback that the summary was still too text-heavy): a short lede at display size, then four capability points, each with an original line-art glyph, then a one-line reach statement. It answers "what does he do?"; the toolkit below answers "what does he use?" — the two must not blur together.
- Glyphs are drawn in the page's own hairline language (`components/Glyph.tsx`), never borrowed marks, and each depicts its subject: two sources resolving into one target, bars on a baseline, one store carried into another, stacked layers.
- **Toolkit sits directly under the summary**, not at the bottom: three panels (SAP / AWS / Data & code), each a brand mark, a one-line blurb and its tools. It is the fastest answer to "what does he use?".
- Clients render as a typographic list ("Delivered for") in the rail, chosen over logos: no borrowed marks, no implied endorsement.
- Nodes are rectangular with a 2px radius — near-square, drafting-like, not the SaaS rounded card.
- Hairlines and node borders share the `edge` token so the whole page reads as one drawing.

Motion:
- **One** orchestrated moment: on load, the lineage edges draw in (stroke-dashoffset) from the earliest node upward to the present. Once, ~700ms, `prefers-reduced-motion` respected. No per-section fade-ups, no per-card hover transitions.

## Avoid (checked against generic-default tells)
Cream/terracotta palette; all-caps tracked eyebrow labels; `A · B · C` middle-dot meta strings; `→` appended to link text; identical rounded cards with soft grey shadows; gradient washes; accenting one word of a headline.

## Icon & Social Card
- `app/icon.svg` + `app/apple-icon.png` (Next's file conventions, auto-linked): the lineage arrow pointing into a node, white on accent teal. Checked at 16px on light and dark tab strips before shipping.
- `public/og.png`, 1200x630, built from an HTML page in the site's own tokens and screenshotted headlessly (source: `scratchpad/og/index.html` — recreate it if the card ever needs changing). Not the portrait: at 431x442 it cannot fill 1200x630 sharply.
- Social platforms cache scraped previews hard, so the card must exist before the URL is shared anywhere.

## Brand Marks
- **Employer marks** (NovaDSA, NTT DATA, BSH) supplied by the user. In each experience node the order is mark, then position, then company name — the company is always spelled out, even where the logo repeats it. Dates stay baseline-aligned with the position line, which is why the mark sits above the header row rather than inside it.
- The NovaDSA file is a **VTracer auto-trace**: 26 paths, 21 colours, no viewBox, a full-canvas white backing plate and letter counters baked in as opaque white shapes. It is handled by dropping the plate, tightening the viewBox to the measured content bounds (`87 164 406 72`), and mapping light fills to `tone: "surface"` so the counters follow the colour scheme instead of glowing white on a dark card. If a clean vector ever arrives from NovaDSA, replace it.
- NTT DATA's circular mark needs its `fill-rule="evenodd"` preserved or the cutouts fill in.
- Content bounds were measured with `getBBox` in headless Chrome, not eyeballed.
- Tool marks are inline single-path SVGs in `content/marks.ts`, rendered monochrome in `currentColor` so they sit in the palette instead of fighting it.
- Held: SAP, Python, pandas, NumPy, Apache Spark, Figma, Webflow, React (from simple-icons; CC0 data, marks remain their owners' trademarks, used nominatively).
- **AWS supplied by the user** (official 3-path logo, native 304x182 viewBox), rendered monochrome like the rest. One AWS mark, not seven service icons — seven would out-weigh SAP and make the grid noisy.
- Still not obtainable: NTT DATA, NovaDSA, OPET, Vakko, Villeroy & Boch, Eczacıbaşı. Not needed — clients are a wordmark strip. SQL has no mark by nature and uses the monogram fallback.
- A tool with no mark falls back to a **monogram tile** of the same weight, so the grid never looks half-finished.
- Marks carry a per-mark `height`, because a mark filling its square reads heavier than a wide, short one at the same box size (SAP `h-10`, AWS `h-6`, symbols `h-7`).
- `wordmark: true` marks (SAP, AWS) spell the name themselves, so their text heading is `sr-only` — the logo *is* the heading. "aws AWS" side by side read as a mistake.

## Resolved in-browser
- Photo sits beside the name as a square node (2px radius, hairline border), matching the graph's node language; 96px mobile / 144px desktop, the limit its resolution supports.
- **Full colour, by the user's decision (2026-09-20).** Grayscale was tried and reverted — the user preferred the photo as shot. Do not desaturate it again without asking.
- Shape has been settled: a side-by-side of square, rounded and circular crops showed the shape was not what made the photo feel unfinished. Square stays.
- The freelance role is rendered as a **lineage break**: dashed edge, dimmed marker, no carried labels. Claiming Figma/Webflow fed the SAP work would have been an invented link.
- Accent `#00695f` light / `#45c7b5` dark — both clear 4.5:1 on their canvas.
