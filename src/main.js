const sortKeys = require('sort-keys')

module.exports = function (array, keySelector, elementSelector = null) {
  const keys = {}
  const map = new Map()
  for (let item of array) {
    const key = sortKeys(keySelector(item), {deep: true})
    const str = JSON.stringify(key)
    if (typeof keys[str] === 'undefined') {
      keys[str] = key
      map.set(key, [])
    }
    map.get(keys[str]).push(elementSelector !== null ? elementSelector(item) : item)
  }
  return map
}