#!/usr/bin/env python3
"""
Extract a visual parts catalog from a Porsche 944 factory "V-Pages" PDF.

For each "Illustration: NNN-NN" section it:
  - renders the exploded-diagram page to a trimmed WebP image, and
  - parses the facing parts table (Pos / Part Number / Description).

Outputs:
  public/catalog/<slug>/<id>.webp        diagram images
  src/data/catalog/<slug>.json           structured illustrations + parts

Because these PDFs carry a real text layer (Apache FOP, not scans), part
numbers come straight from the text — no OCR. Re-running skips existing images.

Usage:  python3 scripts/extract_catalog.py <pdf> <slug> "<label>" "<model>"
  e.g.  python3 scripts/extract_catalog.py public/catalogs/KAT005_E_944_85_KATALOG.pdf 1982-1985 "1982–1985" "944 (8V)"
"""
from __future__ import annotations
import json, os, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ILLUS = re.compile(r'Illustration:\s*([0-9]{3}-[0-9]{2})')
HEADER = re.compile(r'\bPos\b.*Part Number.*Description')
# Part numbers: the 9(+2)-digit assembly numbers, OR "N ddd ddd d(d)" Norm
# (DIN/ISO standard) numbers used for fasteners.
# 9(+2)-digit numbers (with an optional VW-style trailing letter, e.g.
# "171 837 211 A"), or "N ddd ddd d(d)" Norm numbers. The trailing letter is
# only consumed when it stands alone (not the first letter of the description).
PN = r'(N\s*\d{3}\s+\d{3}\s+\d{1,2}|\d{3}\s\d{3}\s\d{3}(?:\s\d{2})?(?:\s[A-Z]{1,2}(?![A-Za-z]))?)'
# The Pos (illustration callout) column may be a number, number+letter ("35A"),
# a dash ("-" = not illustrated), or blank.
PN_ROW = re.compile(rf'^\s*(\d{{1,3}}[A-Z]?|-)?\s+{PN}\s{{2,}}(.+)$')
# A metric thread spec on the continuation line, e.g. "M 8 X 30", "M 12 X 1,5".
# Thread diameters are 1–2 digits (M3–M30); avoids option codes like "M573".
SPEC = re.compile(r'^M\s*\d{1,2}(?:\s*[xX]\s*[\d.,]+)?$')

# Main-group (first digit of the illustration id) → friendly name.
GROUPS = {
    '0': 'Accessories',
    '1': 'Engine',
    '2': 'Fuel & Exhaust',
    '3': 'Transmission & Clutch',
    '4': 'Front Suspension',
    '5': 'Rear Suspension',
    '6': 'Wheels & Brakes',
    '7': 'Steering & Controls',
    '8': 'Body & Interior',
    '9': 'Electrical',
}


def render(pdf: str, page: int, dest: Path) -> bool:
    if dest.exists():
        return True
    tmp = dest.with_suffix('.tmp')
    try:
        subprocess.run(['pdftoppm', '-png', '-r', '150', '-f', str(page), '-l', str(page),
                        pdf, str(tmp)], check=True, capture_output=True)
        # pdftoppm appends -<page> (zero-padded) to the prefix.
        produced = next(tmp.parent.glob(f'{tmp.name}-*.png'), None)
        if not produced:
            return False
        subprocess.run(['magick', str(produced), '-trim', '+repage',
                        '-resize', '1100x1100>', '-quality', '82', str(dest)],
                       check=True, capture_output=True)
        produced.unlink(missing_ok=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"    ! render p{page}: {e}")
        return False


def norm_spec(s: str) -> str:
    return re.sub(r'\s+', '', s).replace(',', '.').replace('x', '×').replace('X', '×')


def parse_parts(page_text: str) -> list[dict]:
    lines = page_text.splitlines()
    parts = []
    for i, line in enumerate(lines):
        m = PN_ROW.match(line)
        if not m:
            continue
        pos, pn, rest = m.group(1), m.group(2), m.group(3)
        pn = re.sub(r'\s+', ' ', pn).strip()  # tidy "N 011  525 13"
        # Description is the text before the next big column gap (Remark/Qty/Model).
        desc = re.split(r'\s{2,}', rest.strip())[0].strip()
        if not desc:
            continue
        # A metric thread size often sits on the next continuation line.
        spec = None
        for j in range(i + 1, min(i + 3, len(lines))):
            nxt = lines[j].strip()
            if not nxt or PN_ROW.match(lines[j]):
                break
            if SPEC.match(nxt):
                spec = norm_spec(nxt)
                break
        part = {'pos': pos or '', 'pn': pn, 'desc': desc}
        if spec:
            part['spec'] = spec
        parts.append(part)
    return parts


def assembly_title(page_text: str) -> str | None:
    lines = page_text.splitlines()
    for i, l in enumerate(lines):
        if HEADER.search(l):
            for k in range(i + 1, len(lines)):
                t = lines[k].strip()
                if t and not re.match(r'^\d', t) and 'Model:' not in t and re.search(r'[A-Za-z]', t):
                    return t
            break
    return None


def main() -> None:
    if len(sys.argv) < 5:
        sys.exit(__doc__)
    pdf, slug, label, model = sys.argv[1:5]
    pdf = str((ROOT / pdf).resolve()) if not os.path.isabs(pdf) else pdf

    img_dir = ROOT / 'public' / 'catalog' / slug
    img_dir.mkdir(parents=True, exist_ok=True)

    print(f"Reading {pdf} …")
    txt = subprocess.run(['pdftotext', '-layout', pdf, '-'], capture_output=True,
                         text=True, errors='replace').stdout
    pages = txt.split('\f')

    illus: dict[str, dict] = {}
    order: list[str] = []
    for i, page in enumerate(pages, start=1):
        m = ILLUS.search(page)
        if not m:
            continue
        iid = m.group(1)
        if iid not in illus:
            illus[iid] = {'id': iid, 'group': iid[0], 'groupName': GROUPS.get(iid[0], 'Other'),
                          'title': None, 'page': None, 'image': None, 'parts': []}
            order.append(iid)
        rec = illus[iid]
        if HEADER.search(page):  # parts-list page
            if not rec['title']:
                rec['title'] = assembly_title(page)
            rec['parts'].extend(parse_parts(page))
        elif rec['page'] is None:  # diagram page (no table)
            rec['page'] = i

    # Render diagrams + dedupe parts.
    print(f"  {len(order)} illustrations; rendering diagrams …")
    rendered = 0
    for n, iid in enumerate(order, 1):
        rec = illus[iid]
        if rec['page']:
            dest = img_dir / f'{iid}.webp'
            if render(pdf, rec['page'], dest):
                rec['image'] = f'/catalog/{slug}/{iid}.webp'
                rendered += 1
        # dedupe parts by (pos, pn) preserving order
        seen, uniq = set(), []
        for p in rec['parts']:
            key = (p['pos'], p['pn'])
            if key in seen:
                continue
            seen.add(key)
            uniq.append(p)
        rec['parts'] = uniq
        if not rec['title']:
            rec['title'] = rec['groupName']
        if n % 25 == 0:
            print(f"    {n}/{len(order)}")

    data = {
        'slug': slug, 'label': label, 'model': model,
        'illustrations': [illus[i] for i in order],
    }
    out = ROOT / 'src' / 'data' / 'catalog' / f'{slug}.json'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding='utf-8')

    total_parts = sum(len(illus[i]['parts']) for i in order)
    print(f"Done. {rendered} diagrams, {total_parts} part rows → {out.relative_to(ROOT)}")


if __name__ == '__main__':
    main()
