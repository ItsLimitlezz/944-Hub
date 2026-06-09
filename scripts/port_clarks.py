#!/usr/bin/env python3
"""
Port Clark's Garage shop-manual articles into 944 Hub Markdown content.

For every article in the Clark's Garage repair-procedure index this script:
  1. fetches the legacy .htm page (cached locally on first run),
  2. strips the 1990s boilerplate (header bar, print/Acrobat block, footer),
  3. downloads inline images into public/articles/<slug>/,
  4. rewrites cross-links to point at the equivalent 944 Hub page,
  5. converts the cleaned HTML to Markdown, and
  6. writes src/content/articles/<category>/<slug>.md with CG attribution.

Usage:  python3 scripts/port_clarks.py [--limit N] [--refresh]

Dependencies:  pip install -r scripts/requirements.txt
"""
from __future__ import annotations

import argparse
import os
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

try:
    from bs4 import BeautifulSoup
    from markdownify import markdownify as md
except ImportError:
    sys.exit("Missing deps. Run: pip install -r scripts/requirements.txt")

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "src" / "content" / "articles"
PUBLIC_IMG = ROOT / "public" / "articles"
CACHE = Path(__file__).resolve().parent / ".cache"
BASE = "https://www.clarks-garage.com/shop-manual/"
INDEX = "https://www.clarks-garage.com/shop-manual/repair-procedure-index4.htm"
UA = "944Hub-porter/1.0 (+https://github.com/FormFactorPerformance/944-Hub; open-source archival)"

# Clark's filename prefix -> (our category id, human subsystem label)
PREFIX_MAP: dict[str, tuple[str, str]] = {
    "eng": ("engine", "Engine"),
    "cam": ("engine", "Camshaft"),
    "cyl": ("engine", "Cylinder Head"),
    "cool": ("engine", "Cooling System"),
    "lube": ("engine", "Lubrication & Oil"),
    "exh": ("engine", "Exhaust"),
    "fuel": ("fuel-ignition", "Fuel System"),
    "dme": ("fuel-ignition", "DME / Engine Management"),
    "ign": ("fuel-ignition", "Ignition"),
    "af": ("fuel-ignition", "Air Intake"),
    "elect": ("electrical", "Electrical"),
    "body": ("body", "Body & Interior"),
    "hvac": ("body", "Heating & A/C"),
    "trans": ("transmission-clutch", "Transmission"),
    "clutch": ("transmission-clutch", "Clutch"),
    "brake": ("brakes-suspension", "Brakes"),
    "susp": ("brakes-suspension", "Suspension"),
    "steer": ("brakes-suspension", "Steering"),
    "ts": ("troubleshooting", "Troubleshooting"),
    "maint": ("maintenance", "Maintenance"),
    "bolt": ("reference", "Torque & Fasteners"),
    "info": ("reference", "Reference"),
    "misc": ("reference", "Reference"),
}

STEM_RE = re.compile(r"([a-z]+)-(\d+)", re.I)
CODE_RE = re.compile(r"\b([A-Z]{2,6}-\d+[A-Z]?)\b")


def fetch(url: str, refresh: bool = False) -> str:
    """Fetch a URL as text, caching the raw bytes under scripts/.cache/."""
    CACHE.mkdir(exist_ok=True)
    key = re.sub(r"[^a-z0-9._-]", "_", url.split("/")[-1].lower()) or "index"
    cached = CACHE / key
    if cached.exists() and not refresh:
        return cached.read_bytes().decode("latin-1")
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    cached.write_bytes(data)
    time.sleep(0.4)  # be polite
    return data.decode("latin-1")


def fetch_binary(url: str) -> bytes | None:
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.read()
    except Exception as e:  # noqa: BLE001
        print(f"    ! image failed {url}: {e}")
        return None


def slugify(text: str) -> str:
    text = re.sub(r"[^\w\s-]", "", text.lower())
    text = re.sub(r"[\s_]+", "-", text).strip("-")
    return text[:70] or "article"


