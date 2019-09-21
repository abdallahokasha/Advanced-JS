const Car = function(color) {
  this.color = color;
};
console.log("Car: ");
console.dir(Car);

const redCar = new Car("red");
const blueCar = new Car("blue");

console.log("blueCar: ");
console.dir(blueCar);
console.log("redCar: ");
console.dir(redCar);

console.log(
  "(Car.prototype === redCar.__proto__) ? ",
  Car.prototype === redCar.__proto__
);
console.log(
  "(Car.prototype.constructor === redCar.__proto__.constructor) ? ",
  Car.prototype.constructor === redCar.__proto__.constructor
);
// ----

class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`I am ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name) {
    super(name);
  }
}

console.dir(Person);
console.dir(Employee);

console.log(
  "(Person === Employee.__proto__) ? ",
  Person === Employee.__proto__
);
console.log(
  "(Person.prototype.constructor === Employee.prototype.constructor) ? ",
  Person.prototype.constructor === Employee.prototype.constructor
);

console.log(
  "(Person.prototype.constructor === Employee.__proto__.prototype.constructor) ? ",
  Person.prototype.constructor === Employee.__proto__.prototype.constructor
);

// what "extends" do !
console.log(
  "(Person === Employee.__proto__) ? ",
  Person === Employee.__proto__
);
console.log(
  "(Person.prototype === Employee.prototype.__proto__) ? ",
  Person.prototype === Employee.prototype.__proto__
);
