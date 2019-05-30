const _ = require("lodash");

const obj1 = { a: 88, b: "hi", c: [{ a: 6, b: "somestring", c: { d: "hi" } }] };
const obj2 = { a: 88, b: "hi" };
console.log(obj1 === obj2);
console.time();
const obj1clone = _.clone(obj1);
console.timeEnd();
