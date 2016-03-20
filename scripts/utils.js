const evalObjectValue = (selector, object) => {
  const props = selector.replace(/\./g, `']['`)
  try {
    return eval(`object['${props}']`)
  } catch (err) {
    return undefined
  }
}

const reduce = (fn, initial, object) => (
  Object.keys(object).reduce((acc, key) => fn(acc, object[key], key), initial)
)

module.exports = {
  evalObjectValue: evalObjectValue,
  reduce: reduce,
}
