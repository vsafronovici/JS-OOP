class A {}
console.log(new A)
console.log(new A())


class B {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
}

console.log(new B(7))
console.log(new B(7, 5, 6))



// Function declaration
function FD(){}
console.log(new FD)

// Function expression
const FE = function(){}
console.log(new FE)



// Function inside class
class C {
  // property
  func = function() {
    console.log('func')
  }
}

(new C).func() // invoke function
new (new C).func
new (new C).func()
new ((new C).func)()



// Function inside object
const obj = {
  myFunction: function(){}
}

console.log(new obj.myFunction)



// Constructor function explained
function PersonConstructor(name, age) {
  // this = {};
  // this.__proto__ = PersonConstructor.prototype;
  // Set up logic such that: if
  // there is a return statement
  // in the function body that
  // returns anything EXCEPT an
  // object, array, or function:
  //     return 'this' (the newly
  //     constructed object)
  //     instead of that item at
  //     the return statement;
  this.name = name;
  this.age = age;
   // return this;
}



// explicit return
function BadExplicit() { // antipattern
  return { myProp: 1 }
}

console.log(new BadExplicit() instanceof BadExplicit)

function GoodExplicit() {
  const ret = Object.create(GoodExplicit.prototype)
  return Object.assign(ret, {
    prop1: 1,
    prop2: 'Hi'
  })
}

console.log(new GoodExplicit() instanceof GoodExplicit)
