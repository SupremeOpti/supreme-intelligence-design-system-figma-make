#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

/**
 * Postinstall script to automatically add Tailwind content path to consuming project's tailwind.config.ts
 * This script runs after the package is installed and adds the required content path for the design system.
 */

const TAILWIND_CONTENT_PATH =
  "./node_modules/@supreme-intelligence/**/*.{js,ts,jsx,tsx}";
const TAILWIND_CONFIG_FILES = [
  "tailwind.config.js",
  "tailwind.config.ts",
  "tailwind.config.mjs",
  "tailwind.config.cjs",
];

function findTailwindConfig() {
  const projectRoot = process.cwd();

  for (const configFile of TAILWIND_CONFIG_FILES) {
    const configPath = path.join(projectRoot, configFile);
    if (fs.existsSync(configPath)) {
      return { path: configPath, name: configFile };
    }
  }

  return null;
}

function updateTailwindConfig(configPath, configName) {
  try {
    let content = fs.readFileSync(configPath, "utf8");
    let updated = false;

    // Check if the content path already exists
    if (content.includes("@supreme-intelligence")) {
      console.log(
        "✅ Tailwind content path for @supreme-intelligence already exists in",
        configName
      );
      return;
    }

    // Handle different config file formats
    if (configName.endsWith(".ts")) {
      // TypeScript config
      const contentArrayRegex = /content:\s*\[([\s\S]*?)\]/;
      const match = content.match(contentArrayRegex);

      if (match) {
        const existingContent = match[1];
        const newContent =
          existingContent.trim() +
          (existingContent.trim().endsWith(",") ? "" : ",") +
          `\n\t\t"${TAILWIND_CONTENT_PATH}"`;

        content = content.replace(
          contentArrayRegex,
          `content: [${newContent}\n\t]`
        );
        updated = true;
      }
    } else {
      // JavaScript config
      const contentArrayRegex = /content:\s*\[([\s\S]*?)\]/;
      const match = content.match(contentArrayRegex);

      if (match) {
        const existingContent = match[1];
        const newContent =
          existingContent.trim() +
          (existingContent.trim().endsWith(",") ? "" : ",") +
          `\n\t\t"${TAILWIND_CONTENT_PATH}"`;

        content = content.replace(
          contentArrayRegex,
          `content: [${newContent}\n\t]`
        );
        updated = true;
      }
    }

    if (updated) {
      fs.writeFileSync(configPath, content, "utf8");
      console.log(
        "✅ Successfully added @supreme-intelligence content path to",
        configName
      );
      console.log("📝 Added:", TAILWIND_CONTENT_PATH);
    } else {
      console.log(
        "⚠️  Could not automatically update",
        configName,
        "- please add the content path manually:"
      );
      console.log("📝 Add this to your content array:", TAILWIND_CONTENT_PATH);
    }
  } catch (error) {
    console.error("❌ Error updating", configName, ":", error.message);
    console.log(
      "📝 Please manually add this to your content array:",
      TAILWIND_CONTENT_PATH
    );
  }
}

function createTailwindConfigIfMissing() {
  const projectRoot = process.cwd();
  const configPath = path.join(projectRoot, "tailwind.config.js");

  const defaultConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "${TAILWIND_CONTENT_PATH}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

  try {
    fs.writeFileSync(configPath, defaultConfig, "utf8");
    console.log(
      "✅ Created tailwind.config.js with @supreme-intelligence content path"
    );
    return true;
  } catch (error) {
    console.error("❌ Error creating tailwind.config.js:", error.message);
    return false;
  }
}

function main() {
  console.log(
    "🚀 @supreme-intelligence/design-system postinstall script running..."
  );

  // Check if we're in a project that has this package installed
  const packageJsonPath = path.join(process.cwd(), "package.json");
  if (!fs.existsSync(packageJsonPath)) {
    console.log(
      "⚠️  No package.json found in current directory, skipping Tailwind config update"
    );
    return;
  }

  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    const hasDesignSystem =
      packageJson.dependencies?.["@supreme-intelligence/design-system"] ||
      packageJson.devDependencies?.["@supreme-intelligence/design-system"];

    if (!hasDesignSystem) {
      console.log(
        "⚠️  @supreme-intelligence/design-system not found in dependencies, skipping"
      );
      return;
    }
  } catch (error) {
    console.log("⚠️  Could not read package.json, skipping dependency check");
  }

  // Find existing Tailwind config
  const config = findTailwindConfig();

  if (config) {
    updateTailwindConfig(config.path, config.name);
  } else {
    console.log("📝 No Tailwind config found, creating one...");
    createTailwindConfigIfMissing();
  }

  console.log("✨ Postinstall script completed!");
}

// Only run if this script is executed directly (not imported)
if (require.main === module) {
  main();
}

module.exports = { main, updateTailwindConfig, findTailwindConfig };
