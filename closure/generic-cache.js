function memoize(F) {
  const cache = {}

  return function(...args) {
    const key = JSON.stringify(args)
    if (cache[key] === undefined) {
      const result = F(...args)
      cache[key] = result
    }
    return cache[key]
  }

}

function expensiveCalculation({ a, b }) {
  console.log('expensiveCalculation:', {a, b})
  return a + b
}

const memoizedExpensiveCalculation = memoize(expensiveCalculation)

console.log(memoizedExpensiveCalculation({ a: 1, b: 2 }))
console.log(memoizedExpensiveCalculation({ a: 1, b: 3 }))
console.log(memoizedExpensiveCalculation({ a: 1, b: 2 })) // from cache


