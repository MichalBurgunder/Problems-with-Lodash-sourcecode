const _ = require("lodash");

let suitcase = { clothes: true };
let vacationItems = { tripleTap: true, bag: suitcase };

console.time();
const vacationItemsDeepClone = _.cloneDeep(vacationItems);
console.timeEnd();

// confirmaton
// suitcase.game = "chessSet";
// console.log(vacationItems);
// ==> { tripleTap: true, bag: { clothes: true, game: 'chessSet' } }
// console.log(vacationItemsDeepClone);
// ==> { tripleTap: true, bag: { clothes: true } }
