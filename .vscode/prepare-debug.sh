#!/bin/zsh
set -e

# Kill leftover Chrome instances from Cursor/VS Code debug sessions
pkill -f "ms-vscode.js-debug/.profile" 2>/dev/null || true
pkill -f "${0:a:h}/chrome-debug-profile" 2>/dev/null || true

PROFILE_DIR="${0:a:h}/chrome-debug-profile"
rm -f "$PROFILE_DIR/SingletonLock" "$PROFILE_DIR/SingletonCookie" 2>/dev/null || true

sleep 0.3

# Ensure local server is healthy on port 8080
if curl -sf --max-time 2 http://127.0.0.1:8080/ >/dev/null 2>&1; then
  echo "Server already running on http://localhost:8080"
else
  lsof -ti :8080 | xargs kill -9 2>/dev/null || true
  cd "${0:a:h}/.."
  python3 -m http.server 8080 &
  sleep 1
  echo "Started server on http://localhost:8080"
fi
