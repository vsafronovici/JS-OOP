function createCounter() {
  let counter = 0
  const myFunction = function () {
    counter = counter + 1
    return counter
  }
  console.log(myFunction.prototype)
  return myFunction
}

const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)


const add = x => n => x + n
const add3 = add(3)
console.log(add3(10))
console.log(add3(20))

function f1() {
  let v1 = 0

  const f2 = function() {
    ++v1
    let v2 = 0

    const f3 = function() {
      ++v1
      ++v2
      // return {v1, v2}
    }

    console.log('f3.prototype', f3.prototype)
    return f3
  }

  console.log('f2.prototype', f2.prototype)
  return f2
}

const cf2 = f1()
console.log('cf2.prototype', cf2.prototype)

const cf3 = cf2()
console.log('cf3.prototype', cf3.prototype)

console.log('result', cf3())






// function as argument
function notAClosure() {
  return a + 100;
}

function parent(f) {
  let a = 7
  const ret = f();
  return ret
}

console.log(parent(notAClosure))
