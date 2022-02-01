let isDone:boolean = false;

isDone = true;

console.log(typeof isDone);

console.log(Symbol('foo') === Symbol("foo")); // false

const sym = Symbol(); // 고유한 sym
const obj = {
  [sym]: "value",
};

obj[sym]