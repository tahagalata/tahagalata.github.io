# tahagalata.github.io

Personal site for Taha Galata — an online CV, not a PDF viewer.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS 4, exported as a static site
(`output: "export"`) and served from GitHub Pages.

## Develop

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

## Editing content

All copy lives in [`content/cv.ts`](content/cv.ts) as typed data. Components
render it; they never hold content of their own. The upstream source of truth is
`memory-bank/cvContent.md`, a verbatim extract of the CV.

Two standing content rules:

- The phone number never appears on the site.
- No PDF of the CV is shipped or linked. The page is the only artifact.

## Deploying

Pushing to `main` builds and publishes via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Enable Pages in
repository settings with **Source: GitHub Actions**.

If this is ever served from a project subpath rather than the user site, set
`basePath` and `assetPrefix` in `next.config.ts` — otherwise the `_next/` assets
404.
