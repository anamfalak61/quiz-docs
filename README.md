# Weather Dashboard Documentation

A step-by-step documentation site that teaches how to build a Weather Dashboard with Next.js (App Router), TypeScript and Tailwind CSS. Built with [Nextra](https://nextra.site).

**Live site:** https://quiz-docs.vercel.app/

## Features

- Docs layout with sidebar, header, search and on-page table of contents
- Setup, UI & Styling and Implementation guides
- Syntax-highlighted code blocks with copy buttons
- Tip and warning callouts
- Code Reference and Troubleshooting pages (401 and 404 handling)
- Responsive on mobile, tablet and desktop

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Nextra 4 (`nextra`, `nextra-theme-docs`)

## Getting started

Requirements: Node.js 18 or newer.

```bash
git clone https://github.com/anamfalak61/quiz-docs.git
cd quiz-docs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |

## Project structure

```text
app/            Layout and the Nextra catch-all page
content/        Documentation pages (.mdx) and _meta.js navigation files
components/     React components used by the docs layout
mdx-components.tsx
next.config.mjs
```

## Adding a page

1. Create a `.mdx` file in `content/`.
2. Add its title to the `_meta.js` file in the same folder.

## Note on dependencies

`package.json` pins `zod` to `4.3.6` with `overrides`. Nextra 4.6.1 breaks with Zod 4.4.x ("expected nonoptional, received undefined at children"). Remove the override once Nextra ships the fix.