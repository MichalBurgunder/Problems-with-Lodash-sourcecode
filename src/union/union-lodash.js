const _ = require("lodash");

const array1 = [1, 4, "hello", 2, 999];
const array2 = [2, "there", 4.7, "hello"];
console.time();
const var1 = _.union(array1, array2);
console.timeEnd();

console.log(var1);
