const equal = require('deep-equal')

module.exports = function(array, fn) {
  const map = new Map()
  array.forEach(item => {
    const key = fn(item)
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
    map.get(found).push(item)
  })
  return map
}