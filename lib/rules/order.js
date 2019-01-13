'use strict';

module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    // specify the order of content within declaration blocks
    'order/order': ['custom-properties', 'declarations'],

    // specify the order of properties within declaration blocks
    'order/properties-order': [
      [{ properties: ['composes', 'compose-with'] }],
      { unspecified: 'bottomAlphabetical' },
    ],
  },
};
