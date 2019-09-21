let toyota = {
  drive() {
    return "driving toyota";
  },
  break() {
    return "breaking toyota";
  }
};

let camry = {
  drive() {
    return "driving camry";
  }
};

object.assign(camry, toyota);
console.dir(camry.drive());
// ---
let copyToyota = Object.assign({}, toyota); // shallow copy.
console.dir(copyToyota);
// ---
let redToyota = Object.assign(toyota, {
  wifi() {
    return "using wifi";
  },
  color: "red"
});
console.dir(redToyota);
// ---
let c1 = function(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

let c2 = function(x, y, z) {
  Object.assign(this, { x, y, z });
};
// -------------------------------------
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
const newReturnedTarget = Object.assign({}, source);

console.log(newReturnedTarget === source);

console.dir(source);
console.dir(newReturnedTarget);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);

// while assigne using = operator is different ;)
const newTarget = target;
console.log("( newTarget === target) ? ", newTarget === target);
