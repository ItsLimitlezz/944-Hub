#!/usr/bin/env python3
"""
Populate each article's `tools:` frontmatter with the tool ids it likely needs,
based on keywords in the title + body. Tool ids must match src/data/tools.ts.

Heuristic starting point — edit any article's `tools:` list to refine.
Idempotent: re-running overwrites the tools line.

Usage:  python3 scripts/assign_tools.py
"""
from __future__ import annotations
import re, glob, os

ROOT = 'src/content/articles'

# tool id -> trigger keywords (matched against title + body, lowercased)
RULES = {
    'camshaft-holding-tool': ['timing belt', 'cam belt', 'camshaft belt', 'balance shaft belt', 'belt tension', 'camshaft sprocket', 'camshaft assembly'],
    'timing-belt-locking-tool': ['timing belt', 'flywheel lock', 'top dead center', ' tdc', 'belt removal', 'belt installation'],
    'harmonic-balancer-holding-tool': ['timing belt', 'crankshaft pulley', 'harmonic balancer', 'crankshaft bolt', 'crank bolt', 'crankshaft sprocket', 'front crankshaft'],
    'balance-shaft-locking-tool': ['balance shaft', 'balance shaft belt'],
    'dme-diagnostic-adapter': ['dme', 'fault code', 'engine management', 'klr', 'check engine', 'ecu', 'control unit'],
    'durametric': ['dme', 'fault code', 'engine management', 'live data', 'actuator test', 'ecu'],
    'fuel-pressure-gauge': ['fuel pressure', 'jetronic', 'fuel delivery', 'fuel pump', 'fuel injector', 'fuel rail', 'pressure regulator'],
    'coolant-pressure-tester': ['cooling system', 'coolant leak', 'head gasket', 'water pump', 'radiator', 'thermostat', 'overheat'],
    'spring-compressor': ['strut', 'spring compress', 'macpherson', 'coil spring', 'shock absorber'],
    'multimeter': ['sensor', 'voltage', 'resistance', 'wiring', 'alternator', 'starter', 'ignition', 'air flow', ' afm', 'oxygen sensor', 'throttle position', ' relay', 'continuity', 'ohm', 'electrical'],
    'oscilloscope': ['waveform', 'oscilloscope', 'lab scope', 'injector pattern', 'primary trace'],
    'torque-wrench-large': ['axle nut', 'wheel bearing', 'crankshaft bolt', 'crank bolt', 'hub nut', 'harmonic balancer'],
    'torque-wrench-small': ['torque', 'tighten', 'foot-pound', 'foot pound'],
}

# Preserve catalog order when writing.
ORDER = list(RULES.keys())


def assign(title: str, body: str) -> list[str]:
    text = f' {title} {body} '.lower()
    found = {tid for tid, kws in RULES.items() if any(k in text for k in kws)}
    # If a torque value is mentioned but no wrench matched, add the small one.
    if re.search(r'\b\d{1,3}\s?(nm|ft)', text) and 'torque-wrench-small' not in found:
        found.add('torque-wrench-small')
    return [t for t in ORDER if t in found]


def set_tools(s: str, ids: list[str]) -> str:
    value = '[' + ', '.join(ids) + ']'
    line = f'tools: {value}'
    if re.search(r'(?m)^tools:.*$', s):
        return re.sub(r'(?m)^tools:.*$', line, s, count=1)
    return re.sub(r'(?m)^(difficulty:.*)$', rf'\1\n{line}', s, count=1)


def main() -> None:
    n = 0
    counts = {}
    for path in glob.glob(f'{ROOT}/**/*.md', recursive=True):
        s = open(path, encoding='utf-8').read()
        parts = s.split('---', 2)
        fm, body = parts[1], parts[2]
        title = re.search(r'(?m)^title:\s*"?(.+?)"?\s*$', fm).group(1)
        ids = assign(title, body)
        s = set_tools(s, ids)
        open(path, 'w', encoding='utf-8').write(s)
        n += 1
        counts[len(ids)] = counts.get(len(ids), 0) + 1
    print(f"Updated tools on {n} articles.")
    for k in sorted(counts):
        print(f"  {k} tool(s): {counts[k]} articles")


if __name__ == '__main__':
    main()
