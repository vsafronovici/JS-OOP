const Klass = (Parent, props) => {

  // constructor
  const Constructor = function(){
    if (Constructor.prototype.hasOwnProperty("construct")) {
      Constructor.prototype.construct.apply(this, arguments)
    }
  }

  // inherit
  Parent = Parent || Object
  Constructor.prototype = Object.create(Parent.prototype)
  Constructor.prototype.constructor = Constructor
  Constructor.uber = Parent // set superclass

  // static members
  if (Parent !== Object) {
    Constructor.__proto__ = Parent
  }

  // assign methods
  for (let key in props) {
    if (props.hasOwnProperty(key)) {
      Constructor.prototype[key] = props[key]
    }
  }

  return Constructor
}

const A = Klass(null, {
  construct: function(prop2) {
    this.property1 = 1
    this.property2 = prop2
  },
  hello() {
    return `p1 = ${this.property1}; p2 = ${this.property2};`
  }
})

// static
A.staticProperty = 'I am static'


const B = Klass(A, {
  construct: function(prop2) {
    // same as A.call(this, prop2)
    this.constructor.uber.call(this, prop2)
    this.property3 = 3
  },
  hello() {
    // same as A.prototype.hello.call(this)
    return this.constructor.uber.prototype.hello.call(this) + ` p3 = ${this.property3}`
  }
})

var a = new A(7)
var b = new B(666)

console.log(a.hello())
console.log(b.hello())
console.assert(a instanceof A)
console.assert(b instanceof B)
console.assert(b instanceof A)
console.log(B.staticProperty)



