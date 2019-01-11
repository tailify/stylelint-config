'use strict';

const stylelint = require('stylelint');

it('should not contain invalid rules', async () => {
  const { errored, results } = await stylelint.lint({
    code: '.button {\n  font-weight: 500;\n}\n',
    codeFilename: 'valid.css',
    configFile: './lib/index.js',
  });
  const { warnings } = results[0];

  expect(errored).toBeFalsy();
  expect(warnings.length).toBe(0);
});
