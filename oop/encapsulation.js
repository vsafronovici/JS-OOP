class Rectangle {
  constructor (width, height) {
    this._width  = width
    this._height = height
  }

  setX(x) {
    this.x = x
  }

  getX() { return this.x; }

  set width(width) {
    this._width = width
  }

  get width() {
    return this._width
  }

  set height(height) {
    this._height = height
  }

  get height() {
    return this._height
  }

  get area() {
    return this._width * this._height
  }
}

const r = new Rectangle(50, 20)
console.log(r)
console.log(r.area)

r.width = 1
console.log(r)
console.log(r.area)

r.area = 7
console.log(r)
console.log(r.area)

console.log(r.hasOwnProperty('_width'))
console.log(r.hasOwnProperty('width'))
console.log(r.hasOwnProperty('area'))






