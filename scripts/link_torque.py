#!/usr/bin/env python3
"""
Inject per-generation catalog links into the Torque Reference article, so each
section points to the exploded diagram showing those bolts — for whichever of
the three catalog generations actually contains the assembly.

Mapping source: src/data/torque-map.json (shared with src/lib/torque.ts).
Idempotent: re-running replaces the injected lines.

Usage:  python3 scripts/link_torque.py
"""
from __future__ import annotations
import json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLE = ROOT / 'src' / 'content' / 'articles' / 'reference' / 'torque-reference.md'
MAP = json.loads((ROOT / 'src' / 'data' / 'torque-map.json').read_text())

GENS = [('1982-1985', '82–85'), ('1985-1988', '85–88'), ('1989-1991', '89–91')]
MARKER = '**🔧 See these bolts in the catalog:**'

# Which illustration ids exist in each generation's catalog.
gen_ids = {}
for slug, _ in GENS:
    data = json.loads((ROOT / 'src' / 'data' / 'catalog' / f'{slug}.json').read_text())
    gen_ids[slug] = {i['id'] for i in data['illustrations']}


def links_for(ids: list[str]) -> str | None:
    chips = []
    for slug, label in GENS:
        first = next((i for i in ids if i in gen_ids[slug]), None)
        if first:
            chips.append(f'[{label}](/catalog/{slug}/{first})')
    return f'{MARKER} ' + ' · '.join(chips) if chips else None


def main() -> None:
    md = ARTICLE.read_text(encoding='utf-8')
    # Drop any previously injected lines.
    md = re.sub(rf'(?m)^{re.escape(MARKER)}.*$\n?', '', md)

    parts = re.split(r'(?m)^(## .+)$', md)
    out = [parts[0]]
    i = 1
    injected = 0
    while i < len(parts):
        head, body = parts[i], parts[i + 1] if i + 1 < len(parts) else ''
        name = head[3:].strip()
        if name in MAP:
            line = links_for(MAP[name])
            if line:
                body = body.rstrip() + '\n\n' + line + '\n\n'
                injected += 1
        out.append(head)
        out.append(body)
        i += 2

    ARTICLE.write_text(''.join(out), encoding='utf-8')
    print(f'Injected catalog links into {injected} torque sections.')


if __name__ == '__main__':
    main()
