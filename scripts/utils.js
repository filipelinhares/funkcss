const reduce = (fn, initial, object) => (
  Object.keys(object).reduce((acc, key) => fn(acc, object[key], key), initial)
)

module.exports = {
  reduce: reduce,
}
