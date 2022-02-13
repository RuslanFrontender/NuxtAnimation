module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'airbnb-base',
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
    'max-len': ['error', { code: 100, ignoreStrings: true }],
    'no-param-reassign': ['warn']
  },
};
