'use strict';

module.exports = {
  rules: {
    // disallow vendor prefixes for at-rules
    'at-rule-no-vendor-prefix': true,

    // require (where possible) or disallow named colors
    'color-named': ['never', { ignoreProperties: ['composes'] }],

    // limit the number of declarations within single line declaration blocks
    'declaration-block-single-line-max-declarations': 1,

    // disallow !important within declarations
    'declaration-no-important': true,

    // specify a blacklist of disallowed property and value pairs within declarations
    'declaration-property-value-blacklist': {
      '/.+/': ['initial'],
      '/^background/': ['http:', 'https:'],
      '/^border/': ['none'],
      '/^position/': ['fixed'],
      '/^transition/': ['/all/'],
    },

    // disallow scheme-relative urls
    'function-url-no-scheme-relative': true,

    // specify a whitelist of allowed url schemes
    'function-url-scheme-whitelist': ['data', '/^http/'],

    // limit the depth of nesting
    'max-nesting-depth': 2,

    // disallow vendor prefixes for media feature names
    'media-feature-name-no-vendor-prefix': true,

    // disallow unknown animations
    'no-unknown-animations': true,

    // disallow vendor prefixes for properties
    'property-no-vendor-prefix': true,

    // specify a pattern for class selectors
    'selector-class-pattern': ['^[a-z][a-zA-Z0-9]+$', { resolveNestedSelectors: true }],

    // limit the number of attribute selectors in a selector
    'selector-max-attribute': 0,

    // limit the number of classes in a selector
    'selector-max-class': 1,

    // limit the number of compound selectors in a selector
    'selector-max-compound-selectors': 1,

    // limit the number of ID selectors in a selector
    'selector-max-id': 0,

    // limit the specificity of selectors
    'selector-max-specificity': '0,2,1',

    // limit the number of type in a selector
    'selector-max-type': 0,

    // limit the number of universal selectors in a selector
    'selector-max-universal': 0,

    // disallow qualifying a selector by type
    'selector-no-qualifying-type': true,

    // disallow vendor prefixes for selectors
    'selector-no-vendor-prefix': true,

    // disallow redundant values in shorthand properties
    'shorthand-property-no-redundant-values': true,

    // specify the minimum number of milliseconds for time values
    'time-min-milliseconds': 100,

    // disallow vendor prefixes for values
    'value-no-vendor-prefix': true,
  },
};
