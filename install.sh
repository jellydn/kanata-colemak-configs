#!/bin/bash

# Kanata Colemak Configuration Auto-Installer for macOS
# Installs Kanata with proper LaunchDaemon setup for automatic startup

set -euo pipefail  # Exit on any error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
KANATA_BINARY=""
KANATA_CONFIG=""
SERVICE_LABEL="io.jellydn.kanata.colemak"
PLIST_FILE="/Library/LaunchDaemons/${SERVICE_LABEL}.plist"
LOG_DIR="/Library/Logs/Kanata"

# Function to print colored output
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

print_header() {
    echo -e "${PURPLE}=== $1 ===${NC}"
}

# Function to check if running as root when needed
check_sudo() {
    if [[ $EUID -eq 0 ]]; then
        print_error "Don't run this script as root. It will prompt for sudo when needed."
        exit 1
    fi
}

# Function to detect Kanata binary
detect_kanata() {
    print_status "Detecting Kanata installation..."
    
    # Check common locations
    local kanata_paths=(
        "/opt/homebrew/bin/kanata"
        "/usr/local/bin/kanata"  
        "$HOME/.cargo/bin/kanata"
        "$(which kanata 2>/dev/null || true)"
    )
    
    for path in "${kanata_paths[@]}"; do
        if [[ -n "$path" ]] && [[ -x "$path" ]]; then
            KANATA_BINARY="$path"
            print_success "Found Kanata at: $KANATA_BINARY"
            return 0
        fi
    done
    
    print_error "Kanata not found! Please install Kanata first:"
    echo "  Option 1: brew install kanata"
    echo "  Option 2: cargo install kanata"
    echo "  Option 3: Download from https://github.com/jtroo/kanata/releases"
    exit 1
}

# Function to show configuration menu
select_config() {
    print_header "Configuration Selection"
    echo "Available Kanata configurations:"
    echo "1) colemak-dh-macos.kbd       - Layout only (beginner)"
    echo "2) corne-homerow-simple.kbd   - Basic home row mods (intermediate)"
    echo "3) corne-homerow-kanata.kbd   - Advanced GACS system (expert)"
    echo ""
    
    while true; do
        read -p "Select configuration [1-3]: " choice
        case $choice in
            1)
                KANATA_CONFIG="$SCRIPT_DIR/colemak-dh-macos.kbd"
                print_success "Selected: Layout-only configuration"
                break
                ;;
            2)
                KANATA_CONFIG="$SCRIPT_DIR/corne-homerow-simple.kbd"
                print_success "Selected: Simple home row modifiers"
                break
                ;;
            3)
                KANATA_CONFIG="$SCRIPT_DIR/corne-homerow-kanata.kbd"
                print_success "Selected: Advanced GACS system"
                break
                ;;
            *)
                print_error "Invalid choice. Please select 1, 2, or 3."
                ;;
        esac
    done
    
    if [[ ! -f "$KANATA_CONFIG" ]]; then
        print_error "Configuration file not found: $KANATA_CONFIG"
        exit 1
    fi
}

# Function to test configuration
test_config() {
    print_status "Testing configuration..."
    if "$KANATA_BINARY" --check --cfg "$KANATA_CONFIG"; then
        print_success "Configuration is valid"
    else
        print_error "Configuration test failed"
        exit 1
    fi
}

# Function to create LaunchDaemon plist
create_plist() {
    print_status "Creating LaunchDaemon plist..."
    
    sudo tee "$PLIST_FILE" > /dev/null << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>${SERVICE_LABEL}</string>
    
    <key>ProgramArguments</key>
    <array>
        <string>${KANATA_BINARY}</string>
        <string>--cfg</string>
        <string>${KANATA_CONFIG}</string>
    </array>
    
    <key>RunAtLoad</key>
    <true/>
    
    <key>KeepAlive</key>
    <true/>
    
    <key>StandardOutPath</key>
    <string>${LOG_DIR}/kanata.out.log</string>
    
    <key>StandardErrorPath</key>
    <string>${LOG_DIR}/kanata.err.log</string>
    
    <key>UserName</key>
    <string>root</string>
    
    <key>GroupName</key>
    <string>wheel</string>
</dict>
</plist>
EOF

    print_success "Created plist file: $PLIST_FILE"
}

# Function to setup logging directory
setup_logging() {
    print_status "Setting up logging directory..."
    
    if [[ ! -d "$LOG_DIR" ]]; then
        sudo mkdir -p "$LOG_DIR"
        sudo chmod 755 "$LOG_DIR"
    fi
    
    print_success "Log directory ready: $LOG_DIR"
}

