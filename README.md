__Note: This article has first been published on [Medium](https://betterprogramming.pub/my-problem-with-lodash-7e64df8173f9) and is also available on my personal [blog](https://anotheruselessdotblog.wordpress.com/2020/08/03/example-post-3/).__

# My Problem with Lodash

Lodash has been hailed as an essential library for Javascript, with good reason. It is a library that provides plenty of functions, some more intuitive than others, that make the job of a developer much easier. However, an overreliance on lodash can come with costs of efficiency, as well as readability of code.

Before I get into the details, I need to confess, I am not a senior programmer, or an engineer with a formal software background. I've had one year of experience in the world of software engineering and coding, and perhaps I am talking out of my depth here. Perhaps lodash _is_ a library that should be learned, and should be used often. However, to me, it comes with significant costs of readability.

I've always had a knack for writing, having written a screenplay, several short stories and a short play, which is why I place a great deal of attention to code quality and readability. To me, writing code is very similar to writing short stories, in that in needs to write in a readable, and dense syntax/style, in order to get a point across faster. In the case of coding, this concept approximately translates to efficiency.

Having said this, using lodash for every problem that one encounters, is I think, unnecessary. The spread operator for example, makes many of the functionalities of lodash superfluous, as well as more readable.

## Assign

I found that the best example where the spread operator can be used, is for the lodash `_.assign()`function. In essence, the function assigns all values of one object, to a another one:

```
let prop2 = { b: "Some property", d: null };
let prop3 = { a: [2, 3], c: "An amazing String", d: 777 };
let prop4 = { a: 888 };
let prop5 = { a: 999 };

const finalProp = _.assign(prop1, prop2, prop3, prop4, prop5);
console.log(finalProp);
// ==> { a: 999, b: 'Some property', d: 777, c: 'An amazing String' }
```

It is undoubtedly an extremely useful function. However, it is very easily reproducible, and does not require us, in most cases, to import lodash:

```
const finalProp = { ...prop1, ...prop2, ...prop3, ...prop4, ...prop5 };
console.log(finalProp);
// ==> { a: 999, b: 'Some property', d: 777, c: 'An amazing String' }
```

The first method might seem nicer, especially if one is familiar with the assign() function already. For style however, there are good reasons to go with the second method:

1. There are no additional functions, which makes the file more readable. Only plain Javascript is used.
2. It takes out the ambiguity of what happening in the assign function, which might do something that the programmer does not expect.
3. You are not importing anything into the file.

It is also much more efficient: Running the two functions in two separate files, (n=10) takes on average `3.290ms` for the lodash function, while the second method, takes on average only `4.218ms`. Thus, the custom function is 28% more efficient than the lodash function.

## Union

This is the function that I dislike the most. The function is aptly named, coming from set theory, although this also requires us to be more aware of hidden complexity: Applying the union function on two arrays, not only concatenates both arrays, but it also remove duplicatse of the final array:

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

to get to the same result, again with increased efficiency (0.578ms for lodash, 0.107ms for inhouse, 540% more efficient). In addition to this, it is also much more clear what exactly is going on when written out explicitly.

## Clone && CloneDeep

This is an intersting one, because this is a function that I still use. When first encountering Javascript/programming many of us were probably a bit perturbed at how one cannot easily create new objects:

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

Although this solution does do the job of generating a shallow copy of the given object, it took me on average about 0.611ms to clone this item. A better solution, in my mind, is the one that, again uses the spread operator:

```
let suitcase = { clothes: true };
let vacationItems = { tripleTap: true, bag: suitcase };

const vacationItemsClone = { ...vacationItems };
```

The spread operator helps us to achieve the same result, while only taking 0.105ms. That's 5.8 times (581% more efficient) faster than the lodash function! Another, similar way of cloning, gives about the same timeframe. Ofcourse, the objects given are very simple and there are likely examples out there in which my solution doesn't work. Otherwise there would be no need for the lodash function anymore.

But what about deepCloning an object, so that the inner object references are cloned as well? For this, lodash does a very clean, but again, inefficient job:

```
const _ = require("lodash");

let suitcase = { clothes: true };
let vacationItems = { tripleTap: true, bag: suitcase };

console.time();
const vacationItemsDeepClone = _.cloneDeep(vacationItems);
```

On my mac, this function takes on average 0.985ms, whereas my custom function takes only 0.197ms, (500% more efficient):

```
let suitcase = { clothes: true };
let vacationItems = { tripleTap: true, bag: suitcase };

console.time();
const vacationItemsDeepClone = JSON.parse(JSON.stringify(vacationItems));
console.timeEnd();
```

Clearly, this is a far more complicated-looking function than the simple cloneDeep() from lodash, which is why I still use cloneDeep() from lodash. I admit that the lodash function is not particularly efficient, but it makes ones code much more readable and you won't have to worry about the JSON class trying to stringify _and_ parse an awfully large object.

## Conclusion

Lodash is a great Library with many resources. I have often used lodash functions, such as difference() or isEqual(). However, I'm making the claim that overusing lodash, especially for some of the functions I have mentioned, can have a negative effect on your project. Having code that consists of many different lodash functions, requires new developers to learn the package, instead of Javascript, which costs time and effort. Using library functions, where simpler functions will do, will decrease ones understanding of any given programming language, whch, in time, will decrease ones effectiveness at coding.
