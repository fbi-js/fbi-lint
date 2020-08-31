# fbi-lint

一个包含 prettier，eslint 的配置文件集合

## 使用

在 `.prettierrc.js`

```javascript
const lint = require('fbi-lint').prettier
module.exports = {
  ...lint,
  //... 你的配置项
}
```

在 `.eslintrc.js`

```javascript
// js/ts require('fbi-lint').eslint
// vue  require('fbi-lint').vueEslint
// react require('fbi-lint').reactEslint
const lint = require('fbi-lint').eslint
module.exports = {
  ...lint,
  rules: {
    ...lint.rules,
    // 你的规则
  },
  // 你的配置项
}
```

## 说明

目前该包里面包含了一些基本配置，具体的一些公共的规则需要完善

- javaScript/typescript 的 eslint 配置项
- vue 环境的 eslint 配置项
- react 环境的 eslint 配置项

vscode 的 settings.json 可以使用以下配置来保证开发体验（额外说明：如果同时安装了 vetur 和 prettier 插件，需要指定以下.vue 文件的以 prettier 来 format，不然 vetur 的 format 会和 eslint+prettier 冲突）

```json
{
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "editor.formatOnSave": true,
  "eslint.validate": ["javascript", "javascriptreact", "vue"],
  "vetur.validation.template": false,
  "[vue]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## 参考

- https://github.com/eslint/eslint
- https://github.com/prettier/prettier
- https://github.com/vuejs/eslint-plugin-vue
- https://github.com/yannickcr/eslint-plugin-react
- https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
