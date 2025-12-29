#!/usr/bin/env bash
# ===============================
# Codekub Installer (Bootstrap)
# ===============================

# URL to fetch the full installer from GitHub
INSTALL_URL="https://raw.githubusercontent.com/CodeCompasss/codekub/main/boot.sh"

echo "============================="
echo "     Installing Codekub      "
echo "============================="

# Use curl or wget
if command -v curl >/dev/null 2>&1; then
    echo "Downloading installer via curl..."
    curl -fsSL "$INSTALL_URL" | bash
elif command -v wget >/dev/null 2>&1; then
    echo "Downloading installer via wget..."
    wget -qO- "$INSTALL_URL" | bash
else
    echo "Error: Neither curl nor wget is installed."
    exit 1
fi

echo "Installation finished!"
