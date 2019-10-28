// Primitives
console.log(typeof true === 'boolean') // true | false
console.log(typeof 3 === 'number') // integers, floats
console.log(typeof 'hi' === 'string') // Strings

let x
console.log(typeof x === 'undefined') // undefined

// Object
console.log(typeof { a: 1 } === 'object') // literal object
console.log(typeof new Object() === 'object') // object
console.log(typeof null === 'object') // ooops!!!
console.log(typeof [1, 2] === 'object') // array
console.log(typeof new Date() === 'object') // date

// Primitive wrappers
console.log(typeof new Boolean(true) === 'object') // Boolean wrapper
console.log(typeof new Number(1) === 'object') // Number wrapper
console.log(typeof new String('abc') === 'object') // String wrapper

// NOTE:
console.log(new Boolean(true) === true) // false
console.log(new Boolean(true) == true) // true
console.log(new Number(7) === 7) // false
console.log(new Number(7) == 7) // true
console.log(new String('abc') === 'abc') // false
console.log(new String('abc') == 'abc') // true


// Function
function F() {}
console.log(typeof F === 'function') // function

const F2 = function(){}
console.log(typeof F2 === 'function') // function expression

const arrowF = () => null
console.log(typeof arrowF === 'function') // arrow function

function* generatorF(){}
console.log(typeof generatorF === 'function') // generator function


console.log(typeof function(){} === 'function') // anonymous function
console.log(typeof Function === 'function') // Function
console.log(typeof class A{} === 'function') // class






