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

The site is served from **https://tahagalata.com** on GitHub Pages.

Pushing to `main` builds and publishes via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Enable Pages in
repository settings with **Source: GitHub Actions**.

### Custom domain setup

`public/CNAME` holds the domain, so every deploy re-asserts it — without that
file Pages drops the custom domain on the next publish.

At the DNS provider for `tahagalata.com`, confirm the current values against
[GitHub's Pages DNS docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)
before entering them:

| Type  | Name  | Value                                                                    |
| ----- | ----- | ------------------------------------------------------------------------ |
| A     | `@`   | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| AAAA  | `@`   | `2606:50c0:8000::153`, `:8001::153`, `:8002::153`, `:8003::153`            |
| CNAME | `www` | `tahagalata.github.io.`                                                   |

Then in repository settings set the custom domain to `tahagalata.com` and, once
the certificate is issued, tick **Enforce HTTPS**.

The absolute URL also appears in `app/layout.tsx`, `app/robots.ts` and
`app/sitemap.ts`; change all four (including `public/CNAME`) if the domain ever
moves.

If this is ever served from a project subpath instead, set `basePath` and
`assetPrefix` in `next.config.ts` — otherwise the `_next/` assets 404.
