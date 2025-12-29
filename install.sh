#!/usr/bin/env bash
set -euo pipefail

# URL to the real installer
BOOT_URL="https://raw.githubusercontent.com/CodeCompasss/codekub/main/boot.sh"

echo "============================="
echo "     Installing Codekub      "
echo "============================="
echo "This script will run boot.sh from GitHub..."

# Run with sudo if necessary
if command -v sudo >/dev/null 2>&1; then
    curl -fsSL "$BOOT_URL" | sudo bash
else
    curl -fsSL "$BOOT_URL" | bash
fi
