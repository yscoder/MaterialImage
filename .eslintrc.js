module.exports = {
  root: true,
  parser: 'babel-eslint',
  'env': {
    'browser': true,
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  plugins: [
    'html'
  ],
  'rules': {
    'import/extensions': ['error', 'always', {
      'js': 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-underscore-dangle': 0,
  }
}
