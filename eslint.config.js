module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended", // Adjust based on your Vue version
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  },
  plugins: ["react", "@typescript-eslint", "vue"],
  rules: {
    // Add any custom rules here
  },
};
