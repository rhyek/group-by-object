var assert = require('assert')
var groupByObject = require('.')

var testArray = [
  { a: 1, b: { c: 1, d: 4 } },
  { a: 2, b: { c: 1, d: 4 } },
  { a: 1, b: { c: 2, d: 4 } },
  { a: 1, b: { c: 1, d: 6 } }
]

describe('groupByObject()', function() {
  var groups = groupByObject(testArray, function(item) {
    return {
      a: item.a,
      c: item.b.c
    }
  })
  it('should create 3 groups', function() {
    assert.equal(3, Array.from(groups.keys()).length)
  })
  describe('first group', function() {
    it('should have 2 items', function() {
      assert.equal(2, Array.from(groups.values())[0].length)
    })
  })
  describe('second group', function() {
    it('should have 1 item', function() {
      assert.equal(1, Array.from(groups.values())[1].length)
    })
  })
  describe('first group key', function() {
    var key = Array.from(groups.keys())[0]
    it('should have 2 keys', function() {
      assert.equal(2, Object.keys(key).length)
    })
    it('should equal { a: 1, c: 1 }', function() {
      assert.deepEqual({ a: 1, c: 1 }, key)
    })
  })
})