module.exports = {

  env: {
    browser: true,
    es6: true,
    jest: true,
    mocha: true,
    node: true,
  },

  extends: [
    require.resolve(`./import`),
    `eslint:recommended`,
  ],

  parser: `babel-eslint`,

  plugins: [ `babel` ],

  rules: {
    // Warnings
    "no-console": `warn`,
    "sort-keys": `warn`,

    // Errors
    "arrow-parens": [`error`, `as-needed`],
    "arrow-spacing": `error`,
    camelcase: `error`,
    "comma-dangle": [`error`, `always-multiline`],
    "comma-spacing": [`error`, { after: true, before: false }],
    "comma-style": [`error`, `last`],
    eqeqeq: [`error`, `smart`],
    indent: [`error`, 2],
    "jsx-quotes": [`error`, `prefer-single`],
    "key-spacing": `error`,
    "keyword-spacing": [`error`, { after: true, before: true }],
    "no-array-constructor": `error`,
    "no-new-object": `error`,
    "no-unused-vars": [`error`, { ignoreRestSiblings: true }],
    "no-var": `error`,
    "object-curly-spacing": [`error`, `always`],
    "prefer-const": `error`,
    "prefer-template": `error`,
    "quote-props": [`error`, `as-needed`],
    quotes: [`error`, `single`],
    semi: [`error`, `always`],
    "semi-spacing": [`error`, { after: false, before: false }],
    "space-before-blocks": `error`,
    "space-infix-ops": `error`,
    "space-unary-ops": [`error`, {
      nonwords: true,
      overrides: { "!": false, ".": false },
      words: true,
    }],
  },

};