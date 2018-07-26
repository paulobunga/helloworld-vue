// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  extends: ['airbnb-base', 'plugin:vue/recommended' /*, '@vue/airbnb' */],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': 'warn',
    'arrow-parens': ['warn', 'always'],
    'vue/attributes-order': 'warn',
    'vue/require-default-prop': 'warn',
  },
};
