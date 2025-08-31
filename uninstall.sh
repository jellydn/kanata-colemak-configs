#!/bin/bash

# Kanata Colemak Service Uninstaller
# Quick uninstall script for Kanata service

set -euo pipefail

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m'

SERVICE_LABEL="io.jellydn.kanata.colemak"
PLIST_FILE="/Library/LaunchDaemons/${SERVICE_LABEL}.plist"

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

echo -e "${BLUE}🗑️  Kanata Colemak Service Uninstaller${NC}"
echo ""

if [[ -f "$PLIST_FILE" ]]; then
    print_status "Stopping and unloading Kanata service..."
    
    # Stop the service
    sudo launchctl stop "$SERVICE_LABEL" 2>/dev/null || true
    
    # Unload the service  
    sudo launchctl unload "$PLIST_FILE" 2>/dev/null || true
    
    # Remove the plist file
    sudo rm "$PLIST_FILE"
    
    print_success "✅ Kanata service uninstalled successfully"
    
    # Ask about log cleanup
    echo ""
    read -p "Remove log files from /Library/Logs/Kanata? [y/N]: " remove_logs
    if [[ "${remove_logs,,}" == "y" ]]; then
        sudo rm -rf /Library/Logs/Kanata
        print_success "✅ Log files removed"
    else
        print_status "Log files preserved at /Library/Logs/Kanata"
    fi
    
else
    print_warning "⚠️  Kanata service not found - nothing to uninstall"
fi

echo ""
print_status "To completely remove Kanata:"
echo "  brew uninstall kanata    # If installed via Homebrew"
echo ""
print_status "To remove Input Monitoring permissions:"
echo "  System Preferences → Security & Privacy → Privacy → Input Monitoring"
echo "  Uncheck 'kanata' in the list"

echo ""
print_success "🎉 Uninstall complete!"