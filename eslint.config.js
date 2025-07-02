import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "public/downloads/"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        browser: true,
        es2020: true,
        node: false,
        commonjs: false,
        amd: false,
        mocha: false,
        jest: false,
        jasmine: false,
        phantomjs: false,
        protractor: false,
        qunit: false,
        jquery: false,
        prototype: false,
        yui: false,
        shelljs: false,
        worker: false,
        serviceworker: false,
        atom: false,
        ember: false,
        webextensions: false,
        greasemonkey: false,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "warn",
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
);
