# 🎹 Base Layer - Colemak Mod-DH with GACS

The **Base Layer** is the foundation of your Corne-inspired Kanata configuration. It combines the ergonomic Colemak Mod-DH layout with the innovative GACS home row modifier system.

## 🎯 Overview

The Base Layer provides:
- **Colemak Mod-DH layout** for optimal finger movement and typing efficiency
- **GACS home row modifiers** for ergonomic access to Cmd/Alt/Ctrl/Shift
- **Bilateral combinations** to prevent accidental modifier activation during fast typing
- **Layer access keys** positioned for thumb and pinky access

## 🎨 Visual Layout

```
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────────┐
│ ESC │ F1  │ F2  │ F3  │ F4  │ F5  │ F6  │ F7  │ F8  │ F9  │ F10 │ F11 │ F12 │         │
├─────┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──────┤
│   `~   │  1! │  2@ │  3# │  4$ │  5% │  6^ │  7& │  8* │  9( │  0) │  -_ │  =+ │ BSPC │
├────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬────┤
│   TAB    │  Q  │  W  │  F  │  P  │  B  │  J  │  L  │  U  │  Y  │  ;: │  [{ │  ]} │ \| │
├──────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────┤
│🧭 @nav     │🔵A* │🔵R* │🔵S* │🔵T* │  G  │🔵M* │🔵N* │🔵E* │🔵I* │🔵O* │  '" │ ENTER  │
├────────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────────┤
│🔣 @sym       │  Z  │  X  │  C  │  D  │  V  │  K  │🔵H* │  ,< │  .> │  /? │🔧 @fun     │
├───────┬──────┴─┬───┴───┬─┴─────┴─────┴─────┴─────┴─┬───┴───┬─┴────┬─┴──────┬─┴────┬───┤
│ LCTL  │ LMET   │🔢@num │        🔵@spc (Space)      │ RALT  │ RMET │  MENU  │ RCTL │   │
└───────┴────────┴───────┴────────────────────────────┴───────┴──────┴────────┴──────┴───┘
```

### 🏷️ Legend
- **🔵** = Home Row Modifiers (tap letter, hold modifier)
- **🧭** = Extend Layer access (navigation & shortcuts)
- **🔢** = Number Layer access (numpad)
- **🔣** = Symbol Layer access (programming symbols)
- **🔧** = Function Layer access (F1-F12 keys)

## 🏠 GACS Home Row System

### The GACS Philosophy
**GACS** stands for **G**UI **A**lt **C**ontrol **S**hift - a symmetric layout where both hands mirror the same modifier pattern.

```
┌──────────────────────────────────────────────────────────────────┐
│                       GACS SYMMETRY                             │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Left Hand:     Right Hand:                                     │
│  ┌─────────┐    ┌─────────┐                                     │
│  │ A   R   │    │ O   I   │  ← GUI (⌘ Command)                 │
│  │ S   T   │    │ E   N   │  ← ALT (⌥ Option)                  │
│  └─────────┘    └─────────┘  ← CTRL (⌃ Control)                │
│      ↑   ↑          ↑   ↑   ← SHIFT (⇧ Shift)                  │
│      │   └─────┐    │   │                                       │
│      └────┐    │    │   │                                       │
│           │    │    │   └── Additional Shift keys: M, N, H     │
│           │    │    └────── Index fingers (200ms timing)       │
│           │    └─────────── Ring/Middle fingers (250ms timing) │
│           └──────────────── Pinky (250ms timing)               │
└──────────────────────────────────────────────────────────────────┘
```

### 📊 Modifier Mapping Table

| Key | Position | Tap | Hold | Timing | Hand | Finger |
|-----|----------|-----|------|--------|------|--------|
| **A** | Home-1 | `a` | ⌘ Cmd | 250ms | Left | Pinky |
| **R** | Home-2 | `r` | ⌥ Alt | 250ms | Left | Ring |
| **S** | Home-3 | `s` | ⌃ Ctrl | 250ms | Left | Middle |
| **T** | Home-4 | `t` | ⇧ Shift | 200ms | Left | Index |
| **M** | Right-1 | `m` | ⇧ Shift | 200ms | Right | Index |
| **N** | Right-2 | `n` | ⇧ Shift | 200ms | Right | Index |
| **E** | Right-3 | `e` | ⌃ Ctrl | 250ms | Right | Middle |
| **I** | Right-4 | `i` | ⌥ Alt | 250ms | Right | Ring |
| **O** | Right-5 | `o` | ⌘ Cmd | 250ms | Right | Pinky |
| **H** | Bottom | `h` | ⇧ Shift | 250ms | Right | Index |

## 🔒 Bilateral Combination Prevention

### How It Works
The **bilateral combination system** prevents accidental modifier activation when typing fast letter sequences on the same hand.

```
┌─────────────────────────────────────────────────────────────────┐
│                    PREVENTION MATRIX                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Left Hand Prevention:                                           │
│ ┌───┬───┬───┬───┐                                              │
│ │ A │ R │ S │ T │  ← These keys prevent each other             │
│ └─┬─┴─┬─┴─┬─┴─┬─┘                                              │
│   │   │   │   └── T won't hold-activate when followed by A,R,S │
│   │   │   └────── S won't hold-activate when followed by A,R,T │
│   │   └────────── R won't hold-activate when followed by A,S,T │
│   └────────────── A won't hold-activate when followed by R,S,T │
│                                                                 │
│ Right Hand Prevention:                                          │
│ ┌───┬───┬───┬───┬───┬───┐                                      │
│ │ M │ N │ E │ I │ O │ H │  ← These keys prevent each other     │
│ └─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┘                                      │
│   │   │   │   │   │   └── H won't activate when followed by others│
│   │   │   │   │   └────── O won't activate when followed by M,N,E,I,H│
│   │   │   │   └────────── I won't activate when followed by M,N,E,O,H│
│   │   │   └────────────── E won't activate when followed by M,N,I,O,H│
│   │   └────────────────── N won't activate when followed by M,E,I,O,H│
│   └────────────────────── M won't activate when followed by N,E,I,O,H│
└─────────────────────────────────────────────────────────────────┘
```

### ✅ Examples That Work
```
"art"     → A+R+T types normally (same hand, prevention active)
"start"   → S+T+A+R+T types normally (same hand sequences)
"nature"  → N+A+T+U+R+E types normally

