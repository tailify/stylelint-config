'use strict';

const stylelint = require('stylelint');

it('should not contain invalid rules', async () => {
  const { errored, results } = await stylelint.lint({
    code: 'a { font-weight: 500; }\n',
    codeFilename: 'valid.css',
    configFile: './lib/index.js',
  });
  const { warnings } = results[0];

  expect(errored).toBeFalsy();
  expect(warnings.length).toBe(0);
});
