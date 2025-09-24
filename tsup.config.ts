import { defineConfig } from "tsup";
import { copyFileSync } from "fs";
import { join } from "path";

export default defineConfig({
  entry: ["src/index.ts", "src/icons.ts", "src/layout.ts", "src/components.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  tsconfig: "./tsconfig.app.json",
  external: [
    "react",
    "react-dom",
    "@radix-ui/*",
    "@heroicons/react",
    "@tanstack/react-query",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "lucide-react",
    "date-fns",
    "recharts",
    "sonner",
    "vaul",
    "zod",
    "react-hook-form",
    "@hookform/resolvers",
    "cmdk",
    "embla-carousel-react",
    "input-otp",
    "next-themes",
    "react-day-picker",
    "react-resizable-panels",
    "react-router-dom",
    "tailwindcss-animate",
  ],
  banner: {
    js: '"use client";',
  },
  onSuccess: async () => {
    // Copy CSS file to dist directory
    copyFileSync("src/index.css", join("dist", "index.css"));
  },
});
