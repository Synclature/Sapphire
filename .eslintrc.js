const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
    env: {
        browser: true,
    },
    parser: 'babel-eslint',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 5,
        sourceType: 'module',
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    plugins: ['react', 'prettier', 'import'],
    rules: {
        'prettier/prettier': ['error', prettierOptions],
        'react/jsx-pascal-case': 2,
        'react/prefer-read-only-props': 2,
        'react/sort-prop-types': 2,
        'react/jsx-sort-props': 2,
        'react/no-typos': 2,
        'react/no-direct-mutation-state': 2,
        'react/jsx-no-duplicate-props': 2,
        'react/prefer-es6-class': 2,
        'react/boolean-prop-naming': 2,
        eqeqeq: 2,
        'no-var': 2,
        'no-console': 0,
        'prefer-template': 2,
        'spaced-comment': 2,
        'max-statements-per-line': 2,
        'multiline-comment-style': 2,
        'no-restricted-globals': [
            2,
            {
                name: 'fdescribe',
                message: 'Do not commit fdescribe. Use describe instead.',
            },
        ],
        'import/newline-after-import': [2, { count: 1 }],
        'import/no-duplicates': 2,
        'import/no-unresolved': 0,
        'padding-line-between-statements': [
            2,
            {
                blankLine: 'always',
                prev: '*',
                next: ['return', 'class', 'try', 'for', 'if', 'switch', 'while'],
            },
        ],
        'lines-between-class-members': [2, 'always'],
        // Clean up below this
        // 'no-use-before-define': 2,
        // 'prefer-const': 2,
        'import/namespace': 0,
        'import/default': 0,
        'react/prop-types': 0,
        'no-unused-vars': 0,
        'react/jsx-key': 0,
        'no-undef': 0,
        'react/display-name': 0,
        'react/no-deprecated': 0,
        'no-unsafe-finally': 0,
        'no-constant-condition': 0,
        'react/no-unescaped-entities': 0,
        'react/no-find-dom-node': 0,
        'react/no-string-refs': 0,
        // New Es lint rules update
        // camelcase: [2, { properties: 'always' }],
        // 'default-case': 'error',
        // 'max-lines': ['error', { max: 500, skipComments: true, skipBlankLines: true }],
        // 'max-depth': ['error', 4],
        // 'max-lines-per-function': ['error', { max: 75, skipComments: true, skipBlankLines: true }],
    },
};