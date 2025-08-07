import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Only use lib build for package building, not for dev server
  ...(process.env.BUILD_PACKAGE === "true" && {
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "SupremeIntelligenceDesignSystem",
        formats: ["es", "cjs"],
        fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
      },
      rollupOptions: {
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
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
  }),
}));