const Singleton = (function () {
  let instance

  return function (value) {
    if (!instance) {
      instance = new Object(value)
    }
    return instance
  }
})()


const a = new Singleton({a: 1})
const b = new Singleton({b: 1})

console.log(a === b, a, b)