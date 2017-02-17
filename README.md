# group-by-object

Group an array by primitive values or objects (using [deep-equal](https://www.npmjs.com/package/deep-equal) and [Map](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map)).

## Installation

```js
npm install --save group-by-object
```

## Usage

```js
import groupBy from 'group-by-object'

const array = [
  { a: 1, b: { c: 1, d: 4 } },
  { a: 2, b: { c: 1, d: 4 } },
  { a: 1, b: { c: 2, d: 4 } },
  { a: 1, b: { c: 1, d: 6 } }
]

const groups = groupBy(array, item => {
  return {
    a: item.a,
    c: item.b.c
  }
})

console.log(groups)

/*
Map {
  { a: 1, c: 1 } => [
    { a: 1, b: { c: 1, d: 4 } },
    { a: 1, b: { c: 1, d: 6 } }
  ],
  { a: 2, c: 1 } => [
    { a: 2, b: { c: 1, d: 4 } }
  ],
  { a: 1, c: 2 } => [
    { a: 1, b: { c: 2, d: 4 } }
  ]
}
*/

```
