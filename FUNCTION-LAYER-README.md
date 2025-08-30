# 🔧 Function Layer - F-Key Command Center

The **Function Layer** provides direct access to all function keys (F1-F12) without reaching for the top row, activated by holding the Right Shift key (@fun). This layer is essential for IDE shortcuts, system commands, and application-specific hotkeys.

## 🎯 Overview

The Function Layer features:
- **Complete F1-F12 range** accessible from home position
- **Logical number row placement** following natural key order
- **Single layer activation** for function key combinations
- **Enhanced productivity** for development and system management

## 🎨 Visual Layout

```
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────────┐
│ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │         │
├─────┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──────┤
│ ---    │ 🔧F1│ 🔧F2│ 🔧F3│ 🔧F4│ 🔧F5│ 🔧F6│ 🔧F7│ 🔧F8│ 🔧F9│🔧F10│🔧F11│🔧F12│ ---  │
├────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬────┤
│ ---      │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ ---│
├──────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────┤
│ ---        │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ ---    │
├────────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────────┤
│ ---          │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │🔧 @fun     │
├───────┬──────┴─┬───┴───┬─┴─────┴─────┴─────┴─────┴─┬───┴───┬─┴────┬─┴──────┬─┴────┬───┤
│ ---   │ ---    │ ---   │          ⏎ ENTER          │ ---   │ ---  │  ---   │ ---  │   │
└───────┴────────┴───────┴────────────────────────────┴───────┴──────┴────────┴──────┴───┘
```

### 🏷️ Legend  
- **🔧** = Function Keys (F1-F12)
- **@fun** = Function Layer activator

## 🗝️ Activation Method

```
┌─────────────────────────────────────────────────────────┐
│                 FUNCTION LAYER ACCESS                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ Trigger: Hold @fun key (Right Shift position)         │
│ Type: layer-toggle (temporary while held)             │
│ Return: Release @fun to return to Base Layer          │
│                                                         │
│ Usage Pattern:                                          │
│ 1. Hold Right Shift (@fun)                            │
│ 2. Press number row keys for F1-F12                   │
│ 3. Release Right Shift                                 │
│                                                         │
│ Note: This replaces normal Right Shift functionality  │
│ For capital letters, use home row Shift mods (T/M/N/H)│
└─────────────────────────────────────────────────────────┘
```

## 🔢 Function Key Mapping

### 📍 Key Position Layout
```
┌─────────────────────────────────────────────────────────────┐
│                   FUNCTION KEY POSITIONS                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Position │ Key │ Function │ Common Uses                     │
│───────────────────────────────────────────────────────────  │
│ 1        │ F1  │ Help     │ Documentation, Context help     │
│ 2        │ F2  │ Rename   │ Refactor, File rename          │
│ 3        │ F3  │ Find     │ Search next, Find in files     │
│ 4        │ F4  │ Close    │ Alt+F4 close, Address bar      │
│ 5        │ F5  │ Refresh  │ Browser reload, Debug run      │
│ 6        │ F6  │ Focus    │ Element focus, Address bar     │
│ 7        │ F7  │ Step     │ Debug step into                │
│ 8        │ F8  │ Execute  │ Debug step over                │
│ 9        │ F9  │ Break    │ Toggle breakpoint              │
│ 10       │ F10 │ Menu     │ Context menu, Debug step out   │
│ 11       │ F11 │ Full     │ Fullscreen toggle              │
│ 12       │ F12 │ Dev      │ Browser DevTools               │
│                                                             │
│ Layout: Follows number row 1-9, 0, -, = for F1-F12       │
└─────────────────────────────────────────────────────────────┘
```

### 🎯 Physical Key Mapping
```
Number Row → Function Key:
1 → F1    (pinky)
2 → F2    (ring) 
3 → F3    (middle)
4 → F4    (index)
5 → F5    (index)
6 → F6    (index)
7 → F7    (index)
8 → F8    (middle)
9 → F9    (ring)
0 → F10   (pinky)
- → F11   (pinky)
= → F12   (pinky)
```

## 🎮 Practical Usage Examples

### 🧑‍💻 Development Workflows
```
VS Code - Rename Variable (F2):
1. Position cursor on variable name
2. Hold @fun (Right Shift)
3. Press 2 key (F2)
4. Release @fun
5. Type new variable name
Result: Variable renamed across project

Debugging Session (F9, F5, F10):
1. Set breakpoint: Hold @fun → Press 9 (F9) → Release
2. Start debugging: Hold @fun → Press 5 (F5) → Release  
3. Step through: Hold @fun → Press 0 (F10) → Release
Result: Full debugging workflow
```

### 🌐 Browser Navigation
```
Refresh Page (F5):
1. Hold @fun
2. Press 5 key (F5)  
3. Release @fun
Result: Page refreshed

Open DevTools (F12):
1. Hold @fun
2. Press = key (F12)
3. Release @fun
Result: Browser DevTools opened

Toggle Fullscreen (F11):
1. Hold @fun
2. Press - key (F11)
3. Release @fun  
Result: Browser in fullscreen mode
```

### 🎯 IDE Shortcuts
```
Quick Help (F1):
1. Position cursor on function/method
2. Hold @fun → Press 1 (F1) → Release
Result: Context-sensitive help displayed

Find in Files (Shift+F3):
1. Hold @fun + Hold A (⌘)
2. Press 3 (F3)
3. Release both keys
Result: Find in Files dialog (⌘+F3 on macOS)

Run Configuration (Shift+F5):
1. Hold @fun + Hold T (Shift from home row)  
2. Press 5 (F5)
3. Release both
Result: Run with configuration options
```

