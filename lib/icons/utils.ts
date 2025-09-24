/**
 * Utility functions for the icon library
 *
 * Production-ready utilities for icon management, search,
 * and dynamic rendering with full TypeScript support.
 */

import * as React from 'react';
import type { IconComponent, IconProps, IconVariant, IconCategory, IconMetadata } from './types';

/**
 * Create a memoized icon component with default props
 */
export function createIconComponent(
  Component: IconComponent,
  defaultProps?: Partial<IconProps>
): IconComponent {
  const MemoizedIcon = React.memo<IconProps>((props) => {
    const mergedProps = { ...defaultProps, ...props };
    return React.createElement(Component, mergedProps);
  });

  MemoizedIcon.displayName = `Icon(${Component.displayName || Component.name})`;
  return MemoizedIcon;
}

/**
 * Generate icon class names with BEM methodology
 */
export function getIconClassName(
  baseClass: string = 'icon',
  variant?: IconVariant,
  size?: number,
  additionalClasses?: string
): string {
  const classes = [baseClass];

  if (variant) {
    classes.push(`${baseClass}--${variant}`);
  }

  if (size) {
    classes.push(`${baseClass}--size-${size}`);
  }

  if (additionalClasses) {
    classes.push(additionalClasses);
  }

  return classes.join(' ');
}

/**
 * Convert icon name formats
 */
export function formatIconName(name: string, format: 'pascal' | 'kebab' | 'snake'): string {
  switch (format) {
    case 'kebab':
      return name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
    case 'snake':
      return name.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
    case 'pascal':
    default:
      return name;
  }
}

/**
 * Parse icon file name to extract metadata
 */
export function parseIconFileName(fileName: string): {
  name: string;
  variant: IconVariant;
  category?: string;
} | null {
  const match = fileName.match(/Pi(.+)(Stroke|Solid)\.tsx$/);
  if (!match) return null;

  return {
    name: match[1],
    variant: match[2].toLowerCase() as IconVariant,
  };
}

/**
 * Create icon search index for better performance
 */
export class IconSearchIndex {
  private index: Map<string, IconMetadata[]> = new Map();

  constructor(icons: IconMetadata[]) {
    this.buildIndex(icons);
  }

  private buildIndex(icons: IconMetadata[]) {
    icons.forEach(icon => {
      // Index by name
      this.addToIndex(icon.name.toLowerCase(), icon);

      // Index by category
      this.addToIndex(icon.category, icon);

      // Index by tags
      icon.tags?.forEach(tag => {
        this.addToIndex(tag.toLowerCase(), icon);
      });

      // Index by keywords
      icon.keywords?.forEach(keyword => {
        this.addToIndex(keyword.toLowerCase(), icon);
      });
    });
  }

  private addToIndex(key: string, icon: IconMetadata) {
    if (!this.index.has(key)) {
      this.index.set(key, []);
    }
    this.index.get(key)!.push(icon);
  }

  search(query: string, options?: {
    variant?: IconVariant;
    category?: IconCategory;
    limit?: number;
  }): IconMetadata[] {
    const normalizedQuery = query.toLowerCase();
    const results = new Map<string, IconMetadata>();

    // Search in index
    const indexEntries = Array.from(this.index.entries());
    for (const [key, icons] of indexEntries) {
      if (key.includes(normalizedQuery)) {
        icons.forEach(icon => {
          const id = `${icon.name}-${icon.variant}`;
          if (!results.has(id)) {
            results.set(id, icon);
          }
        });
      }
    }

    // Filter results
    let filteredResults = Array.from(results.values());

    if (options?.variant) {
      filteredResults = filteredResults.filter(icon => icon.variant === options.variant);
    }

    if (options?.category) {
      filteredResults = filteredResults.filter(icon => icon.category === options.category);
    }

    // Apply limit
    if (options?.limit) {
      filteredResults = filteredResults.slice(0, options.limit);
    }

    return filteredResults;
  }
}

/**
 * Icon size presets for consistent sizing
 */
export const ICON_SIZES = {
  xs: 12,
  sm: 16,
  md: 20,
  base: 24,
  lg: 28,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
} as const;

