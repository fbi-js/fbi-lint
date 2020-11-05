const option = {
  extends: [
    'eslint:recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    // 0-off 1-warning 2-error
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    '@typescript-eslint/explicit-function-return-type': [
      0,
      { allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
}
module.exports = option
