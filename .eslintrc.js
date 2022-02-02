module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "plugin:security/recommended",
    "plugin:@next/next/recommended",
    "next/core-web-vitals",
  ],
  plugins: ["prettier", "security"],
  rules: {
    "import/extensions": "off",
    "import/named": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-unresolved": ["error", { ignore: ["^~/"] }],
    "import/prefer-default-export": "off",
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": ["warn", { extensions: [".ts", ".tsx"] }],
    "react/jsx-key": ["error", { checkFragmentShorthand: true }],
    "react/jsx-props-no-spreading": "off",
  },
};
