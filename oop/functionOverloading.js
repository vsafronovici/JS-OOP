/*
* Pure Overloading does NOT exist in JS because this is compile time time polymorphism
* */

function add(param1, param2, param3) {
  let sum = 0
  param1 && (sum += param1)
  param2 && (sum += param2)
  param3 && (sum += param3)

  return sum
}

console.log(add())
console.log(add(1))
console.log(add(1, 3))
console.log(add(1, 3, 8))


function sayHi(param) {
  return `Hello ${typeof param === 'string' ? param 
    : param && typeof param === 'object' ? param.name //null is object !!!
      : null}`
}

console.log(sayHi(null))
console.log(sayHi('Johny'))
console.log(sayHi({ name: 'Marry' }))






