class Person {
  constructor(name) {
    let _name = name
    this.setName = (name) => {
      _name = name
    }
    this.getName = () => _name
  }
}

const p = new Person('John')
console.log(p)
console.log(p.getName())

p.setName('Mark')

console.log(p)
console.log(p.getName())






