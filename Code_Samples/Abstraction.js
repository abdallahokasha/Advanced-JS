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

// ======================================

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function() {
    if (running) throw new Error("Stopwatch has already started.");
    running = true;
    startTime = new Date();
  };

  this.stop = function() {
    if (!running) throw new Error("Stopwatch is not started.");
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}

const stopwatch = new Stopwatch();

console.log("stopwatch: ", stopwatch);

// ##### Enumerable vs Iterable #####

if (stopwatch.start)
  console.log(
    "stopwatch.start.prototype.__proto__.propertyIsEnumerable() ? ",
    stopwatch.start.prototype.__proto__.propertyIsEnumerable()
  );

if (stopwatch) {
  console.log(
    "typeof stopwatch[Symbol.iterator] === 'function' ?? ",
    typeof stopwatch[Symbol.iterator] === "function"
  );
}

const str = "7amda";
console.log(
  "str:",
  str,
  ", typeof str[Symbol.iterator] === 'function' ?? ",
  typeof str[Symbol.iterator] === "function"
);

const array = [1, 2, 3];
console.log(
  "str:",
  array,
  ", typeof str[Symbol.iterator] === 'function' ?? ",
  typeof array[Symbol.iterator] === "function"
);
