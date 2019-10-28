/*
* Overriding as part of polymorphism
* */

class Shape {
  getArea() {
    return 'Not implemented'
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

class RightTriangle extends Rectangle {
  constructor(width, height) {
    super(width, height)
  }

  getArea() {
    return super.getArea() / 2
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side)
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  getArea() {
    return Math.PI * this.radius**2
  }
}

function calculateArea(shape) {
  if (!(shape instanceof Shape)) {
    throw Error('This is not a Shape')
}

  return shape.getArea()
}

console.log('Shape area:', calculateArea(new Shape()))
console.log('Rectangle area:', calculateArea(new Rectangle(2, 4)))
console.log('RightTriangle area:', calculateArea(new RightTriangle(2, 4)))
console.log('Square area:', calculateArea(new Square(4)))
console.log('Circle area:', calculateArea(new Circle(3)))
console.log('Not a Shape area:', calculateArea({}))
