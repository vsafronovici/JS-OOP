class A {}
class B extends A {}

const b = new B()

console.assert(b instanceof B === true)
console.assert(b instanceof A === true)
console.assert(b instanceof Object === true)

console.assert(B instanceof A === false)
console.assert(B instanceof Function === true)
console.assert(B instanceof Object === true)

console.assert(Function instanceof Object === true)

console.info('Assertions passed')





