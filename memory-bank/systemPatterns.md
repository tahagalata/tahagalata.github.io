# System Patterns

## Architecture
Static site. One Next.js route (`app/page.tsx`) composed of section components. No client-side routing, no data fetching, no state beyond trivial UI (e.g. mobile nav toggle).

```
app/layout.tsx      fonts, metadata, <html> shell
app/page.tsx        composes sections in order
components/         Hero, Experience, Skills, Education, Languages, Contact
content/cv.ts       all CV data as typed constants
public/             photo.png, favicon, .nojekyll   (no PDF)
```

## Key Decisions
- **Content lives in `content/cv.ts`, not in JSX.** Typed objects/arrays; components render them. Editing a job bullet means editing one data file, not hunting through markup. (No CMS/markdown — the content is small and changes rarely.)
- **Server Components by default.** `'use client'` only where an interaction demands it.
- **Semantic HTML first.** `<section>`, `<h2>`, `<time>`, `<ul>` — core content readable with CSS/JS disabled; this is also what makes it SEO- and screenreader-friendly for free.
- **Photo ships as a static asset** in `public/`, rendered at a fixed small size (circular avatar, <=200px displayed) — it is 431x442 and will not survive being blown up.
- **Design tokens in Tailwind config**, not scattered hex values, so a palette change is one edit.
- **Dark mode via `prefers-color-scheme`** if implemented — no toggle, no persistence, no hydration mismatch.

## Component Relationships
`page.tsx` is the only composer; sections are leaf components that take props from `content/cv.ts`. Sections never import each other. No global state, no context.

## Critical Paths
- **Content accuracy**: `CV Resume.pdf` → `memory-bank/cvContent.md` (verbatim extract) → `content/cv.ts`. Any content change starts at the CV, never at the component.
- **Deploy**: push `main` → GH Action runs `next build` → uploads `out/` → Pages. A broken static export breaks the deploy silently-ish; check the Action, not just localhost.
