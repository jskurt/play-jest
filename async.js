/**
 ****************************************************************************************************
 * ### Async
 ****************************************************************************************************
 */
const testFunc = {
  getName: (callback) => {
    const name = 'Jisung'
    setTimeout(() => {
      callback(name) // normal test
      // throw new Error('This is server error') // error test
    }, 3000)
  },
  getAge: () => {
    const age = 30
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve(age)
        reject('error')
      }, 3000)
    })
  }
}

module.exports = testFunc
