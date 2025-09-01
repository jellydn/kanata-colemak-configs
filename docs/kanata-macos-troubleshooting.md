# Kanata macOS Troubleshooting Guide

## Quick Diagnosis Checklist

When kanata fails to start on macOS, run these commands to identify the issue:

```bash
# 1. Check for conflicting processes
ps aux | grep -E '[k]anata|[K]arabiner'

# 2. Check system permissions
ls -la /System/Library/Extensions/ | grep -i hid

# 3. View recent kanata logs
sudo dmesg | grep -i hid
```

## Common Error Patterns

### IOHIDDeviceOpen Error (Most Common)

**Error Message**:
```
IOHIDDeviceOpen error: (iokit/common) exclusive access and device already open
[ERROR] failed to open keyboard device(s): Couldn't register any device
```

**Root Cause**: Another application has exclusive access to HID devices.

**Solution**:
1. **Check for Karabiner-Elements** (primary culprit):
   ```bash
   ps aux | grep -E '[K]arabiner'
   ```

2. **Stop conflicting Karabiner services**:
   ```bash
   launchctl stop org.pqrs.service.agent.karabiner_console_user_server
   launchctl stop org.pqrs.service.agent.karabiner_session_monitor
   ```

3. **Launch kanata**:
   ```bash
   sudo kanata --cfg your-config.kbd
   ```

### Permission Denied Error

**Error Message**:
```
Permission denied (os error 13)
```

**Solutions**:
1. **Grant Terminal/iTerm2 Input Monitoring permissions**:
   - System Preferences → Security & Privacy → Privacy → Input Monitoring
   - Add and enable your terminal application

2. **Grant Accessibility permissions**:
   - System Preferences → Security & Privacy → Privacy → Accessibility
   - Add and enable your terminal application

3. **Use sudo** (required for HID access):
   ```bash
   sudo kanata --cfg your-config.kbd
   ```

### Config File Not Found

**Error Message**:
```
No such file or directory (os error 2)
```

**Solution**:
```bash
# Use absolute path
sudo kanata --cfg /full/path/to/config.kbd

# Or navigate to directory first
cd /path/to/config
sudo kanata --cfg config.kbd
```

## Step-by-Step Resolution Workflow

### 1. Identify Conflicts
```bash
# Check all keyboard-related processes
ps aux | grep -E '[k]anata|[K]arabiner|[h]id'

# List active launch services
launchctl list | grep -i karabiner
```

### 2. Resolve Conflicts

**Option A: Coexistence (Recommended)**
```bash
# Stop only conflicting Karabiner services
launchctl stop org.pqrs.service.agent.karabiner_console_user_server
launchctl stop org.pqrs.service.agent.karabiner_session_monitor

# Launch kanata
sudo kanata --cfg your-config.kbd
```

**Option B: Full Karabiner Shutdown**
```bash
# Stop all Karabiner services
launchctl stop org.pqrs.service.agent.karabiner_grabber
launchctl stop org.pqrs.service.agent.karabiner_console_user_server
launchctl stop org.pqrs.service.agent.karabiner_session_monitor
launchctl stop org.pqrs.service.agent.Karabiner-Menu
launchctl stop org.pqrs.service.agent.Karabiner-NotificationWindow

# Kill remaining processes
sudo pkill -f karabiner

# Launch kanata
sudo kanata --cfg your-config.kbd
```

### 3. Verify Success
```bash
# Check kanata is running
ps aux | grep kanata

# Test keyboard mapping
# (try your configured key combinations)
```

## Prevention Strategies

### 1. Service Management Script

Create a startup script (`start-kanata.sh`):
```bash
#!/bin/bash
# Stop conflicting services
launchctl stop org.pqrs.service.agent.karabiner_console_user_server 2>/dev/null
launchctl stop org.pqrs.service.agent.karabiner_session_monitor 2>/dev/null

# Wait for services to stop
sleep 2

# Launch kanata
exec sudo kanata --cfg /path/to/your/config.kbd
```

Make executable and use:
```bash
chmod +x start-kanata.sh
./start-kanata.sh
```

### 2. Launch Agent (Auto-start)

Create `~/Library/LaunchAgents/local.kanata.plist`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" 
    "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>local.kanata</string>
    <key>ProgramArguments</key>
    <array>
        <string>/path/to/start-kanata.sh</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
</dict>
</plist>
```

Load with:
```bash
launchctl load ~/Library/LaunchAgents/local.kanata.plist
```

### 3. Choose One Tool

**Recommendation**: Use either kanata OR Karabiner-Elements, not both simultaneously.

**To disable Karabiner-Elements permanently**:
```bash
# Unload all Karabiner services
launchctl unload ~/Library/LaunchAgents/org.pqrs.karabiner.agent.karabiner_*
sudo launchctl unload /Library/LaunchDaemons/org.pqrs.karabiner.karabiner_*
```

## Alternative Approaches

### 1. Docker/VM Isolation
Run kanata in isolated environment (advanced users only).

### 2. USB Passthrough
Use external USB keyboard with dedicated HID access.

### 3. Software KVM
Use software KVM solutions for keyboard switching.

## Debugging Commands

### System Information
```bash
# Check macOS version compatibility
sw_vers

# List HID devices
system_profiler SPUSBDataType | grep -A5 -B5 -i keyboard

# Check kernel extensions
kextstat | grep -i hid
```

### Process Debugging
```bash
# Detailed process tree
pstree -p $(pgrep karabiner)

# Check process ports/sockets
lsof -p $(pgrep karabiner)

# Monitor system calls
sudo dtruss -p $(pgrep kanata)
```

### Log Analysis
```bash
# System logs
log show --predicate 'process CONTAINS "kanata"' --last 1h

# Kernel messages
sudo dmesg | tail -50

# Console app logs
# Open Console.app → search "kanata" or "HID"
```

## Known Issues & Workarounds

### Issue: Kanata stops working after sleep
**Workaround**: Restart kanata after system wake.

### Issue: Some keys not remapped
**Workaround**: Check config file syntax and key mappings.

### Issue: Lag in key response
**Workaround**: Adjust kanata timing configuration or reduce Karabiner overhead.

## Quick Reference Commands

```bash
# Emergency stop all keyboard tools
sudo pkill -f kanata && sudo pkill -f karabiner

# Restart Karabiner-Elements (if needed)
launchctl start org.pqrs.service.agent.karabiner_grabber

# Check what's using HID devices
sudo lsof | grep -i hid

# Reset launchctl services
launchctl remove org.pqrs.service.agent.karabiner_console_user_server
launchctl load ~/Library/LaunchAgents/org.pqrs.karabiner.agent.karabiner_console_user_server.plist
```

---

**Last Updated**: 2025-09-01  
**Tested On**: macOS 14.0+, kanata v1.9.0, Karabiner-Elements 14.13+