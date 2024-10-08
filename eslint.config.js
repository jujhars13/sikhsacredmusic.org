module.exports = {
    env: {
      browser: true,
      es2021: true,
      jquery: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'prettier', // Prevent Prettier conflicts
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {},
    globals: {
      hljs: true,
      imagesLoaded: true,
      Isotope: true,
      L: true, // Global from maps library
      GMaps: true,
      Fuse: true,
      instantsearch: true,
    },
  };
