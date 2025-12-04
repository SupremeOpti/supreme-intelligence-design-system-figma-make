# Supreme Intelligence Design System

A comprehensive design system that expands and integrates with Tailwind CSS, providing consistent styles and components for React applications.

## Overview

This design system is built as an NPM package that seamlessly integrates with Tailwind CSS, offering:

- 🎨 **Complete Design System** - Colors, typography, spacing, shadows, and more
- ⚛️ **React Components** - Pre-built, accessible components built on Radix UI
- 🎯 **TypeScript** - Full type safety with TypeScript definitions
- 🌙 **Dark Mode Ready** - CSS variables support for theme switching
- 📱 **Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG compliant components powered by Radix UI
- 🔧 **Tree-shakeable** - Import only what you need
- 🎪 **Tailwind CSS** - Modern utility-first styling

## Package Exports

The package provides multiple entry points for flexible usage:

- **Main Export** (`@supreme-intelligence/design-system`) - All components, icons, hooks, and utilities
- **Components** (`@supreme-intelligence/design-system/components`) - UI components only
- **Icons** (`@supreme-intelligence/design-system/icons`) - Icon components only
- **Layout** (`@supreme-intelligence/design-system/layout`) - Layout components (Layout, ProtectedRoute)
- **Styles** (`@supreme-intelligence/design-system/styles`) - CSS file with design tokens
- **Tailwind Preset** (`@supreme-intelligence/design-system/tailwind-preset`) - Tailwind configuration preset

## Installation

### Prerequisites

This package requires React 18+ and React DOM 18+ as peer dependencies.

```bash
npm install @supreme-intelligence/design-system react react-dom
# or
yarn add @supreme-intelligence/design-system react react-dom
# or
pnpm add @supreme-intelligence/design-system react react-dom
```

### Install from Git Repository

```bash
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

### Using the Tailwind Preset (Recommended)

To automatically get all design tokens (colors, spacing, typography, shadows, etc.) without manual configuration, use the Tailwind preset:

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";
import designSystemPreset from "@supreme-intelligence/design-system/tailwind-preset";

export default {
  presets: [designSystemPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@supreme-intelligence/**/*.{js,ts,jsx,tsx}",
  ],
  // ... rest of your config
} satisfies Config;
```

**What the preset includes:**
- ✅ All color tokens (semantic colors, `supreme-blue`, `neutral`, `gray`, `slate`, etc.)
- ✅ Complete spacing scale
- ✅ Border radius tokens
- ✅ Box shadow tokens
- ✅ Blur and backdrop blur tokens
- ✅ Opacity scale
- ✅ Typography tokens (font sizes, weights, line heights, letter spacing)
- ✅ Animation keyframes

**Without the preset**, you would need to manually copy all these design tokens to your `tailwind.config.ts`, which is not recommended.

## Quick Start

### Step 1: Configure Tailwind CSS

**Option A: Using the Tailwind Preset (Recommended)**

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";
import designSystemPreset from "@supreme-intelligence/design-system/tailwind-preset";

