class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, curr) => acc + curr, 0);
  }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.countSides !== 3) {
            return false;
        }
        let [a,b,c] = this.sides;
        return (a + b > c) && (a + c > b) && (b + c > a);
    }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) {
      return true;
    }
    let [a, b, c, d] = this.sides;
    return a === b && b === c && c === d;
  }

  get area() {
    let [a, b] = this.sides;
    return a * b;
  }
}

let polygon = new Polygon
let triangle = new Triangle
let square = new Square