function memoize(F) {
  const cache = {}

  return function(...args) {
    console.log('ctx:', this)
    const key = JSON.stringify(args)
    if (cache[key] === undefined) {
      const result = F.apply(this, args)
      cache[key] = result
    }
    return cache[key]
  }

}

function expensiveCalculation({ a, b }) {
  console.log('expensiveCalculation:', {a, b, x: this.x})
  return a + b + this.x
}

const memoizedExpensiveCalculation = memoize(expensiveCalculation).bind({ x: 7 })

console.log(memoizedExpensiveCalculation({ a: 1, b: 2 }))
console.log(memoizedExpensiveCalculation({ a: 1, b: 3 }))
console.log(memoizedExpensiveCalculation({ a: 1, b: 2 })) // from cache


