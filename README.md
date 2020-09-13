# eslint-config-jensrott
:wrench: Personal ESLint config

## Installation

Install eslint and this package, save it as a devDependency:

```
npm i -D eslint eslint-config-jensrott
```

Create a .eslintrc file in the root of your project's directory (it should live where package.json does).   
Add this to your .eslintrc file:  

```json
{
  "extends": "jensrott"
}
```

If you're using React:

```json
{
  "extends": "jensrott/react"
}
```

You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.