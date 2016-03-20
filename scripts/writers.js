var reduce = require('./utils').reduce

const writeCSSClass = (object) => {
  const initial = `
  /*

    EMMET SELECTORS

  */
  `
  return reduce((final, value, key) => (
    `${final}
  .${key.replace(':', '-')} { ${value.replace(':', ': ')} }`
  ), initial, object)
}

module.exports = {
  writeCSSClass: writeCSSClass,
}
