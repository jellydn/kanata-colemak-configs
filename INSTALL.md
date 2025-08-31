# 🚀 Kanata Colemak Auto-Installation Guide

This repository includes an automated installer that sets up Kanata with your chosen configuration as a macOS system service, automatically starting on boot.

## 📋 Prerequisites

### 1. Install Kanata
Choose one method:

**Option 1: Homebrew (Recommended)**
```bash
brew install kanata
```

**Option 2: Cargo**
```bash
cargo install kanata
```

**Option 3: Manual Download**
Download from [Kanata Releases](https://github.com/jtroo/kanata/releases)

### 2. Clone Repository
```bash
git clone https://github.com/jellydn/kanata-colemak-configs.git
cd kanata-colemak-configs
```

## 🎯 Quick Installation

### 1. Run the Auto-Installer
```bash
./install.sh
```

The installer will:
1. 🔍 **Auto-detect** your Kanata installation
2. 📋 **Show configuration options**:
   - `colemak-dh-macos.kbd` - Layout only (beginner)
   - `corne-homerow-simple.kbd` - Basic home row mods (intermediate) 
   - `corne-homerow-kanata.kbd` - Advanced GACS system (expert)
3. ✅ **Validate** your selected configuration
4. 🔧 **Create** macOS LaunchDaemon service
5. 🚀 **Start** the service automatically

### 2. Grant Permissions
After installation, you **must** grant Input Monitoring permissions:

1. Open **System Preferences** → **Security & Privacy** → **Privacy**
2. Select **Input Monitoring** from the left sidebar
3. Click the 🔒 **lock** to make changes
4. Find **kanata** in the list and ✅ **check** it
5. If not listed, click **+** and add `/opt/homebrew/bin/kanata` (or your Kanata path)

### 3. Restart Service (if needed)
```bash
sudo launchctl stop io.jellydn.kanata.colemak
sudo launchctl start io.jellydn.kanata.colemak
```

## 🛠️ Management Commands

### Check Service Status
```bash
./install.sh status
```

### View Live Logs
```bash
./install.sh logs
```
*Press Ctrl+C to exit log viewing*

### Uninstall Service
```bash
./install.sh uninstall
```

### Show Help
```bash
./install.sh help
```

## 📊 Service Details

### Service Information
- **Service Name**: `io.jellydn.kanata.colemak`
- **Plist Location**: `/Library/LaunchDaemons/io.jellydn.kanata.colemak.plist`
- **Log Directory**: `/Library/Logs/Kanata/`
- **Auto-start**: ✅ Enabled (starts on boot)
- **Keep Alive**: ✅ Enabled (restarts if crashes)

### Log Files
- **Output Log**: `/Library/Logs/Kanata/kanata.out.log`
- **Error Log**: `/Library/Logs/Kanata/kanata.err.log`

## 🔧 Manual Installation (Advanced)

If you prefer manual setup, here's what the auto-installer does:

### 1. Create LaunchDaemon Plist
```bash
sudo tee /Library/LaunchDaemons/io.jellydn.kanata.colemak.plist > /dev/null << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>io.jellydn.kanata.colemak</string>
    
    <key>ProgramArguments</key>
    <array>
        <string>/opt/homebrew/bin/kanata</string>
        <string>--cfg</string>
        <string>/path/to/your/config.kbd</string>
    </array>
    
    <key>RunAtLoad</key>
    <true/>
    
    <key>KeepAlive</key>
    <true/>
    
    <key>StandardOutPath</key>
    <string>/Library/Logs/Kanata/kanata.out.log</string>
    
    <key>StandardErrorPath</key>
    <string>/Library/Logs/Kanata/kanata.err.log</string>
    
    <key>UserName</key>
    <string>root</string>
</dict>
</plist>
EOF
```

### 2. Create Log Directory
```bash
sudo mkdir -p /Library/Logs/Kanata
sudo chmod 755 /Library/Logs/Kanata
```

### 3. Load and Start Service
```bash
sudo launchctl load /Library/LaunchDaemons/io.jellydn.kanata.colemak.plist
sudo launchctl start io.jellydn.kanata.colemak
```

## 🚨 Troubleshooting

### Service Won't Start
1. **Check permissions**: Ensure Input Monitoring is granted
2. **Check logs**: `./install.sh logs` or `sudo tail -f /Library/Logs/Kanata/kanata.err.log`
3. **Test configuration**: `kanata --check --cfg your-config.kbd`
4. **Verify paths**: Ensure Kanata binary and config file paths are correct

### Common Error Messages
- **"Operation not permitted"**: Grant Input Monitoring permissions
- **"No such file or directory"**: Check Kanata binary path in plist
- **"Parse error"**: Configuration file has syntax errors

### Manual Service Control
```bash
# Stop service
sudo launchctl stop io.jellydn.kanata.colemak

# Start service  
sudo launchctl start io.jellydn.kanata.colemak

# Restart service
sudo launchctl stop io.jellydn.kanata.colemak && sudo launchctl start io.jellydn.kanata.colemak

# Check if service is loaded
sudo launchctl list | grep kanata
```

## 🔄 Configuration Switching

To switch between configurations:

1. **Uninstall current service**:
   ```bash
   ./install.sh uninstall
   ```

2. **Run installer again**:
   ```bash
   ./install.sh
   ```

3. **Select different configuration** when prompted

## 🎯 Configuration Recommendations

### 🆕 **New to Colemak?**
Start with `colemak-dh-macos.kbd`:
- Focus on learning the layout first
- Traditional modifier positions
- Add complexity gradually

### 🔄 **Ready for Efficiency?**
Upgrade to `corne-homerow-simple.kbd`:
- Basic home row modifiers
- Same layer system as advanced
- Easier troubleshooting

### 🚀 **Maximum Productivity?**
Master `corne-homerow-kanata.kbd`:
- Full GACS system
- Bilateral prevention
- Professional-grade setup

## 📄 Files Created

The installer creates these files:
- `/Library/LaunchDaemons/io.jellydn.kanata.colemak.plist` - Service definition
- `/Library/Logs/Kanata/` - Log directory
- Service runs your chosen `.kbd` configuration file

## 🗑️ Clean Uninstall

To completely remove Kanata:

1. **Uninstall service**:
   ```bash
   ./install.sh uninstall
   ```

2. **Remove logs** (optional):
   ```bash
   sudo rm -rf /Library/Logs/Kanata
   ```

3. **Remove Kanata binary** (if desired):
   ```bash
   brew uninstall kanata  # If installed via Homebrew
   ```

---

**🎹 Enjoy your ergonomic Colemak setup with automatic Kanata service management!**