module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
