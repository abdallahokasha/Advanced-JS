const obj = {
  num: 3,
  increment: function() {
    this.num++;
  }
};

const otherObj = {
  num: 10
};

obj.increment();
console.log("obj: ", obj);
obj.increment.call(otherObj);
// obj.increment.apply(otherObj);