export default {
  presets: [designSystemPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@supreme-intelligence/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config;
```

**Option B: Manual Configuration**

If you prefer not to use the preset, you can manually configure Tailwind. However, you'll need to copy all design tokens from the preset file.

### Step 2: Import Styles

Import the design system CSS in your main CSS file:

```css
/* globals.css, main.css, or app.css */
@import "tailwindcss";
@import "@supreme-intelligence/design-system/styles";
```

**For Next.js:**

```css
/* app/globals.css or styles/globals.css */
@import "tailwindcss";
@import "@supreme-intelligence/design-system/styles";
```

**For Vite/React:**

```css
/* src/index.css or src/main.css */
@import "tailwindcss";
@import "@supreme-intelligence/design-system/styles";
```

### Step 3: Use Components

```tsx
import { Button, Logo, Card, Input } from "@supreme-intelligence/design-system";

export default function App() {
  return (
    <div className="p-8">
      <Logo variant="supreme" size="lg" />
      <Card className="mt-4 p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <Input placeholder="Enter your name" className="mb-4" />
        <Button variant="default">Get Started</Button>
      </Card>
    </div>
  );
}
```

## Import Options

### Import Everything (Main Entry)

Import all components, icons, hooks, and utilities from the main entry:

```tsx
import { 
  Button, 
  Card, 
  Input, 
  Logo,
  AIIcon,
  useToast,
  cn 
} from "@supreme-intelligence/design-system";
```

### Import Only Components

If you only need UI components:

```tsx
import { Button, Card, Input } from "@supreme-intelligence/design-system/components";
```

### Import Only Icons

If you only need icon components:

```tsx
import { AIIcon, AnalyticsIcon, HomeIcon } from "@supreme-intelligence/design-system/icons";
```

### Import Layout Components

For layout-related components:

```tsx
import { Layout, ProtectedRoute } from "@supreme-intelligence/design-system/layout";
```

### Import Utilities and Hooks

```tsx
import { cn, useToast, useMobile } from "@supreme-intelligence/design-system";
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

## Available Components

The package includes the following components:

### UI Components

- **Accordion** - Collapsible content sections
- **Avatar** - User profile images
- **Badge** - Status indicators and labels
- **Banner** - Alert banners
- **Breadcrumb** - Navigation breadcrumbs
- **Button** - Interactive buttons with variants
- **Card** - Container component
- **Checkbox** - Form checkbox input
- **ContentBox** - Content container
- **CreditSelector** - Credit selection component
- **Credits** - Credits display component
- **CurieAiChatPrompt** - Chat prompt component
- **Divider** - Visual separator
- **DragDrop** - Drag and drop component
- **Dropdown** - Dropdown menu component
- **Footer** - Footer component
- **Input** - Text input field
- **Logo** - Supreme Intelligence logo component
- **AuthForm** - Authentication form
- **Menubar** - Menu bar component
- **PageHeading** - Page heading component
- **PageLevel** - Page level component
- **Pagination** - Pagination controls
- **Persona** - Persona display component
- **Popover** - Popover component
- **Progress** - Progress indicator
- **Quote** - Quote display component
- **Radio** - Radio button input
- **Sidebar** - Sidebar navigation
- **Slider** - Range slider input
- **Stepper** - Step indicator
- **Table** - Data table component
- **Tabs** - Tab navigation
- **Textarea** - Multi-line text input
- **Toast** - Toast notification system
- **Toaster** - Toast container
- **Toggle** - Toggle switch
- **Tooltip** - Tooltip component

### Icon Components

- **AIIcon** - AI icon
- **AnalyticsIcon** - Analytics icon
- **AppIcon** - App icon
- **AudiencesIcon** - Audiences icon
- **BrandGuidelinesIcon** - Brand guidelines icon
- **DataSourcesIcon** - Data sources icon
- **DigitalAssetManagementIcon** - Digital asset management icon
- **GoogleIcon** - Google icon
- **HomeIcon** - Home icon
- **KnowledgeBaseIcon** - Knowledge base icon
- **LinkedInIcon** - LinkedIn icon
- **PaletteIcon** - Palette icon
- **PersonaIcon** - Persona icon
- **SidebarIcon** - Sidebar icon
- **SupremeIcon** - Supreme icon
- **VectorIcon** - Vector icon

### Layout Components

- **Layout** - Main layout wrapper
- **ProtectedRoute** - Route protection component

### Hooks

- **useToast** - Toast notification hook
- **useMobile** - Mobile device detection hook

### Utilities

- **cn** - Class name utility (combines clsx and tailwind-merge)

## Component Examples

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

<Button variant="ghost" size="sm">
  Ghost Button
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
import { Input, Textarea, Checkbox, Radio, Button } from "@supreme-intelligence/design-system";

function ContactForm() {
  return (
    <div className="space-y-4 max-w-md">
      <div>
        <label htmlFor="email" className="text-sm font-medium mb-2 block">
          Email
        </label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      
      <div>
        <label htmlFor="message" className="text-sm font-medium mb-2 block">
          Message
        </label>
        <Textarea id="message" placeholder="Enter your message" />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label htmlFor="terms" className="text-sm">
          I agree to the terms
        </label>
      </div>
      
      <Button type="submit">Submit</Button>
    </div>
  );
}
```

### Card

```tsx
import { Card } from "@supreme-intelligence/design-system";

<Card className="p-6">
  <h2 className="text-xl font-semibold mb-2">Card Title</h2>
  <p className="text-muted-foreground">Card content goes here</p>
</Card>
```

### Table

```tsx
import { Table } from "@supreme-intelligence/design-system";

<Table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Admin</td>
    </tr>
  </tbody>
</Table>
```

### Toast Notifications

```tsx
import { useToast, Toaster } from "@supreme-intelligence/design-system";

function App() {
  const { toast } = useToast();
  
  return (
    <>
      <Toaster />
      <Button 
        onClick={() => {
          toast({
            title: "Success",
            description: "Your changes have been saved.",
          });
        }}
      >
        Show Toast
      </Button>
    </>
  );
}
```

### Icons

```tsx
import { AIIcon, HomeIcon, AnalyticsIcon } from "@supreme-intelligence/design-system/icons";

<div className="flex space-x-4">
  <AIIcon className="w-6 h-6" />
  <HomeIcon className="w-6 h-6" />
  <AnalyticsIcon className="w-6 h-6" />
</div>
```

### Using the cn Utility

```tsx
import { cn } from "@supreme-intelligence/design-system";

function MyComponent({ className, variant }) {
  return (
    <div 
      className={cn(
        "base-styles",
        variant === "primary" && "primary-styles",
        className
      )}
    >
      Content
    </div>
  );
}
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

The design system uses CSS variables for theming, making it compatible with any theme provider. The design tokens are defined using HSL color values that can be easily overridden.

### Using next-themes (Recommended for Next.js)

```tsx
import { ThemeProvider } from "next-themes";
import "@supreme-intelligence/design-system/styles";

function App({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
```

### Custom Theme Implementation

You can override CSS variables to customize the theme:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --primary: 243 100% 64%;
  }
  
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --primary: 243 100% 64%;
  }
}
```

## Framework Integration

### Next.js

**1. Configure Tailwind:**

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";
import designSystemPreset from "@supreme-intelligence/design-system/tailwind-preset";

export default {
  presets: [designSystemPreset],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@supreme-intelligence/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config;
```

