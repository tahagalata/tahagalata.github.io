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

Layout:
- Single column, left-aligned, max ~72ch for prose; the graph column is wider.
- Nodes are rectangular with a 2px radius — near-square, drafting-like, not the SaaS rounded card.
- Hairlines and node borders share the `edge` token so the whole page reads as one drawing.

Motion:
- **One** orchestrated moment: on load, the lineage edges draw in (stroke-dashoffset) from the earliest node upward to the present. Once, ~700ms, `prefers-reduced-motion` respected. No per-section fade-ups, no per-card hover transitions.

## Avoid (checked against generic-default tells)
Cream/terracotta palette; all-caps tracked eyebrow labels; `A · B · C` middle-dot meta strings; `→` appended to link text; identical rounded cards with soft grey shadows; gradient washes; accenting one word of a headline.

## Resolved in-browser
- Photo sits beside the name in the hero as a square node (2px radius, hairline border), matching the graph's node language; 96px mobile / 112px desktop, the limit its resolution supports.
- The freelance role is rendered as a **lineage break**: dashed edge, dimmed marker, no carried labels. Claiming Figma/Webflow fed the SAP work would have been an invented link.
- Accent `#00695f` light / `#45c7b5` dark — both clear 4.5:1 on their canvas.
