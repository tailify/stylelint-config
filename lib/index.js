'use strict';

module.exports = {
  extends: [
    './rules/browser-features.js',
    './rules/language-features.js',
    './rules/order.js',
    './rules/possible-errors.js',
    './rules/stylistic-issues.js',
    'stylelint-prettier/recommended',
  ],
};
