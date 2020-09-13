module.exports = {
  plugins: [
    `import`
  ],

  rules: {
    'import/first': `error`,
    'import/newline-after-import': `error`,
    'import/no-amd': `error`,
    'import/no-commonjs': `error`,
    'import/no-deprecated': `error`,
    'import/no-duplicates': `error`,
    'import/no-dynamic-require': `error`,
    'import/no-extraneous-dependencies': `error`,
    'import/no-mutable-exports': `error`,
    'import/no-named-as-default': `error`,
    'import/no-named-as-default-member': `error`,
    'import/no-named-default': `error`,
    'import/no-nodejs-modules': `error`,
    'import/no-webpack-loader-syntax': `error`,
    'import/prefer-default-export': `error`,
    'import/unambiguous': `error`,
  }
}