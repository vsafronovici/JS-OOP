const oldMap = Array.prototype.map;

Array.prototype.map = function(...args) {
  console.log('hi', args)
  return oldMap.apply(this, args)
}

const arr = [1, 2, '3', '4', '5.6666']
arr.map(Number)