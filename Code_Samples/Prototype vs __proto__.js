const Car = function(color) {
  this.color = color;
};

console.dir(Car);

const redCar = new Car("red");
const blueCar = new Car("blue");

console.dir(blueCar);
console.dir("redCar: ", redCar);

console.log(Car.prototype === redCar.__proto__);
console.log(Car.prototype.constructor === redCar.__proto__.constructor);
// ----

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Employee extends Person {}
console.dir(Person);
console.dir(Employee);

console.log("Person === Employee.__proto__ ? ", Person === Employee.__proto__);
console.log(
  "Person.prototype.constructor === Employee.prototype.constructor ? ",
  Person.prototype.constructor === Employee.prototype.constructor
);

console.log(
  "Employee.__proto__.prototype.constructor === Person.prototype.constructor ? ",
  Employee.__proto__.prototype.constructor === Person.prototype.constructor
);
