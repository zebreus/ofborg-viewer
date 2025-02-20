module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.cjs"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      env: {
        node: true,
      },
      files: ["vite.config.js"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  globals: {
    GIT_REVISION: true,
    VERSION: true,
  },
};
