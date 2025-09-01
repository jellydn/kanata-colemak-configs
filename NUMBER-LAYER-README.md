# 🔢 Number Layer - Ergonomic Numpad

The **Number Layer** transforms your right hand into a comfortable numpad, activated by holding the Space bar (@spc). This layer provides ergonomic numeric input without reaching for a separate numpad or the top number row, plus includes the hash symbol (#) for its intuitive Shift+3 relationship.

## 🎯 Overview

The Number Layer features:
- **Right-hand numpad** positioned naturally under your fingers
- **Zero key** placed logically with other numbers
- **Space bar activation** for ergonomic access
- **Minimal reach** from home row position

## 🎨 Visual Layout

```
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────────┐
│ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │         │
├─────┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──────┤
│ ---    │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ --- │ ---  │
├────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬────┤
│ ---      │ --- │ --- │ --- │ --- │ --- │ --- │ 🔢7 │ 🔢8 │ 🔢9 │ 🏷️# │ --- │ --- │ ---│
├──────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────┤
│ ---        │ --- │ --- │ --- │ --- │ --- │ --- │ 🔢4 │ 🔢5 │ 🔢6 │ 🔢0 │ --- │ ---    │
├────────────┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴─┬───┴────────┤
│ ---          │ --- │ --- │ --- │ --- │ --- │ --- │ 🔢1 │ 🔢2 │ 🔢3 │ --- │ ---        │
├───────┬──────┴─┬───┴───┬─┴─────┴─────┴─────┴─────┴─┬───┴───┬─┴────┬─┴──────┬─┴────┬───┤
│ ---   │ ---    │🔢@num │          ⏎ ENTER          │ ---   │ ---  │  ---   │ ---  │   │
└───────┴────────┴───────┴────────────────────────────┴───────┴──────┴────────┴──────┴───┘
```

### 🏷️ Legend
- **🔢** = Number input
- **🏷️** = Hash symbol (#) - Shift+3 equivalent
- **@spc** = Space bar hold activates number layer

## 🗝️ Activation Methods

```
┌─────────────────────────────────────────────────────────┐
│                  NUMBER LAYER ACCESS                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ Activation: Hold Space Bar (@spc)                      │
│ Type: tap-hold (tap=space, hold=number layer)         │
│ Timing: 200ms activation delay                         │
│ Return: Release to return to Base Layer                │
│                                                         │
│ Usage Pattern:                                          │
│ 1. Hold Space Bar for numbers                          │
│ 2. Press desired keys (7,8,9,#,4,5,6,0,1,2,3)         │
│ 3. Release Space Bar                                    │
│                                                         │
│ Benefits:                                               │
│ • Ergonomic thumb access                               │
│ • No hand movement required                            │
│ • Natural integration with typing flow                 │
└─────────────────────────────────────────────────────────┘
```

## 💯 Number Layout Design

### 🔢 Numpad Cluster (Right Hand)
```
┌─────────────────────────────────────────────┐
│            NUMPAD LAYOUT                    │
├─────────────────────────────────────────────┤
│                                             │
│     7    8    9    #                       │
│     U    I    O    '                       │
│                                             │
│     4    5    6    0                       │
│     L    U    Y    ;                       │
│                                             │
│     1    2    3                            │
│     M    ,    .                            │
│                                             │
│ Layout Logic:                              │
│ • Traditional numpad arrangement           │
│ • 7-8-9 top row (U-I-O keys)             │
│ • 4-5-6 middle row (L-U-Y keys)          │
│ • 1-2-3 bottom row (M-,-. keys)          │
│ • Zero placed with middle row for reach   │
└─────────────────────────────────────────────┘
```

### 📊 Key Position Mapping

| Physical Key | Number | Position | Finger | Logic |
|--------------|--------|----------|---------|-------|
| **U** | 7 | Top-Left | Index | Traditional numpad |
| **I** | 8 | Top-Center | Middle | Most common digit |
| **O** | 9 | Top-Right | Ring | Completes top row |
| **'** | # | Top-End | Pinky | Hash (Shift+3) symbol |
| **L** | 4 | Mid-Left | Index | Left column |
| **U** | 5 | Mid-Center | Middle | Center position |
| **Y** | 6 | Mid-Right | Ring | Right column |
| **;** | 0 | Mid-End | Pinky | Easy reach for zero |
| **M** | 1 | Bot-Left | Index | Bottom row start |
| **,** | 2 | Bot-Center | Middle | Natural progression |
| **.** | 3 | Bot-Right | Ring | Bottom row end |

## 🎮 Practical Usage Examples

### 💰 Financial Data Entry
```
Enter Price $123.45:
1. Type "$" (shift+4 in base layer)
2. Hold Space Bar (@num)
3. Press M (1), , (2), . (3)
4. Release Space Bar
5. Type "." (period in base layer)  
6. Hold Space Bar again
7. Press L (4), U (5)
8. Release Space Bar
Result: "$123.45"
```

### 📞 Phone Numbers
```
Enter (555) 123-4567:
1. Type "("
2. Hold Space Bar → U (7), U (5), U (5) → Release
3. Type ") "
4. Hold Space Bar → M (1), , (2), . (3) → Release  
5. Type "-"
6. Hold Space Bar → L (4), U (5), I (6), U (7) → Release
Result: "(555) 123-4567"
```

### 🧮 Quick Calculations
```
Mental math input:
1. Hold Space Bar
2. Type sequence: I (8) O (9) * L (4) U (5)
3. Release Space Bar
4. Press = for calculation
Result: "89*45" ready for calculator
```

### 🔢 Sequential Numbers
```
Enter 1, 2, 3, 4, 5:
1. Hold Space Bar (keep held for sequence)
2. Press: M (1), , (2), . (3), L (4), U (5)
3. Release Space Bar once at end
Result: "12345" typed efficiently
```

### 📅 Date Entry
```
Enter Date 08/15/2024:
1. Hold Space Bar → ; (0), I (8) → Release
2. Type "/" 
3. Hold Space Bar → M (1), U (5) → Release
4. Type "/"
5. Hold Space Bar → , (2), ; (0), , (2), L (4) → Release
Result: "08/15/2024"
```

### ⚡ Advanced Combinations
```
ZIP Code + Extension (12345-6789):
1. Hold Space Bar throughout
2. Type: M (1), , (2), . (3), L (4), U (5)
3. Release, type "-", Hold again
4. Type: Y (6), U (7), I (8), O (9)
5. Release
Result: "12345-6789" (single layer hold for main part)

Credit Card (4444 5555 6666 7777):
1. Hold Space → L (4), L (4), L (4), L (4) → Release
2. Space, Hold → U (5), U (5), U (5), U (5) → Release
3. Space, Hold → Y (6), Y (6), Y (6), Y (6) → Release  
4. Space, Hold → U (7), U (7), U (7), U (7) → Release
Result: Credit card number with natural spacing
```

## ⚙️ Configuration Details

### Layer Definition
```lisp
(deflayer num
  _       _    _    _    _    _    _    _    _    _    _    _    _
  _       _    _    _    _    _    _    _    _    _    _    _    _    _
  _       _    _    _    _    _    _    7    8    9    _    _    _    _
  _       _    _    _    _    _    _    4    5    6    0    _    _
  _       _    _    _    _    _    _    1    2    3    _    _
  _       _    _              _              _    _    _    _
)
```

### Activation Alias
```lisp
;; Space bar access to number layer
spc (tap-hold 200 200 spc (layer-toggle num)) ; Space bar: tap=space, hold=numbers
```

## 🔧 Customization Options

### Alternative Zero Placement
```lisp
;; Move zero to bottom row (more traditional)
(deflayer num
  _       _    _    _    _    _    _    _    _    _    _    _    _
  _       _    _    _    _    _    _    _    _    _    _    _    _    _
  _       _    _    _    _    _    _    7    8    9    _    _    _    _
  _       _    _    _    _    _    _    4    5    6    _    _    _
  _       _    _    _    _    _    _    1    2    3    0    _
  _       _    _              _              _    _    _    _
)
```

### Add Arithmetic Operators
```lisp
;; Add basic operators to number layer
(deflayer num  
  _       _    _    _    _    _    _    _    _    _    _    _    _
  _       _    _    _    _    _    _    _    _    _    _    _    _    _
  _       _    _    _    _    _    -    7    8    9    +    _    _    _
  _       _    _    _    _    _    *    4    5    6    0    =    _
  _       _    _    _    _    _    /    1    2    3    .    _
  _       _    _              _              _    _    _    _
)
```

### Faster Activation
```lisp
;; Reduce tap-hold timing for quicker access
spc (tap-hold 150 150 spc (layer-toggle num))  ; 150ms instead of 200ms
```

### Additional Access Points
```lisp
;; Add right-hand access point
ralt (layer-toggle num)                     ; Right Alt also activates numbers
```

## 📊 Efficiency Benefits

### Speed Improvements
- **No top row reaching** for number input
- **Single layer hold** for multiple digits
- **Natural finger positions** reduce errors
- **Space bar integration** provides ergonomic access

### Ergonomic Advantages
- **Hands stay on home row** area
- **Strong fingers** (index/middle) handle most common digits
- **Minimal wrist movement** compared to top row
- **Comfortable reach** to all positions

### Productivity Features
- **Space bar integration** maintains typing flow
- **Traditional numpad layout** for familiar muscle memory  
- **Efficient for data entry** tasks
- **Compatible with calculations** and spreadsheet work

## 📚 Learning Path

### Week 1: Basic Numbers
- Practice single digits: 1, 2, 3 (M, comma, period keys)
- Focus on holding Space bar activation
- Goal: Comfortable single digit entry

### Week 2: Number Sequences  
- Practice multi-digit numbers: 123, 456, 789
- Keep layer held for sequences
- Goal: Smooth sequential number entry

### Week 3: Common Patterns
- Practice phone numbers, dates, prices
- Combine with punctuation from base layer
- Goal: Real-world number entry tasks

### Week 4: Advanced Usage
- Practice sustained number entry with space bar hold
- Combine with calculations and data entry
- Goal: Full numeric input proficiency

## 🔗 Related Documentation

- [**Base Layer Guide**](./BASE-LAYER-README.md) - Foundation with GACS modifiers
- [**Extend Layer Guide**](./EXTEND-LAYER-README.md) - Navigation and shortcuts  
- [**Symbol Layer Guide**](./SYMBOL-LAYER-README.md) - Programming symbols
- [**Function Layer Guide**](./FUNCTION-LAYER-README.md) - F1-F12 keys
- [**GACS System Guide**](./GACS-SYSTEM-README.md) - Home row modifier theory

---

**🔢 The Number Layer: Your right-hand numpad - hold Space and calculate away!**