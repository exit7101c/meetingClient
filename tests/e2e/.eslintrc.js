module.exports = {
  plugins: ['cypress'],
  env: {
    mocha: true,
    'cypress/globals': true
  },
  rules: {
    strict: 'off',
    'no-unused-vars': 'off'
  }
};
