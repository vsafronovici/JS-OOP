class A {

  constructor() {
    this.a = 7
  }

  m1() {
    return this.a
  }

  m2 = () => this.a

}

const a = new A()
console.log(a.m1())
console.log(a.m2())
console.log('==============')

const obj = { a: new A() }
console.log(obj.a.m1())
console.log(obj.a.m2())
console.log('==============')

const obj2 = {
  m1: a.m1,
  m2: a.m2,
}
console.log(obj2.m1())
console.log(obj2.m2())
console.log(obj2.m1.bind(a)())
console.log(obj2.m1.bind({ a: 666 })())


class B {

  constructor() {
    this.a = 7
    this.m1 = this.m1.bind(this)
  }

  m1() {
    return this.a
  }

  m2 = () => this.a

}

const b = new B()
const obj3 = {
  m1: b.m1,
  m2: b.m2,
}
console.log('============== with bind()')
console.log(obj3.m1())
console.log(obj3.m2())