def parse_index(refresh: bool) -> list[tuple[str, str]]:
    """Return [(article_url, index_title)] for every shop-manual article."""
    html = fetch(INDEX, refresh)
    pairs: list[tuple[str, str]] = []
    seen: set[str] = set()
    for m in re.finditer(
        r'<a[^>]+href=["\']?https?://www\.clarks-garage\.com/(shop-manual/[a-z]+-\d+\.htm)["\']?[^>]*>(.*?)</a>',
        html, re.I | re.S,
    ):
        rel, raw = m.group(1), m.group(2)
        url = "https://www.clarks-garage.com/" + rel
        if url in seen:
            continue
        seen.add(url)
        title = re.sub(r"<[^>]+>", " ", raw)
        title = re.sub(r"\s+", " ", title).strip()
        pairs.append((url, title))
    return pairs


def build_plan(pairs: list[tuple[str, str]]) -> dict[str, dict]:
    """Map source stem -> {url, category, subsystem, slug, index_title}."""
    plan: dict[str, dict] = {}
    used: set[str] = set()
    for url, title in pairs:
        stem = url.split("/")[-1].replace(".htm", "")
        pm = STEM_RE.match(stem)
        prefix = pm.group(1).lower() if pm else "misc"
        category, subsystem = PREFIX_MAP.get(prefix, ("reference", "Reference"))
        slug = slugify(title)
        if slug in used:
            slug = f"{slug}-{stem}"
        used.add(slug)
        plan[stem] = {
            "url": url, "category": category, "subsystem": subsystem,
            "slug": slug, "index_title": title,
        }
    return plan


def clean_and_convert(html: str, stem: str, info: dict, plan: dict) -> tuple[str, str, str]:
    """Return (markdown, page_title, code)."""
    # These pages carry an empty <noscript><body></noscript> before the real
    # <body>; drop it so soup.body resolves to the content body, not the stub.
    html = re.sub(r"(?is)<noscript>.*?</noscript>", "", html)
    # html5lib parses like a browser: unclosed <li>/<p> become proper siblings,
    # which is essential for the malformed 1990s markup on these pages.
    soup = BeautifulSoup(html, "html5lib")

    page_title = ""
    if soup.title and soup.title.string:
        page_title = re.sub(r"\s+", " ", soup.title.string).strip()
    title = page_title or info["index_title"]

    body = soup.body or soup

    # --- code (e.g. BRAKE-01) from the red header bar ---
    code = ""
    header_td = body.find(lambda t: t.name == "td" and (t.get("bgcolor") or "").lower() in ("ff0000", "#ff0000", "red"))
    if header_td:
        cm = CODE_RE.search(header_td.get_text(" ", strip=True))
        if cm:
            code = cm.group(1)
        header_td.find_parent("table").decompose()
    if not code:
        cm = CODE_RE.search(body.get_text(" ", strip=True)[:200])
        if cm:
            code = cm.group(1)

    # --- strip print / Acrobat block ---
    for img in body.find_all("img"):
        src = img.get("src", "")
        if "print.gif" in src.lower():
            anchor = img.find_parent("a")
            center = img.find_parent("center")
            (center or anchor or img).decompose()
    for c in body.find_all(string=re.compile(r"Acrobat Printable Version", re.I)):
        c.extract()

    # --- strip footer copyright + trailing rules ---
    for c in list(body.find_all(string=re.compile(r"Clark'?s Garage\s*©", re.I))):
        parent = c.find_parent(["p", "center", "div"])
        if parent is not None and parent is not body:
            parent.decompose()
        else:
            c.extract()
    for hr in body.find_all("hr"):
        hr.decompose()

    # --- images: download + rewrite to /articles/<slug>/<file> ---
    img_dir = PUBLIC_IMG / info["slug"]
    for img in body.find_all("img"):
        src = img.get("src", "")
        if not src:
            img.decompose()
            continue
        abs_url = urllib.parse.urljoin(info["url"], src)
        fname = re.sub(r"[^a-z0-9._-]", "_", os.path.basename(urllib.parse.urlparse(abs_url).path).lower())
        if not fname:
            img.decompose()
            continue
        dest = img_dir / fname
        if not dest.exists():  # cache: don't re-download on reruns
            data = fetch_binary(abs_url)
            if data is None:
                img.decompose()
                continue
            img_dir.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(data)
        for attr in ("width", "height", "border", "hspace", "vspace", "align"):
            img.attrs.pop(attr, None)
        img["src"] = f"/articles/{info['slug']}/{fname}"
        if not img.get("alt"):
            img["alt"] = title

    # --- rewrite cross-links to internal routes ---
    for a in body.find_all("a", href=True):
        href = a["href"]
        lm = re.search(r"([a-z]+-\d+)\.htm", href, re.I)
        if lm and "shop-manual" in href.lower() or (lm and not href.lower().startswith("http")):
            target = plan.get(lm.group(1).lower())
            if target:
                a["href"] = f"/manual/{target['category']}/{target['slug']}"
                continue
        if href.startswith(("../", "./")) or (not href.startswith(("http", "mailto", "#", "/"))):
            a["href"] = urllib.parse.urljoin(info["url"], href)

    # --- promote bold+underline labels to headings ---
    # Short ALL-CAPS callouts (NOTE/CAUTION/WARNING…) become bold callouts, not
    # headings, so they don't clutter the table of contents.
    callout = re.compile(r"^(NOTE|CAUTION|WARNING|TIP|IMPORTANT|HINT|DANGER)S?\b", re.I)

    def promote(tag) -> None:
        txt = tag.get_text(" ", strip=True)
        if not txt:
            tag.decompose()
            return
        if callout.match(txt) and len(txt) < 40:
            p = soup.new_tag("p")
            strong = soup.new_tag("strong")
            strong.string = txt
            p.append(strong)
            tag.replace_with(p)
        else:
            h = soup.new_tag("h2")
            h.string = txt
            tag.replace_with(h)

    for b in body.find_all("b"):
        if b.find("u"):
            promote(b)
    for u in body.find_all("u"):
        if u.find("b"):
            promote(u)

    markdown = md(str(body), heading_style="ATX", bullets="-", strip=["font", "u"])
    markdown = re.sub(r"\n{3,}", "\n\n", markdown).strip()
    markdown = re.sub(r"(?m)^\s*Acrobat Printable Version\s*$", "", markdown)
    markdown = re.sub(r"(?m)^\\(\s)", r"\1", markdown)  # stray leading escapes
    markdown = re.sub(r"\\(?=\s)", "", markdown)  # backslash before whitespace
    return markdown, title, code


