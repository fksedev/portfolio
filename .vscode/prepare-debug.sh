#!/bin/zsh
set -e

PORT=8080
ROOT="${0:a:h}/.."
URL="http://127.0.0.1:${PORT}/"

if curl -sf --max-time 2 "$URL" >/dev/null 2>&1; then
  echo "Server already running on http://localhost:${PORT}"
  exit 0
fi

lsof -ti :${PORT} | xargs kill -9 2>/dev/null || true
cd "$ROOT"
nohup python3 -m http.server ${PORT} >/tmp/portfolio-server.log 2>&1 &
disown
sleep 1

if ! curl -sf --max-time 2 "$URL" >/dev/null 2>&1; then
  echo "Failed to start server on port ${PORT}. See /tmp/portfolio-server.log" >&2
  exit 1
fi

echo "Started server on http://localhost:${PORT}"
