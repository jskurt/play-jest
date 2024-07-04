/**
 ****************************************************************************************************
 * ### Matcher __TEST__
 ****************************************************************************************************
 */
const testFunc = require('./matchers.js')

// toBe
// {
//   test('1 is 1', () => {
//     expect(1).toBe(1)
//   })
//
//   test('2 + 3 = 5', () => {
//     expect(testFunc.add(2, 3)).toBe(5)
//   })
//
//   test('3 + 3 != 5', () => {
//     expect(testFunc.add(3, 3)).not.toBe(5)
//   })
// }

// toEqual vs toStrictEqual
// {
//   // toEqual - Array and Object need to deep equality so use it.
//   test('return name and age that object', () => {
//     expect(testFunc.makeUser('jisung', 30)).toEqual({
//       name: 'jisung',
//       age: 30
//     })
//   })
//
//   // toStrictEqual
//   test('return name and age that object', () => {
//     expect(testFunc.makeUser('jisung', 30)).toStrictEqual({
//       name: 'jisung',
//       age: 30
//     })
//   })
// }

// toBeNull
// {
//   test('null is null', () => {
//     expect(null).toBeNull()
//   })
// }

// toBeUndefined
// {
//   test('undefined is undefined', () => {
//     expect(undefined).toBeUndefined()
//   })
// }

// toBeDefined
// {
//   test('null is defined', () => {
//     expect(null).toBeDefined()
//   })
//
//   test('undefined is defined', () => {
//     expect(undefined).toBeDefined()
//   })
// }

// toBeTruthy
// {
//   test('1 and string is truthy', () => {
//     expect(1).toBeTruthy()
//     expect(testFunc.add('hello', 'world')).toBeTruthy()
//   })
// }

// toBeFalsy
// {
//   test('0 is truthy', () => {
//     expect(0).toBeFalsy()
//   })
// }

// toBeGreaterThan
// toBeGreaterThanOrEqual
// toBeLessThan
// toBeLessThanOrEqual
// {
//   test('ID less than 10', () => {
//     const id = 'JISUNG_LEE'
//     expect(id.length).toBeLessThanOrEqual(10)
//   })
//
//   test('PW length is 4', () => {
//     const pw = '1234'
//     expect(pw.length).toBe(4)
//   })
//
//   test('PW length is 4', () => {
//     const pw = '1234'
//     expect(pw.length).toEqual(4)
//   })
// }

// toBeCloseTo
// {
//   test('0.1 + 0.2 = 0.3', () => {
//     expect(testFunc.add(0.1, 0.2)).toBeCloseTo(0.3)
//   })
// }

// toMatch using Regex
// {
//   test('Does it has a in Hello world?', () => {
//     expect('Hello, world').toMatch(/H/)
//   })
// }

// toContain
// {
//   test('Does it has Jisung in user list?', () => {
//     const user = 'Jisung'
//     const userList = ['Jisung', 'Jenny', 'Kurt']
//     expect(userList).toContain(user)
//   })
// }

// toThrow
// {
//   test('Does it occur error xx?', () => {
//     expect(() => testFunc.throwError()).toThrow('xx')
//   })
//
//   test('Does it occur error?', () => {
//     expect(() => testFunc.throwError()).toThrow()
//   })
//
//   test('Does it occur error?', () => {
//     expect(function () {
//       testFunc.throwError()
//     }).toThrow()
//   })
// }
