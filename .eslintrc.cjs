module.exports = {
  root: true,
  env: {
    browser: true,
    es2017: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    },
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 2017,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    jsx: true,
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    camelcase: 'error',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
  ignorePatterns: ['.eslintrc.js'],
}
