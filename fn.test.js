const fn = require('./fn.js')

/*
 * Matcher
 */

// toBe
test('1 is 1', () => {
  expect(1).toBe(1)
})

test('2 + 3 = 5', () => {
  expect(fn.add(2, 3)).toBe(5)
})

test('3 + 3 != 5', () => {
  expect(fn.add(3, 3)).not.toBe(5)
})

// toEqual - Array and Object need to deep equality so use it.
test('return name and age that object', () => {
  expect(fn.makeUser('jisung', 30)).toEqual({
    name: 'jisung',
    age: 30
  })
})

test('return name and age that object', () => {
  expect(fn.makeUser('jisung', 30)).toStrictEqual({
    name: 'jisung',
    age: 30
  })
})

// toBeNull
test('null is null', () => {
  expect(null).toBeNull()
})

// toBeUndefined
test('undefined is undefined', () => {
  expect(undefined).toBeUndefined()
})

// toBeDefined
test('defined is defined', () => {
  expect(undefined).toBeDefined()
})

// toBeTruthy

// toBeFalsy
