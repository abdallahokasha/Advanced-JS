class Car {
  constructor(color) {
    this.color = color;
  }
  drive() {
    console.log("drive a car");
  }
}
console.dir(typeof Car);
console.dir(Car);
let redCar = new Car("red");

console.log(redCar);
// -----------------
let car = (function() {
  let Car = function(color) {
    this.color = color;
  };
  _Car.prototype.drive = function() {
    console.log("driving");
  };
  return _Car;
})();
