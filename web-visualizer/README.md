# 🎹 Kanata Home Row Visualizer

A simple, no-build-step web application to visualize your Corne-inspired Kanata keyboard configuration with GACS home row modifiers and bilateral combinations.

## ✨ Features

- **Interactive Layer Switching**: View all 5 layers (Base, Extend, Number, Symbol, Function)
- **GACS Layout Visualization**: Clear display of GUI/Alt/Control/Shift symmetry
- **Home Row Modifier Details**: Tap/Hold timing and bilateral combination rules  
- **Responsive Design**: Works on desktop and mobile devices
- **No Build Required**: Pure HTML/CSS/JavaScript with CDN dependencies

## 🚀 Quick Start

1. **Open the visualizer**:
   ```bash
   # Navigate to the web-visualizer directory
   cd /Users/huynhdung/src/tries/2025-08-30-colemak/web-visualizer/
   
   # Open in your default browser
   open index.html
   ```

2. **Or serve locally** (optional):
   ```bash
   # Using Python's built-in server
   python3 -m http.server 8000
   # Then visit: http://localhost:8000
   
   # Or using Node.js
   npx serve .
   ```

## 🗺️ Layer Overview

### 🔤 **Base Layer** (Default)
- **Colemak Mod-DH layout** with GACS home row mods
- **Left Hand**: A(⌘) R(⌥) S(⌃) T(⇧) 
- **Right Hand**: O(⌘) I(⌥) E(⌃) N(⇧)
- **Bilateral Combinations**: Adjacent home row keys won't trigger modifiers

### 🧭 **Extend Layer** (Hold Caps Lock)
- **Navigation**: Arrow keys on IJKL area
- **Direct Modifiers**: No tap-hold delay
- **Common Shortcuts**: Cut, Copy, Paste, Undo
- **Browser Controls**: Back, Forward, Find

### 🔢 **Number Layer** (Hold Space / Alt)
- **Number Pad**: 7-8-9 / 4-5-6-0 / 1-2-3 layout
- **Right-hand positioning** for easy access

### 🔣 **Symbol Layer** (Left Shift Toggle)
- **Top Row**: ! @ # $ % ^ & * - +
- **Brackets**: ( ) [ ] { }
- **Common symbols** for programming

### ⚙️ **Function Layer** (Right Shift Toggle)
- **F-keys**: F1-F12 on number row
- **System controls** and function keys

## 🎯 **Key Features Explained**

### Home Row Modifiers
- **Tap**: Regular letter (a, r, s, t, etc.)
- **Hold**: Modifier key (⌘, ⌥, ⌃, ⇧)
- **Timing**: 250ms for outer fingers, 200ms for index fingers
- **Prevention**: Won't activate when followed by adjacent home row keys

### GACS Symmetry
```
Left Hand:  A(GUI) R(Alt) S(Control) T(Shift)
Right Hand: O(GUI) I(Alt) E(Control) N(Shift)
```
Perfect finger-to-finger symmetry for muscle memory.

### Color Coding
- 🔵 **Blue**: Home row keys with modifiers
- 🟢 **Green**: Layer activation keys
- 🟡 **Yellow**: Navigation keys (extend layer)
- 🔴 **Red**: Symbol keys (symbol layer)
- 🟣 **Purple**: Function keys (function layer)

## 🖱️ **Usage Instructions**

1. **Switch Layers**: Click the tabs at the top
2. **View Key Details**: Hover over any key for detailed information
3. **Understand Modifiers**: Blue keys show tap/hold functions
4. **Learn GACS**: Check the legend for symmetry explanation

## 📱 **Mobile Support**

The visualizer is fully responsive and works on mobile devices:
- **Touch-friendly**: Large touch targets
- **Responsive grid**: Adapts to screen size
- **Touch tooltips**: Tap keys to see details

## 🔧 **Customization**

### Update Configuration
Edit `config.js` to modify:
- Key mappings and labels
- Layer definitions
- Color schemes
- Timing values
- Key explanations

### Styling Changes
Edit `styles.css` or modify the Tailwind classes in `index.html` for:
- Color themes
- Key sizes
- Animations
- Layout adjustments

## 📁 **File Structure**

```
web-visualizer/
├── index.html          # Main application
├── config.js           # Kanata configuration data
├── styles.css          # Custom CSS styles
├── README.md          # This file
└── assets/
    └── kanata-config.kbd  # Original Kanata config
```

## 🌐 **Browser Compatibility**

- **Chrome/Edge**: Full support
- **Firefox**: Full support  
- **Safari**: Full support
- **Mobile browsers**: Full support

No Internet Explorer support (Vue 3 requirement).

## ⚡ **Performance**

- **No build step**: Instant loading
- **CDN dependencies**: Fast loading from cache
- **Lightweight**: < 100KB total size
- **Fast rendering**: Efficient Vue 3 reactivity

## 🎉 **Perfect for**

- **Learning the layout**: Visual reference for GACS positioning
- **Teaching others**: Show how home row mods work
- **Configuration tweaking**: See changes before applying
- **Documentation**: Visual complement to text configs
- **Troubleshooting**: Understand bilateral combinations

## 🔗 **Related Files**

- `../corne-homerow-kanata.kbd` - Main Kanata configuration
- `../FINAL-GACS-OIEN.md` - GACS layout documentation
- `../EXTEND-LAYER-GUIDE.md` - Extend layer usage guide

---

Built with ❤️ using Vue 3 + Tailwind CSS | No build step required!