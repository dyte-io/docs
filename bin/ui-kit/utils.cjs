const fs = require('fs');
const prettier = require('prettier');
const { prettier: prettierConfig } = require('../../package.json');

/**
 * Writes to a file after text is formatted as MDX
 * @param {string} path
 * @returns
 */
function writeMDXFile(path, text) {
  return fs.writeFileSync(
    path,
    prettier.format(text, { ...prettierConfig, parser: 'mdx' })
  );
}

module.exports = { writeMDXFile };
