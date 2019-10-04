function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function() {
    // ...
  };
  this.radius = radius;
  this.draw = function() {
    computeOptimumLocation();
    console.log("draw");
    // this.radius
    // defaultLocation
  };
  this.getDefaultLocation = function() {
    return defaultLocation;
  };
  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) throw new Error("Invalid location.");
      defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
// circle.computeOptimumLocation();
circle.draw();
console.log("circle: ", circle);
// circle.defaultLocation = 1; // Invalid location
circle.defaultLocation = { x: 1, y: 1 };
console.log("circle: ", circle);
