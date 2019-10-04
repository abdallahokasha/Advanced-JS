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
