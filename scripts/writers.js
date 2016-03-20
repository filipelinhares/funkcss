const path = require('path')
const fs = require('fs')
const reduce = require('./utils').reduce

const generateCSSString = (object) => {
  const initial = `/*

  EMMET SELECTORS

*/
`
  return reduce((final, value, key) => (
    `${final}
.${key.replace(':', '-')} { ${value.replace(':', ': ')} }`
  ), initial, object)
}

writeCSSFile = (object) => {
  const FILE_DIR = path.join(__dirname, "../lib")
  const FILE_NAME = '_emmet-selectors.css'
  const css = generateCSSString(object)
  fs.writeFileSync([FILE_DIR, FILE_NAME].join('/'), css);
  console.log('UPDATED: Emmet selectors')
}

module.exports = {
  writeCSSFile: writeCSSFile,
}
