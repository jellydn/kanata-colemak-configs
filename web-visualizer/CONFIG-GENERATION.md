# Config Generation for Kanata Web Visualizer

## 🔄 Auto-Generation from Kanata Config

The `config.js` file is **automatically generated** from your actual Kanata configuration file. **Do not edit it manually** as changes will be overwritten.

## 🚀 How to Update Configuration

### When you modify your Kanata .kbd file:

```bash
# Navigate to the web-visualizer directory
cd /Users/huynhdung/src/tries/2025-08-30-colemak/web-visualizer/

# Re-generate config.js from the latest Kanata configuration
node generate-config.js

# Open the visualizer to see changes
open index.html
```

## 📁 Source Files

- **Input**: `../corne-homerow-kanata.kbd` - Your actual Kanata configuration
- **Generator**: `generate-config.js` - Parsing script
- **Output**: `config.js` - Web visualizer configuration (auto-generated)

## ⚙️ What Gets Parsed

The generator automatically extracts:

- ✅ **All layer definitions** from `(deflayer ...)` sections
- ✅ **Key mappings** for each layer (including `_` for inactive keys)
- ✅ **Layer metadata** (names, descriptions, activation methods)
- ✅ **Special key explanations** for aliases like `@nav`, `@sym`, etc.
- ✅ **Home row modifier configurations** (GACS layout)
- ✅ **Color schemes** for different key types

## 🎯 Benefits of Auto-Generation

1. **Always Current**: Visualizer reflects your actual Kanata config
2. **No Manual Sync**: No need to manually update two different files
3. **Error Prevention**: Eliminates inconsistencies between config and visualizer
4. **Easy Maintenance**: Single source of truth in your `.kbd` file

## 📊 Generation Statistics

Last generation:
- **Layers**: 5 (base, extend, num, sym, fun)
- **Key Explanations**: 25 special aliases
- **Source**: `../corne-homerow-kanata.kbd`
- **Generated**: Auto-timestamped

## 🔧 Customizing the Generator

To modify how the config is generated, edit `generate-config.js`:

- **Layer metadata**: Update `generateLayerMetadata()` function
- **Key explanations**: Update `generateKeyExplanations()` function  
- **Colors**: Update the `colors` object in `generateConfig()`

## 🚨 Important Notes

- **Never edit `config.js` directly** - your changes will be lost
- **Always run `node generate-config.js`** after modifying your `.kbd` file
- **The generator preserves the exact structure** of your Kanata layers
- **Layer names must match** the `deflayer` names in your `.kbd` file

## 💡 Troubleshooting

**Config not updating?**
```bash
# Check if the generator found your Kanata file
ls -la ../corne-homerow-kanata.kbd

# Run with verbose output
node generate-config.js
```

**Visualizer showing old data?**
```bash
# Force browser refresh (clear cache)
# Cmd+Shift+R on macOS
```

**Generator errors?**
- Ensure your `.kbd` file has valid syntax
- Check that layer definitions are properly closed with `)`
- Make sure file paths are correct in `generate-config.js`