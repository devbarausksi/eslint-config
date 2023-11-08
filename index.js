/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "jsx-a11y",
    "react-hooks",
    "prettier",
    "tailwindcss",
    "@typescript-eslint"
  ],
  rules: {
    "prettier/prettier": ["error", {
      "endOfLine": "lf",
      "printWidth": 80,
      "tabWidth": 2,
      "singleQuote": true,
      "trailingComma": "all",
      "arrowParens": "always",
      "semi": false,
      "singleAttributePerLine": true,
      "plugins": [
        "@ianvs/prettier-plugin-sort-imports"
      ],
      "importOrder": [
        "^(react/(.*)$)|^(react$)",
        "^(next/(.*)$)|^(next$)",
        "<THIRD_PARTY_MODULES>",
        "",
        "^types$",
        "^@/(.*)$",
        "",
        "^[./]"
      ],
      "importOrderParserPlugins": [
        "typescript",
        "jsx",
        "decorators-legacy"
      ]
    }],
    'no-unused-vars': 'off',
    'no-empty-pattern': 'warn',
    'no-console': 'error',
    "react/jsx-sort-props": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    'react-hooks/exhaustive-deps': 'off',
    "jsx-a11y/alt-text": [
      "warn",
      {
        "elements": ["img"],
        "img": ["Image"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    '@typescript-eslint/no-unused-vars': ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        "prefer": "type-imports",
        "fixStyle": "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        "checksVoidReturn": { "attributes": false },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
    tailwindcss: {
      callees: [
        "cn"
      ],
      config: "tailwind.config.js"
    },
    next: {
      rootDir: [
        "./"
      ]
    }
  },
};
