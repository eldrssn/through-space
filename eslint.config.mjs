import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    ignores: ['dist', 'node_modules'],
  },
  ...compat.extends(
    'eslint:recommended',
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ),

  ...compat.plugins('react-refresh', 'simple-import-sort', 'prettier'),

  {
    rules: {
      'react-refresh/only-export-components': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      'import/order': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^react$'], ['^[a-z]'], ['^@']],
        },
      ],
    },
  },
]

export default eslintConfig
