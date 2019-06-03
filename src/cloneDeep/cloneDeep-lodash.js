const _ = require("lodash");

const c = { d: 4 };
const b = { c: c };
const a = { b: b };
const obj1 = { a: a };

console.time();
const obj1clone = _.clone(obj1);

console.timeEnd();

console.log(obj1clone);
// ==> { a: 88, b: 'hi', c: [ { a: 6, b: 'somestring', c: [Object] } ] }
console.log(obj1clone === obj1);
