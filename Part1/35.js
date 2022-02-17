// array destructuring

const arr1 = ["val1", "val2", "val3", "val4"];

// let var1 = arr1[0];
// let var2 = arr1[1];

// console.log(var1);
// console.log(var2);

// let [var1, var2] = arr1;
// for var1 -> val1 var2-> val3
// let [var1, , var2] = arr1;
// for making array of the remaining values
let [var1, var2, ...a1] = arr1;

console.log(var1);
console.log(var2);
console.log(a1);