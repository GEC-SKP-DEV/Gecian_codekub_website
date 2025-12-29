#!/usr/bin/env bash
set -euo pipefail

BOOT_URL="https://raw.githubusercontent.com/CodeCompasss/codekub/main/boot.sh"

echo "============================="
echo "     Installing Codekub      "
echo "============================="
echo "This script will run boot.sh from GitHub..."

# Use sudo if available
if command -v sudo >/dev/null 2>&1; then
    bash <(curl -fsSL "$BOOT_URL")  # run boot.sh in a process substitution
else
    bash <(curl -fsSL "$BOOT_URL")
fi
