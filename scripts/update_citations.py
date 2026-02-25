#!/usr/bin/env python3
"""
Fetches citation metrics from Google Scholar and updates index.html.
Uses OpenAlex as fallback if Google Scholar is unavailable.
Run manually or via GitHub Actions (weekly schedule).

No external dependencies — uses only Python standard library.
"""

import json
import re
import sys
import urllib.request

GOOGLE_SCHOLAR_USER = "4R_-r1EAAAAJ"
OPENALEX_AUTHOR_ID = "A5016067585"
HTML_FILE = "index.html"

# Map papers to unique keywords that appear in BOTH Google Scholar titles
# (which are truncated) AND the portfolio HTML titles
PAPER_KEYWORDS = [
    "hydrogen sulfide supplementation",
    "Mitochondrial sulfide promotes life span",
    "Microfluidics-integrated spaceflight hardware",
    "Spaceflight induces strength decline",
    "compact imaging platform",
    "Senotherapeutic peptide",
]


def fetch_google_scholar():
    """Scrape Google Scholar profile for citation metrics."""
    url = f"https://scholar.google.com/citations?user={GOOGLE_SCHOLAR_USER}&hl=en"
    req = urllib.request.Request(url, headers={
        "User-Agent": (
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/120.0.0.0 Safari/537.36"
        ),
    })
    with urllib.request.urlopen(req, timeout=30) as resp:
        html = resp.read().decode("utf-8")

    # Author-level stats from the stats table
    # The table has rows: Citations, h-index, i10-index
    # Each row has: All | Since 2020
    stats_block = re.search(
        r'id="gsc_rsb_st".*?</table>', html, re.DOTALL
    )
    if not stats_block:
        raise ValueError("Could not find stats table on Google Scholar page")

    stats_html = stats_block.group()
    rows = re.findall(r'<tr>(.*?)</tr>', stats_html, re.DOTALL)

    total_citations = h_index = i10_index = None
    for row in rows:
        cells = re.findall(r'>(\d+)<', row)
        if "Citations" in row and len(cells) >= 1:
            total_citations = int(cells[0])
        elif "h-index" in row and len(cells) >= 1:
            h_index = int(cells[0])
        elif "i10-index" in row and len(cells) >= 1:
            i10_index = int(cells[0])

    if total_citations is None:
        raise ValueError("Could not parse citation count from Google Scholar")

    # Per-paper citations — parse row by row to avoid misalignment
    # (papers with 0 citations have empty cells, breaking separate extraction)
    rows = re.findall(r'<tr class="gsc_a_tr">(.*?)</tr>', html, re.DOTALL)
    papers = []
    for row in rows:
        title_match = re.search(r'class="gsc_a_at">(.*?)<', row)
        cite_match = re.search(r'class="gsc_a_ac gs_ibl"[^>]*>(\d*)<', row)
        if title_match:
            title = title_match.group(1)
            cites = int(cite_match.group(1)) if cite_match and cite_match.group(1) else 0
            papers.append((title, cites))

    pub_count = len(papers)

    return {
        "cited_by_count": total_citations,
        "works_count": pub_count,
        "h_index": h_index or 0,
        "i10_index": i10_index or 0,
    }, papers


def fetch_openalex_fallback():
    """Fallback: fetch from OpenAlex API."""
    print("  Using OpenAlex fallback...")

    def fetch_json(url):
        req = urllib.request.Request(
            url, headers={"User-Agent": "CitationUpdater/1.0"}
        )
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read().decode())

    author = fetch_json(
        f"https://api.openalex.org/authors/{OPENALEX_AUTHOR_ID}"
    )
    works = fetch_json(
        f"https://api.openalex.org/works?"
        f"filter=author.id:{OPENALEX_AUTHOR_ID}"
        f"&select=title,cited_by_count&per-page=50"
    )

    metrics = {
        "cited_by_count": author["cited_by_count"],
        "works_count": author["works_count"],
        "h_index": author["summary_stats"]["h_index"],
        "i10_index": author["summary_stats"]["i10_index"],
    }
    papers = [
        (re.sub(r"<[^>]+>", "", w["title"]), w["cited_by_count"])
        for w in works["results"]
    ]
    return metrics, papers


def match_paper_citation(papers, keyword):
    """Find a paper's citation count by matching a keyword in the title."""
    keyword_lower = keyword.lower()
    for title, count in papers:
        clean_title = re.sub(r"<[^>]+>", "", title).lower()
        if keyword_lower in clean_title:
            return count
    return None


def update_html(html, author_metrics, papers):
    """Update all citation metrics in the HTML."""
    total = author_metrics["cited_by_count"]
    h_index = author_metrics["h_index"]
    i10_index = author_metrics["i10_index"]
    pub_count = author_metrics["works_count"]

    # 1. Hero stat: citations (the stat-number before "Citations" label)
    html = re.sub(
        r'(stat-number">)\d+\+?(</div>\s*<div[^>]*>Citations)',
        rf"\g<1>{total}+\2",
        html,
    )

    # 2. Hero stat: publications count — NOT auto-updated
    # Google Scholar includes dissertations and non-peer-reviewed items.
    # Keep this curated manually.

    # 3. About section: "(XXX+ citations)" text
    html = re.sub(
        r"\(\d+\+?\s*citations\)",
        f"({total}+ citations)",
        html,
    )

    # 4. Publications header: "XXX+ citations · h-index: X · i10-index: Y"
    html = re.sub(
        r"\d+\+?\s*citations\s*&middot;\s*h-index:\s*\d+\s*&middot;\s*i10-index:\s*\d+",
        f"{total}+ citations &middot; h-index: {h_index} &middot; i10-index: {i10_index}",
        html,
    )

    # 5. Per-paper citation counts
    for keyword in PAPER_KEYWORDS:
        count = match_paper_citation(papers, keyword)
        if count is None:
            print(f"  Warning: Could not match paper '{keyword}'")
            continue

        pattern = re.compile(
            rf"({re.escape(keyword)}.*?stat-number\">)(\d+)(</div>)",
            re.DOTALL | re.IGNORECASE,
        )
        match = pattern.search(html)
        if match:
            html = html[: match.start(2)] + str(count) + html[match.end(2) :]
        else:
            print(f"  Warning: No stat-number found near '{keyword}'")

    return html


def main():
    print("Fetching citation metrics...")

    try:
        author_metrics, papers = fetch_google_scholar()
        print("  Source: Google Scholar")
    except Exception as e:
        print(f"  Google Scholar failed: {e}")
        try:
            author_metrics, papers = fetch_openalex_fallback()
            print("  Source: OpenAlex (fallback)")
        except Exception as e2:
            print(f"  OpenAlex also failed: {e2}")
            print("Aborting — no data source available.")
            sys.exit(1)

    print(f"  Total citations: {author_metrics['cited_by_count']}")
    print(f"  Publications: {author_metrics['works_count']}")
    print(f"  h-index: {author_metrics['h_index']}")
    print(f"  i10-index: {author_metrics['i10_index']}")
    print(f"  Papers found: {len(papers)}")

    print(f"\nReading {HTML_FILE}...")
    with open(HTML_FILE, "r") as f:
        original = f.read()

    updated = update_html(original, author_metrics, papers)

    if original == updated:
        print("No changes needed — metrics are up to date.")
    else:
        with open(HTML_FILE, "w") as f:
            f.write(updated)
        print("Updated index.html with new metrics.")


if __name__ == "__main__":
    main()
