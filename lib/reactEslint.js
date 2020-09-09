const options = require('./eslint')
module.exports = {
  ...options,
  extends: [...options.extends, 'prettier/react', 'react-app'],
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
