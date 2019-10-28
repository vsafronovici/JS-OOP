const obj1 = {
  prop: 1,
  func() {}
}

const obj2 = {
  prop: 2,
  func2() {}
}

/* ===============  Implementations ================ */
function extendByCopyingProps(parent, child, includeParentProto) {
  for (let i in parent) {
    if (includeParentProto || parent.hasOwnProperty(i)) {
      child[i] = parent[i]
    }
  }
  return child
}



/*========== Test =======*/
console.log('Spread operator', { ...obj1, ...obj2, something: 'something new' })
// NOTE: Spread operator inherits ONLY ownProperties of an object
const obj = Object.create({ a: 1 }, {
  newProp: {
    value: 'new prop',
    enumerable: true
  },
})
console.assert(obj.a !== undefined)
console.assert(obj.newProp === 'new prop')

const copyOfObj = { ...obj }
console.assert(copyOfObj.a === undefined)
console.assert(copyOfObj.newProp === 'new prop')

console.log('Object.assign', Object.assign({}, obj1, obj2, { something: 'something new' })) // Note: also inherits ONLY ownProperties of an object

console.log('extendByCopyingProps and includeParentProto=false', extendByCopyingProps(obj, {}))
console.log('extendByCopyingProps and includeParentProto=true', extendByCopyingProps(obj, {}, true))





