// === Factory Function ===
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}

const circle = createCircle(1);
console.log("circle  using factory function: ", circle);

// === Constructor Function ===
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const another = new Circle(1); // the same as Circle.call({}, 1); OR Circle.apply({}, [1, 2, 3])
// Circle.call(window, 1)
console.log("another circle using constructor function: ", another);

console.log("\n");

console.log(
  "(another.constructor.prototype === Circle.prototype) ? ",
  another.constructor.prototype === Circle.prototype
);

console.log("\n");

console.log("Circle.name: ", Circle.name);
console.log("Circle.length: ", Circle.length);

// ========================

const Circle1 = new Function(
  "radius",
  `this.radius = radius;
this.draw = function(){
    console.log('draw Circle1');
}
`
);

const circle1 = new Circle1(1);
console.log("circle1: ", circle1);
