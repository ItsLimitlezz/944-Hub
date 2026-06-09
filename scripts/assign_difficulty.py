#!/usr/bin/env python3
"""
Stamp a heuristic `difficulty` (beginner | intermediate | advanced) into the
frontmatter of every article, based on the title, subsystem and body length.

These are sensible starting points, not gospel — edit any file's frontmatter to
override. Re-running updates existing values in place (idempotent).

Usage:  python3 scripts/assign_difficulty.py
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES = ROOT / "src" / "content" / "articles"

# Major teardowns / precision jobs → advanced.
ADVANCED = [
    "engine removal", "engine installation", "cylinder head", "head gasket",
    "timing belt", "balance shaft", "camshaft", "crankshaft", "crank scraper",
    "main bearing", "connecting rod", "piston", "short block", "long block",
    "rebuild", "overhaul", "valve guide", "valve seal", "transmission",
    "transaxle", "differential", "ring and pinion", "torque tube", "clutch",
    "turbocharger", "intercooler", "wiring harness", "sunroof", "dashboard",
    "heater core", "oil seal", "water pump", "evaporator", "steering rack",
    "rack and pinion", "engine mount", "flywheel",
]

# Reference / lookup pages (no real wrenching) → beginner regardless of length.
REFERENCE = [
    "paint code", "option code", "color code", "torque spec", "specification",
    "tightening sequence", "maintenance schedule", "diagram and description",
    "oil flow diagram", "sealant", "bolt removal", "history", "information and",
]

# Strong "anyone can do this" service jobs → beginner regardless of length.
STRONG_BEGINNER = [
    "oil and filter", "oil & filter", "oil change", "air filter", "spark plug",
    "distributor cap", "rotor replacement", "brake fluid", "bleed", "bleeding",
    "fluid replacement", "fluid change", "fluid flush", "bulb", "lamp",
    "battery", "wiper", "washer", "jacking", "jack stands", "wax", "stone guard",
]

# Lighter beginner signals → beginner only when the write-up is short.
SOFT_BEGINNER = [
    "inspect", "inspection", "checking", "adjustment", "adjusting", "draining",
    "filling", "venting", "lubrication", "trim", "top up", "topping",
]


def classify(title: str, subsystem: str, words: int) -> str:
    # Classify on the title (descriptive); subsystem is too broad to match on.
    t = title.lower()
    if any(k in t for k in REFERENCE):
        return "beginner"
    if any(k in t for k in ADVANCED):
        return "advanced"
    if any(k in t for k in STRONG_BEGINNER):
        return "beginner"
    if any(k in t for k in SOFT_BEGINNER) and words < 850:
        return "beginner"
    # Length-based nudges for the undifferentiated middle.
    if words > 1800:
        return "advanced"
    if words < 230:
        return "beginner"
    return "intermediate"


def split_frontmatter(text: str):
    m = re.match(r"^---\n(.*?)\n---\n?(.*)$", text, re.S)
    if not m:
        return None, text
    return m.group(1), m.group(2)


def fm_value(fm: str, key: str) -> str:
    m = re.search(rf"(?m)^{key}:\s*(.+?)\s*$", fm)
    if not m:
        return ""
    return m.group(1).strip().strip('"')


def main() -> None:
    counts = {"beginner": 0, "intermediate": 0, "advanced": 0}
    for md in sorted(ARTICLES.rglob("*.md")):
        text = md.read_text(encoding="utf-8")
        fm, body = split_frontmatter(text)
        if fm is None:
            continue
        title = fm_value(fm, "title")
        subsystem = fm_value(fm, "subsystem")
        words = len(re.findall(r"\w+", body))
        level = classify(title, subsystem, words)
        counts[level] += 1

        # Insert or replace the difficulty line (placed right after `author:`).
        if re.search(r"(?m)^difficulty:", fm):
            fm = re.sub(r"(?m)^difficulty:.*$", f"difficulty: {level}", fm)
        elif re.search(r"(?m)^author:", fm):
            fm = re.sub(r"(?m)^(author:.*)$", rf"\1\ndifficulty: {level}", fm, count=1)
        else:
            fm = f"difficulty: {level}\n{fm}"

        md.write_text(f"---\n{fm}\n---\n{body}", encoding="utf-8")

    total = sum(counts.values())
    print(f"Stamped difficulty on {total} articles:")
    for level in ("beginner", "intermediate", "advanced"):
        print(f"  {level:13s} {counts[level]}")


if __name__ == "__main__":
    main()
