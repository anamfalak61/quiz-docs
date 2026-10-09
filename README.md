# Quiz App Documentation

A step-by-step documentation site that teaches how to build a Quiz App with Next.js (App Router), TypeScript and Tailwind CSS. Built with [Nextra](https://nextra.site).

**Live site:** ADD_YOUR_VERCEL_LINK_HERE

## Features

- Docs layout with sidebar, header, search and on-page table of contents
- Setup, UI & Styling and Implementation guides
- Syntax-highlighted code blocks with copy buttons
- Tip and warning callouts
- Embedded live demo
- Code Reference and Troubleshooting pages
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
components/     React components used inside the docs (LiveDemo)
mdx-components.tsx
next.config.mjs
```

## Adding a page

1. Create a `.mdx` file in `content/`.
2. Add its title to the `_meta.js` file in the same folder.

## Note on dependencies

`package.json` pins `zod` to `4.3.6` with `overrides`. Nextra 4.6.1 breaks with Zod 4.4.x ("expected nonoptional, received undefined at children"). Remove the override once Nextra ships the fix.

## Deployment

Deploy on Vercel: import the repository and keep the default Next.js settings.