module.exports = {

  extends: [
    require.resolve(`./index`),
    `plugin:react/recommended`,
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    `react`,
  ],

  rules: {
    "react/default-props-match-prop-types": `error`,
    "react/display-name": `off`,
    "react/jsx-boolean-value": [`error`, `never`],
    "react/jsx-curly-spacing": `error`,
    "react/jsx-equals-spacing": `error`,
    "react/jsx-handler-names": `error`,
    "react/jsx-pascal-case": `error`,
    "react/jsx-sort-props": `warn`,
    "react/jsx-tag-spacing": [
      "error",
      {
        "beforeSelfClosing": "always",
      }
    ],
    "react/jsx-wrap-multilines": `error`,
    "react/no-array-index-key": `error`,
    "react/no-did-mount-set-state": `error`,
    "react/no-did-update-set-state": `error`,
    "react/no-multi-comp": `error`,
    "react/no-redundant-should-component-update": `error`,
    "react/no-string-refs": `error`,
    "react/no-unescaped-entities": `error`,
    "react/no-unused-prop-types": `error`,
    "react/no-will-update-set-state": `error`,
    "react/prefer-es6-class": [`error`, `always`],
    "react/require-default-props": `error`,
    "react/self-closing-comp": `error`,
    "react/sort-comp": `error`,
    "react/style-prop-object": `error`,
  },
};
