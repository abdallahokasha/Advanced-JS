const jsSkill = {
  knowsJS() {
    return true;
  }
};

const engDegree = {
  hasDegree() {
    return true;
  }
};

const backendSkill = {
  knowsBackend() {
    return true;
  }
};

const jsEngineer = Object.assign({}, jsSkill, engDegree);
console.dir(jsEngineer);

const fullStackEngineer = Object.assign({}, jsSkill, engDegree, backendSkill);

console.log(fullStackEngineer.knowsJS());
console.log(fullStackEngineer.knowsBackend());
console.log(fullStackEngineer.hasDegree());
// --------------------------------------------------------
// --- ways to declare an object.

// 1- constructor way
let Car = function(color) {
  this.color = color;
};

let redCar = new Car("red");
console.dir(redCar);

// 2- factory function

let Car = function(color) {
  let moving = false;
  return Object.assign(
    {},
    {
      color: color,
      drive() {
        moving = true;
        return this;
      },
      isMoving() {
        return moving;
      }
    }
  );
};

let redCar = Car("red");

console.log(redCar.drive().isMoving());

// ---------  Mixins ------------
const humanFactory = function(obj) {
  let crying = false;

  return Object.assign({}, obj, {
    cry() {
      crying = true;
      return this;
    },
    isCrying() {
      return crying;
    }
  });
};

const flyFactory = function(obj) {
  let flying = false;
  return Object.assign({}, obj, {
    fly() {
      flying = true;
      return this;
    },
    isFlying() {
      return flying;
    }
  });
};
const superman = humanFactory(flyFactory({}));
console.log(
  superman
    .cry()
    .fly()
    .isFlying()
);
console.dir(superman);
