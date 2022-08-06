/* eslint-disable quote-props */
const fs = require('fs');
const path = require('path');

module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['airbnb', 'plugin:react/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        React: 'writable',
        snap: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        allowImportExportEverywhere: false,
        codeFrame: false,
    },
    plugins: ['react'],
    rules: {
        camelcase: 'off',
        indent: ['error', 4],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 0,
        'react/no-array-index-key': 0,
        'import/no-named-as-default': 0,
        'max-len': ['error', { code: 150, ignoreComments: true }],
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
        'import/no-extraneous-dependencies': 'off',
        'eslint-disable react/prop-types': [0],
        'eslint-disable import/no-unresolved': [0],
        'eslint-disable react/function-component-definition': [0],
        'no-unused-vars': 'off',
        'object-shorthand': 'off',
        'no-console': 'off',
        'import/no-self-import': 'off',
        'no-nested-ternary': 'off',
        'react/self-closing-comp': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-boolean-value': 'off',
        'react/no-unstable-nested-components': 'off',
        'array-callback-return': 'off',
        'eqeqeq': 'off',
        'import/order': 'off',
        'prefer-const': 'off',
        'prefer-template': 'off',
        'import/newline-after-import': 'off',
        'spaced-comment': 'off',
        'no-restricted-syntax': 'off',
        'jsx-a11y/alt-text': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'arrow-body-style': 'off',
        'no-else-return': 'off',
        'operator-assignment': 'off',
        'no-unused-expressions': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'no-use-before-define': 'off',
        'import/no-unresolved': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'react/no-unknown-property': 'off',
        'import/no-duplicates': 'off',
        'react/button-has-type': 'off',
        'no-unsafe-optional-chaining': 'off',
        'no-lonely-if': 'off',
        'no-dupe-else-if': 'off',

        'object-curly-newline': ['error',
            {
                'ObjectExpression': { 'consistent': true, 'multiline': true },
            }],
    },
    overrides: [
        {
            files: ['*.js'],
        },
    ],
    settings: {
        'import/parser': 'babel-eslint',
        'import/ignore': './node_modules',
        'import/resolver': {
            'node': {
                'paths': ['src'],
            },
        },
    },
};