def first_sentence(markdown: str) -> str:
    for raw in markdown.splitlines():
        line = raw.strip()
        # Skip headings, images, list items, tables, quotes — we want prose.
        if not line or line.startswith(("#", "!", "-", "|", ">", "*")):
            continue
        if re.match(r"^\d+[.)]\s", line):
            continue
        line = re.sub(r"[*_`\[\]]", "", line)  # drop inline markdown
        line = re.sub(r"\\(?=\W)", "", line).strip()  # drop escaping backslashes
        if len(line) < 20:
            continue
        return (line[:157] + "…") if len(line) > 158 else line
    return ""


def yaml_escape(s: str) -> str:
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0, help="only port the first N (for testing)")
    ap.add_argument("--refresh", action="store_true", help="ignore cache, re-download")
    args = ap.parse_args()

    print("Fetching index…")
    pairs = parse_index(args.refresh)
    print(f"  {len(pairs)} articles in index")
    plan = build_plan(pairs)

    stems = list(plan.keys())
    if args.limit:
        stems = stems[: args.limit]

    counts: dict[str, int] = {}
    ok = 0
    for i, stem in enumerate(stems, 1):
        info = plan[stem]
        try:
            html = fetch(info["url"], args.refresh)
            markdown, title, code = clean_and_convert(html, stem, info, plan)
        except Exception as e:  # noqa: BLE001
            print(f"[{i}/{len(stems)}] FAIL {stem}: {e}")
            continue

        fm = [
            "---",
            f"title: {yaml_escape(title)}",
            f"category: {info['category']}",
            f"subsystem: {yaml_escape(info['subsystem'])}",
            "author: CG",
            f"sourceUrl: {info['url']}",
        ]
        desc = first_sentence(markdown)
        if desc:
            fm.append(f"description: {yaml_escape(desc)}")
        if code:
            fm.append(f"code: {code}")
        fm += ["---", "", markdown, ""]

        out = CONTENT / info["category"] / f"{info['slug']}.md"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text("\n".join(fm), encoding="utf-8")
        counts[info["category"]] = counts.get(info["category"], 0) + 1
        ok += 1
        print(f"[{i}/{len(stems)}] {info['category']:20s} {info['slug']}")

    print(f"\nDone. {ok}/{len(stems)} articles ported.")
    for cat, n in sorted(counts.items()):
        print(f"  {cat:22s} {n}")


if __name__ == "__main__":
    main()
