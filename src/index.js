/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    node: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier", "simple-import-sort"],
  rules: {
    "prettier/prettier": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^\\u0000"], ["^@?\\w"], ["^"], ["^\\."], ["^.+\\u0000$"]]
      },
    ],
  },
};
