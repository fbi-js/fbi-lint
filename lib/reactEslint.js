// eslint-disable-next-line @typescript-eslint/no-var-requires
const options = require('./eslint')
module.exports = {
  ...options,
  extends: [
    ...options.extends,
    'plugin:react/recommended',
    'prettier/react',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    ...options.rules,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': [
      1,
      {
        additionalHooks: '(useMyCustomHook|useMyOtherCustomHook)',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
