const path = require('path')
const fs = require('fs')
const whiteList = require('./white-list')
const reduce = require('./utils').reduce

const generateCSSString = (object, comment) => {
  const initial = `/*

  ${comment}

*/
`
  return reduce((final, value, key) => (
    `${final}
.${key.replace(/\:/g, '-')} { ${value.replace(':', ': ')} }`
  ), initial, object)
}

const filterStyles = object => {
  const searchMatch = (match, obj) => {
    return reduce((final, value, key) => {
      if(value.indexOf(match) === 0) final[key] = value
      return final
    }, {}, obj)
  }
  const properties = whiteList.map(prop => searchMatch(prop, object))
  var finalObject = {}
  properties.forEach(prop => Object.assign(finalObject, prop))
  return finalObject
}

module.exports = object => {
  const FILE_DIR = path.join(__dirname, "../lib")
  const FULL_FILE_NAME = '_emmet-selectors.css'
  const COMPACT_FILE_NAME = '_general-selectors.css'
  const filteredStyles = filterStyles(object)

  const fullCss = generateCSSString(object, 'EMMET SELECTORS')
  const compactCss = generateCSSString(filteredStyles, 'GENERAL SELECTORS')

  fs.writeFileSync([FILE_DIR, FULL_FILE_NAME].join('/'), fullCss);
  fs.writeFileSync([FILE_DIR, COMPACT_FILE_NAME].join('/'), compactCss);
  console.log('UPDATED: Emmet selectors')
}
