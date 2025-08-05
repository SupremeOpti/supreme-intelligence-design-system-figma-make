import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  tsconfig: './tsconfig.app.json',
  external: [
    'react', 
    'react-dom',
    '@radix-ui/*',
    '@heroicons/react',
    '@tanstack/react-query',
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
    'lucide-react',
    'date-fns',
    'recharts',
    'sonner',
    'vaul',
    'zod',
    'react-hook-form',
    '@hookform/resolvers',
    'cmdk',
    'embla-carousel-react',
    'input-otp',
    'next-themes',
    'react-day-picker',
    'react-resizable-panels',
    'react-router-dom',
    'tailwindcss-animate'
  ],
  banner: {
    js: '"use client";'
  }
})