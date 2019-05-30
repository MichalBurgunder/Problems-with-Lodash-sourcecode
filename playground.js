const t = { a: 6, b: 55, c: "hello" };

const lalala = JSON.parse(JSON.stringify(t));

console.log(lalala);
lalala.rr = 33333;
console.log(t);
console.log(lalala);
