import type { Plugin } from 'vite';
import * as LucideIcons from 'lucide-react';

interface LucideFallbackOptions {
  fallbackMap?: Record<string, string>;
  defaultFallback?: string;
  silent?: boolean;
}

export function lucideIconFallback(options: LucideFallbackOptions = {}): Plugin {
  const {
    fallbackMap = {
      'Template': 'Layout',
      'FileEdit': 'Edit',
      'FileEdit2': 'Edit',
      'Infinity': 'RotateCw',
      'Sparkles': 'Sparkle',
      'CircleParking': 'CircleParking',
    },
    defaultFallback = 'Circle',
    silent = false,
  } = options;

  // Get all valid lucide-react icon names
  const validIcons = new Set(Object.keys(LucideIcons));

  return {
    name: 'vite-plugin-lucide-fallback',
    
    transform(code: string, id: string) {
      // Only process .tsx and .jsx files
      if (!/\.(tsx|jsx)$/.test(id)) {
        return null;
      }

      // Match import { Icon1, Icon2, ... } from 'lucide-react'
      const importRegex = /import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]/g;
      
      let hasChanges = false;
      let newCode = code;
      
      const matches = [...code.matchAll(importRegex)];
      
      for (const match of matches) {
        const importStatement = match[0];
        const imports = match[1];
        
        // Parse imported icon list
        const icons = imports
          .split(',')
          .map(icon => icon.trim())
          .filter(Boolean);
        
        const replacements: Array<{ original: string; replacement: string }> = [];
        
        // Check if each icon is valid
        for (const icon of icons) {
          // Handle alias: Icon as IconAlias
          const [iconName] = icon.split(' as ').map(s => s.trim());
          
          if (!validIcons.has(iconName)) {
            // Icon doesn't exist, find replacement
            const replacement = fallbackMap[iconName] || defaultFallback;
            
            if (!silent) {
              console.warn(
                `[lucide-fallback] Invalid icon "${iconName}" in ${id}\n` +
                `  → Replacing with "${replacement}"`
              );
            }
            
            replacements.push({ original: iconName, replacement });
          }
        }
        
        // Execute replacements
        if (replacements.length > 0) {
          hasChanges = true;
          let newImports = imports;
          
          for (const { original, replacement } of replacements) {
            // Replace icon name, preserve as alias
            const regex = new RegExp(`\\b${original}\\b(?!\\s*:)`, 'g');
            newImports = newImports.replace(regex, replacement);
          }
          
          const newImportStatement = importStatement.replace(imports, newImports);
          newCode = newCode.replace(importStatement, newImportStatement);
        }
      }
      
      return hasChanges ? { code: newCode, map: null } : null;
    },
  };
}
