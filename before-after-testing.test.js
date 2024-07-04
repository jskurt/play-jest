/**
 ****************************************************************************************************
 * ### before-after-testing __TEST__
 ****************************************************************************************************
 */
const testFunc = require('./before-after-testing.js')

// beforeEach
{
  // let numTestBefore = 0
  //
  // beforeEach(() => {
  //   numTestBefore = 0
  // })
  //
  // test('0 + 1 = 1', () => {
  //   numTestBefore = testFunc.add(numTestBefore, 1)
  //   expect(numTestBefore).toBe(1)
  // })
  //
  // test('0 + 2 = 2', () => {
  //   numTestBefore = testFunc.add(numTestBefore, 2)
  //   expect(numTestBefore).toBe(2)
  // })
  //
  // test('0 + 3 = 3', () => {
  //   numTestBefore = testFunc.add(numTestBefore, 3)
  //   expect(numTestBefore).toBe(3)
  // })
  //
  // test('0 + 4 = 4', () => {
  //   numTestBefore = testFunc.add(numTestBefore, 4)
  //   expect(numTestBefore).toBe(4)
  // })
}

// afterEach
{
  // let numTestAfter = 10
  //
  // afterEach(() => {
  //   numTestAfter = 0
  // })
  //
  // test('0 + 1 = 1', () => {
  //   numTestAfter = testFunc.add(numTestAfter, 1)
  //   expect(numTestAfter).toBe(1)
  // })
  //
  // test('0 + 2 = 2', () => {
  //   numTestAfter = testFunc.add(numTestAfter, 2)
  //   expect(numTestAfter).toBe(2)
  // })
  //
  // test('0 + 3 = 3', () => {
  //   numTestAfter = testFunc.add(numTestAfter, 3)
  //   expect(numTestAfter).toBe(3)
  // })
  //
  // test('0 + 4 = 4', () => {
  //   numTestAfter = testFunc.add(numTestAfter, 4)
  //   expect(numTestAfter).toBe(4)
  // })
}

// beforeAll, afterAll
{
  // describe('about User', () => {
  //   let user
  //
  //   beforeAll(async () => {
  //     user = await testFunc.connectUserDb()
  //   })
  //
  //   afterAll(() => {
  //     return testFunc.disconnectDb()
  //   })
  //
  //   test('Name is Jisung', () => {
  //     expect(user.name).toBe('Jisung')
  //   })
  //
  //   test('Age is 30', () => {
  //     expect(user.age).toBe('30')
  //   })
  //
  //   test('Gender is male', () => {
  //     expect(user.gender).toBe('male')
  //   })
  // })
  //
  // describe('about Car', () => {
  //   let car
  //   beforeAll(async () => {
  //     car = await testFunc.connectCarDb()
  //   })
  //
  //   afterAll(() => {
  //     return testFunc.disconnectCarDb()
  //   })
  //
  //   test('Brand is bmw', () => {
  //     expect(car.brand).toBe('bmw')
  //   })
  //
  //   test('Name is z4', () => {
  //     expect(car.name).toBe('z4')
  //   })
  //
  //   test('Color is red', () => {
  //     expect(car.color).toBe('red')
  //   })
  // })
}

// .only
{
  // test('TEST A', () => {
  //   console.log('TEST A')
  // })
  // test('TEST B', () => {
  //   console.log('TEST B')
  // })
  // test.only('TEST C', () => {
  //   console.log('TEST C')
  // })
}

// .skip
{
  // test('TEST A', () => {
  //   console.log('TEST A')
  // })
  // test.skip('TEST B', () => {
  //   console.log('TEST B')
  // })
  // test('TEST C', () => {
  //   console.log('TEST C')
  // })
}
