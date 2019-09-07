function multiplyBy2(num) {
  return num * 2;
}
console.dir(multiplyBy2);
// ----
var array = [1, 2, 3, 4, 5];

console.dir(array);
// ----
console.dir(Function);
console.dir(Array);

console.log(
  "(Function.prototype === Function.__proto__) ?? ",
  Function.prototype === Function.__proto__
);
console.log(
  "(Function.prototype.__proto__ === Object.prototype) ?? ",
  Function.prototype.__proto__ === Object.prototype
);
console.log(
  "(Function.__proto__.__proto__ === Object.prototype) ?? ",
  Function.__proto__.__proto__ === Object.prototype
);
console.log(
  "(Array.prototype === Array.__proto__) ?? ",
  Array.prototype === Array.__proto__
);

console.log(
  "(Array.__proto__.__proto__ === Object.prototype) ?? ",
  Array.__proto__.__proto__ === Object.prototype
);
