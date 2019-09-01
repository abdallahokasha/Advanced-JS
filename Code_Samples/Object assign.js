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
