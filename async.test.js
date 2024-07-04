/**
 ****************************************************************************************************
 * ### Async __TEST__
 ****************************************************************************************************
 */
const testFunc = require('./async.js')

// normal test
{
  // test('received name is Jisung after 3 second', (done) => {
  //   function callback(name) {
  //     expect(name).toBe('Jisung')
  //     done()
  //   }
  //   testFunc.getName(callback)
  // })
}

// if you want check API errors - error test
{
  // test('received name is Jisung after 3 second', (done) => {
  //   function callback(name) {
  //     try {
  //       expect(name).toBe('Jisung')
  //       done()
  //     } catch (error) {
  //       done()
  //     }
  //   }
  //   testFunc.getName(callback)
  // })
}

// When using Promises, you must always use the return keyword.
{
  // test('received age is 30 after 3 second', () => {
  //   return testFunc.getAge().then((age) => {
  //     expect(age).toBe(30)
  //   })
  // })
}

// use resolves, rejects - normal test
{
  // test('received age is 30 after 3 second', () => {
  //   return expect(testFunc.getAge()).resolves.toBe(31)
  // })
}

// use resolves, rejects - error test
{
  // test('received age is error after 3 second', () => {
  //   return expect(testFunc.getAge()).rejects.toMatch('error')
  // })
}

// use async, await
{
  // test('received age is 30 after 3 second', async () => {
  //   const age = await testFunc.getAge()
  //   expect(age).toBe(30)
  // })
}

// use resolves, rejects - normal test
{
  // test('received age is 30 after 3 second', async () => {
  //   await expect(testFunc.getAge()).resolves.toBe(30)
  // })
}

// use resolves, rejects - error test
{
  // test('received age is error after 3 second', async () => {
  //   await expect(testFunc.getAge()).rejects.toMatch('error')
  // })
}
