const _ = require("lodash");
const { deepClone } = require("../helpers");
let suitcase = { clothes: true };
let vacationItems = { tripleTap: true, bag: suitcase };

console.time();
const vacationItemsDeepClone = deepClone(vacationItems);
console.timeEnd();

// confirmaton
// suitcase.game = "chessSet";
// console.log(vacationItems);
// ==> { tripleTap: true, bag: { clothes: true, game: 'chessSet' } }
// console.log(vacationItemsDeepClone);
// ==> { tripleTap: true, bag: { clothes: true } }
