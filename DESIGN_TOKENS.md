# Supreme Intelligence Design Tokens

This document provides a comprehensive guide to all design tokens available in the Supreme Intelligence Design System.

## Overview

Our design system uses a comprehensive token-based approach with the following categories:

- **Colors** - Semantic and brand-specific color tokens
- **Border Radius** - Corner rounding tokens
- **Spacing** - Layout and spacing tokens
- **Shadows** - Elevation and depth tokens
- **Blur** - Visual effect tokens
- **Opacity** - Transparency tokens
- **Typography** - Text styling tokens

## Color Tokens

### Semantic Colors (HSL-based)

Use these for semantic meaning across your application:

```css
/* Background colors */
bg-background          /* Main background */
bg-card               /* Card backgrounds */
bg-popover            /* Popover backgrounds */

/* Text colors */
text-foreground       /* Primary text */
text-muted-foreground /* Secondary text */
text-card-foreground  /* Card text */

/* Interactive colors */
bg-primary            /* Primary actions */
text-primary-foreground
bg-secondary          /* Secondary actions */
text-secondary-foreground
bg-accent             /* Accent elements */
text-accent-foreground
bg-destructive        /* Destructive actions */
text-destructive-foreground

/* Form elements */
bg-input              /* Input backgrounds */
border-input          /* Input borders */
ring-ring             /* Focus rings */
```

### Brand Colors (Supreme Blue)

Use these for brand-specific elements:

```css
/* Supreme Blue palette */
bg-supreme-blue-50    /* Very light blue */
bg-supreme-blue-100   /* Light blue */
bg-supreme-blue-200   /* Light blue */
bg-supreme-blue-300   /* Medium light blue */
bg-supreme-blue-400   /* Medium blue */
bg-supreme-blue-500   /* Primary blue */
bg-supreme-blue-600   /* Medium dark blue */
bg-supreme-blue-700   /* Dark blue */
bg-supreme-blue-800   /* Very dark blue */
bg-supreme-blue-900   /* Darkest blue */
bg-supreme-blue-950   /* Almost black blue */

/* Neutral colors */
bg-neutral-300        /* Light gray */
text-white            /* White text */
text-black            /* Black text */
```

## Border Radius Tokens

Use these for consistent corner rounding:

```css
rounded-none          /* 0px - No rounding */
rounded-xs            /* 2px - Very slight rounding */
rounded-sm            /* 4px - Small rounding */
rounded-md            /* 6px - Medium rounding */
rounded-lg            /* 8px - Large rounding */
rounded-xl            /* 12px - Extra large rounding */
rounded-2xl           /* 16px - 2X large rounding */
rounded-3xl           /* 24px - 3X large rounding */
rounded-4xl           /* 32px - 4X large rounding */
rounded-full          /* 9999px - Full circle */
```

## Spacing Tokens

Use these for consistent spacing throughout your application:

```css
/* Small spacing */
p-0                   /* 0px */
p-0.5                 /* 2px */
p-1                   /* 4px */
p-1.5                 /* 6px */
p-2                   /* 8px */
p-2.5                 /* 10px */
p-3                   /* 12px */
p-3.5                 /* 14px */

/* Medium spacing */
p-4                   /* 16px */
p-5                   /* 20px */
p-6                   /* 24px */
p-7                   /* 28px */
p-8                   /* 32px */
p-9                   /* 36px */
p-10                  /* 40px */
p-11                  /* 44px */
p-12                  /* 48px */

/* Large spacing */
p-14                  /* 56px */
p-16                  /* 64px */
p-20                  /* 80px */
p-24                  /* 96px */
p-28                  /* 112px */
p-32                  /* 128px */
p-36                  /* 144px */
p-40                  /* 160px */
p-44                  /* 176px */
p-48                  /* 192px */
p-52                  /* 208px */
p-56                  /* 224px */
p-60                  /* 240px */
p-64                  /* 256px */
p-72                  /* 288px */
p-80                  /* 320px */
p-96                  /* 384px */
```

## Shadow Tokens

Use these for consistent elevation and depth:

```css
/* Standard shadows */
shadow-none           /* No shadow */
shadow-2xs            /* Very subtle shadow */
shadow-xs             /* Extra small shadow */
shadow-sm             /* Small shadow */
shadow-md             /* Medium shadow */
shadow-lg             /* Large shadow */
shadow-xl             /* Extra large shadow */
shadow-2xl            /* 2X large shadow */

/* Inset shadows */
shadow-inset-2xs      /* Very subtle inset */
shadow-inset-xs       /* Extra small inset */
shadow-inset-sm       /* Small inset */
```

## Blur Tokens

Use these for visual effects:

