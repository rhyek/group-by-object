const equal = require('deep-equal')

module.exports = function(array, keySelector, elementSelector = null) {
  const map = new Map()
  array.forEach(item => {
    const key = keySelector(item)
    let found = null
    for (let k of map.keys()) {
      if (equal(key, k)) {
        found = k
        break
      }
    }
    if (found === null) {
      map.set(key, [])
      found = key
    }
    map.get(found).push(elementSelector !== null ? elementSelector(item) : item)
  })
  return map
}