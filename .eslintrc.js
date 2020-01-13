module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [
      "eslint:recommended",
      'plugin:react/recommended',  
      'plugin:@typescript-eslint/recommended'
    ],
    "env": {
      "browser": true
    },
    parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
    ecmaFeatures:  {
      jsx:  true,
    },
    },
    rules:  {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/interface-name-prefix": "off"
    },
    settings:  {
      react:  {
        version:  'detect',
      },
    },
  };