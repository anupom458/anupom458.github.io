#!/bin/bash
# Refresh Google Scholar citation metrics and publish if they changed.
#
# Runs from Anupom's Mac rather than GitHub Actions, because Google Scholar
# returns HTTP 403 to datacenter IPs — the CI runner is blocked, but a
# residential IP is not. See .github/workflows/update-citations.yml.
#
# Scheduled by ~/Library/LaunchAgents/com.anupom.portfolio-citations.plist
# Run manually any time with: bash scripts/refresh_citations.sh
#
# The repo lives at ~/dev/portfolio and must NOT move back under ~/Documents:
# macOS denies launchd read access there, which killed this job silently for
# two weeks in Sep 2026.
#
# A successful run writes a heartbeat to
#   ~/Library/Application Support/portfolio-citations/heartbeat.json
# which a SEPARATE daily agent (com.anupom.portfolio-citations-watchdog) reads
# to notify when this job stops running. That watchdog deliberately lives
# outside this repo -- a check inside the job cannot fire when the job is what
# broke. Its source is in ~/Library/Application Support/portfolio-citations/.

set -uo pipefail

REPO="/Users/Anupom/dev/portfolio"
PY="/opt/homebrew/bin/python3"
GIT="/usr/bin/git"
LOG="$HOME/Library/Logs/portfolio-citations.log"

mkdir -p "$(dirname "$LOG")"
say() { printf '%s  %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*" >> "$LOG"; }

# A log nobody reads is not an alert. This job published a wrong citation count
# for four months while reporting success, then sat broken for two weeks while
# writing "Operation not permitted" into a file nobody opened. Failures now
# reach the screen.
notify() {
  /usr/bin/osascript -e "display notification \"$1\" with title \"Portfolio citations\" subtitle \"$2\" sound name \"Basso\"" >/dev/null 2>&1 || true
}
fail() { say "FAIL: $1"; notify "$1" "Weekly refresh failed"; exit 1; }

say "--- run start ---"
cd "$REPO" || fail "cannot reach the repo at $REPO"

# Land any remote commits first so the push below is a fast-forward.
if ! "$GIT" pull --ff-only --quiet origin main 2>>"$LOG"; then
  say "WARN: pull failed or diverged; continuing"
fi

before=$("$GIT" rev-parse HEAD)

if ! "$PY" scripts/update_citations.py >>"$LOG" 2>&1; then
  fail "Google Scholar unreachable — numbers not refreshed"
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
  fail "push rejected (auth or network) — new numbers are committed but not live"
fi

say "--- run end ---"
