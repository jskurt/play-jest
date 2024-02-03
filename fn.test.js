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
test('1 and string is truthy', () => {
  expect(1).toBeTruthy()
  expect(fn.add('hello', 'world')).toBeTruthy()
})

// toBeFalsy
test('0 is truthy', () => {
  expect(0).toBeFalsy()
})

// toBeGreaterThan
// toBeGreaterThanOrEqual
// toBeLessThan
// toBeLessThanOrEqual

test('ID less than 10', () => {
  const id = 'JISUNG_LEE'
  expect(id.length).toBeLessThanOrEqual(10)
})

test('PW length is 4', () => {
  const pw = '1234'
  expect(pw.length).toBe(4)
})

test('PW length is 4', () => {
  const pw = '1234'
  expect(pw.length).toEqual(4)
})

test('0.1 + 0.2 = 0.3', () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3)
})

test('Does it has a in Hello world?', () => {
  expect('Hello, world').toMatch(/H/)
})

test('Does it has Jisung in user list?', () => {
  const user = 'Jisung'
  const userList = ['Jisung', 'Jenny', 'Kurt']
  expect(userList).toContain(user)
})

test('Does it occur error?', () => {
  expect(() => fn.throwError()).toThrow('xx')
})

test('received name is Jisung after 3 second', (done) => {
  function callback(name) {
    expect(name).toBe('Jisung')
    done()
  }
  fn.getName(callback)
})

// if you want check API errors
test('received name is Jisung after 3 second', (done) => {
  function callback(name) {
    try {
      expect(name).toBe('Jisung')
      done()
    } catch (error) {
      done()
    }
  }
  fn.getName(callback)
})

test('received age is 30 after 3 second', () => {
  return fn.getAge().then((age) => {
    expect(age).toBe(30)
  })
})

// resolves rejects
test('received age is 30 after 3 second', () => {
  return expect(fn.getAge()).resolves.toBe(30)
})

test('received age is 30 after 3 second', async () => {
  const age = await fn.getAge()
  expect(age).toBe(30)
})