### ⚡ Multi-Key Function Combinations
```
System Commands:
Alt+F4 (Close Application):
1. Hold R (Alt from home row)
2. Hold @fun → Press 4 (F4) → Release @fun
3. Release R (Alt)
Result: Application closed

Ctrl+Shift+F12 (Advanced DevTools):
1. Hold S (Ctrl) + Hold @fun + Hold T (Shift)
2. Press = (F12)
3. Release all keys
Result: Advanced developer console

Debug Step Sequence:
1. Hold @fun throughout sequence
2. Press 9 (F9) - Set breakpoint
3. Press 5 (F5) - Start debug
4. Press 7 (F7) - Step into
5. Press 8 (F8) - Step over
6. Release @fun
Result: Complete debug stepping workflow
```

### 🖥️ System Management
```
Task Manager (Ctrl+Shift+Esc → F keys for navigation):
1. Open task manager (different shortcut)
2. Hold @fun → Press various F keys for tabs
3. F1 (Help), F5 (Refresh), etc.
Result: Navigate task manager efficiently

Boot Menu (F keys during startup):
Note: Physical F keys needed during boot
Function layer is for OS-level usage
```

## ⚙️ Configuration Details

### Layer Definition
```lisp
(deflayer fun
  _       _    _    _    _    _    _    _    _    _    _    _    _
  _       f1   f2   f3   f4   f5   f6   f7   f8   f9   f10  f11  f12  _
  _       _    _    _    _    _    _    _    _    _    _    _    _    _
  _       _    _    _    _    _    _    _    _    _    _    _    _
  _       _    _    _    _    _    _    _    _    _    _    _
  _       _    _              _              _    _    _    _
)
```

### Activation Alias  
```lisp
fun (layer-toggle fun)                  ; Right Shift activates function layer
```

## 🔧 Customization Options

### Add System Controls
```lisp
;; Add system function keys to base layer positions
(deflayer fun
  _       _    _    _    _    _    _    _    _    _    _    _    _
  _       f1   f2   f3   f4   f5   f6   f7   f8   f9   f10  f11  f12  _
  _       _    _    _    _    _    _    _    _    _    _    _    _    _
  _       vold volu mute prev pp   next _    _    _    _    _    _
  _       _    _    _    _    _    _    _    _    _    _    _
  _       _    _              _              _    _    _    _
)
```

### Alternative Access Points
```lisp
;; Add additional function layer access
caps (layer-toggle fun)                 ; Caps Lock also activates functions
menu (layer-toggle fun)                 ; Menu key activates functions
```

### Enhanced Function Layout
```lisp
;; Add common F-key combinations
(defalias
  ;; Custom function aliases
  help    f1                           ; Context help
  rename  f2                           ; Rename/refactor
  find    f3                           ; Find next
  debug   f5                           ; Debug/run
  devtool f12                          ; Developer tools
)

;; Use in layer with descriptive names
(deflayer fun
  _       _    _    _    _    _    _    _    _    _    _    _    _
  _    @help @rename @find _   @debug _   _    _    _    _    _  @devtool _
  _       _    _    _    _    _    _    _    _    _    _    _    _    _
  _       _    _    _    _    _    _    _    _    _    _    _    _
  _       _    _    _    _    _    _    _    _    _    _    _
  _       _    _              _              _    _    _    _
)
```

## 📊 Efficiency Benefits

### Development Productivity
- **No top row reaching** for function keys
- **Consistent activation** method for all F1-F12
- **Logical number sequence** maintains muscle memory
- **Single layer access** for complex IDE shortcuts

### System Navigation
- **Fast access** to system functions and menus
- **Browser productivity** with DevTools and navigation
- **Debugging efficiency** with step commands
- **Universal compatibility** across applications

### Workflow Integration
- **Seamless development** workflow support
- **Consistent behavior** across different applications
- **Reduced hand movement** from typing position
- **Enhanced multitasking** with quick function access

## 📚 Learning Path

### Week 1: Basic Functions
- Learn common F keys: F1 (Help), F5 (Refresh), F12 (DevTools)
- Practice activation with Right Shift hold
- Goal: Comfortable with essential function keys

### Week 2: Development Functions  
- Add F2 (Rename), F9 (Breakpoint), F10 (Step)
- Practice IDE-specific shortcuts
- Goal: Integrated development workflow

### Week 3: Advanced Combinations
- Combine with home row modifiers (Ctrl+F5, Alt+F4)
- Practice complex multi-key sequences
- Goal: Advanced function key mastery

### Week 4: Application-Specific Usage
- Learn application-specific F-key functions
- Customize for your most-used software
- Goal: Full function layer proficiency

## 🔗 Related Documentation

- [**Base Layer Guide**](./BASE-LAYER-README.md) - Foundation with GACS modifiers
- [**Number Layer Guide**](./NUMBER-LAYER-README.md) - Numeric input system  
- [**Symbol Layer Guide**](./SYMBOL-LAYER-README.md) - Programming symbols
- [**Extend Layer Guide**](./EXTEND-LAYER-README.md) - Navigation and shortcuts
- [**GACS System Guide**](./GACS-SYSTEM-README.md) - Home row modifier theory

---

**🔧 The Function Layer: Your F-key command center - hold Right Shift and access every function!**