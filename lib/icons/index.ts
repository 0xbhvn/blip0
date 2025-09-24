/**
 * Icon Library Export System
 *
 * This file provides a clean, efficient export strategy for the icon library
 * with both stroke and solid variants while maintaining backward compatibility.
 *
 * Features:
 * - Tree-shaking friendly exports
 * - TypeScript IntelliSense support
 * - Backward compatibility with existing imports
 * - Clean namespace organization
 */

// ==============================================================================
// NAMESPACE EXPORTS - Primary recommended import pattern
// ==============================================================================
/**
 * Import icons via namespaces for clear variant separation:
 *
 * @example
 * import { Stroke, Solid } from '@/lib/icons';
 *
 * // Use in components
 * <Stroke.AI01 size={24} />
 * <Solid.Check color="#00ff00" />
 */
export * as Stroke from './stroke';
export * as Solid from './solid';

// ==============================================================================
// BACKWARD COMPATIBILITY - Stroke icons at root level
// ==============================================================================
/**
 * Re-export all stroke icons at the root level for backward compatibility.
 * Existing code continues to work without any changes.
 *
 * @example
 * import { AI01, Check, Plus } from '@/lib/icons';
 *
 * // Use as before
 * <AI01 size={24} />
 */
export * from './stroke';

// ==============================================================================
// TYPE EXPORTS
// ==============================================================================
/**
 * Export types for TypeScript users
 */
export type {
  IconProps,
  IconComponent,
  IconVariant,
  IconCategory,
  IconMetadata,
  IconCollection,
  IconLibrary,
  IconSearchResult,
  IconThemeConfig,
  IconName,
  ExtractIconProps,
  VariantIconProps
} from './types';

// Re-export type guards for runtime type checking
export {
  isIconComponent,
  isValidVariant,
  isValidCategory
} from './types';

// ==============================================================================
// ICON COLLECTIONS - For programmatic access
// ==============================================================================
import * as StrokeIcons from './stroke';
import * as SolidIcons from './solid';

/**
 * Icon collections for dynamic/programmatic access
 *
 * @example
 * import { Icons } from '@/lib/icons';
 *
 * // Access dynamically
 * const IconComponent = Icons.stroke['AI01'];
 * const iconNames = Object.keys(Icons.solid);
 */
export const Icons = {
  stroke: StrokeIcons,
  solid: SolidIcons,
} as const;

// ==============================================================================
// UTILITY FUNCTIONS
// ==============================================================================
import type { IconVariant, IconComponent } from './types';

/**
 * Type-safe icon getter for dynamic access
 *
 * @param name - Icon name
 * @param variant - Icon variant (default: 'stroke')
 * @returns Icon component or undefined
 *
 * @example
 * import { getIcon } from '@/lib/icons';
 *
 * const MyIcon = getIcon('AI01', 'solid');
 * if (MyIcon) {
 *   return <MyIcon size={32} />;
 * }
 */
export function getIcon(
  name: string,
  variant: IconVariant = 'stroke'
): IconComponent | undefined {
  const iconCollection = Icons[variant];
  if (name in iconCollection) {
    return (iconCollection as Record<string, IconComponent>)[name];
  }
  return undefined;
}

/**
 * Check if an icon exists in the library
 *
 * @param name - Icon name to check
 * @param variant - Icon variant (default: 'stroke')
 * @returns true if icon exists
 *
 * @example
 * if (hasIcon('AI01', 'solid')) {
 *   // Icon exists, safe to use
 * }
 */
export function hasIcon(name: string, variant: IconVariant = 'stroke'): boolean {
  return name in Icons[variant];
}

/**
 * Get all available icon names for a variant
 *
 * @param variant - Icon variant (default: 'stroke')
 * @returns Array of icon names
 *
 * @example
 * const allStrokeIcons = getAllIconNames('stroke');
 * const allSolidIcons = getAllIconNames('solid');
 */
export function getAllIconNames(variant: IconVariant = 'stroke'): string[] {
  return Object.keys(Icons[variant]);
}

/**
 * Search icons by name (simple substring match)
 *
 * @param query - Search query
 * @param variant - Icon variant to search in (optional)
 * @returns Array of matching icon names
 *
 * @example
 * const arrowIcons = searchIcons('arrow');
 * const solidCheckIcons = searchIcons('check', 'solid');
 */
export function searchIcons(query: string, variant?: IconVariant): string[] {
  const searchIn = variant
    ? { [variant]: Icons[variant] }
    : Icons;

  const results: string[] = [];

  Object.entries(searchIn).forEach(([, icons]) => {
    Object.keys(icons).forEach(name => {
      if (name.toLowerCase().includes(query.toLowerCase())) {
        results.push(name);
      }
    });
  });

  return Array.from(new Set(results)); // Remove duplicates
}

// ==============================================================================
// DEFAULT EXPORT
// ==============================================================================
/**
 * Default export provides the Icons collection for convenience
 */
export default Icons;