/*
    Referenece types -> Object, Function, Array
    Value types -> Number, String, Boolean, Symbol, undefined, null

    Primitive OR Value type -> copied by their VALUE.
    Object OR Reference types -> copied by their REFERENCE.
 */
let x = 10;
let y = x;

x = 20;
console.log("x: ", x, " y: ", y);
// ======================

let a = { value: 10 };

let b = a;

a.value = 20;

console.log("Object a: ", a, " Object b: ", b);
console.log("(a === b) ? ", a === b);
// =======================

let number = 10;

function increaseNumber(number) {
  number++;
}
increaseNumber(number);
console.log("number: ", number);
// -------------
let obj = { value: 10 };

function increaseObjValue(obj) {
  obj.value++;
}

increaseObjValue(obj);
console.log("obj: ", obj);
console.log(
  "(obj.constructor.prototype === Object.prototype) ? ",
  obj.constructor.prototype === Object.prototype
);

console.log(
  "(obj.constructor === Object.prototype.constructor) ? ",
  obj.constructor === Object.prototype.constructor
);

console.log(
  "(obj.__proto__ === Object.prototype) ? ",
  obj.__proto__ === Object.prototype
);

console.log(
  "(obj.__proto__.constructor === Object.prototype.constructor) ? ",
  obj.__proto__.constructor === Object.prototype.constructor
);
// ------------------------------

let myArray = [];
let myValue = 3;
if (Array(myArray).length !== 0)
  if (!myArray.includes(myValue))
    // if (myArray.length !== 0)
    console.log(
      "myArray.includes(myValue) = ",
      myArray.includes(myValue),
      "Array(myArray).length !== 0 ?? ",
      Array(myArray).length !== 0,
      "Array(myArray): ",
      Array(myArray)
    );
// ----------------------------------
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const circle = new Circle();
circle.location = { x: 1 };
const propertyName = "location on map";
circle[propertyName] = { x: 1 }; // circle.propertyName

delete circle.location; // delete circle["location"]
// -------------------------------

const circle10 = new Circle(10);

for (let key in circle10) {
  if (typeof circle10[key] !== "function") console.log(key, circle10[key]);
}

const keys = Object.keys(circle10);
console.log("circle10 keys: ", keys);

if ("radius" in circle10) console.log("Circle10 has radius.");
