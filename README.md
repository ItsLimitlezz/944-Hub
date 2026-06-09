# 944 Hub

944 Hub is an open-source repair and knowledge platform for the Porsche 944, inspired by classic resources like Clark’s Garage and rebuilt for modern accessibility and collaboration.

## Overview

This project serves as a centralized technical wiki for the Porsche 944, covering maintenance, troubleshooting, and upgrades in a structured, community-driven format.

## Categories

Content is organized into six core systems:

* Engine
* Fuel & Ignition
* Electrical
* Body
* Transmission & Clutch
* Brakes & Suspension

## Beyond the Manual

In addition to repair documentation, 944 Hub includes:

* Step-by-step guides
* Common failure diagnostics
* Performance upgrades
* Community notes and contributions

## Attribution System

Every article includes clear sourcing and authorship tags:

* **CG** – Clark’s Garage (legacy reference material)
* **FFP** – FormFactor Performance (original content & contributions)
* Community contributors credited individually where applicable

## Mission

To become the definitive open-source knowledge base for the Porsche 944—preserving proven knowledge while enabling modern contributions and continuous improvement.

## Tech Stack

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Articles are
plain Markdown files (Astro content collections), so contributing a guide is as easy as adding a
file and opening a pull request. Images are optimized static assets — no build pipeline knowledge
required.

```
src/
  content/articles/<category>/<slug>.md   # the articles (Markdown + frontmatter)
  lib/categories.ts                        # the six systems + extra sections
  lib/site.ts                              # branding + CG/FFP/community attribution
  components/  layouts/  pages/            # UI, layout, routes
public/articles/<slug>/                    # article images
scripts/port_clarks.py                     # Clark's Garage → Markdown porter
```

## Development

```bash
npm install          # install dependencies
npm run dev          # local dev server at http://localhost:4321
npm run build        # production build to dist/
```

## Porting from Clark's Garage

The legacy shop-manual content was migrated with `scripts/port_clarks.py`, which scrapes each
Clark's Garage page, converts the HTML to Markdown, downloads the images, rewrites cross-links to
internal routes, and stamps every article with **CG** attribution and a link back to the original.

```bash
python3 -m venv scripts/.venv && scripts/.venv/bin/pip install -r scripts/requirements.txt
npm run port:clarks                  # re-run the port (HTML + images are cached locally)
```

> The 177 ported articles are preserved out of respect for a foundational community resource; each
> links back to its source. Rights holders can request changes via a GitHub issue.

## Deployment (GitHub Pages)

The site auto-deploys to **https://itslimitlezz.github.io/944-Hub/** via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) on every push to `main`.

One-time setup (already done for this repo): **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

The project lives under the `/944-Hub/` subpath, so `astro.config.mjs` sets `base: '/944-Hub'`.
Internal links use the `withBase()` helper and a rehype plugin rewrites links/images inside the
ported Markdown — so content files stay portable (no base baked in).

### Moving to a custom domain

1. Set `base: '/'` (or run with `PAGES_BASE=/`) and `site` to your domain in `astro.config.mjs`.
2. Add a `public/CNAME` file containing the domain (e.g. `944hub.org`).
3. Point your DNS at GitHub Pages and set the custom domain under Settings → Pages.

## Attribution Tags

Every article carries a small red mark identifying its source — see [`src/lib/site.ts`](src/lib/site.ts):

| Tag | Source |
| --- | ------ |
| **CG** | Clark's Garage (legacy reference material) |
| **FFP** | FormFactor Performance (original content) |
| **CC** | Community contributor |

## License
Content is licensed under CC BY-SA 4.0. Code is licensed under MIT.
