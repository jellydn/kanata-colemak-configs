#!/bin/bash

# Kanata Quick Fix Script for macOS
# Resolves common conflicts between kanata and Karabiner-Elements

set -e

echo "🔧 Kanata macOS Quick Fix Script"
echo "================================="

# Check if running as root for later sudo operations
if [[ $EUID -eq 0 ]]; then
    echo "⚠️  Don't run this script as root directly. It will use sudo when needed."
    exit 1
fi

echo "📊 Diagnosing system state..."

# Check for existing processes
echo -n "Checking for kanata processes... "
if pgrep -f kanata > /dev/null; then
    echo "❌ Found running kanata process"
    echo "   PIDs: $(pgrep -f kanata | tr '\n' ' ')"
else
    echo "✅ No kanata processes found"
fi

echo -n "Checking for Karabiner processes... "
if pgrep -f karabiner > /dev/null; then
    echo "⚠️  Found Karabiner processes"
    echo "   Services that may conflict:"
    ps aux | grep -E '[K]arabiner' | grep -E 'console_user_server|session_monitor' | awk '{print "   - " $11}'
else
    echo "✅ No Karabiner processes found"
fi

# Function to stop conflicting services
fix_conflicts() {
    echo ""
    echo "🛠️  Stopping conflicting Karabiner services..."
    
    # Stop the main conflicting services
    services_to_stop=(
        "org.pqrs.service.agent.karabiner_console_user_server"
        "org.pqrs.service.agent.karabiner_session_monitor"
    )
    
    for service in "${services_to_stop[@]}"; do
        echo -n "Stopping $service... "
        if launchctl stop "$service" 2>/dev/null; then
            echo "✅"
        else
            echo "⚠️  (already stopped or not found)"
        fi
    done
    
    echo "Waiting for services to stop..."
    sleep 2
}

# Main menu
echo ""
echo "🎯 Available actions:"
echo "1) Fix conflicts and start kanata"
echo "2) Just fix conflicts (don't start kanata)"
echo "3) Show current status only"
echo "4) Emergency stop all keyboard tools"
echo ""
read -p "Choose an action (1-4): " choice

case $choice in
    1)
        fix_conflicts
        echo ""
        echo "🚀 Starting kanata..."
        config_file="${1:-colemak-dh-macos.kbd}"
        if [[ ! -f "$config_file" ]]; then
            echo "❌ Config file '$config_file' not found"
            echo "   Usage: $0 [config-file.kbd]"
            exit 1
        fi
        echo "Using config: $config_file"
        echo "Note: You may be prompted for sudo password..."
        exec sudo kanata --cfg "$config_file"
        ;;
    2)
        fix_conflicts
        echo ""
        echo "✅ Conflicts resolved. You can now run:"
        echo "   sudo kanata --cfg your-config.kbd"
        ;;
    3)
        echo ""
        echo "📋 Current system status:"
        echo "Running processes:"
        ps aux | grep -E '[k]anata|[K]arabiner' | head -10
        echo ""
        echo "Active launch services:"
        launchctl list | grep -i karabiner
        ;;
    4)
        echo ""
        echo "🚨 Emergency stop - killing all keyboard tools..."
        sudo pkill -f kanata 2>/dev/null || echo "No kanata processes found"
        sudo pkill -f karabiner 2>/dev/null || echo "No karabiner processes found"
        echo "✅ All keyboard tools stopped"
        ;;
    *)
        echo "Invalid choice. Exiting."
        exit 1
        ;;
esac

echo ""
echo "🎉 Done!"