Cross-hand shortcuts:
"select all" → A(⌘) + A = ⌘A (different hands, works perfectly)
"new tab"    → A(⌘) + T = ⌘T (different hands, works perfectly)
```

### ❌ What Gets Prevented
```
❌ "art" won't trigger A(⌘) because A is followed by R (same hand)
❌ "str" won't trigger S(⌃) because S is followed by T (same hand)  
❌ "ion" won't trigger I(⌥) because I is followed by O (same hand)
```

## 🗝️ Layer Access Keys

### Layer Activation Map
```
┌─────────────────────────────────────────────────────────────────┐
│                    LAYER ACCESS POINTS                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 🧭 @nav (Caps Lock position)                                   │
│    └── Hold for Extend Layer (Navigation & Shortcuts)          │
│                                                                 │
│ 🔢 @num (Left Alt position + Space bar)                        │
│    ├── Hold Left Alt for Number Layer                          │
│    └── Hold Space for Number Layer (dual access)               │
│                                                                 │
│ 🔣 @sym (Left Shift position)                                  │
│    └── Hold for Symbol Layer (Programming symbols)             │
│                                                                 │
│ 🔧 @fun (Right Shift position)                                 │
│    └── Hold for Function Layer (F1-F12 keys)                   │
└─────────────────────────────────────────────────────────────────┘
```

### Layer Switching Workflow
1. **Hold layer key** → Activates temporary layer
2. **Type desired characters** → Uses layer's key mappings
3. **Release layer key** → Returns to Base Layer

## 🎮 Practical Usage Examples

### Basic Typing
```
"hello world" → h-e-l-l-o [space] w-o-r-l-d
```
*Uses Colemak Mod-DH layout with bilateral prevention*

### Home Row Modifiers
```
Copy (⌘C):
1. Hold A key (activates ⌘ Cmd modifier)
2. Tap C key  
3. Release A key
Result: ⌘C command executed

New Tab (⌘T):
1. Hold A key (⌘ Cmd)
2. Tap T key
3. Release A key  
Result: ⌘T (opens new tab)

Select All + Bold (⌘A then ⌘B):
1. Hold A key → Tap A → Release (⌘A - select all)
2. Hold A key → Tap B → Release (⌘B - bold text)
```

### Multi-Modifier Combinations
```
Force Quit (⌘⌥Esc):
1. Hold A (⌘) + Hold R (⌥) 
2. Tap Esc
3. Release A + R
Result: ⌘⌥Esc (Force Quit dialog)

Terminal (⌃⌥T):  
1. Hold S (⌃) + Hold I (⌥) [cross-hand]
2. Tap T
3. Release S + I  
Result: ⌃⌥T (opens terminal)
```

### Layer Access Examples
```
Type Numbers (7, 8, 9):
1. Hold Space bar (activates Number Layer)
2. Tap U, I, O keys (maps to 7, 8, 9)
3. Release Space bar
Result: "789"

