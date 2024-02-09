const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  throwError: () => {
    throw new Error('xx')
  },
  getName: (callback) => {
    const name = 'Jisung'
    setTimeout(() => {
      callback(name)
      throw new Error('This is server error')
    }, 3000)
  },
  getAge: () => {
    const age = 30
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age)
      }, 3000)
    })
  },
  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: 'Jisung',
          age: '30',
          gender: 'male'
        })
      }, 500)
    })
  },
  disconnectDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res()
      }, 500)
    })
  }
}

module.exports = fn
