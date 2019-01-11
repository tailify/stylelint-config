'use strict';

module.exports = {
  extends: [
    './rules/limit-language-features.js',
    './rules/possible-errors.js',
    './rules/stylistic-issues.js',
    'stylelint-prettier/recommended',
  ],
};
