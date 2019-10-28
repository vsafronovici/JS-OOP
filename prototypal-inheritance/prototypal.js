const parentObj = {
  prop: 1,
  func() {}
}


/* ===============  Implementations ================ */

// same as Object.create
const objectCreateEquivalent = proto => {
  const obj = {}
  obj.__proto__ = proto
  return obj
}

const crockfordCreate = proto => {
  const Functuor = function() {}
  Functuor.prototype = proto
  return new Functuor()
}

const cornfordCreate = (() => {
  // caching the Functuor
  const Functuor = function() {}

  return proto => {
    Functuor.prototype = proto
    return new Functuor()
  }
})()


/*========== Test =======*/
console.log('Object.create ', Object.create(parentObj))
console.log('Object.create with extra props', Object.create(parentObj, {
  newProp: {
    value: 'new prop'
  },
}))

console.log('objectCreateEquivalent ', objectCreateEquivalent(parentObj))

console.log('crockfordCreate ', crockfordCreate(parentObj))
console.log('cornfordCreate ', cornfordCreate(parentObj))
