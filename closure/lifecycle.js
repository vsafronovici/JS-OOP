let global1 = 1
let global2 = 2

function createAdder() {
  function addNumbers(a, b) {
    let ret = a + b + global2
    return ret
  }

  return addNumbers
}

let adder = createAdder()
let sum = adder(global1, 8)

console.log(sum)
