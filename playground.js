// const t = { a: 6, b: 55, c: "hello" };
const _ = require("lodash");
// const lalala = JSON.parse(JSON.stringify(t));

// console.log(lalala);
// lalala.rr = 33333;
// console.log(t);

const rightPocket = ["phone", "wallet", "keys"];
const leftPocket = rightPocket.slice();
let zz = { la: "la" };
let obb = { a: { b: zz } };
let obbclone = _.cloneDeep(obb);
console.log(obb === obbclone);
console.log(obbclone);
obb.b = 999;
zz.la = "al";
console.log(obb);
console.log(obbclone);
// console.log(rightPocket);
// // ==> [ 'phone', 'wallet', 'keys' ]
// console.log(leftPocket);
// // ==> [ 'phone', 'wallet', 'keys' ]
// console.log(rightPocket === leftPocket);
// // ==> false

// const obj1clone = _.clone(obj1);

// console.log(obj1clone);
// ==> { a: 88, b: 'hi', c: [ { a: 6, b: 'somestring', c: [Object] } ] }
