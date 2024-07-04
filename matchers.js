/**
 ****************************************************************************************************
 * ### Matcher
 ****************************************************************************************************
 */
const testFunc = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  throwError: () => {
    throw new Error('xx')
  }
}

module.exports = testFunc
