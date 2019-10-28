function F() {
  const args = Array.prototype.slice.call(arguments)
  return { context: this, args}
}

console.log(F('hi', 'there'))

// bind
console.log(F.bind({ prop: 1 })(1, 2))
const reuseMe = F.bind({ prop: 1 }, 1, 2)
console.log(reuseMe(3, 4))
console.log(reuseMe(5, 6))

// call
console.log(F.call({ prop: 1 }, 1, 2, 3, 4))

// apply
console.log(F.apply({ prop: 1 }, [1, 2, 3, 4]))
