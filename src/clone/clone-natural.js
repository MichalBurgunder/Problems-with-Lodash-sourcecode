// const _ = require("lodash");

const obj1 = [
  { a: 88, b: "hi", c: [{ a: 6, b: "someString", c: { d: "hi" } }] }
];

console.time();

const obj1clone = JSON.parse(JSON.stringify(obj1));

console.timeEnd();
// confimraton
console.log(obj1);
// ==> { a: 88, b: 'hi', c: [ { a: 6, b: 'somestring', c: [Object] } ] }
console.log(obj1clone);
// ==> { a: 88, b: 'hi', c: [ { a: 6, b: 'somestring', c: [Object] } ] }
