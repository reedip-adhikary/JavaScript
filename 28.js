// primitive type

let num1 = 6;

let num2 = num1;

console.log("value of num1 -> ", num1);
console.log("value of num2 -> ", num2);

num1++;

console.log("value of num1 -> ", num1);
console.log("value of num2 -> ", num2); // value only increased in num1


// reference type

let ar1 = ["it1", "it2"];

let ar2 = ar1;

console.log("value of ar1 -> ", ar1);
console.log("value of ar2 -> ", ar2);

ar1.push("it3");

console.log("value of ar1 -> ", ar1);
console.log("value of ar2 -> ", ar2); // value increased in ar2 also
console.log(ar1 === ar2); // true