import { defineConfig } from 'tsup'
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// Function to copy assets recursively
function copyAssets(src: string, dest: string) {
  if (!statSync(src).isDirectory()) return
  
  mkdirSync(dest, { recursive: true })
  
  const files = readdirSync(src)
  for (const file of files) {
    const srcPath = join(src, file)
    const destPath = join(dest, file)
    
    if (statSync(srcPath).isDirectory()) {
      copyAssets(srcPath, destPath)
    } else {
      copyFileSync(srcPath, destPath)
    }
  }
}

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
  },
  onSuccess: async () => {
    // Copy assets to dist folder
    copyAssets('public/assets', 'dist/assets')
  }
})