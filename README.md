# Prompt, Ship, Regret, Repeat

> AI lessons from a technical co-founder

A [Slidev](https://sli.dev) presentation by Iratxe Garrido (Duck Dating Apps) on AI-driven product development.

## Prerequisites

- [Node.js](https://nodejs.org) (v18+)
- npm

## Setup

```bash
npm install
```

## Develop & present

Start the dev server (opens in your browser at `http://localhost:3030`):

```bash
npm run dev
```

To present:

- **Audience view** — `http://localhost:3030/` (press `f` for fullscreen)
- **Presenter view** — `http://localhost:3030/presenter` (speaker notes, next-slide preview, timer)

Common shortcuts while presenting: `→` / `Space` next · `←` previous · `o` overview · `f` fullscreen · `d` dark mode.

## Export & build

```bash
npm run build    # static site → dist/
npm run export   # slides.pdf (requires playwright-chromium)
```

## Project structure

```
slides.md            # the presentation content (edit this)
global-top.vue       # global UI rendered above every slide
components/           # reusable Vue components (header, footer)
layouts/              # custom slide layouts
public/               # images and static assets
dist/                # built static output (generated)
```

Theme: [slidev-theme-unicorn](https://github.com/leonardleee/slidev-theme-unicorn).

## Learn more

- [Slidev documentation](https://sli.dev)
