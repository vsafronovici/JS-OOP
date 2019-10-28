const obj = {
  m1() { return this },
  m1a: () => this,
  level2: {
    m2() { return this },
    m2a: () => this,
    m22() {
      return function() { return this }
    },
    m22a() {
      return () => this
    }
  },
}


console.log(obj.m1())
console.log(obj.m1a())
console.log(obj.level2.m2())
console.log(obj.level2.m2a())
console.log(obj.level2.m22()())
console.log(obj.level2.m22a()())


const F = function(a, b) {
  console.log(arguments)
  console.log(this)
}

console.log(F.length)
new F(1, 2, 3)
F.bind({ a: 1 })()
F.call({ a: 1}, 1, 2, 3, 4, 5)


const FA = (a, b) => {
  console.log(arguments)
  console.log(this)
}

console.log(FA.length)
new FA(1, 2, 3) // error
FA.bind({ a: 1})(1, 2, 3)
FA.call({ a: 1}, 1, 2, 3, 4, 5)
