# Supreme Intelligence Design System

A comprehensive design system that expands and integrates with Tailwind CSS v4, providing consistent styles and components across both Laravel and React (Lovable) versions of Supreme Intelligence.

## Overview

This design system is built as an NPM package that seamlessly integrates with Tailwind CSS v4, offering:

- 🎨 **Complete Design System** - Colors, typography, spacing, shadows, and more
- ⚛️ **React Components** - Pre-built, accessible components
- 🎯 **Multi-Framework** - Support for React, Next.js, Laravel
- 🌙 **Dark Mode** - Built-in dark theme support
- 📱 **Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG compliant components
- 🔧 **TypeScript** - Full type safety
- 🎪 **Tailwind CSS v4** - Modern utility-first styling

## Package Structure

The design system is distributed as an NPM package with the following structure:

```
supreme-intelligence-design-system-npm/
├── src/
│   ├── components/
│   │   └── ui/           # React component library
│   │       ├── accordion.tsx
│   │       ├── alert.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input.tsx
│   │       ├── input-otp.tsx
│   │       ├── label.tsx
│   │       ├── logo.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── sonner.tsx
│   │       ├── table.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toggle.tsx
│   │       └── tooltip.tsx
│   ├── hooks/             # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/               # Utility functions
│   │   └── utils.ts
│   ├── pages/             # Example pages
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── styles/            # Global styles
│   │   └── globals.css
│   ├── App.tsx            # Main app component
│   ├── App.css            # App styles
│   ├── index.css          # Main entry point
│   └── main.tsx           # App entry point
├── public/                # Static assets
│   ├── placeholder.svg
│   └── robots.txt
├── package.json           # Package configuration
├── components.json        # Component configuration
├── tailwind.config.ts     # Tailwind configuration
├── vite.config.ts         # Vite configuration
├── tsup.config.ts         # Build configuration
└── README.md
```

## Installation

```bash
npm install @supreme-intelligence/design-system
# or
yarn add @supreme-intelligence/design-system
# or
pnpm add @supreme-intelligence/design-system
# or
npm install git+https://github.com/SupremeOpti/supreme-intelligence-design-system-figma-make.git
```

### Automatic Tailwind Configuration

The package includes an automatic postinstall script that will:

- ✅ **Auto-detect** your existing `tailwind.config.js` or `tailwind.config.ts` file
- ✅ **Add the content path** `"./node_modules/@supreme-intelligence/**/*.{js,ts,jsx,tsx}"` to your Tailwind config
- ✅ **Create a config** if none exists with the proper content paths
- ✅ **Skip if already configured** to avoid duplicates

The script runs automatically after installation and will show you what it's doing:

```
🚀 @supreme-intelligence/design-system postinstall script running...
✅ Successfully added @supreme-intelligence content path to tailwind.config.ts
📝 Added: ./node_modules/@supreme-intelligence/**/*.{js,ts,jsx,tsx}
✨ Postinstall script completed!
```

If the automatic configuration fails, you can manually add this to your `tailwind.config.ts` content array:

```typescript
content: [
  // ... your existing content paths
  "./node_modules/@supreme-intelligence/**/*.{js,ts,jsx,tsx}",
];
```

## Quick Start

### React/Next.js Projects

1. **Import the design system in your CSS:**

```css
/* globals.css or main.css */
@import "tailwindcss";
@import "@supreme-intelligence/design-system/styles";
```

2. **Use the components:**

```tsx
import { Button, Logo } from "@supreme-intelligence/design-system";

export default function App() {
  return (
    <div>
      <Logo variant="supreme" size="lg" />
      <Button variant="default">Get Started</Button>
    </div>
  );
}
```

### Laravel Projects

1. **Import the design system in your main CSS file:**

```css
/* resources/css/app.css */
@import "tailwindcss";
@import "@supreme-intelligence/design-system/styles";
```

2. **Use in Blade templates:**

```html
<div class="bg-background text-foreground p-4 rounded-lg">
  <h1 class="text-2xl font-bold text-primary">
    Welcome to Supreme Intelligence
  </h1>
  <button class="bg-primary text-primary-foreground px-4 py-2 rounded">
    Get Started
  </button>
</div>
```

## Design Tokens

The design system provides comprehensive design tokens that are automatically available through Tailwind:

### Colors

- `bg-background` / `text-foreground`
- `bg-primary` / `text-primary-foreground`
- `bg-secondary` / `text-secondary-foreground`
- `bg-muted` / `text-muted-foreground`
- `bg-accent` / `text-accent-foreground`
- `bg-destructive` / `text-destructive-foreground`
- `bg-card` / `text-card-foreground`
- `bg-popover` / `text-popover-foreground`

### Spacing & Layout

- Consistent spacing scale: `p-1` through `p-16`
- Container utilities with responsive breakpoints
- Grid and flexbox utilities

### Typography

- Font family utilities: `font-sans`, `font-mono`
- Font size scale: `text-xs` through `text-9xl`
- Font weight utilities: `font-light` through `font-black`

## Components

### Button

```tsx
import { Button } from '@supreme-intelligence/design-system'

<Button variant="default" size="lg">
  Primary Button
</Button>

<Button variant="outline" size="sm">
  Secondary Button
</Button>

<Button variant="destructive">
  Delete
</Button>
```

### Logo

```tsx
import { Logo } from '@supreme-intelligence/design-system'

<Logo variant="supreme" theme="light" size="md" showText={true} />
<Logo variant="supreme" theme="dark" size="lg" showText={false} />
```

### Form Components

```tsx
import { Input, Label, Button } from "@supreme-intelligence/design-system";

<div className="space-y-4">
  <div>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="Enter your email" />
  </div>
  <Button type="submit">Submit</Button>
</div>;
```

## Customization

### Extending the Design System

You can extend the design system by adding custom styles after importing:

```css
@import "tailwindcss";
@import "@supreme-intelligence/design-system/styles";

/* Your custom styles */
@layer base {
  :root {
    --custom-color: 220 100% 50%;
  }
}

@layer components {
  .custom-button {
    @apply bg-custom-color text-white px-4 py-2 rounded;
  }
}
```

### Creating Custom Components

```tsx
import { cn } from "@supreme-intelligence/design-system";
import { cva } from "class-variance-authority";

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      variant: {
        default: "border-border",
        elevated: "border-border shadow-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated";
}

const Card = ({ className, variant, ...props }: CardProps) => (
  <div className={cn(cardVariants({ variant }), className)} {...props} />
);
```

## Dark Mode

The design system includes built-in dark mode support:

```tsx
import { ThemeProvider } from "@supreme-intelligence/design-system";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="supreme-theme">
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## Framework Integration

### Next.js

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@supreme-intelligence/design-system"],
  },
};

module.exports = nextConfig;
```

### Vite

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@supreme-intelligence/design-system"],
  },
});
```

## Development

### Local Development

1. Clone the repository: `git clone https://github.com/developersupreme/supreme-intelligence-designSystem.git`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build the package: `npm run build`

### Building for Distribution

```bash
npm run build:package
```

This creates the distributable package with all necessary files for NPM publishing.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © Supreme Intelligence

## Support

For support and questions, please contact the development team or create an issue in the [repository](https://github.com/developersupreme/supreme-intelligence-designSystem).
