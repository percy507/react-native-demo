module.exports = {
  root: true,
  extends: ['@react-native'],
  plugins: ['simple-import-sort'],
  rules: {
    'no-unused-vars': 0,
    'no-undef': 0,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'react/react-in-jsx-scope': 0,
    'react/no-unstable-nested-components': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': [2],
    '@typescript-eslint/consistent-type-imports': [2],
    '@typescript-eslint/no-duplicate-imports': 2,
  },
};
