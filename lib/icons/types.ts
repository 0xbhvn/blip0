/**
 * Type definitions for the icon library
 *
 * This file contains all the TypeScript types and interfaces
 * used throughout the icon library for maximum type safety.
 */

import type { ComponentType, SVGProps, ReactElement } from 'react';

/**
 * Base props for all icon components
 */
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  /** Icon size in pixels (default: 24) */
  size?: number;
  /** Icon color (inherits from currentColor by default) */
  color?: string;
  /** Additional CSS classes */
  className?: string;
  /** Accessibility label */
  ariaLabel?: string;
}

/**
 * Icon component type with proper props
 */
export type IconComponent = ComponentType<IconProps>;

/**
 * Icon variant types
 */
export type IconVariant = 'stroke' | 'solid';

/**
 * Icon category types (based on your folder structure)
 */
export type IconCategory =
  | 'ai'
  | 'alerts'
  | 'appliances'
  | 'apps-&-social'
  | 'ar-&-vr'
  | 'arrows-&-chevrons'
  | 'automotive'
  | 'building'
  | 'chart-&-graph'
  | 'communication'
  | 'development'
  | 'devices'
  | 'editing'
  | 'files-&-folders'
  | 'food'
  | 'general'
  | 'maths'
  | 'media'
  | 'medicine'
  | 'nature'
  | 'navigation'
  | 'online-learning'
  | 'security'
  | 'shopping-&-e-commerce'
  | 'sports'
  | 'time-&-calendar'
  | 'transportation'
  | 'user-&-people'
  | 'weather';

/**
 * Icon metadata for search and categorization
 */
export interface IconMetadata {
  /** Icon name without variant suffix */
  name: string;
  /** Icon variant */
  variant: IconVariant;
  /** Icon category */
  category: IconCategory;
  /** Search tags */
  tags?: string[];
  /** Icon keywords for search */
  keywords?: string[];
  /** Icon description */
  description?: string;
}

/**
 * Icon collection type
 */
export type IconCollection = Record<string, IconComponent>;

/**
 * Icon library structure
 */
export interface IconLibrary {
  stroke: IconCollection;
  solid: IconCollection;
}

/**
 * Icon render function type
 */
export type IconRenderFunction = (props: IconProps) => ReactElement;

/**
 * Icon loader type for lazy loading
 */
export type IconLoader = () => Promise<{ default: IconComponent }>;

/**
 * Icon search result
 */
export interface IconSearchResult {
  name: string;
  variant: IconVariant;
  category: IconCategory;
  score: number;
  metadata?: IconMetadata;
}

/**
 * Icon theme configuration
 */
export interface IconThemeConfig {
  defaultVariant: IconVariant;
  defaultSize: number;
  defaultColor?: string;
  variantMapping?: Partial<Record<string, IconVariant>>;
}

/**
 * Utility type to extract props from icon component
 */
export type ExtractIconProps<T> = T extends ComponentType<infer P> ? P : never;

/**
 * Utility type for icon name from a collection
 */
export type IconName<T extends IconCollection> = keyof T & string;

/**
 * Utility type for creating variant-specific icon props
 */
export type VariantIconProps<V extends IconVariant> = IconProps & {
  variant?: V;
};

/**
 * Type guard to check if a value is an IconComponent
 */
export function isIconComponent(value: unknown): value is IconComponent {
  return typeof value === 'function';
}

/**
 * Type guard to check if a string is a valid variant
 */
export function isValidVariant(value: string): value is IconVariant {
  return value === 'stroke' || value === 'solid';
}

/**
 * Type guard to check if a string is a valid category
 */
export function isValidCategory(value: string): value is IconCategory {
  const categories: IconCategory[] = [
    'ai', 'alerts', 'appliances', 'apps-&-social', 'ar-&-vr',
    'arrows-&-chevrons', 'automotive', 'building', 'chart-&-graph',
    'communication', 'development', 'devices', 'editing',
    'files-&-folders', 'food', 'general', 'maths', 'media',
    'medicine', 'nature', 'navigation', 'online-learning',
    'security', 'shopping-&-e-commerce', 'sports',
    'time-&-calendar', 'transportation', 'user-&-people', 'weather'
  ];
  return categories.includes(value as IconCategory);
}