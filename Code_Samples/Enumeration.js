function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const circle = new Circle(10);

for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log("circle keys: ", keys);

if ("radius" in circle) console.log("circle has radius.");
// --------------------------

const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;

console.log("object1 ", object1);

console.log("array1 ", array1);
console.log(
  "object1.propertyIsEnumerable('property1') ? ",
  object1.propertyIsEnumerable("property1")
);
// expected output: true

console.log(
  "typeof array1.__proto__[Symbol.iterator] === 'function' ? ",
  typeof array1.__proto__[Symbol.iterator] === "function"
);

console.log(
  "typeof array1[Symbol.iterator] === 'function' ? ",
  typeof array1[Symbol.iterator] === "function"
);

console.log(
  "array1.propertyIsEnumerable(0)) ? ",
  array1.propertyIsEnumerable(0)
);
// expected output: true

console.log(
  "array1.propertyIsEnumerable('length') ? ",
  array1.propertyIsEnumerable("length")
);
// expected output: false