# Function to install and start service
install_service() {
    print_status "Installing and starting Kanata service..."
    
    # Unload if already loaded
    if sudo launchctl list | grep -q "$SERVICE_LABEL"; then
        print_warning "Service already loaded, restarting..."
        sudo launchctl unload "$PLIST_FILE" 2>/dev/null || true
    fi
    
    # Load the service
    sudo launchctl load "$PLIST_FILE"
    
    # Start the service
    sudo launchctl start "$SERVICE_LABEL"
    
    print_success "Kanata service installed and started"
}

# Function to check service status
check_service_status() {
    print_status "Checking service status..."
    
    if sudo launchctl list | grep -q "$SERVICE_LABEL"; then
        print_success "✅ Kanata service is loaded"
        
        # Check if process is running
        if pgrep -f "kanata.*${KANATA_CONFIG}" > /dev/null; then
            print_success "✅ Kanata process is running"
        else
            print_warning "⚠️  Service is loaded but process may not be running"
        fi
    else
        print_error "❌ Service is not loaded"
        return 1
    fi
}

# Function to show post-install instructions
show_instructions() {
    print_header "Installation Complete!"
    
    echo -e "📋 ${GREEN}Post-installation steps:${NC}"
    echo ""
    echo "1. 🔐 Grant Input Monitoring Permission:"
    echo "   • Open System Preferences > Security & Privacy > Privacy"
    echo "   • Select 'Input Monitoring' from the left sidebar"
    echo "   • Click the lock to make changes"
    echo "   • Find and check 'kanata' in the list"
    echo "   • If not listed, add it manually"
    echo ""
    echo "2. 🔄 Restart the service (if needed):"
    echo "   sudo launchctl stop $SERVICE_LABEL"
    echo "   sudo launchctl start $SERVICE_LABEL"
    echo ""
    echo "3. 📝 View logs:"
    echo "   sudo tail -f $LOG_DIR/kanata.err.log"
    echo "   sudo tail -f $LOG_DIR/kanata.out.log"
    echo ""
    echo "4. 🗑️  Uninstall (if needed):"
    echo "   sudo launchctl unload $PLIST_FILE"
    echo "   sudo rm $PLIST_FILE"
    echo ""
    echo -e "🎹 ${PURPLE}Your Kanata configuration is now running automatically!${NC}"
    echo -e "   Configuration: ${BLUE}$(basename "$KANATA_CONFIG")${NC}"
    echo -e "   Service: ${BLUE}$SERVICE_LABEL${NC}"
}

# Function to show uninstall instructions
uninstall() {
    print_header "Uninstalling Kanata Service"
    
    if [[ -f "$PLIST_FILE" ]]; then
        print_status "Stopping and unloading service..."
        sudo launchctl stop "$SERVICE_LABEL" 2>/dev/null || true
        sudo launchctl unload "$PLIST_FILE" 2>/dev/null || true
        
        print_status "Removing plist file..."
        sudo rm "$PLIST_FILE"
        
        print_success "Kanata service uninstalled successfully"
    else
        print_warning "Service not found, nothing to uninstall"
    fi
}

# Main installation function
main() {
    print_header "Kanata Colemak Auto-Installer"
    
    case "${1:-}" in
        "uninstall")
            uninstall
            exit 0
            ;;
        "status")
            check_service_status
            exit 0
            ;;
        "logs")
            print_status "Showing Kanata logs (Press Ctrl+C to exit)..."
            sudo tail -f "$LOG_DIR/kanata.err.log" "$LOG_DIR/kanata.out.log"
            exit 0
            ;;
    esac
    
    check_sudo
    detect_kanata
    select_config
    test_config
    setup_logging
    create_plist
    install_service
    
    # Give service time to start
    sleep 2
    
    check_service_status
    show_instructions
}

# Help function
show_help() {
    echo "Kanata Colemak Auto-Installer"
    echo ""
    echo "Usage:"
    echo "  $0                 Install Kanata service"
    echo "  $0 uninstall      Uninstall Kanata service"
    echo "  $0 status         Check service status"
    echo "  $0 logs           Show live logs"
    echo "  $0 help           Show this help"
    echo ""
}

# Parse arguments
case "${1:-}" in
    "help"|"-h"|"--help")
        show_help
        exit 0
        ;;
    *)
        main "$@"
        ;;
esac