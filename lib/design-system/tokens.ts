/**
 * Design System Tokens
 * Centralized design tokens for consistent sizing, spacing, and visual properties
 */

// ============================================================================
// SIZING TOKENS
// ============================================================================

/**
 * Component Height System
 * Based on 8px grid for consistency
 * Aligned with existing button sizing but extended for complex components
 */
export const HEIGHT = {
  // Base heights for simple components (buttons, inputs)
  xs: 28,   // 28px - Extra small elements
  sm: 32,   // 32px - Small buttons (h-8 in Tailwind)
  md: 36,   // 36px - Default buttons (h-9 in Tailwind)
  lg: 40,   // 40px - Large buttons (h-10 in Tailwind)
  xl: 48,   // 48px - Extra large elements, complex nodes
  xxl: 56,  // 56px - Double height components
} as const;

/**
 * Component Width System
 * For consistent horizontal sizing
 */
export const WIDTH = {
  // Fixed widths for structured components
  xs: 160,  // Compact elements
  sm: 240,  // Small cards/nodes
  md: 320,  // Standard nodes (current BaseNode width)
  lg: 400,  // Large panels
  xl: 480,  // Extra wide components

  // Responsive widths
  full: '100%',
  auto: 'auto',
} as const;

// ============================================================================
// SPACING TOKENS
// ============================================================================

/**
 * Spacing scale based on 4px grid
 * Matches the design principles document
 */
export const SPACING = {
  0: 0,
  1: 4,    // 4px - Tight spacing
  2: 8,    // 8px - Compact spacing
  3: 12,   // 12px - Small spacing
  4: 16,   // 16px - Default spacing (card padding)
  5: 20,   // 20px - Medium spacing
  6: 24,   // 24px - Large spacing
  8: 32,   // 32px - Section spacing
  10: 40,  // 40px - Extra large spacing
  12: 48,  // 48px - Huge spacing
  16: 64,  // 64px - Maximum spacing
} as const;

// ============================================================================
// BORDER RADIUS TOKENS
// ============================================================================

/**
 * Border radius system
 * Consistent rounding for all components
 */
export const RADIUS = {
  none: 0,
  sm: 4,    // Small elements
  md: 6,    // Default radius
  lg: 8,    // Large elements
  xl: 12,   // Extra large (nodes, cards)
  full: 9999, // Pills, circles
} as const;

// ============================================================================
// NODE-SPECIFIC TOKENS
// ============================================================================

/**
 * Node component configuration
 * Specific settings for flow nodes in monitor builder
 */
export const NODE = {
  // Size variants for different node types
  size: {
    // Compact nodes (simple triggers, conditions)
    compact: {
      width: WIDTH.sm,      // 240px
      height: HEIGHT.lg,    // 40px - matches dashboard button
      padding: SPACING[3],  // 12px
    },
    // Standard nodes (default for most node types)
    standard: {
      width: WIDTH.md,      // 320px (current)
      height: HEIGHT.xl,    // 48px (current)
      padding: SPACING[3],  // 12px
    },
    // Large nodes (complex configurations, multiple fields)
    large: {
      width: WIDTH.lg,      // 400px
      height: HEIGHT.xxl,   // 56px
      padding: SPACING[4],  // 16px
    },
  },

  // Visual properties
  borderRadius: RADIUS.lg,  // 8px for nodes - premium balance between subtle and modern
  borderWidth: 1,
  shadow: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 -0.5px 1.6px 0 rgba(0, 0, 0, 0.1) inset', // Node-specific shadow

  // Handle configuration
  handle: {
    size: 10,    // Handle diameter
    offset: 6,   // Distance from node edge
  },

  // Icon configuration
  icon: {
    size: 16,    // 16px icons (h-4 w-4)
    containerSize: 24, // Icon container size
  },

  // Badge configuration
  badge: {
    height: 20,  // Status badge height
    minWidth: 20, // Minimum badge width
    padding: SPACING[1], // 4px padding
  },
} as const;

