# Icon Library Usage Guide

## Quick Start

The icon library now supports both **stroke** and **solid** variants with multiple import patterns:

### 1. Namespace Imports (Recommended for New Code)

```typescript
import { Stroke, Solid } from '@/lib/icons';

// Use with clear variant separation
<Stroke.AI01 size={24} />
<Solid.Check color="#00ff00" />
<Stroke.Heart className="text-red-500" />
```

### 2. Direct Imports (Backward Compatible)

```typescript
import { AI01, Check, Plus } from '@/lib/icons';

// Existing code continues to work (defaults to stroke)
<AI01 size={24} />
<Check />
<Plus size={16} />
```

### 3. Variant-Specific Imports

```typescript
// Import only stroke icons
import { AI01, Check } from '@/lib/icons/stroke';

// Import only solid icons
import { AI01, Check } from '@/lib/icons/solid';
```

### 4. Programmatic Usage

```typescript
import { Icons, getIcon } from '@/lib/icons';

// Get icon dynamically
const MyIcon = getIcon('Check', 'solid');

// List all available icons
const strokeIcons = Object.keys(Icons.stroke);
const solidIcons = Object.keys(Icons.solid);
```

### 5. Type-Safe Usage

```typescript
import type { IconProps, IconComponent } from '@/lib/icons';

interface ButtonProps {
  icon: IconComponent;
  iconProps?: IconProps;
}
```

## Icon Naming Convention

Icons are named with simplified identifiers:
- Original: `PiAI01Stroke.tsx` → Export name: `AI01`
- Original: `PiCheckTickSingleStroke.tsx` → Export name: `CheckTickSingle`
- Original: `Pi3dSphereStroke.tsx` → Export name: `ThreeDSphere`

## Available Icon Categories

The library includes icons from 27 categories:
- **AI & Tech**: ai, development, web3-&-crypto
- **UI Elements**: alerts, arrows-&-chevrons, general
- **Communication**: communication, apps-&-social
- **Media**: media, editing, files-&-folders
- **Business**: money-&-payments, chart-&-graph
- **Lifestyle**: food, sports, medical, weather
- And more...

## Migration Guide

### From Old to New

**Before:**
```typescript
import { AI01 } from '@/lib/icons';
<AI01 size={24} />
```

**After (Option 1 - No change needed):**
```typescript
import { AI01 } from '@/lib/icons';
<AI01 size={24} />  // Still works!
```

**After (Option 2 - Recommended):**
```typescript
import { Stroke } from '@/lib/icons';
<Stroke.AI01 size={24} />
```

**After (Option 3 - For solid variant):**
```typescript
import { Solid } from '@/lib/icons';
<Solid.AI01 size={24} />
```

## Performance Tips

1. **Tree-Shaking**: The library is fully tree-shakeable. Only imported icons are included in your bundle.

2. **Memoization**: For frequently re-rendered icons:
```typescript
import { memoizeIcon } from '@/lib/icons/utils';
import { Stroke } from '@/lib/icons';

const MemoizedCheck = memoizeIcon(Stroke.Check);
```

3. **Dynamic Imports**: For code-splitting:
```typescript
const IconComponent = lazy(() =>
  import('@/lib/icons/stroke').then(m => ({ default: m.Check }))
);
```

## Icon Props

All icons accept standard SVG props plus:

```typescript
interface IconProps {
  size?: number | string;    // Default: 24
  color?: string;            // Default: 'currentColor'
  className?: string;        // For Tailwind/CSS classes
  strokeWidth?: number;      // For stroke variants
  // ... plus all standard SVGProps
}
```

## Examples

### Basic Usage
```tsx
<Stroke.Heart size={32} color="red" />
<Solid.Star size={24} className="text-yellow-500" />
```

### With Tailwind CSS
```tsx
<Stroke.Check className="w-6 h-6 text-green-500" />
<Solid.AlertCircle className="w-5 h-5 text-red-600" />
```

### Dynamic Selection
```tsx
const [variant, setVariant] = useState<'stroke' | 'solid'>('stroke');
const Icon = variant === 'stroke' ? Stroke.Heart : Solid.Heart;

<Icon size={24} />
```

### In Buttons
```tsx
<button className="flex items-center gap-2">
  <Stroke.Plus size={16} />
  Add Item
</button>
```

## TypeScript Support

The library provides full TypeScript support with:
- Auto-completion for all icon names
- Type-safe props
- Variant type literals ('stroke' | 'solid')
- Component type exports

## File Structure

```
lib/icons/
├── index.ts           # Main export file
├── stroke.ts          # All stroke icon exports
├── solid.ts           # All solid icon exports
├── stroke/            # Stroke icon files (27 categories)
├── solid/             # Solid icon files (27 categories)
├── types.ts           # TypeScript definitions
└── utils.ts           # Utility functions
```

## Need Help?

- **Icon count**: ~1,224 stroke icons, ~1,025 solid icons
- **Bundle impact**: ~2KB per icon (tree-shaken)
- **Browser support**: All modern browsers
- **Framework support**: React 16.8+

Happy coding! 🎨