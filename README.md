# My Problem with Lodash

Lodash has been hailed as one of those libraries for javascript that is essential to programming in the language. It is a library that provides tons of useful functions that make the job of a programmer much easier. However, an overreliance on lodash can come with costs of efficiency, as well as readability of code.

Before I get into the details, I need to confess, I am not a senior programmer, or engineer. I've just had about one year in the world of software engineering and coding, and perhaps I am talking out of my depth here. Nevertheless, before I started coding, I've always had a knack for writing, having written a screenplay, while currently writing a short story collection. To me, writing code is very similar to writing short stories, in that in needs to readable, and dense, in order to get a point across faster, or the case of code, in getting the job done sooner.

Having said this, using lodash for any problem that one encounters, is I think, unnecessary. The spread operator for example, takes many of the functionalities of lodash superfluous, depending on how one uses each of the functions.

## Assign

The best example where the spread operator can be used, is for the lodash `_.assign()`function. In essence, the function assigns all values of one object, to a another one:

```
let prop2 = { b: "Some property", d: null };
let prop3 = { a: [2, 3], c: "An amazing String", d: 777 };
let prop4 = { a: 888 };
let prop5 = { a: 999 };

const finalProp = _.assign(prop1, prop2, prop3, prop4, prop5);
console.log(finalProp);
// ==> { a: 999, b: 'Some property', d: 777, c: 'An amazing String' }
```

It is undoubtedly an extremely useful function. However, it is very easily reproducible, and does not require the lodash library, or even a custom function. Using the same parameters, we can recreate the function using only the spread operator:

```
const finalProp = { ...prop1, ...prop2, ...prop3, ...prop4, ...prop5 };
console.log(finalProp);
// ==> { a: 999, b: 'Some property', d: 777, c: 'An amazing String' }
```

The first method might seem nicer, especially if one is familiar with the assign() function already. For reasons of style, there are however good reasons to go with the second method:

1. there are no additional functions, which makes the file more readable. Only native Javascript is used.
2. it takes out the ambiguity of what happening in the assign function, which might do somethig unexpected.
3. You are not importing anything into the file.

It is also much more efficient: Running the two functions in two separate files, ten times each, takes on average `3.290ms` for the lodash function, while it, on avergage, takes only `4.218ms` for the custom writting function. Thus, the custom function is 28% more efficient than the lodash function.

## Clone && CloneDeep

This is an intersting one, because this is a function that I use use. When first encountering Javascript many of us were blown away, and slightly disturbed at how one cannot easily create new objects:

```
let pocket = ["phone", "wallet"];
let anotherPocket = pocket;

pocket.push("keys");

console.log(pocket === anotherPocket);
// ==> true
```

One ways around this ofcourse, such as the slice() function for arrays:

```
const rightPocket = ["phone", "wallet", "keys"];
const leftPocket = rightPocket.slice();

console.log(rightPocket);
// ==> [ 'phone', 'wallet', 'keys' ]
console.log(leftPocket);
// ==> [ 'phone', 'wallet', 'keys' ]
console.log(rightPocket === leftPocket);
// ==> false
```

However, a function that does the job, regardless what object you are trying to clone, is the JSON.parse(JSON.stringify()) function:

```
const obj1 = [
  { a: 88, b: "hi", c: [{ a: 6, b: "someString", c: { d: "hi" } }] }
];

const obj1clone = JSON.parse(JSON.stringify(obj));

console.log(obj1clone);
// ==> { a: 88, b: 'hi', c: [ { a: 6, b: 'somestring', c: [Object] } ] }

```

Clearly, this is a far more complicated-looking function than the simple clone from lodash. But the beauty of this function is that it

## Union
