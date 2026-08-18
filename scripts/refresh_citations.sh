#!/bin/bash
# Refresh Google Scholar citation metrics and publish if they changed.
#
# Runs from Anupom's Mac rather than GitHub Actions, because Google Scholar
# returns HTTP 403 to datacenter IPs — the CI runner is blocked, but a
# residential IP is not. See .github/workflows/update-citations.yml.
#
# Scheduled by ~/Library/LaunchAgents/com.anupom.portfolio-citations.plist
# Run manually any time with: bash scripts/refresh_citations.sh

set -uo pipefail

REPO="/Users/Anupom/Documents/Research Work/Personal Projects/Resume/portfolio"
PY="/opt/homebrew/bin/python3"
GIT="/usr/bin/git"
LOG="$HOME/Library/Logs/portfolio-citations.log"

mkdir -p "$(dirname "$LOG")"
say() { printf '%s  %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*" >> "$LOG"; }

say "--- run start ---"
cd "$REPO" || { say "FAIL: cannot cd to repo"; exit 1; }

# Land any remote commits first so the push below is a fast-forward.
if ! "$GIT" pull --ff-only --quiet origin main 2>>"$LOG"; then
  say "WARN: pull failed or diverged; continuing"
fi

before=$("$GIT" rev-parse HEAD)

if ! "$PY" scripts/update_citations.py >>"$LOG" 2>&1; then
  say "FAIL: update_citations.py exited non-zero (Scholar unreachable?)"
  exit 1
fi

if "$GIT" diff --quiet data/citations.json; then
  say "no change; citations already current"
  say "--- run end ---"
  exit 0
fi

new=$("$PY" -c "import json;d=json.load(open('data/citations.json'));print(d['total_citations'],d['h_index'])")
say "citations changed -> $new"

"$GIT" add data/citations.json
"$GIT" -c user.name="citation-refresh" \
       -c user.email="anupom458@gmail.com" \
       commit -q -m "Update citation metrics [local scheduled run]" 2>>"$LOG"

if "$GIT" push --quiet origin main 2>>"$LOG"; then
  say "pushed $before..$("$GIT" rev-parse --short HEAD) — Pages deploy will trigger"
else
  say "FAIL: push rejected (auth or network)"
  exit 1
fi

say "--- run end ---"
