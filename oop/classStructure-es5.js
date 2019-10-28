function A(property1, property2, property3 = 'i am default') {
  this.id = ++A.count
  this.property1 = property1
  this.property2 = property2
  this.property3 = property3
}

// static prop
A.count = 0

A.prototype.sayHi = function() {
  console.log(`Hello from instance ${this.id}, 
    these are my props: ${[this.property1, this.property2, this.property3].join(';')}
    and the static prop: ${A.count}`)
}
