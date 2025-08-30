# 🎮 Web Visualizer Demo Guide

## 🚀 **Quick Demo Steps**

### 1. **Open the Visualizer**
```bash
cd /Users/huynhdung/src/tries/2025-08-30-colemak/web-visualizer/
open index.html
```

### 2. **Explore the Base Layer**
- ✅ **Home row keys highlighted in blue**: A*, R*, S*, T* on left, O*, I*, E*, N* on right
- ✅ **Hover over blue keys**: See tap/hold information with timing
- ✅ **GACS symmetry visible**: Left A(⌘) mirrors Right O(⌘), etc.
- ✅ **Layer activation keys in green**: 🔍 (Caps), 🔢 (Alt), 🔣 (LShift), ⚙️ (RShift)

### 3. **Test Layer Switching**
- ✅ **Click "Extend Layer" tab**: See navigation layout with arrows, shortcuts
- ✅ **Click "Number Layer" tab**: See number pad on right side (7-8-9, 4-5-6-0, 1-2-3)
- ✅ **Click "Symbol Layer" tab**: See symbols in red (!@#$%^&*-+, ()[], {})
- ✅ **Click "Function Layer" tab**: See F-keys on number row in purple

### 4. **Examine Key Details**
- ✅ **Hover over A* key**: "Tap: a | Hold (250ms): ⌘ Cmd | GACS Position 1"
- ✅ **Hover over O* key**: "Tap: o | Hold (250ms): ⌘ Cmd | GACS Position 1 (Right)"
- ✅ **Hover over 🔍 key**: "Navigation Layer (Caps Lock: tap=caps, hold=extend)"
- ✅ **Hover over ━━━━━━━━ key**: "Space (tap=space, hold=number layer)"

### 5. **Check GACS Legend**
- ✅ **Left Hand panel**: Shows A(⌘ Cmd), R(⌥ Alt), S(⌃ Ctrl), T(⇧ Shift) with timings
- ✅ **Right Hand panel**: Shows O(⌘ Cmd), I(⌥ Alt), E(⌃ Ctrl), N(⇧ Shift) with timings
- ✅ **Color legend**: Blue (Home Row), Green (Layer Keys), Yellow (Navigation), Red (Symbols)

## 🔍 **What to Look For**

### ✅ **Visual Features Working:**
- **Responsive layout**: Scales properly on different screen sizes
- **Color coding**: Different key types have distinct colors
- **Hover effects**: Keys scale slightly and show detailed tooltips
- **Layer transitions**: Smooth switching between different layers
- **GACS symmetry**: Clear visual indication of matching modifiers

### ✅ **Interactive Elements:**
- **Tab navigation**: Click between Base, Extend, Number, Symbol, Function layers
- **Tooltip system**: Rich information appears on hover
- **Key highlighting**: Home row keys have blue accent and ring effect
- **Mobile friendly**: Touch interactions work on mobile devices

### ✅ **Content Accuracy:**
- **Correct key mappings**: All keys match your Kanata configuration
- **Proper GACS layout**: A/R/S/T ↔ O/I/E/N symmetry displayed
- **Accurate timing**: 250ms for most keys, 200ms for index fingers
- **Layer descriptions**: Each layer shows correct activation method

## 🎯 **Test Scenarios**

### Scenario 1: **Learning GACS Layout**
1. Open Base Layer
2. Hover over A, R, S, T keys on left
3. Hover over O, I, E, N keys on right  
4. Verify symmetry: A(⌘)↔O(⌘), R(⌥)↔I(⌥), S(⌃)↔E(⌃), T(⇧)↔N(⇧)

### Scenario 2: **Understanding Extend Layer**
1. Click "Extend Layer" tab
2. See navigation arrows (←↓↑→) in yellow
3. Notice direct modifiers (⌥⌘⇧⌃) on left side
4. Find shortcuts (Cut, Copy, Paste, Undo) on bottom row

### Scenario 3: **Number Input Reference**
1. Click "Number Layer" tab
2. See number pad layout: 7-8-9 / 4-5-6-0 / 1-2-3
3. Understand activation: "Hold Space or Left Alt"

### Scenario 4: **Symbol Reference**
1. Click "Symbol Layer" tab  
2. See symbols in red: !@#$%^&*-+ on top, ()[] in middle, {} on bottom
3. Understand activation: "Left Shift toggle"

### Scenario 5: **Function Keys**
1. Click "Function Layer" tab
2. See F1-F12 mapped to number row in purple
3. Understand activation: "Right Shift toggle"

## 📱 **Mobile Testing**

If testing on mobile:
1. **Pinch to zoom**: Layout should remain usable
2. **Touch keys**: Tooltips should appear on tap
3. **Tab switching**: Should work with finger taps
4. **Scrolling**: Should be smooth and responsive

## ✅ **Success Checklist**

- [ ] Web page opens without errors
- [ ] All 5 layer tabs are clickable and functional  
- [ ] Home row keys (blue) show detailed tap/hold information
- [ ] GACS symmetry is visually clear in the legend
- [ ] Color coding matches different key types
- [ ] Tooltips appear on hover/touch
- [ ] Layout is responsive on different screen sizes
- [ ] All key labels match your Kanata configuration
- [ ] Layer activation methods are clearly shown

## 🎉 **Demo Complete!**

You now have a fully functional, no-build-step web visualizer that:
- **Displays your exact Kanata configuration**
- **Shows GACS home row symmetry clearly**
- **Provides interactive layer exploration**
- **Works on desktop and mobile**
- **Requires no installation or setup**

Perfect for learning, teaching, and referencing your Corne-inspired Kanata layout!