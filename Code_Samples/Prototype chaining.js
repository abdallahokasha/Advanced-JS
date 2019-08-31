const Car = function() {};

Car.prototype = {
  print() {
    return "I am a car";
  }
};

const ToyCar = function() {};

ToyCar.prototype = Object.create(Car.prototype);

ToyCar.prototype.print = function() {
  return "I am a ToyCar";
};

const ToyTransformer = function() {};

ToyTransformer.prototype = Object.create(ToyCar.prototype);

ToyTransformer.prototype.print = function() {
  return "I am a ToyTransformer";
};

const toyota = new Car();

const legoCar = new ToyCar();

const optimusPrim = new ToyTransformer();

console.log(toyota.print(), " ", legoCar.print(), " ", optimusPrim.print());

console.dir(optimusPrim);
