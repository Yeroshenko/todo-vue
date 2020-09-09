module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': 'off',
    'arrow-parens': 'off',
    'object-curly-spacing': 'off',
    'comma-dangle': 'off',
    'linebreak-style': 'off',
    'eol-last': 'off',
    'require-jsdoc': 'off',
    'object-curly-newline': 'off',
    'import/extensions': 'off'
  }
}
