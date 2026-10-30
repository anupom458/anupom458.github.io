#!/bin/bash
# Answers "is the citation updater actually working?" in one shot.
#
# It exists because citations.json carries `last_updated`, which means "when the
# NUMBERS last changed" — deliberately not "when we last looked", so a weekly run
# does not push a no-op commit. That makes a healthy pipeline look stale if you
# only read that file. This prints both facts, and checks the published number
# against Scholar live so the answer is verified rather than assumed.

REPO="$HOME/dev/portfolio"
HEARTBEAT="$HOME/Library/Application Support/portfolio-citations/heartbeat.json"
PY="/opt/homebrew/bin/python3"
bold() { printf '\033[1m%s\033[0m\n' "$1"; }

bold "citation updater status"

if [ -f "$HEARTBEAT" ]; then
  age=$(( ( $(date +%s) - $(/usr/bin/stat -f %m "$HEARTBEAT") ) / 86400 ))
  echo "  last checked Scholar : $($PY -c "import json;print(json.load(open('$HEARTBEAT'))['last_checked'])")  (${age}d ago)"
else
  echo "  last checked Scholar : NEVER — heartbeat missing"
fi
echo "  numbers last changed : $($PY -c "import json;print(json.load(open('$REPO/data/citations.json'))['last_updated'])")"
echo "  published            : $($PY -c "import json;d=json.load(open('$REPO/data/citations.json'));print(d['total_citations'],'citations · h-index',d['h_index'])")"

for a in com.anupom.portfolio-citations com.anupom.portfolio-citations-watchdog; do
  line=$(launchctl list | grep "$a$")
  [ -n "$line" ] && echo "  agent $(printf '%-44s' "$a") loaded, last exit $(echo "$line" | awk '{print $2}')" \
                 || echo "  agent $(printf '%-44s' "$a") NOT LOADED"
done

echo "  recent runs          : $(grep -c 'run start' ~/Library/Logs/portfolio-citations.log 2>/dev/null) total"
grep 'run start' ~/Library/Logs/portfolio-citations.log 2>/dev/null | tail -4 | sed 's/^/                         /'

if [ "${1:-}" = "--verify" ]; then
  echo
  bold "verifying against Scholar live..."
  T=$(mktemp -d); mkdir -p "$T/data" "$T/scripts"
  cp "$REPO/scripts/update_citations.py" "$T/scripts/"; cp "$REPO/data/citations.json" "$T/data/"
  ( cd "$T" && CITATIONS_HEARTBEAT="$T/hb.json" $PY scripts/update_citations.py >/dev/null 2>&1 )
  if diff -q "$REPO/data/citations.json" "$T/data/citations.json" >/dev/null 2>&1; then
    echo "  ✓ published number matches Scholar"
  else
    echo "  ✗ DRIFT — Scholar differs from what is published:"
    diff <($PY -m json.tool "$REPO/data/citations.json") <($PY -m json.tool "$T/data/citations.json") | sed 's/^/    /'
    echo "    fix: bash $REPO/scripts/refresh_citations.sh"
  fi
  rm -rf "$T"
fi
