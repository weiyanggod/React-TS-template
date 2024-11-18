import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'
import eslintrcAutoImport from './.eslintrc-auto-import.js'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...eslintrcAutoImport.globals,
      },
      parser: tsParser, // 使用 @typescript-eslint/parser 作为解析器
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...pluginReact.configs['jsx-runtime'].rules,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]
