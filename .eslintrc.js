const error = 'error'

module.exports = {
  root: true,
  ignorePatterns: [
    'commitlint.config.js',
    'generated.ts',
  ],
  'extends': [
    '@react-native-community',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-native/all',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },

    project: 'tsconfig.json',
    tsconfigRootDir: '.',
    createDefaultProgram: true,
  },
  plugins: ['@typescript-eslint', 'react', 'unused-imports'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    camelcase: 0,
    curly: [error, 'all'],
    complexity: [error, { max: 6 }],
    'lines-between-class-members': 0,
    'max-nested-callbacks': [error, 4],
    'max-len': [error, 120],
    'member-access': 0,
    'no-irregular-whitespace': 2,
    'no-duplicate-imports': error,
    'only-arrow-functions': 0,
    quotes: [error, 'single', { avoidEscape: true }],
    semi: [error, 'never'],
    'space-before-function-paren': [
      error,
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    eqeqeq: [error, 'always', { 'null': 'ignore' }],
    'quote-props': [error, 'as-needed', { keywords: true }],

    'react-native/sort-styles': 0,

    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'import/extensions': [
      error,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        jpg: 'never',
      },
    ],
    'import/order': [
      error,
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',

          'internal',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc', /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
          caseInsensitive: true, /* ignore case. Options: [true, false] */
        },
      },
    ],
    'max-classes-per-file': 0,
    'no-else-return': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-nested-ternary': 0,
    'implicit-arrow-linebreak': 0,
    'no-unreachable': 1,
    'no-param-reassign': 1,
    'no-use-before-define': 0,
    'react/jsx-no-literals': error,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-use-before-define': [2, { variables: false }],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/member-delimiter-style': [error, {
      multiline: {
        delimiter: 'comma', // 'none' or 'semi' or 'comma'
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma', // 'semi' or 'comma'
        requireLast: true,
      },
    }],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    // note you must disable the base rule as it can report incorrect errors
    'no-shadow': 'off',
    'ban-ts-ignore': 0,
    'ban-ts-comment': 0,
    'operator-linebreak': [error, 'before'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'block-like', next: 'block-like' },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