export type IconSizePreset = keyof typeof ICON_SIZES;

/**
 * Get icon size from preset or number
 */
export function getIconSize(size?: IconSizePreset | number): number {
  if (typeof size === 'number') return size;
  if (size && size in ICON_SIZES) return ICON_SIZES[size];
  return ICON_SIZES.base;
}

/**
 * Batch icon loader for performance
 */
export class IconBatchLoader {
  private queue: Set<string> = new Set();
  private cache: Map<string, IconComponent> = new Map();
  private loading: Map<string, Promise<IconComponent>> = new Map();

  async load(iconPath: string): Promise<IconComponent | null> {
    // Check cache
    if (this.cache.has(iconPath)) {
      return this.cache.get(iconPath)!;
    }

    // Check if already loading
    if (this.loading.has(iconPath)) {
      return this.loading.get(iconPath)!;
    }

    // Start loading
    const loadPromise = this.loadIcon(iconPath);
    this.loading.set(iconPath, loadPromise);

    try {
      const icon = await loadPromise;
      this.cache.set(iconPath, icon);
      this.loading.delete(iconPath);
      return icon;
    } catch (error) {
      this.loading.delete(iconPath);
      console.error(`Failed to load icon: ${iconPath}`, error);
      return null;
    }
  }

  private async loadIcon(iconPath: string): Promise<IconComponent> {
    const iconModule = await import(iconPath);
    return iconModule.default;
  }

  preload(iconPaths: string[]) {
    iconPaths.forEach(path => {
      if (!this.cache.has(path) && !this.loading.has(path)) {
        this.queue.add(path);
      }
    });

    this.processQueue();
  }

  private async processQueue() {
    const paths = Array.from(this.queue);
    this.queue.clear();

    await Promise.all(paths.map(path => this.load(path)));
  }

  clearCache() {
    this.cache.clear();
  }
}

/**
 * Icon accessibility helpers
 */
export function getIconAriaProps(props: IconProps): {
  role: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
} {
  if (props.ariaLabel) {
    return {
      role: 'img',
      'aria-label': props.ariaLabel,
    };
  }

  return {
    role: 'presentation',
    'aria-hidden': true,
  };
}

/**
 * Performance monitoring for icon rendering
 */
export class IconPerformanceMonitor {
  private renderTimes: Map<string, number[]> = new Map();

  startRender(iconName: string): () => void {
    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;

      if (!this.renderTimes.has(iconName)) {
        this.renderTimes.set(iconName, []);
      }

      this.renderTimes.get(iconName)!.push(renderTime);
    };
  }

  getStats(iconName?: string) {
    if (iconName) {
      const times = this.renderTimes.get(iconName) || [];
      return this.calculateStats(times);
    }

    const allStats: Record<string, ReturnType<typeof this.calculateStats>> = {};
    const renderTimesEntries = Array.from(this.renderTimes.entries());
    for (const [name, times] of renderTimesEntries) {
      allStats[name] = this.calculateStats(times);
    }
    return allStats;
  }

  private calculateStats(times: number[]) {
    if (times.length === 0) return null;

    const sum = times.reduce((a, b) => a + b, 0);
    const avg = sum / times.length;
    const sorted = [...times].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];

    return {
      count: times.length,
      avg: avg.toFixed(2),
      median: median.toFixed(2),
      min: Math.min(...times).toFixed(2),
      max: Math.max(...times).toFixed(2),
    };
  }

  clear() {
    this.renderTimes.clear();
  }
}

/**
 * SVG optimization utilities
 */
export function optimizeSvgProps(props: IconProps): IconProps {
  const { size, color, ...otherProps } = props;

  const optimized: IconProps = {
    ...otherProps,
    width: size,
    height: size,
  };

  if (color) {
    optimized.fill = color;
    optimized.stroke = color;
  }

  return optimized;
}

// Global icon loader instance (singleton)
export const iconLoader = new IconBatchLoader();

// Global performance monitor (development only)
export const iconPerfMonitor = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? new IconPerformanceMonitor()
  : null;