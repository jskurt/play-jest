/**
 ****************************************************************************************************
 * ### mockFunction __TEST__
 ****************************************************************************************************
 */

// mock.calls
{
  const mockFn = jest.fn()

  mockFn(2, 3)
  mockFn(4, 5)

  test('TEST', () => {
    console.log(mockFn.mock.calls)
    console.log(mockFn.mock.calls.length)
    console.log(mockFn.mock.calls[0][0]) // 2
    console.log(mockFn.mock.calls[0][1]) // 3
    console.log(mockFn.mock.calls[1][0]) // 4
    console.log(mockFn.mock.calls[1][1]) // 5
    expect('TEST').toBe('TEST')
  })

  test('The function is called twice', () => {
    expect(mockFn.mock.calls.length).toBe(2)
  })

  test('The first argument passed to the function on the second call is 4.', () => {
    expect(mockFn.mock.calls[1][0]).toBe(4)
  })
}

// mock.calls.length
// mock.results
{
  const mockFn = jest.fn()

  function forEachAdd1(arr) {
    arr.forEach((num) => {
      mockFn(num + 1)
    })
  }

  forEachAdd1([10, 20, 30])

  test('The function is called third', () => {
    expect(mockFn.mock.calls.length).toBe(3)
  })

  test('The values passed are 11, 21, 31', () => {
    console.log(`c.log ## mockFn.mock.results ##`, mockFn.mock.results)
    expect(mockFn.mock.calls[0][0]).toBe(11)
    expect(mockFn.mock.calls[1][0]).toBe(21)
    expect(mockFn.mock.calls[2][0]).toBe(31)
  })
}

// mock.results.value
{
  const mockFn = jest.fn((num) => num + 1)

  mockFn(10)
  mockFn(20)
  mockFn(30)

  test('The function is called third', () => {
    console.log(`c.log ## mockFn.mock.results ##`, mockFn.mock.results)
    expect(mockFn.mock.calls.length).toBe(3)
  })

  test('A value incremented by 1 from 10 will be returned.', () => {
    expect(mockFn.mock.results[0].value).toBe(11)
  })

  test('A value incremented by 1 from 20 will be returned.', () => {
    expect(mockFn.mock.results[1].value).toBe(21)
  })

  test('A value incremented by 1 from 30 will be returned.', () => {
    expect(mockFn.mock.results[2].value).toBe(31)
  })
}

// mockReturnValue, mockReturnValueOnce
{
  const mockFn = jest.fn()

  mockFn.mockReturnValue(40).mockReturnValueOnce(10)

  mockFn()
  mockFn()
  mockFn()
  mockFn()

  test('Check mock return values', () => {
    console.log(mockFn.mock.results)
    expect('ANS').toBe('ANS')
  })
}

// mockReturnValue, mockReturnValueOnce
{
  const mockFn = jest.fn()

  mockFn
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValue(true)

  const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num))

  test('Odd numbers are 1, 3, 5', () => {
    expect(result).toStrictEqual([1, 3, 5])
  })
}

{
  const mockFn = jest.fn()

  mockFn.mockResolvedValue({ name: 'Jisung' })

  test('The name to be returned is Jisung', () => {
    mockFn().then((res) => {
      expect(res.name).toBe('Jisung')
    })
  })
}

{
  const testFunc = require('./mockFunction.js')

  jest.mock('./mockFunction.js')
  testFunc.createUser.mockReturnValue({ name: 'Jisung' })

  test('Create a user', () => {
    const user = testFunc.createUser('Jisung')
    expect(user.name).toBe('Jisung')
  })
}

{
  const mockFn = jest.fn()

  mockFn(10, 20)
  mockFn()
  mockFn(30, 40)

  test('Has it been called more than once?', () => {
    expect(mockFn).toBeCalled()
  })

  test('Called exactly three times?', () => {
    expect(mockFn).toBeCalledTimes(3)
  })

  test('Is there a function that received 10 and 20?', () => {
    expect(mockFn).toBeCalledWith(10, 20)
  })

  test('Did the last function receive 30 and 40?', () => {
    expect(mockFn).lastCalledWith(30, 40)
  })
}
