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

## Deployment

The site's home is **https://944.limitlezz.tech**, served from our own server at the domain
root. A plain `npm run build` targets it (base `/`, canonical URLs and sitemap on that domain)
and produces a fully static `dist/` — serve it with any static file server. A minimal
[Caddy](https://caddyserver.com) site block:

```caddy
944.limitlezz.tech {
    root * /var/www/944hub/dist
    encode zstd gzip
    file_server
    handle_errors {
        rewrite * /404.html
        file_server
    }
}
```

Internal links use the `withBase()` helper and a rehype plugin rewrites links/images inside the
ported Markdown, so the same source also builds for a subpath — content files stay portable
(no base baked in).

### Legacy GitHub Pages mirror

**https://itslimitlezz.github.io/944-Hub/** still auto-deploys on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which pins `PAGES_BASE=/944-Hub`
and `PAGES_SITE=https://itslimitlezz.github.io` for its build. Delete the workflow (and turn off
Pages) once the cutover to the new server is done.

## Attribution Tags

Every article carries a small red mark identifying its source — see [`src/lib/site.ts`](src/lib/site.ts):

| Tag | Source |
| --- | ------ |
| **CG** | Clark's Garage (legacy reference material) |
| **FFP** | FormFactor Performance (original content) |
| **CC** | Community contributor |

## License
Content is licensed under CC BY-SA 4.0. Code is licensed under MIT.
