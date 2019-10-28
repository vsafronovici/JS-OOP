function classMixin(cls, ...src) {
  for (let _cl of src) {
    for (var key of Object.getOwnPropertyNames(_cl.prototype)) {
      cls.prototype[key] = _cl.prototype[key]
    }
  }
}


class Wheel {
  drive() {
    console.log(`${this.name} wheel drives`)
  }
}

class Tyre {
  brake() {
    console.log(`${this.name} tyre brakes`)
  }
}

class Engine {
  start() {
    console.log(`${this.name} engine starts`)
  }
}

class Car {
  constructor(name) {
    this.name = name
  }
}

classMixin(Car, Wheel, Tyre, Engine)
const toyota = new Car('Toyota')
toyota.start()
toyota.drive()
toyota.brake()
