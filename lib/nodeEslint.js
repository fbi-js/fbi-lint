const options = require('./eslint')
module.exports = {
  ...options,
  env: {
    broswer: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'off',
  },
}
