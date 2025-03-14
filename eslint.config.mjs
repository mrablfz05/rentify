import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/",
      "public/",
      ".next/",
      "dist/",
      "*.json",
      "*.svg",
      "*.config.js",
      "*.config.mjs",
    ],
  },
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ),
  {
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": eslintPluginTypescript,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "simple-import-sort": eslintPluginSimpleImportSort,
      "jsx-a11y": eslintPluginJsxA11y,
      tailwindcss: eslintPluginTailwindcss,
      prettier: eslintPluginPrettier,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: false,
        },
      ],

      "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
      "react/react-in-jsx-scope": "off",
      "jsx-a11y/anchor-is-valid": "off",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",

      "tailwindcss/no-custom-classname": "off",

      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
    settings: {
      react: { version: "detect" },
      tailwindcss: { callees: ["classnames", "clsx", "ctl"] },
    },
  },
];

export default eslintConfig;