**2. Import styles in your root layout:**

```tsx
// app/layout.tsx or app/globals.css
import "@supreme-intelligence/design-system/styles";
```

**3. (Optional) Optimize imports in next.config.js:**

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

### Vite/React

**1. Configure Tailwind:**

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";
import designSystemPreset from "@supreme-intelligence/design-system/tailwind-preset";

export default {
  presets: [designSystemPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@supreme-intelligence/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config;
```

**2. Import styles in your main entry:**

```tsx
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "@supreme-intelligence/design-system/styles";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**3. (Optional) Optimize in vite.config.ts:**

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@supreme-intelligence/design-system"],
  },
});
```

### Create React App

**1. Configure Tailwind:**

```javascript
// tailwind.config.js
const designSystemPreset = require("@supreme-intelligence/design-system/tailwind-preset");

module.exports = {
  presets: [designSystemPreset],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@supreme-intelligence/**/*.{js,ts,jsx,tsx}",
  ],
};
```

**2. Import styles:**

```tsx
// src/index.tsx
import "@supreme-intelligence/design-system/styles";
```

## TypeScript Support

The package includes full TypeScript definitions. All components are fully typed:

```tsx
import { Button } from "@supreme-intelligence/design-system";

// TypeScript will provide autocomplete and type checking
<Button variant="default" size="lg">Click me</Button>
```

## Common Issues & Troubleshooting

### Styles Not Loading

Make sure you've imported the styles in your main CSS file:

```css
@import "tailwindcss";
@import "@supreme-intelligence/design-system/styles";
```

### Tailwind Classes Not Working

1. Ensure the package is included in your Tailwind content paths:
   ```ts
   content: [
     "./node_modules/@supreme-intelligence/**/*.{js,ts,jsx,tsx}",
   ]
   ```

2. Make sure you're using the Tailwind preset or have manually configured all design tokens.

### Component Not Found

Check that you're importing from the correct entry point:

```tsx
// ✅ Correct
import { Button } from "@supreme-intelligence/design-system";

// ❌ Incorrect (if Button doesn't exist in icons)
import { Button } from "@supreme-intelligence/design-system/icons";
```

### Peer Dependency Warnings

Make sure you have React 18+ and React DOM 18+ installed:

```bash
npm install react@^18.0.0 react-dom@^18.0.0
```

## Development

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/SupremeOpti/supreme-intelligence-design-system-figma-make.git
   cd supreme-intelligence-design-system-figma-make
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build the package:
   ```bash
   npm run build:package
   ```

This creates the distributable package in the `dist/` directory with all necessary files for NPM publishing.

### Package Structure

The built package structure:

```
dist/
├── index.js          # Main entry (ESM)
├── index.cjs         # Main entry (CommonJS)
├── index.d.ts        # TypeScript definitions
├── index.css         # Styles
├── components.js     # Components entry
├── components.cjs   # Components entry (CJS)
├── components.d.ts  # Components types
├── icons.js         # Icons entry
├── icons.cjs        # Icons entry (CJS)
├── icons.d.ts       # Icons types
├── layout.js        # Layout entry
├── layout.cjs       # Layout entry (CJS)
└── layout.d.ts      # Layout types
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © Supreme Intelligence

## Support

For support and questions, please contact the development team or create an issue in the [repository](https://github.com/SupremeOpti/supreme-intelligence-design-system-figma-make).
