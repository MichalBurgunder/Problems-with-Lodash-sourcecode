const _ = require("lodash");

let suitcase = { clothes: true };
let vacationItems = { tripleTap: true, bag: suitcase };

console.time();
const vacationItemsClone = { ...vacationItems };
console.timeEnd();

suitcase.game = "chessSet";
// console.log(vacationItems);
// ==> { tripleTap: true, bag: { clothes: true, game: 'chessSet' } }
// console.log(vacationItemsClone);
// ==> { tripleTap: true, bag: { clothes: true, game: 'chessSet' } }
// console.log(vacationItems === vacationItemsClone);
// ==> false
