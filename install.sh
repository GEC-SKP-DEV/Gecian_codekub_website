#!/usr/bin/env bash
set -euo pipefail

BOOT_URL="https://raw.githubusercontent.com/CodeCompasss/codekub/main/boot.sh"

echo "============================="
echo "     Installing Codekub      "
echo "============================="
echo "This script will run boot.sh from GitHub..."

if command -v sudo >/dev/null 2>&1; then
    eval "$(curl -fsSL "$BOOT_URL")"
else
    eval "$(curl -fsSL "$BOOT_URL")"
fi
