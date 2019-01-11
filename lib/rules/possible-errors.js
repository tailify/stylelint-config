'use strict';

module.exports = {
  rules: {
    // disallow unknown at-rules
    'at-rule-no-unknown': [true, { ignoreAtRules: ['value'] }],

    // disallow empty blocks
    'block-no-empty': true,

    // disallow invalid hex colors
    'color-no-invalid-hex': true,

    // disallow empty comments
    'comment-no-empty': true,

    // disallow duplicate properties within declaration blocks
    'declaration-block-no-duplicate-properties': [true, { ignore: ['consecutive-duplicates'] }],

    // disallow duplicate font family names
    'font-family-no-duplicate-names': true,

    // disallow missing generic families in lists of font family names
    'font-family-no-missing-generic-family-keyword': true,

    // disallow an unspaced operator within calc functions
    'function-calc-no-unspaced-operator': true,

    // disallow direction values in linear-gradient() calls that are not valid according to the standard syntax
    'function-linear-gradient-no-nonstandard-direction': true,

    // disallow !important within keyframe declarations
    'keyframe-declaration-no-important': true,

    // disallow unknown media feature names
    'media-feature-name-no-unknown': [
      true,
      {
        ignoreMediaFeatureNames: ['prefers-reduced-motion'],
      },
    ],

    // disallow selectors of lower specificity from coming after overriding selectors of higher specificity
    'no-descending-specificity': true,

    // disallow duplicate @import rules within a stylesheet
    'no-duplicate-at-import-rules': true,

    // disallow duplicate selectors
    'no-duplicate-selectors': true,

    // disallow empty sources
    'no-empty-source': true,

    // disallow double-slash comments (//...) which are not supported by CSS
    'no-invalid-double-slash-comments': true,

    // disallow unknown properties
    'property-no-unknown': [true, { ignoreProperties: ['composes', 'composes-with'] }],

    // disallow unknown pseudo-class selectors
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'import', 'global', 'local', 'external'],
      },
    ],

    // disallow unknown pseudo-element selectors
    'selector-pseudo-element-no-unknown': true,

    // disallow unknown type selectors
    'selector-type-no-unknown': [true, { ignoreTypes: ['from'] }],

    // disallow (unescaped) newlines in strings
    'string-no-newline': true,

    // disallow unknown units
    'unit-no-unknown': true,
  },
};
