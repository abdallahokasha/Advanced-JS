let x = [1, 2, 3];
let y = [5, 6, 7];

let w = [...x, ...y];
console.log(w);

console.log(x.concat(...y));
// ----------------------------
let x = [1, 2, 3];

// ...x = 1, 2, 3;

let func = function(...arg) {
  console.log(arg);
};

func(...x);
// func.apply(null, x)
// -------------------------------
Math.hypot(3, 4); // = sqrt((3^2) + (4^2)) = 5

console.log(Math.hypot(3, 4));

let x = [3, 4, 5, 6, 7];

console.log(Math.min(...x));
console.log(Math.hypot(...x));
// -----------------------------------
