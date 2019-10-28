class A {
  static staticProperty = 'I am static'

  property1 = 1
  constructor(prop2) {
    this.property2 = prop2
  }

  hello() {
    return `p1 = ${this.property1}; p2 = ${this.property2};`
  }
}

class B extends A {
  constructor(prop2) {
    super(prop2)
    console.log(this)
    this.property3 = 3
  }

  hello() {
    return super.hello() + ` p3 = ${this.property3}`
  }

}


console.log(new A(4).hello())
console.log(new B(44).hello())
