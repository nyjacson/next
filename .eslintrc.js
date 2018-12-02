module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended', 'plugin:prettier/recommended'],
  root: true,

  parser: 'babel-eslint',

  plugins: ['import', 'flowtype', 'jsx-a11y', 'react'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },

  settings: {
    'import/ignore': ['node_modules'],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  },

  rules: {
    'arrow-body-style': 'off',
    'comma-dangle': 'off',
    'global-require': 'off',
    'import/default': 'warn',
    'import/extensions': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'warn',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: false }],
    'jsx-a11y/label-has-for': 'off',
    'max-len': 'off',
    'no-alert': 'off',
    'no-case-declarations': 'warn',
    'no-console': 'off',
    'no-constant-condition': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-syntax': 'warn',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'new-cap': 'off',
    'object-curly-spacing': 'warn',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/no-multi-comp': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-key': 'warn',
    'react/prefer-stateless-function': 'warn',
    'spaced-comment': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true
      }
    ]
  }
}
