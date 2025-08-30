# 🎹 Corne-Inspired Kanata Configuration

A sophisticated Kanata keyboard configuration that brings the Corne split keyboard experience to your MacBook, featuring Colemak Mod-DH layout, GACS home row modifiers, and intelligent bilateral combinations.

## 🚀 Quick Start

```bash
# Install and run with sudo (required on macOS)
sudo kanata --cfg corne-homerow-kanata.kbd
```

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [🏗️ Layer Architecture](#️-layer-architecture)  
- [🎨 Visual Layer Diagrams](#-visual-layer-diagrams)
- [🏠 GACS Home Row System](#-gacs-home-row-system)
- [⚙️ Configuration Details](#️-configuration-details)
- [🎮 Usage Examples](#-usage-examples)
- [🔧 Customization](#-customization)

## 🎯 Overview

### Philosophy
This configuration recreates the **Corne keyboard experience** on standard keyboards with:
- **Colemak Mod-DH** layout for optimal finger movement
- **GACS home row modifiers** for ergonomic access to Cmd/Alt/Ctrl/Shift  
- **Bilateral combinations** to prevent accidental modifier activation
- **Layer switching** for numbers, symbols, navigation, and functions

### Key Features
- ✅ **5 layers**: Base, Extend, Number, Symbol, Function
- ✅ **Bilateral combinations**: Smart prevention of accidental modifiers
- ✅ **250ms/200ms timing**: Optimized tap-hold delays
- ✅ **Corne-inspired**: Split keyboard philosophy on unified layout
- ✅ **Web visualizer**: Interactive layer exploration tool

## 🏗️ Layer Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    LAYER STACK                          │
├─────────────────────────────────────────────────────────┤
│ 🔧 Function Layer    │ Hold @fun  │ F1-F12 keys         │
│ 🔣 Symbol Layer      │ Hold @sym  │ !@#$%^&*()[]{}      │
│ 🔢 Number Layer      │ Hold @num  │ 0-9 numpad          │
│ 🧭 Extend Layer      │ Hold @nav  │ Navigation & shortcuts│
│ 🎹 Base Layer        │ Default    │ Colemak Mod-DH + GACS│
└─────────────────────────────────────────────────────────┘
```

## 🎨 Visual Layer Diagrams

### 🎹 Base Layer (Default)
```
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────────┐
│ ESC │ F1  │ F2  │ F3  │ F4  │ F5  │ F6  │ F7  │ F8  │ F9  │ F10 │ F11 │ F12 │         │
├─────┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──────┤
│   `    │  1  │  2  │  3  │  4  │  5  │  6  │  7  │  8  │  9  │  0  │  -  │  =  │ BSPC │
├────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬────┤
│   TAB    │  Q  │  W  │  F  │  P  │  B  │  J  │  L  │  U  │  Y  │  ;  │  [  │  ]  │ \  │
├──────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────┤
│🧭 @nav     │🔵A* │🔵R* │🔵S* │🔵T* │  G  │🔵M* │🔵N* │🔵E* │🔵I* │🔵O* │  '  │ ENTER  │
├────────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────────┤
│🔣 @sym       │  Z  │  X  │  C  │  D  │  V  │  K  │🔵H* │  ,  │  .  │  /  │🔧 @fun     │
├───────┬──────┴─┬───┴───┬─┴─────┴─────┴─────┴─────┴─┬───┴───┬─┴────┬─┴──────┬─┴────┬───┤
│ LCTL  │ LMET   │🔢@num │           🔵@spc           │ RALT  │ RMET │  MENU  │ RCTL │   │
└───────┴────────┴───────┴────────────────────────────┴───────┴──────┴────────┴──────┴───┘

🔵 = Home Row Modifiers (GACS)
🧭 = Extend Layer Access    🔢 = Number Layer Access
🔣 = Symbol Layer Access    🔧 = Function Layer Access
```

**GACS Home Row Mapping:**
```
Left Hand:  A*(⌘) R*(⌥) S*(⌃) T*(⇧)     Right Hand: M*(⇧) N*(⇧) E*(⌃) I*(⌥) O*(⌘)
            ├─────┴─────┴─────┴──┘              └──┴─────┴─────┴─────┤
            Cmd   Alt   Ctrl  Shift                Shift Shift Ctrl Alt  Cmd
```

### 🧭 Extend Layer (Navigation & Shortcuts)
```
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────────┐
│ --- │@lq  │@lh  │@lm  │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │         │
├─────┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──────┤
│ ---    │@lq  │@lh  │@lm  │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ ---  │
├────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬────┤
│ ---      │ ESC │🌐⬅️ │🔍   │🌐➡️ │ INS │PgUp │HOME │ ⬆️  │ END │MENU │ --- │SLCK │ ---│
├──────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────┤
│ ---        │ ⌥   │ ⌘   │ ⇧   │ ⌃   │R⌥   │PgDn │ ⬅️  │ ⬇️  │ ➡️  │ DEL │CAPS │ ---    │
├────────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────────┤
│ ---          │✂️   │📋   │ TAB │📄   │↩️   │PgDn │⌫    │ ⇧   │ ⌃   │MENU │ ---        │
├───────┬──────┴─┬───┴───┬─┴─────┴─────┴─────┴─────┴─┬───┴───┬─┴────┬─┴──────┬─┴────┬───┤
│ ---   │ ---    │ ---   │          ENTER             │ ---   │ ---  │  ---   │ ---  │   │
└───────┴────────┴───────┴────────────────────────────┴───────┴──────┴────────┴──────┴───┘

🌐 = Browser Navigation    🔍 = Find/Search       ✂️ = Cut (⌘X)
📋 = Copy (⌘C)           📄 = Paste (⌘V)       ↩️ = Undo (⌘Z)
```

### 🔢 Number Layer (NumPad)
```
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────────┐
│ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │         │
├─────┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──────┤
│ ---    │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ ---  │
├────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬────┤
│ ---      │ --- │ --- │ --- │ --- │ --- │ --- │🟢 7 │🟢 8 │🟢 9 │ --- │ --- │ --- │ ---│
├──────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────┤
│ ---        │ --- │ --- │ --- │ --- │ --- │ --- │🟢 4 │🟢 5 │🟢 6 │🟢 0 │ --- │ ---    │
├────────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────────┤
│ ---          │ --- │ --- │ --- │ --- │ --- │ --- │🟢 1 │🟢 2 │🟢 3 │ --- │ ---        │
├───────┬──────┴─┬───┴───┬─┴─────┴─────┴─────┴─────┴─┬───┴───┬─┴────┬─┴──────┬─┴────┬───┤
│ ---   │ ---    │ ---   │           ---              │ ---   │ ---  │  ---   │ ---  │   │
└───────┴────────┴───────┴────────────────────────────┴───────┴──────┴────────┴──────┴───┘

🟢 = Active Numbers (Right-hand NumPad Layout)
```

### 🔣 Symbol Layer (Shifted Characters)
```
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────────┐
│ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │         │
├─────┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──────┤
│ ---    │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ ---  │
├────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬────┤
│ ---      │🔴 ! │🔴 @ │🔴 # │🔴 $ │🔴 % │🔴 ^ │🔴 & │🔴 * │🔴 - │🔴 + │ --- │ --- │ ---│
├──────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────┤
│ ---        │ --- │ --- │ --- │ --- │ --- │ --- │🔴 ( │🔴 ) │🔴 [ │🔴 ] │ --- │ ---    │
├────────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────────┤
│ ---          │ --- │ --- │ --- │ --- │ --- │ --- │🔴 { │🔴 } │ --- │ --- │ ---        │
├───────┬──────┴─┬───┴───┬─┴─────┴─────┴─────┴─────┴─┬───┴───┬─┴────┬─┴──────┬─┴────┬───┤
│ ---   │ ---    │ ---   │           ---              │ ---   │ ---  │  ---   │ ---  │   │
└───────┴────────┴───────┴────────────────────────────┴───────┴──────┴────────┴──────┴───┘

🔴 = Active Symbols (Programming Characters)
Note: S-1 = Shift+1 (!), S-2 = Shift+2 (@), etc.
```

### 🔧 Function Layer (F-Keys)
```
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────────┐
│ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │         │
├─────┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──────┤
│ ---    │🟣F1 │🟣F2 │🟣F3 │🟣F4 │🟣F5 │🟣F6 │🟣F7 │🟣F8 │🟣F9 │🟣F10│🟣F11│🟣F12│ ---  │
├────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬────┤
│ ---      │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ ---│
├──────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────┤
│ ---        │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ ---    │
├────────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────────┤
│ ---          │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ ---        │
├───────┬──────┴─┬───┴───┬─┴─────┴─────┴─────┴─────┴─┬───┴───┬─┴────┬─┴──────┬─┴────┬───┤
│ ---   │ ---    │ ---   │           ---              │ ---   │ ---  │  ---   │ ---  │   │
└───────┴────────┴───────┴────────────────────────────┴───────┴──────┴────────┴──────┴───┘

🟣 = Function Keys (F1-F12 on Number Row)
```

## 🏠 GACS Home Row System

### The GACS Philosophy
**GACS** = **G**UI (⌘) **A**lt (⌥) **C**ontrol (⌃) **S**hift (⇧)

This creates a **symmetric modifier layout** where both hands mirror the same modifier pattern:

```
┌─────────────────────────────────────────────────────────────┐
│                  GACS SYMMETRY                              │
├─────────────────────────────────────────────────────────────┤
│ Left Hand:   A(⌘)  R(⌥)  S(⌃)  T(⇧)                       │
│ Right Hand:  O(⌘)  I(⌥)  E(⌃)  N(⇧)                       │
│                                                             │
│ Additional:  M(⇧)  H(⇧)  (Extra Shift keys)               │
└─────────────────────────────────────────────────────────────┘
```

### Bilateral Combination Prevention
**Smart Prevention System**: Modifiers DON'T activate when followed by adjacent same-hand keys.

```
Left Hand Prevention:
A(⌘) won't activate when followed by: R, S, T
R(⌥) won't activate when followed by: A, S, T  
S(⌃) won't activate when followed by: A, R, T
T(⇧) won't activate when followed by: A, R, S

Right Hand Prevention:
O(⌘) won't activate when followed by: I, E, N, M
I(⌥) won't activate when followed by: O, E, N, M
E(⌃) won't activate when followed by: O, I, N, M  
N(⇧) won't activate when followed by: O, I, E, M
M(⇧) won't activate when followed by: O, I, E, N
H(⇧) won't activate when followed by: O, I, E, N, M
```

**Why This Works:**
- ✅ **"art"** → Types normally (A+R+T same hand)
- ✅ **"an"** → A(⌘) + N works (different hands)
- ✅ **Prevents accidents** during fast typing
- ✅ **Enables cross-hand shortcuts** like A(⌘) + N(⇧) = ⌘⇧N

### Timing Configuration
```
250ms: A, R, S, O, I, E, H  (Standard modifiers)
200ms: T, M, N              (Index finger keys - faster access)
```

## ⚙️ Configuration Details

### Core Settings
```lisp
(defcfg
  process-unmapped-keys   yes     ; Pass through unmapped keys
  concurrent-tap-hold     yes     ; Allow simultaneous tap-hold
  allow-hardware-repeat   no      ; Disable hardware key repeat
  rapid-event-delay       5       ; 5ms delay for rapid events
  sequence-timeout        2000    ; 2 second timeout for sequences
)
```

### Layer Activation Methods
| Layer | Trigger | Type | Description |
|-------|---------|------|-------------|
| **Base** | Default | Always active | Colemak Mod-DH + GACS |
| **Extend** | Hold @nav (Caps) | layer-toggle | Navigation & shortcuts |
| **Number** | Hold @num or @spc | layer-toggle | NumPad layout |
| **Symbol** | Hold @sym | layer-toggle | Programming symbols |
| **Function** | Hold @fun | layer-toggle | F1-F12 keys |

### Special Key Aliases
```lisp
;; Layer Switches
@nav → layer-toggle extend    (Caps Lock position)  
@num → layer-toggle num       (Left Alt position)
@sym → layer-toggle sym       (Left Shift position)
@fun → layer-toggle fun       (Right Shift position)
@spc → tap-hold space/num     (Space bar)

;; Navigation Shortcuts  
@bk  → Alt+Left              (Browser back)
@fw  → Alt+Right             (Browser forward)  
@fnd → Ctrl+F                (Find)
@cut → Ctrl+X                (Cut)
@cpy → Ctrl+C                (Copy)
@pst → Ctrl+V                (Paste)
@udo → Ctrl+Z                (Undo)

;; Layer Quick Access
@lq, @lh, @lm → layer-switch base    (Return to base)
```

## 🎮 Usage Examples

### Basic Typing
```
"hello world"  → Normal typing with Colemak Mod-DH layout
```

### Home Row Modifiers
```
⌘C (Copy):     Hold A + C    (Left hand Cmd + C)
⌘⇧N (New):     Hold A + N + T (Cmd + Shift + N using both hands)
⌃⌥T (Term):    Hold S + R + Y (Ctrl + Alt + T)
```

### Layer Access
```
Numbers:       Hold Space → 789, 456, 123 on right hand
Symbols:       Hold Left Shift → !@#$%^&*()[]{}  
Navigation:    Hold Caps → Arrow keys, PgUp/Dn, Home/End
Functions:     Hold Right Shift → F1-F12 on number row
```

### Navigation Examples
```
Page Up:       Hold Caps + U (Extend layer)
Page Down:     Hold Caps + N (Extend layer)  
Home:          Hold Caps + Y (Extend layer)
End:           Hold Caps + O (Extend layer)
Browser Back:  Hold Caps + W (Extend layer → @bk)
Find in Page:  Hold Caps + F (Extend layer → @fnd)
```

### Shortcuts in Extend Layer
```
Cut:           Hold Caps + Z (@cut → ⌘X)
Copy:          Hold Caps + X (@cpy → ⌘C)  
Paste:         Hold Caps + C (@pst → ⌘V)
Undo:          Hold Caps + V (@udo → ⌘Z)
```

## 🔧 Customization

### Adjusting Timing
```lisp
;; Current: 250ms for most keys, 200ms for index fingers
;; To make faster (more accidental activations):
(tap-hold-except-keys 150 150 a lmet (r s t))

;; To make slower (less accidental, more deliberate):  
(tap-hold-except-keys 300 300 a lmet (r s t))
```

### Adding More Bilateral Prevention
```lisp
;; Prevent A from activating when followed by additional keys:
a (tap-hold-except-keys 250 250 a lmet (r s t g))  ; Added 'g'
```

### Alternative One-Shot Modifiers
```lisp
;; Uncomment the oneshot layer for an alternative approach
;; Useful for users who struggle with tap-hold timing
(deflayer oneshot
  _       _    _    _    _    _    _    _    _    _    _    _    _
  _       _    _    _    _    _    _    _    _    _    _    _    _    _
  _       _    _    _    _    _    _    _    _    _    _    _    _    _
  _       @oscmd @osalt @osctl @ossft _  _  @ossft @osctl @osalt @oscmd _  _  _
  _       _    _    _    _    _    _    _    _    _    _    _
  _       _    _              _              _    _    _    _
)
```

### Layer Modifications
```lisp
;; Add custom keys to any layer by modifying the deflayer sections
;; Example: Add calculator to number layer
(deflayer num
  _       _    _    _    _    _    _    _    _    _    _    calc _    ; Added calc
  ; ... rest of layer
)
```

## 🌐 Web Visualizer

### Launch Interactive Visualizer
```bash
cd web-visualizer/
open index.html
```

### Features
- ✅ **Interactive layer switching**
- ✅ **Key hover explanations**  
- ✅ **GACS layout visualization**
- ✅ **Responsive design**
- ✅ **Single & comparison views**

### Auto-Update from Config
```bash
# After modifying the .kbd file, regenerate web config:
cd web-visualizer/
node generate-config.js
open index.html
```

## 📚 Additional Resources

### Learning Colemak Mod-DH
- [Colemak Official](https://colemak.com/)
- [Mod-DH Variant](https://colemakmods.github.io/mod-dh/)

### Kanata Documentation  
- [Kanata GitHub](https://github.com/jtroo/kanata)
- [Configuration Guide](https://github.com/jtroo/kanata/blob/main/docs/config.adoc)

### Split Keyboard Philosophy
- [Corne Keyboard](https://github.com/foostan/crkbd)
- [QMK Home Row Mods](https://precondition.github.io/home-row-mods)

---

**Built with ❤️ for ergonomic typing**  
*Bringing split keyboard benefits to standard layouts*