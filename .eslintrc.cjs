module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: "current", "jest/globals": true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "jest"],
  rules: {
    indent: ["warn", 2, { SwitchCase: 1 }], // use 2 space
    semi: ["warn", "always"], // use ;
    "no-console": "warn", // don't build console.log()
    "prefer-const": "warn", // use 'const' for constants instead of 'let'
    "jest/no-focused-tests": "off", // to apply use it.only()
  },
};
