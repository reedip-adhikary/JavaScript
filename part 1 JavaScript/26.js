let fruits = ["apple", "mango", "orange"];
let nums = [1, 2, 3, 4, 5];
let mix = [1, 2, 3.4, "string", null, undefined, true];

console.log(fruits);
fruits[1] = "banana";  // change values in index
console.log(fruits);

console.log(typeof fruits); //object
console.log(Array.isArray(fruits)); // to check if it is array -> true