// ============================================================================
// COMPONENT VARIANTS
// ============================================================================

/**
 * Unified sizing variants for all components
 * Can be used by buttons, nodes, cards, etc.
 */
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type NodeSizeVariant = 'compact' | 'standard' | 'large';

/**
 * Component size configuration
 * Maps size variants to specific dimensions
 */
export const COMPONENT_SIZES: Record<SizeVariant, {
  height: number;
  padding: number;
  fontSize: number;
  iconSize: number;
}> = {
  xs: {
    height: HEIGHT.xs,
    padding: SPACING[2],
    fontSize: 12,
    iconSize: 14,
  },
  sm: {
    height: HEIGHT.sm,
    padding: SPACING[3],
    fontSize: 14,
    iconSize: 16,
  },
  md: {
    height: HEIGHT.md,
    padding: SPACING[4],
    fontSize: 14,
    iconSize: 16,
  },
  lg: {
    height: HEIGHT.lg,
    padding: SPACING[5],
    fontSize: 16,
    iconSize: 20,
  },
  xl: {
    height: HEIGHT.xl,
    padding: SPACING[6],
    fontSize: 18,
    iconSize: 24,
  },
} as const;

// ============================================================================
// TAILWIND CLASS MAPPINGS
// ============================================================================

/**
 * Height class mappings for Tailwind
 * Provides consistent height classes
 */
export const HEIGHT_CLASSES: Record<SizeVariant, string> = {
  xs: 'h-7',   // 28px
  sm: 'h-8',   // 32px (existing)
  md: 'h-9',   // 36px (existing)
  lg: 'h-10',  // 40px (existing)
  xl: 'h-12',  // 48px
} as const;

/**
 * Width class mappings for Tailwind
 */
export const WIDTH_CLASSES = {
  xs: 'w-40',   // 160px
  sm: 'w-60',   // 240px
  md: 'w-80',   // 320px
  lg: 'w-[400px]', // 400px
  xl: 'w-[480px]', // 480px
} as const;

/**
 * Node-specific Tailwind classes
 */
export const NODE_SIZE_CLASSES: Record<NodeSizeVariant, {
  container: string;
  padding: string;
}> = {
  compact: {
    container: 'w-[280px] h-11',    // 280px x 44px - slightly bigger for better readability
    padding: 'px-3 py-2.5',         // More balanced padding
  },
  standard: {
    container: 'w-[320px] h-12', // 320px x 48px - matches Lindy exactly
    padding: 'px-3 py-3',        // 12px horizontal, 12px vertical
  },
  large: {
    container: 'w-[400px] h-14', // 400px x 56px
    padding: 'px-4 py-3.5',      // More balanced padding
  },
} as const;

// ============================================================================
// ANIMATION TOKENS
// ============================================================================

/**
 * Animation timing configuration
 */
export const ANIMATION = {
  duration: {
    instant: 0,
    fast: 75,     // 75ms - micro interactions
    normal: 200,  // 200ms - default transitions
    slow: 300,    // 300ms - complex animations
    slower: 500,  // 500ms - page transitions
  },
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// ============================================================================
// SHADOW TOKENS
// ============================================================================

/**
 * Box shadow configuration
 * For elevation and depth
 */
export const SHADOW = {
  none: 'none',
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',

  // Node-specific shadow (from BaseNode)
  node: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 -0.5px 1.6px 0 rgba(0, 0, 0, 0.1) inset',

  // Premium interactive element shadow
  // Combines subtle border ring + drop shadow + minimal inset for depth
  premium: '0 0 0 1px rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 -0.5px 0 0 rgba(0, 0, 0, 0.04) inset',

  // Light version for hover states
  premiumHover: '0 0 0 1px rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 -0.5px 0 0 rgba(0, 0, 0, 0.05) inset',
} as const;

// ============================================================================
// Z-INDEX TOKENS
// ============================================================================

/**
 * Z-index layering system
 */
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  modal: 30,
  popover: 40,
  tooltip: 50,
  notification: 60,
} as const;