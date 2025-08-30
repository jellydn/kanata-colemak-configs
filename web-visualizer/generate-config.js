#!/usr/bin/env node

/**
 * Auto-generate config.js from Kanata .kbd file
 * Usage: node generate-config.js
 */

const fs = require('fs');
const path = require('path');

// Path to the Kanata config file
const KANATA_CONFIG_PATH = '../corne-homerow-kanata.kbd';
const OUTPUT_PATH = './config.js';

/**
 * Parse Kanata .kbd file and extract layer definitions
 */
function parseKanataConfig(content) {
  const lines = content.split('\n');
  const layers = {};
  const aliases = {};
  
  let currentLayer = null;
  let currentSection = null;
  let layerLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip comments and empty lines
    if (line.startsWith(';;') || line.startsWith('//') || !line) continue;
    
    // Parse layer definitions
    if (line.startsWith('(deflayer ')) {
      // Save previous layer if exists
      if (currentLayer && layerLines.length > 0) {
        layers[currentLayer] = parseLayerLines(layerLines);
      }
      
      // Start new layer
      currentLayer = line.match(/\(deflayer\s+(\w+)/)[1];
      layerLines = [];
      continue;
    }
    
    // Parse alias definitions
    if (line.startsWith('(defalias')) {
      currentSection = 'aliases';
      continue;
    }
    
    // End of section
    if (line === ')') {
      if (currentLayer && layerLines.length > 0) {
        layers[currentLayer] = parseLayerLines(layerLines);
        currentLayer = null;
      }
      currentSection = null;
      continue;
    }
    
    // Collect layer lines
    if (currentLayer) {
      layerLines.push(line);
    }
    
    // Parse alias lines
    if (currentSection === 'aliases' && line.includes(' ')) {
      const [alias, definition] = line.split(/\\s+/, 2);
      aliases[alias] = definition;
    }
  }
  
  return { layers, aliases };
}

/**
 * Parse individual layer lines into keyboard rows
 */
function parseLayerLines(lines) {
  const rows = [];
  
  for (const line of lines) {
    if (line.trim()) {
      // Split by whitespace and filter empty strings
      const keys = line.trim().split(/\s+/).filter(k => k);
      if (keys.length > 0) {
        rows.push(keys);
      }
    }
  }
  
  return rows;
}

/**
 * Generate layer metadata based on layer name and content
 */
function generateLayerMetadata(layerName, rows) {
  const layerInfo = {
    base: {
      name: "Base Layer",
      description: "Colemak Mod-DH with GACS home row mods",
      activatedBy: "Default",
      color: "gray"
    },
    extend: {
      name: "Extend Layer", 
      description: "Navigation and shortcuts with direct modifiers",
      activatedBy: "Hold @nav key",
      color: "yellow"
    },
    sym: {
      name: "Symbol Layer",
      description: "Symbols and punctuation", 
      activatedBy: "Hold @sym key",
      color: "red"
    },
    num: {
      name: "Number Layer",
      description: "Number pad and numeric input",
      activatedBy: "Hold @num key", 
      color: "green"
    },
    fun: {
      name: "Function Layer",
      description: "Function keys and system controls",
      activatedBy: "Hold @fun key",
      color: "purple"
    }
  };
  
  return layerInfo[layerName] || {
    name: layerName.charAt(0).toUpperCase() + layerName.slice(1) + " Layer",
    description: "Custom layer",
    activatedBy: "Unknown",
    color: "blue"
  };
}

/**
 * Generate key explanations for special keys
 */
function generateKeyExplanations() {
  return {
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
  };
}

/**
 * Main generation function
 */
function generateConfig() {
  try {
    // Read Kanata config file
    const configPath = path.resolve(__dirname, KANATA_CONFIG_PATH);
    console.log('Reading Kanata config from:', configPath);
    
    if (!fs.existsSync(configPath)) {
      console.error('Kanata config file not found:', configPath);
      process.exit(1);
    }
    
    const content = fs.readFileSync(configPath, 'utf-8');
    
    // Parse the configuration
    const { layers, aliases } = parseKanataConfig(content);
    
    console.log('Found layers:', Object.keys(layers));
    
    // Generate JavaScript config
    const config = {
      meta: {
        name: "Corne-inspired Colemak Mod-DH with Home Row Mods",
        description: "GACS layout with bilateral combinations for fast typing",
        version: "1.0.0",
        generated: new Date().toISOString()
      },
      
      homeRowMods: {
        left: {
          a: { tap: "a", hold: "⌘ Cmd", timing: "250ms", color: "blue" },
          r: { tap: "r", hold: "⌥ Alt", timing: "250ms", color: "blue" },
          s: { tap: "s", hold: "⌃ Ctrl", timing: "250ms", color: "blue" },
          t: { tap: "t", hold: "⇧ Shift", timing: "200ms", color: "blue" }
        },
        right: {
          o: { tap: "o", hold: "⌘ Cmd", timing: "250ms", color: "blue" },
          i: { tap: "i", hold: "⌥ Alt", timing: "250ms", color: "blue" },
          e: { tap: "e", hold: "⌃ Ctrl", timing: "250ms", color: "blue" },
          n: { tap: "n", hold: "⇧ Shift", timing: "200ms", color: "blue" }
        },
        additional: {
          m: { tap: "m", hold: "⇧ Shift", timing: "200ms", color: "blue" },
          h: { tap: "h", hold: "⇧ Shift", timing: "250ms", color: "blue" }
        }
      },
      
      layers: {},
      keyExplanations: generateKeyExplanations(),
      
      colors: {
        homeRow: "#3B82F6",
        layerKeys: "#10B981", 
        navigation: "#F59E0B",
        numbers: "#10B981",
        symbols: "#EF4444",
        functions: "#8B5CF6",
        normal: "#6B7280",
        background: "#1F2937",
        accent: "#F3F4F6"
      }
    };
    
    // Convert layers to the expected format
    for (const [layerName, rows] of Object.entries(layers)) {
      const metadata = generateLayerMetadata(layerName, rows);
      
      config.layers[layerName] = {
        ...metadata,
        keys: {}
      };
      
      // Convert rows to named row objects
      rows.forEach((row, index) => {
        const rowName = `row${index + 1}`;
        config.layers[layerName].keys[rowName] = row;
      });
    }
    
    // Generate the output file
    const jsContent = `// Kanata Configuration Data for Web Visualizer
// Auto-generated from ${KANATA_CONFIG_PATH} on ${new Date().toISOString()}
// DO NOT EDIT MANUALLY - Run 'node generate-config.js' to regenerate

const KanataConfig = ${JSON.stringify(config, null, 2)};

// Export for use in main app
window.KanataConfig = KanataConfig;
`;
    
    // Write to file
    const outputPath = path.resolve(__dirname, OUTPUT_PATH);
    fs.writeFileSync(outputPath, jsContent);
    
    console.log('✅ Successfully generated config.js');
    console.log('📊 Statistics:');
    console.log(`   - Layers: ${Object.keys(config.layers).length}`);
    console.log(`   - Key explanations: ${Object.keys(config.keyExplanations).length}`);
    console.log(`   - Output: ${outputPath}`);
    
  } catch (error) {
    console.error('❌ Error generating config:', error.message);
    process.exit(1);
  }
}

// Run the generator
if (require.main === module) {
  generateConfig();
}

module.exports = { generateConfig };