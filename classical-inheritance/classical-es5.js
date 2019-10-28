function A(prop2) {
  this.property1 = 1
  this.property2 = prop2
}

A.prototype.hello = function() {
  return `p1 = ${this.property1}; p2 = ${this.property2};`
}

// static
A.staticProperty = 'I am static'



function B(prop2) {
  A.call(this, prop2)
  console.log(this)
  this.property3 = 3
}

B.prototype = Object.create(A.prototype)
B.prototype.constructor = B

B.prototype.hello = function() {
  return A.prototype.hello.call(this) + ` p3 = ${this.property3}`
}

// static
B.staticProperty = 'I am static'

console.log(new A(4).hello())
console.log(new B(44).hello())
