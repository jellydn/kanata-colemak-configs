// Kanata Configuration Data for Web Visualizer
// Auto-generated from ../corne-homerow-kanata.kbd on 2025-08-30T08:51:44.008Z
// DO NOT EDIT MANUALLY - Run 'node generate-config.js' to regenerate

const KanataConfig = {
  "meta": {
    "name": "Corne-inspired Colemak Mod-DH with Home Row Mods",
    "description": "GACS layout with bilateral combinations for fast typing",
    "version": "1.0.0",
    "generated": "2025-08-30T08:51:44.008Z"
  },
  "homeRowMods": {
    "left": {
      "a": {
        "tap": "a",
        "hold": "⌘ Cmd",
        "timing": "250ms",
        "color": "blue"
      },
      "r": {
        "tap": "r",
        "hold": "⌥ Alt",
        "timing": "250ms",
        "color": "blue"
      },
      "s": {
        "tap": "s",
        "hold": "⌃ Ctrl",
        "timing": "250ms",
        "color": "blue"
      },
      "t": {
        "tap": "t",
        "hold": "⇧ Shift",
        "timing": "200ms",
        "color": "blue"
      }
    },
    "right": {
      "o": {
        "tap": "o",
        "hold": "⌘ Cmd",
        "timing": "250ms",
        "color": "blue"
      },
      "i": {
        "tap": "i",
        "hold": "⌥ Alt",
        "timing": "250ms",
        "color": "blue"
      },
      "e": {
        "tap": "e",
        "hold": "⌃ Ctrl",
        "timing": "250ms",
        "color": "blue"
      },
      "n": {
        "tap": "n",
        "hold": "⇧ Shift",
        "timing": "200ms",
        "color": "blue"
      }
    },
    "additional": {
      "m": {
        "tap": "m",
        "hold": "⇧ Shift",
        "timing": "200ms",
        "color": "blue"
      },
      "h": {
        "tap": "h",
        "hold": "⇧ Shift",
        "timing": "250ms",
        "color": "blue"
      }
    }
  },
  "layers": {
    "base": {
      "name": "Base Layer",
      "description": "Colemak Mod-DH with GACS home row mods",
      "activatedBy": "Default",
      "color": "gray",
      "keys": {
        "row1": [
          "esc",
          "f1",
          "f2",
          "f3",
          "f4",
          "f5",
          "f6",
          "f7",
          "f8",
          "f9",
          "f10",
          "f11",
          "f12"
        ],
        "row2": [
          "grv",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "0",
          "-",
          "=",
          "bspc"
        ],
        "row3": [
          "tab",
          "q",
          "w",
          "f",
          "p",
          "b",
          "j",
          "l",
          "u",
          "y",
          ";",
          "[",
          "]",
          "\\"
        ],
        "row4": [
          "@nav",
          "@a",
          "@r",
          "@s",
          "@t",
          "g",
          "@m",
          "@n",
          "@e",
          "@i",
          "@o",
          "'",
          "ret"
        ],
        "row5": [
          "@sym",
          "z",
          "x",
          "c",
          "d",
          "v",
          "k",
          "@h",
          ",",
          ".",
          "/",
          "@fun"
        ],
        "row6": [
          "lctl",
          "lmet",
          "@num",
          "@spc",
          "ralt",
          "rmet",
          "menu",
          "rctl"
        ]
      }
    },
    "extend": {
      "name": "Extend Layer",
      "description": "Navigation and shortcuts with direct modifiers",
      "activatedBy": "Hold @nav key",
      "color": "yellow",
      "keys": {
        "row1": [
          "_",
          "@lq",
          "@lh",
          "@lm",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_"
        ],
        "row2": [
          "_",
          "@lq",
          "@lh",
          "@lm",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_"
        ],
        "row3": [
          "_",
          "esc",
          "@bk",
          "@fnd",
          "@fw",
          "ins",
          "pgup",
          "home",
          "up",
          "end",
          "menu",
          "_",
          "slck",
          "_"
        ],
        "row4": [
          "_",
          "lalt",
          "lmet",
          "lsft",
          "lctl",
          "ralt",
          "pgdn",
          "lft",
          "down",
          "rght",
          "del",
          "caps",
          "_"
        ],
        "row5": [
          "_",
          "@cut",
          "@cpy",
          "tab",
          "@pst",
          "@udo",
          "pgdn",
          "bspc",
          "lsft",
          "lctl",
          "menu",
          "_"
        ],
        "row6": [
          "_",
          "_",
          "_",
          "ret",
          "_",
          "_",
          "_",
          "_"
        ]
      }
    },
    "num": {
      "name": "Number Layer",
      "description": "Number pad and numeric input",
      "activatedBy": "Hold @num key",
      "color": "green",
      "keys": {
        "row1": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_"
        ],
        "row2": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_"
        ],
        "row3": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "7",
          "8",
          "9",
          "_",
          "_",
          "_",
          "_"
        ],
        "row4": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "4",
          "5",
          "6",
          "0",
          "_",
          "_"
        ],
        "row5": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "1",
          "2",
          "3",
          "_",
          "_"
        ],
        "row6": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_"
        ]
      }
    },
    "sym": {
      "name": "Symbol Layer",
      "description": "Symbols and punctuation",
      "activatedBy": "Hold @sym key",
      "color": "red",
      "keys": {
        "row1": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_"
        ],
        "row2": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_"
        ],
        "row3": [
          "_",
          "S-1",
          "S-2",
          "S-3",
          "S-4",
          "S-5",
          "S-6",
          "S-7",
          "S-8",
          "-",
          "S-=",
          "_",
          "_",
          "_"
        ],
        "row4": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "S-9",
          "S-0",
          "[",
          "]",
          "_",
          "_"
        ],
        "row5": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "S-[",
          "S-]",
          "_",
          "_",
          "_"
        ],
        "row6": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_"
        ]
      }
    },
    "fun": {
      "name": "Function Layer",
      "description": "Function keys and system controls",
      "activatedBy": "Hold @fun key",
      "color": "purple",
      "keys": {
        "row1": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_"
        ],
        "row2": [
          "_",
          "f1",
          "f2",
          "f3",
          "f4",
          "f5",
          "f6",
          "f7",
          "f8",
          "f9",
          "f10",
          "f11",
          "f12",
          "_"
        ],
        "row3": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_"
        ],
        "row4": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_"
        ],
        "row5": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_"
        ],
        "row6": [
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_"
        ]
      }
    }
  },
  "keyExplanations": {
    "@a": "Tap: a | Hold (250ms): ⌘ Cmd | GACS Position 1",
    "@r": "Tap: r | Hold (250ms): ⌥ Alt | GACS Position 2",
    "@s": "Tap: s | Hold (250ms): ⌃ Ctrl | GACS Position 3",
    "@t": "Tap: t | Hold (200ms): ⇧ Shift | GACS Position 4",
    "@o": "Tap: o | Hold (250ms): ⌘ Cmd | GACS Position 1 (Right)",
    "@i": "Tap: i | Hold (250ms): ⌥ Alt | GACS Position 2 (Right)",
    "@e": "Tap: e | Hold (250ms): ⌃ Ctrl | GACS Position 3 (Right)",
    "@n": "Tap: n | Hold (200ms): ⇧ Shift | GACS Position 4 (Right)",
    "@m": "Tap: m | Hold (200ms): ⇧ Shift | Additional Shift",
    "@h": "Tap: h | Hold (250ms): ⇧ Shift | Colemak-DH Shift",
    "@nav": "Navigation Layer (Extend layer access)",
    "@num": "Number Layer (Numpad access)",
    "@sym": "Symbol Layer (Symbol access)",
    "@fun": "Function Layer (F-key access)",
    "@spc": "Space (tap=space, hold=number layer)",
    "@lq": "Liquid escape sequence",
    "@lh": "Liquid home sequence",
    "@lm": "Liquid meta sequence",
    "@bk": "Browser back",
    "@fnd": "Find/search",
    "@fw": "Browser forward",
    "@cut": "Cut (Cmd+X)",
    "@cpy": "Copy (Cmd+C)",
    "@pst": "Paste (Cmd+V)",
    "@udo": "Undo (Cmd+Z)"
  },
  "colors": {
    "homeRow": "#3B82F6",
    "layerKeys": "#10B981",
    "navigation": "#F59E0B",
    "numbers": "#10B981",
    "symbols": "#EF4444",
    "functions": "#8B5CF6",
    "normal": "#6B7280",
    "background": "#1F2937",
    "accent": "#F3F4F6"
  }
};

// Export for use in main app
window.KanataConfig = KanataConfig;
