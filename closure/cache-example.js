function expensiveCalculation(a) {
  console.log('expensiveCalculation:', a)
  return 100 + a
}

function memoizeExpensiveCalculation() {
  const cache = {}

  return function(a) {
    const result = cache[a] || expensiveCalculation(a)
    cache[a] = result
    return result
  }
}

const memoizedExpensiveCalculation = memoizeExpensiveCalculation()

console.log(memoizedExpensiveCalculation(1))
console.log(memoizedExpensiveCalculation(2))
console.log(memoizedExpensiveCalculation(1)) // from cache


