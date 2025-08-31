# 🎹 Kanata Colemak Configurations

A comprehensive collection of Kanata keyboard configurations featuring Colemak Mod-DH layout with advanced home row modifiers and ergonomic layer switching.

## 🎯 Overview

This repository contains three distinct Kanata configurations designed for different user needs and complexity levels:

1. **Full-Featured GACS System** - Advanced home row modifiers with bilateral prevention
2. **Simplified Home Row Mods** - Basic home row modifiers for easier adoption  
3. **Layout-Only Configuration** - Pure Colemak Mod-DH without home row modifiers

## 🚀 Quick Installation (Automated)

### Prerequisites
- macOS (configurations optimized for macOS)
- [Kanata](https://github.com/jtroo/kanata) installed: `brew install kanata`

### Auto-Installer
1. Clone this repository:
   ```bash
   git clone https://github.com/jellydn/kanata-colemak-configs.git
   cd kanata-colemak-configs
   ```

2. Run the auto-installer:
   ```bash
   ./install.sh
   ```
   
   The installer will:
   - 🔍 **Auto-detect** your Kanata installation
   - 📋 **Show configuration options** for your skill level
   - ✅ **Set up macOS service** for automatic startup
   - 🚀 **Start Kanata** immediately

3. **Grant permissions**: System Preferences → Security & Privacy → Privacy → Input Monitoring → ✅ kanata

**📖 See [INSTALL.md](INSTALL.md) for detailed installation guide**

### Management Commands
```bash
./install.sh status      # Check service status
./install.sh logs        # View live logs
./install.sh uninstall   # Remove service
./install.sh help        # Show help
```

## 📋 Configuration Comparison

| Feature | Layout Only | Simple Home Row | Advanced GACS |
|---------|-------------|-----------------|---------------|
| **File** | `colemak-dh-macos.kbd` | `corne-homerow-simple.kbd` | `corne-homerow-kanata.kbd` |
| **Complexity** | ⭐ Beginner | ⭐⭐ Intermediate | ⭐⭐⭐ Advanced |
| **Learning Curve** | Easy | Moderate | Steep |
| **Ergonomic Benefits** | Basic | Good | Excellent |
| **Home Row Modifiers** | ❌ None | ✅ Basic | ✅ Advanced |
| **Layer System** | ⭐ Basic | ⭐⭐⭐ Full | ⭐⭐⭐ Full |
| **Bilateral Prevention** | ❌ | ❌ | ✅ |
| **False Activations** | N/A | ⚠️ Possible | ✅ Prevented |
| **Recommended For** | Layout learners | Transition users | Power users |

## 🗂️ File Structure

```
├── 📋 INSTALLATION
├── install.sh                        # 🚀 Auto-installer script
├── INSTALL.md                         # 📖 Detailed installation guide
├── MACOS-SETUP.md                     # 🖥️  macOS setup instructions
├── 
├── 🎹 CONFIGURATIONS
├── colemak-dh-macos.kbd              # Layout-only configuration
├── corne-homerow-simple.kbd          # Simple home row modifiers
├── corne-homerow-kanata.kbd          # Advanced GACS system
├── 
├── 📚 DOCUMENTATION  
├── BASE-LAYER-README.md              # Base layer with GACS system
├── EXTEND-LAYER-README.md            # Navigation and shortcuts
├── NUMBER-LAYER-README.md            # Numpad layer guide
├── SYMBOL-LAYER-README.md            # Programming symbols
├── FUNCTION-LAYER-README.md          # F-key layer guide
├── GACS-SYSTEM-README.md             # Home row modifier theory
├── KANATA-CONFIG-README.md           # Master configuration guide
└── web-visualizer/                    # Interactive keyboard visualizer
    ├── index.html                     # Vue.js web application
    ├── config.js                      # Auto-generated config
    ├── generate-config.js             # Config generator script
    └── styles.css                     # CSS Grid keyboard layout
```

## 🎨 Visual Documentation

Each layer includes comprehensive visual documentation with ASCII keyboard layouts:

### 🏠 Base Layer - GACS Home Row Modifiers
```
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────────┐
│ ESC │ F1  │ F2  │ F3  │ F4  │ F5  │ F6  │ F7  │ F8  │ F9  │ F10 │ F11 │ F12 │         │
├─────┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──────┤
│   TAB  │  Q  │  W  │  F  │  P  │  B  │  J  │  L  │  U  │  Y  │  ;: │  [{ │  ]} │  \|  │
├────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬────┤
│🧭 @nav   │🔵A* │🔵R* │🔵S* │🔵T* │  G  │🔵M* │🔵N* │🔵E* │🔵I* │🔵O* │  '  │ ENTER│
├──────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴───────┤
│🔣 @sym     │  Z  │  X  │  C  │  D  │  V  │  K  │🔵H* │  ,< │  .> │  /? │🔧 @fun   │
├──────┬─────┴─┬───┴───┬─┴─────┴─────┴─────┴─────┴─┬───┴───┬─┴────┬─┴──────┬─┴────────┤
│ LCTL │ LMET  │🔢@num │       🔵@spc (Space)       │ RALT  │ RMET │  MENU  │   RCTL   │
└──────┴───────┴───────┴────────────────────────────┴───────┴──────┴────────┴──────────┘
```

**Legend**: 🔵 = Home Row Modifiers | 🧭 = Extend Layer | 🔢 = Number Layer | 🔣 = Symbol Layer | 🔧 = Function Layer

### 🧭 Extend Layer - Navigation Powerhouse
Arrow keys, shortcuts, and navigation positioned ergonomically under your right hand.

### 🔢 Number Layer - Right-Hand Numpad
Traditional numpad layout accessible via Space bar or Left Alt.

### 🔣 Symbol Layer - Programming Symbols
All programming symbols and brackets positioned logically for development work.

## 🌟 Key Features

### GACS Home Row Modifier System
- **G**UI (⌘) **A**lt (⌥) **C**ontrol (⌃) **S**hift (⇧)
- Symmetric layout on both hands for ergonomic access
- Bilateral combination prevention eliminates false activations
- Optimized timing (200ms/250ms) based on finger strength

### Layer System
- **Base Layer**: Colemak Mod-DH with home row modifiers
- **Extend Layer**: Navigation, shortcuts, and browser controls
- **Number Layer**: Right-hand numpad and numeric input
- **Symbol Layer**: Programming symbols and mathematical operators  
- **Function Layer**: F1-F12 keys accessible from home position

### Automated Installation
- 🔍 **Auto-detection** of Kanata installation
- 🎯 **Interactive configuration** selection
- 🚀 **macOS service setup** for automatic startup
- 📊 **Service management** commands
- 📝 **Comprehensive logging** and troubleshooting

### Web Visualizer
Interactive Vue.js application for exploring layer layouts and key mappings with:
- Real-time layer switching visualization
- Auto-generated configuration from .kbd files
- CSS Grid-based keyboard layout
- Mobile-responsive design

## 📖 Detailed Documentation

Each layer has comprehensive documentation with:
- 🎨 Visual ASCII keyboard layouts
- 🎯 Activation methods and timing details
- 🎮 Practical usage examples with step-by-step instructions
- ⚙️ Configuration details and customization options
- 📊 Efficiency benefits and ergonomic advantages
- 📚 Progressive learning paths for mastery
- 🔧 Troubleshooting guides and optimization tips

## 🛠️ Manual Setup (Advanced)

For manual installation without the auto-installer:

```bash
# Install Kanata
brew install kanata

# Test configuration
kanata --check --cfg corne-homerow-kanata.kbd

# Run manually (requires sudo)
sudo kanata --cfg corne-homerow-kanata.kbd
```

## 🎯 Configuration Selection Guide

### 🆕 New to Colemak or Home Row Mods?
**Start with**: `colemak-dh-macos.kbd`
- Focus on learning the Colemak layout first
- Traditional modifier positions
- Add complexity gradually

### 🔄 Ready for Home Row Modifiers?
**Upgrade to**: `corne-homerow-simple.kbd`
- Basic tap-hold home row modifiers
- Same layer system as advanced config
- Easier to learn and troubleshoot

### 🚀 Want Maximum Efficiency?
**Master with**: `corne-homerow-kanata.kbd`
- Full GACS system with bilateral prevention
- Professional-grade configuration
- Maximum ergonomic benefits

## 🚨 Troubleshooting

### Service Won't Start
1. **Check permissions**: System Preferences → Security & Privacy → Privacy → Input Monitoring
2. **Check logs**: `./install.sh logs`
3. **Test config**: `kanata --check --cfg your-config.kbd`

### Common Issues
- **"Operation not permitted"**: Grant Input Monitoring permissions
- **Service not loading**: Check plist file and paths
- **Configuration errors**: Validate syntax with `--check` flag

### Manual Service Control
```bash
sudo launchctl stop io.jellydn.kanata.colemak
sudo launchctl start io.jellydn.kanata.colemak
sudo launchctl list | grep kanata
```

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes with clear documentation
4. Test thoroughly on your setup
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Kanata](https://github.com/jtroo/kanata) - The amazing key remapper that makes this possible
- [Colemak Mod-DH](https://colemakmods.github.io/mod-dh/) - The ergonomic keyboard layout
- [Corne Keyboard](https://github.com/foostan/crkbd) - Inspiration for the layer philosophy
- [dreamsofcode-io](https://github.com/dreamsofcode-io/home-row-mods) - macOS service setup inspiration
- GACS community - For the symmetric home row modifier concept

## 🔗 Related Resources

- [Kanata Configuration Guide](https://github.com/jtroo/kanata/blob/main/docs/config.adoc)
- [Colemak Mod-DH Official Site](https://colemakmods.github.io/mod-dh/)
- [Home Row Mods Guide](https://precondition.github.io/home-row-mods)

---

**🎹 Transform your typing experience with ergonomic Colemak and powerful home row modifiers!**