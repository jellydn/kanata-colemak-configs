# Device-Specific Configuration for Kanata

## Current Configuration
The kanata configuration is currently set to target **MacBook built-in keyboard only**.

## Available Devices
To see all available input devices on your system:
```bash
sudo kanata --list
```

**Example output:**
- Apple Internal Keyboard / Trackpad
- Corne v4  
- Karabiner DriverKit VirtualHIDKeyboard 1.8.0

## Changing Target Device

Edit the `defcfg` section in `corne-homerow-kanata.kbd`:

### Option 1: Target MacBook Built-in Only (Current)
```lisp
macos-dev-names-include ("Apple Internal Keyboard / Trackpad")
```

### Option 2: Target External Corne Keyboard Only
```lisp
macos-dev-names-include ("Corne v4")
```

### Option 3: Target Multiple Devices
```lisp
macos-dev-names-include (
  "Apple Internal Keyboard / Trackpad"
  "Corne v4"
)
```

### Option 4: Exclude Virtual Keyboards Only
```lisp
macos-dev-names-exclude ("Karabiner DriverKit VirtualHIDKeyboard 1.8.0")
```

## Steps to Change Device

1. **List available devices:**
   ```bash
   sudo kanata --list
   ```

2. **Edit configuration file:**
   - Open `corne-homerow-kanata.kbd`
   - Find the `defcfg` section
   - Update `macos-dev-names-include` with your desired device name

3. **Verify configuration:**
   ```bash
   sudo kanata --cfg corne-homerow-kanata.kbd --check
   ```

4. **Apply changes:**
   ```bash
   sudo kanata --cfg corne-homerow-kanata.kbd
   ```

## Why Target Specific Devices?

- **Performance**: Only processes keys from intended keyboard
- **Avoid conflicts**: Prevents interference with virtual keyboards
- **Precision**: Useful when multiple keyboards are connected
- **Troubleshooting**: Isolates issues to specific hardware

## Notes

- Device names are case-sensitive
- Use exact names from `sudo kanata --list`
- Restart kanata after configuration changes
- Virtual keyboards (like Karabiner's) should usually be excluded