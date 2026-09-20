# Project Brief

## What
A personal website for Taha Galata — Data Analytics Consultant — built from his CV (`CV Resume.pdf`, Canva export, 1 page).

## Core Requirement
A recruiter-facing online CV / portfolio. The PDF CV is the source of truth for content; the site presents it better than a PDF can (scannable, linkable, mobile-friendly, indexable).

## Scope
In scope, and shipped:
- One page: identity, capabilities, toolkit, experience, education, languages, clients, contact.
- Responsive, accessible, fast, SEO-friendly; light and dark.
- Static deployment to GitHub Pages at `tahagalata.com`.

Out of scope (for now, may be revisited):
- Blog, CMS, project case-study pages, consulting/services landing, any backend or database.
- Any downloadable/linked PDF of the CV. The web page *is* the CV; the PDF stays a local source.

## Success Criteria
- A recruiter can grasp who Taha is and what he does within ~10 seconds of landing.
- All CV facts present and accurate; nothing contradicts the PDF.
- Loads fast on mobile, works without JS for core content.
- Deploys from a single `git push`. *(All met as of launch, 2026-09-20.)*

## Constraints
- Content must stay factually identical to the CV. No invented achievements, metrics, or clients.
- Static output only (GitHub Pages has no server runtime).
