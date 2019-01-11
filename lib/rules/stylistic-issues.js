'use strict';

module.exports = {
  rules: {
    // specify short or long notation for hex colors
    'color-hex-length': 'short',

    // require or disallow an empty line before comments
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],

    // require or disallow whitespace on the inside of comment markers
    'comment-whitespace-inside': 'always',

    // require or disallow an empty line before custom properties
    'custom-property-empty-line-before': 'never',

    // require or disallow an empty line before declarations
    'declaration-empty-line-before': 'never',

    // specify whether or not quotation marks should be used around font family names
    'font-family-name-quotes': 'always-where-recommended',

    // require numeric or named (where possible) font-weight values
    'font-weight-notation': 'numeric',

    // specify lowercase or uppercase for function names
    'function-name-case': 'lower',

    // require or disallow quotes for urls
    'function-url-quotes': ['always', { except: ['empty'] }],

    // require or disallow whitespace after functions
    'function-whitespace-after': 'always',

    // disallow units for zero lengths
    'length-zero-no-unit': true,

    // specify unix or windows linebreaks
    linebreaks: 'unix',

    // require a single space or disallow whitespace after the range operator in media features
    'media-feature-range-operator-space-after': 'always',

    // require a single space or disallow whitespace before the range operator in media features
    'media-feature-range-operator-space-before': 'always',

    // Disallow empty first lines,
    'no-empty-first-line': true,

    // disallow missing end-of-source newlines
    'no-missing-end-of-source-newline': true,

    // require a single space or disallow whitespace after operators within attribute selectors
    'selector-attribute-operator-space-after': 'never',

    // require a single space or disallow whitespace before operators within attribute selectors
    'selector-attribute-operator-space-before': 'never',

    // specify single or double colon notation for applicable pseudo-elements
    'selector-pseudo-element-colon-notation': 'double',

    // specify lowercase or uppercase for type selector
    'selector-type-case': 'lower',

    // specify lowercase or uppercase for keywords values
    'value-keyword-case': 'lower',
  },
};
