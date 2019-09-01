class Car {
  constructor(color, price) {
    Object.assign(this, { color, price });
  }
  static comparePrice(car1, car2) {
    console.dir(this);
    return Math.abs(car1.price - car2.price);
  }
  getColor() {
    console.log(this);
    return this.color;
  }
}

const redCar = new Car("red", 100);
const blueCar = new Car("blue", 102);
console.log(redCar.getColor());
console.log(blueCar.getColor());

console.log(Car.comparePrice(redCar, blueCar));

const newCar = new Car();
newCar.getColor();
Car.comparePrice();

// -----
class Car {
  constructor(price) {
    this.price = price;
  }

  static sellCar(car) {
    return `selling for ${car.price}`;
  }
}

class Toyota extends Car {
  constructor(price) {
    super(price);
  }
  static sellCar(car) {
    return `Toyota ${super.sellCar(car)}`;
  }
}
const camry = new Toyota(100);
console.log(Toyota.sellCar(camry));
