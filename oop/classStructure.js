class A {

  static count = 0

  constructor(property1, property2, property3 = 'i am default') {
    this.id = ++A.count
    this.property1 = property1
    this.property2 = property2
    this.property3 = property3
  }

  sayHi() {
    console.log(`Hello from instance ${this.id}, 
    these are my props: ${[this.property1, this.property2, this.property3].join(';')}
    and the static prop: ${A.count}`) // this.count NOT working !!!
  }

}

const a = new A(1)
a.sayHi()

const a2 = new A()
a2.sayHi()

a.property2 = 7
a.sayHi()







