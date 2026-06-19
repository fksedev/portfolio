#!/bin/zsh
set -e

"${0:a:h}/prepare-debug.sh"
open -a "Google Chrome" "http://127.0.0.1:8080/"
echo "Preview: http://localhost:8080"