```css
/* Standard blur */
blur-none             /* No blur */
blur-xs               /* 2px blur */
blur-sm               /* 4px blur */
blur-md               /* 8px blur */
blur-lg               /* 12px blur */
blur-xl               /* 16px blur */
blur-2xl              /* 24px blur */
blur-3xl              /* 40px blur */

/* Backdrop blur */
backdrop-blur-none    /* No backdrop blur */
backdrop-blur-xs      /* 2px backdrop blur */
backdrop-blur-sm      /* 4px backdrop blur */
backdrop-blur-md      /* 8px backdrop blur */
backdrop-blur-lg      /* 12px backdrop blur */
backdrop-blur-xl      /* 16px backdrop blur */
backdrop-blur-2xl     /* 24px backdrop blur */
backdrop-blur-3xl     /* 40px backdrop blur */
```

## Opacity Tokens

Use these for consistent transparency levels:

```css
/* Low opacity */
opacity-0             /* 0% - Completely transparent */
opacity-5             /* 5% */
opacity-10            /* 10% */
opacity-15            /* 15% */
opacity-20            /* 20% */
opacity-25            /* 25% */
opacity-30            /* 30% */
opacity-35            /* 35% */
opacity-40            /* 40% */
opacity-45            /* 45% */

/* Medium opacity */
opacity-50            /* 50% */

/* High opacity */
opacity-55            /* 55% */
opacity-60            /* 60% */
opacity-65            /* 65% */
opacity-70            /* 70% */
opacity-75            /* 75% */
opacity-80            /* 80% */
opacity-85            /* 85% */
opacity-90            /* 90% */
opacity-95            /* 95% */
opacity-100           /* 100% - Completely opaque */
```

## Typography Tokens

### Font Sizes

```css
text-xs               /* 12px */
text-sm               /* 14px */
text-base             /* 16px */
text-lg               /* 18px */
text-xl               /* 20px */
text-2xl              /* 24px */
text-3xl              /* 30px */
text-4xl              /* 36px */
text-5xl              /* 48px */
text-6xl              /* 60px */
text-7xl              /* 72px */
text-8xl              /* 96px */
text-9xl              /* 128px */
```

### Font Weights

```css
font-light            /* 300 */
font-normal           /* 400 */
font-medium           /* 500 */
font-semibold         /* 600 */
font-bold             /* 700 */
font-extrabold        /* 800 */
font-black            /* 900 */
```

### Line Heights

```css
leading-none          /* 1 */
leading-tight         /* 1.25 */
leading-snug          /* 1.375 */
leading-normal        /* 1.5 */
leading-relaxed       /* 1.625 */
leading-loose         /* 2 */
```

### Letter Spacing

```css
tracking-tighter      /* -0.05em */
tracking-tight        /* -0.025em */
tracking-normal       /* 0em */
tracking-wide         /* 0.025em */
tracking-wider        /* 0.05em */
tracking-widest       /* 0.1em */
```

## Usage Examples

### Button Component

```tsx
<button className="
  bg-supreme-blue-500 
  text-white 
  px-6 
  py-3 
  rounded-lg 
  shadow-md 
  hover:shadow-lg 
  transition-all 
  duration-200
">
  Primary Button
</button>
```

### Card Component

```tsx
<div className="
  bg-card 
  text-card-foreground 
  p-6 
  rounded-xl 
  shadow-lg 
  border 
  border-border
">
  <h3 className="text-2xl font-semibold mb-4">Card Title</h3>
  <p className="text-muted-foreground">Card content goes here.</p>
</div>
```

### Modal with Backdrop Blur

```tsx
<div className="
  fixed inset-0 
  bg-black/50 
  backdrop-blur-md 
  flex 
  items-center 
  justify-center
">
  <div className="
    bg-background 
    p-8 
    rounded-2xl 
    shadow-2xl 
    max-w-md 
    w-full 
    mx-4
  ">
    Modal content
  </div>
</div>
```

### Typography Example

```tsx
<div className="space-y-4">
  <h1 className="text-5xl font-bold tracking-tight">
    Main Heading
  </h1>
  <h2 className="text-3xl font-semibold">
    Sub Heading
  </h2>
  <p className="text-base leading-relaxed text-muted-foreground">
    Body text with relaxed line height for better readability.
  </p>
</div>
```

## Best Practices

1. **Use semantic colors** for general UI elements
2. **Use brand colors** for Supreme Intelligence specific elements
3. **Maintain consistency** by using the same tokens across similar elements
4. **Consider accessibility** - ensure sufficient contrast ratios
5. **Use spacing tokens** for consistent layout
6. **Apply shadows thoughtfully** to create proper visual hierarchy
7. **Use typography tokens** for consistent text styling

## Dark Mode Support

All semantic color tokens automatically adapt to dark mode when the `.dark` class is applied to the document. Brand colors remain consistent across themes.

```css
/* Dark mode is automatically handled */
.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  /* ... other dark mode overrides */
}
```

## Customization

To extend the design tokens, add new CSS custom properties to the `:root` selector in `src/styles/globals.css`:

```css
:root {
  /* Your custom tokens */
  --custom-color: 220 100% 50%;
  --custom-spacing: 2.5rem;
}
```

Then add them to the Tailwind configuration in `tailwind.config.ts`:

```typescript
extend: {
  colors: {
    custom: 'hsl(var(--custom-color))',
  },
  spacing: {
    custom: 'var(--custom-spacing)',
  },
}
``` 