Type Symbols (!@#):  
1. Hold Left Shift (@sym - activates Symbol Layer)
2. Tap Q, W, F keys (maps to !, @, #)  
3. Release Left Shift
Result: "!@#"

Navigate (Page Up):
1. Hold Caps Lock (@nav - activates Extend Layer)
2. Tap U key (maps to Page Up)
3. Release Caps Lock
Result: Page Up navigation
```

## ⚙️ Configuration Code

### Base Layer Definition
```lisp
(deflayer base
  esc     f1   f2   f3   f4   f5   f6   f7   f8   f9   f10  f11  f12
  grv     1    2    3    4    5    6    7    8    9    0    -    =    bspc
  tab     q    w    f    p    b    j    l    u    y    ;    [    ]    \
  @nav    @a   @r   @s   @t   g    @m   @n   @e   @i   @o   '    ret
  @sym    z    x    c    d    v    k    @h   ,    .    /    @fun
  lctl    lmet @num           @spc           ralt rmet menu rctl
)
```

### Home Row Modifier Aliases
```lisp
;; Left Hand - GACS Layout
a (tap-hold-except-keys 250 250 a lmet (r s t))  ; A / CMD
r (tap-hold-except-keys 250 250 r lalt (a s t))  ; R / ALT  
s (tap-hold-except-keys 250 250 s lctl (a r t))  ; S / CTRL
t (tap-hold-except-keys 200 200 t lsft (a r s))  ; T / SHIFT

;; Right Hand - GACS on OIEN + Additional Shifts
m (tap-hold-except-keys 200 200 m rsft (n e i o))  ; M / SHIFT
n (tap-hold-except-keys 200 200 n rsft (m e i o))  ; N / SHIFT  
e (tap-hold-except-keys 250 250 e rctl (m n i o))  ; E / CTRL
i (tap-hold-except-keys 250 250 i ralt (m n e o))  ; I / ALT
o (tap-hold-except-keys 250 250 o rmet (m n e i))  ; O / CMD
h (tap-hold-except-keys 250 250 h rsft (m n e i o)) ; H / SHIFT
```

### Layer Access Aliases
```lisp
nav (layer-toggle extend)              ; Navigation layer
num (layer-toggle num)                 ; Number layer
sym (layer-toggle sym)                 ; Symbol layer  
fun (layer-toggle fun)                 ; Function layer
spc (tap-hold 200 200 spc (layer-toggle num)) ; Space/Number
```

## 🔧 Customization Tips

### Adjust Timing
```lisp
;; Make modifiers faster (more sensitive):
a (tap-hold-except-keys 150 150 a lmet (r s t))

;; Make modifiers slower (less sensitive):  
a (tap-hold-except-keys 300 300 a lmet (r s t))
```

### Modify Bilateral Prevention
```lisp
;; Add more prevention (include G key):
a (tap-hold-except-keys 250 250 a lmet (r s t g))

;; Reduce prevention (remove T key):
a (tap-hold-except-keys 250 250 a lmet (r s))
```

### Alternative Modifier Mappings
```lisp
;; Swap Cmd and Alt positions:
a (tap-hold-except-keys 250 250 a lalt (r s t))  ; A → ALT
r (tap-hold-except-keys 250 250 r lmet (a s t))  ; R → CMD
```

## 📈 Learning Path

### Week 1: Basic Typing
- Focus on Colemak Mod-DH letter positions
- Don't use home row mods yet, just type normally
- Goal: Comfortable with QWERTY→Colemak transition

### Week 2: Simple Modifiers  
- Start with single modifiers: A(⌘) for common shortcuts
- Practice ⌘C, ⌘V, ⌘A, ⌘Z
- Goal: Natural single-modifier shortcuts

### Week 3: Cross-Hand Combinations
- Add cross-hand shortcuts: A(⌘) + right hand keys
- Practice ⌘T, ⌘N, ⌘W (common browser/app shortcuts)
- Goal: Comfortable cross-hand modifier usage

### Week 4: Full System
- Enable all home row mods
- Add multi-modifier combinations  
- Practice layer switching
- Goal: Full GACS system proficiency

## 🔗 Related Documentation

- [**Extend Layer Guide**](./EXTEND-LAYER-README.md) - Navigation and shortcuts
- [**Number Layer Guide**](./NUMBER-LAYER-README.md) - NumPad and numbers
- [**Symbol Layer Guide**](./SYMBOL-LAYER-README.md) - Programming symbols
- [**Function Layer Guide**](./FUNCTION-LAYER-README.md) - F1-F12 keys
- [**GACS Deep Dive**](./GACS-SYSTEM-README.md) - Advanced home row mod theory

---

**🎹 The Base Layer is your foundation - master it first, then explore the layers above!**