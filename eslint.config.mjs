import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Convert the module URL to a file path and get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat with the base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define the ESLint configuration
const eslintConfig = [
  // Extend Next.js configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add custom rules and configurations
  ...compat.config({
    extends: ["next"],
    rules: {
      // Disable specific rules
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",

      // Disable React Hook dependency warnings entirely
      "react-hooks/exhaustive-deps": "off",

      // Disable unused variable warnings entirely
      "@typescript-eslint/no-unused-vars": "off",

      // Disable explicit 'any' warnings entirely
      "@typescript-eslint/no-explicit-any": "off",

      // Disable unused eslint-disable directive warnings entirely
      "eslint-comments/no-unused-disable": "off",
    },
  }),
];

export default eslintConfig;