// bad approach. Polluting global scope
function sayHi() {
  return 'hello'
}

console.assert(window.sayHi === sayHi)

/*
* Try to put it in a namespace object
* */

// unsafe
var MYAPP = {}
// better
if (typeof MYAPP === 'undefined') {
  var MYAPP = {}
}
// or shorter
var MYAPP = MYAPP || {}

MYAPP.sayHi = function sayHi() {
  return 'hello'
}


// ======= Even BETTER ====================

var MYAPP = MYAPP || {};

MYAPP.namespace = function (ns_string) {
  let parts = ns_string.split('.')
  if (parts[0] === 'MYAPP') {
    parts = parts.slice(1);
  }

  return parts.reduce((acc, part) => {
    acc[part] = acc[part] || {}
    return acc[part]
  }, MYAPP)

}

const myModule = MYAPP.namespace('WEBPACK_16_MYAPP.modules.myModule')

myModule.sayHi = function sayHi() {
  return 'hello'
}

console.log(MYAPP.modules.myModule.sayHi())





