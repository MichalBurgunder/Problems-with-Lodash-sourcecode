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

## Union

This is the function that I struggle with the most. The function is aptly named, coming from set theory, although this also requires us to be more aware of hidden complexity: applying the union function on two arrays, not only puts both arrays into a single array, but it also uniquefies the elements of both arrays:

```
const _ = require("lodash");

const array1 = [1, 4, "hello", 2, 999];
const array2 = [2, "there", 4.7, "hello"];

console.time();
const finalArray = _.union(array1, array2);
console.timeEnd();

// console.log(finalArray);
// ==> [ 1, 4, 'hello', 2, 999, 'there', 4.7 ]
```

Using the same objects, we can simply use

```
const finalArray = new Set([...array1, ...array2]);
```

to get to the same result, again with increased efficiency (0.578ms for lodash, 0.107ms for inhouse). In addition, it is also much more clear what exactly is going on.

## Clone && CloneDeep

This is an intersting one, because this is a function that I still use. When first encountering Javascript many of us were probably a bit perturbed at how one cannot easily create new objects:

```
let pocket = ["phone", "wallet"];
let anotherPocket = pocket;

pocket.push("keys");

console.log(pocket === anotherPocket);
// ==> true
```

If we were unlucky with the solution that we found, or if we rushed our education (such as me), then we will have probably learned the lodash solution, which duplicates any object that the function is given:

```
const _ = require("lodash");

let suitcase = { clothes: true };
let vacationItems = { tripleTap: true, bag: suitcase };

const vacationItemsClone = _.clone(vacationItems);
```

Although this solution does do the job of generating a shallow copy of the given object, it took me on average about 0.611ms to clone this item. A better solution, in my mind, is the one that does not use a foreign function, but an inhouse made function:

```
let suitcase = { clothes: true };
let vacationItems = { tripleTap: true, bag: suitcase };

const vacationItemsClone = { ...vacationItems };
```

The spread operator helps us to achieve the same result, but with the far better efficiency of only 0.105ms. That's six times faster than the lodash function! Another, similar way of cloning, gives about the same timeframe. Ofcourse, the example given is very simple and there are likely examples out there in which my solution doesn't work. Otherwise there would be no need for the lodash function anymore.

But what about deepCloning an object, so that the inner object references are cloned as well? For this, lodash does a very clean, but again, inefficient job:

```
const _ = require("lodash");

let suitcase = { clothes: true };
let vacationItems = { tripleTap: true, bag: suitcase };

console.time();
const vacationItemsDeepClone = _.cloneDeep(vacationItems);
```

On my mac, this function takes on average 0.985ms, whereas the custom function takes only 0.197ms, five times as fast:

```
let suitcase = { clothes: true };
let vacationItems = { tripleTap: true, bag: suitcase };

console.time();
const vacationItemsDeepClone = JSON.parse(JSON.stringify(vacationItems));
console.timeEnd();
```

Clearly, this is a far more complicated-looking function than the simple cloneDeep from lodash. This is why I still use te cloneDeep() function from lodash, even if I admit that it is not particularly efficient. But the beauty of this, is that there is no need for the function to be this ugly; We can simply pack it into a function, and then use the function, instead of having to import lodash into our project. This way, much of the code that we write can be considered inhouse.

## Conclusion

Lodash is a grat Library with many resources. I have often used functions from this library, such as difference(),
