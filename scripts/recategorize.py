#!/usr/bin/env python3
"""
Recategorize ported articles so the six shop-manual systems hold *repairs*,
while reference material (codes, specs, diagrams, calculators) lives under
Reference and routine service / inspections live under Maintenance.

Moves the Markdown file into the matching category folder, updates the
`category` + `subsystem` frontmatter, and rewrites inbound cross-links in every
article so nothing 404s. Matched by exact title.

Usage:  python3 scripts/recategorize.py
"""
from __future__ import annotations
import re, glob, os

ROOT = 'src/content/articles'

# title -> (new category, new subsystem)
MOVES = {
    # ── Reference: codes, specs, diagrams, calculators, background ──
    '944 Paint Codes': ('reference', 'Codes & Specs'),
    'Interior Color Codes': ('reference', 'Codes & Specs'),
    'Transaxle - General Information, Codes, and Gear Ratios': ('reference', 'Codes & Specs'),
    'Turbo Identification': ('reference', 'Identification'),
    'Balance Shafts - A Little History and Why 944s Use Them': ('reference', 'Background'),
    'Cylinder Head Tightening Sequence and Torque Specifications': ('reference', 'Torque Specs'),
    'Oil System Flow Diagram': ('reference', 'Diagrams'),
    'DME Wiring Diagram - 944 Turbo': ('reference', 'Wiring Diagrams'),
    'DME Wiring Diagram - Normally Aspirated 944': ('reference', 'Wiring Diagrams'),
    'Fuel and Vacuum Line Diagram (16V Normally-Aspirated 944s)': ('reference', 'Diagrams'),
    'Fuel and Vacuum Line Diagram (1985.5 and Newer N/A 944s)': ('reference', 'Diagrams'),
    'Fuel and Vacuum Line Diagram (944 Turbo)': ('reference', 'Diagrams'),
    'Speedometer, Gear Ratio, and Tire Size Calculator': ('reference', 'Calculators'),
    'Speedometer, Gear Ratio, and Tire Size Manual Calculations': ('reference', 'Calculators'),

    # ── Maintenance: routine service, fluids, inspections (not repairs) ──
    'Engine Oil and Filter Change': ('maintenance', 'Fluids & Filters'),
    'Coolant System Draining, Filling, and Venting': ('maintenance', 'Fluids & Filters'),
    'Manual Transaxle Fluid Change': ('maintenance', 'Fluids & Filters'),
    'Brake Fluid - Changing / Brake Bleeding': ('maintenance', 'Fluids & Filters'),
    'Fuel Filter Replacement': ('maintenance', 'Fluids & Filters'),
    'Changing Spark Plugs / Checking the Condition of the Spark Plugs': ('maintenance', 'Tune-Up'),
    'Brake Pads - Checking Thickness and Replacing Pads': ('maintenance', 'Wear Items'),
    'Checking Clutch Disc Wear': ('maintenance', 'Inspections'),
    'Checking the Brake System': ('maintenance', 'Inspections'),
    'CV Joint Boot Check': ('maintenance', 'Inspections'),
    'Battery Checks': ('maintenance', 'Inspections'),
    'Motor Mounts - Checking': ('maintenance', 'Inspections'),
    'Headlight Operating Mechanism Lubrication': ('maintenance', 'Lubrication'),
    'Jacking a 944 / Placing a 944 on Jack Stands': ('maintenance', 'Service Basics'),
}

# Articles already in the right category — just tidy the subsystem label.
SUBSYSTEM_ONLY = {
    'Periodic Maintenance Schedule': 'Schedule',
    '944 / 968 Torque Reference (Master List)': 'Torque Specs',
    '944 Option Codes': 'Codes & Specs',
    'Sealants': 'Specs',
    'Allen Head and Cheesehead Bolt Removal': 'Fasteners',
    'Camera Bar Construction': 'Shop Tools',
}


def parse(path):
    s = open(path, encoding='utf-8').read()
    fm = s.split('---', 2)[1]
    title = re.search(r'(?m)^title:\s*"?(.+?)"?\s*$', fm).group(1)
    cat = re.search(r'(?m)^category:\s*(\S+)', fm).group(1)
    return s, title, cat


def set_field(s, key, value, quote=True):
    val = f'"{value}"' if quote else value
    if re.search(rf'(?m)^{key}:', s):
        return re.sub(rf'(?m)^{key}:.*$', f'{key}: {val}', s, count=1)
    # insert after category line
    return re.sub(r'(?m)^(category:.*)$', rf'\1\n{key}: {val}', s, count=1)


files = glob.glob(f'{ROOT}/**/*.md', recursive=True)
moved = []  # (old_cat, slug, new_cat)

for path in files:
    s, title, cat = parse(path)
    slug = os.path.splitext(os.path.basename(path))[0]
    if title in MOVES:
        new_cat, new_sub = MOVES[title]
        s = set_field(s, 'category', new_cat, quote=False)
        s = set_field(s, 'subsystem', new_sub)
        dest_dir = f'{ROOT}/{new_cat}'
        os.makedirs(dest_dir, exist_ok=True)
        dest = f'{dest_dir}/{slug}.md'
        open(dest, 'w', encoding='utf-8').write(s)
        if os.path.abspath(dest) != os.path.abspath(path):
            os.remove(path)
        moved.append((cat, slug, new_cat))
    elif title in SUBSYSTEM_ONLY:
        s = set_field(s, 'subsystem', SUBSYSTEM_ONLY[title])
        open(path, 'w', encoding='utf-8').write(s)

# Rewrite inbound cross-links everywhere: /manual/<old>/<slug> -> /manual/<new>/<slug>
link_fixes = 0
for path in glob.glob(f'{ROOT}/**/*.md', recursive=True):
    s = open(path, encoding='utf-8').read()
    orig = s
    for old_cat, slug, new_cat in moved:
        if old_cat == new_cat:
            continue
        s = s.replace(f'/manual/{old_cat}/{slug}', f'/manual/{new_cat}/{slug}')
    if s != orig:
        open(path, 'w', encoding='utf-8').write(s)
        link_fixes += 1

print(f"Moved {len(moved)} articles; updated cross-links in {link_fixes} files.")
for old, slug, new in moved:
    print(f"  {old:20s} -> {new:12s}  {slug}")
