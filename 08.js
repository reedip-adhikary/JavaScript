// typeof operator

// data types - primitive datatype
// string ="Reedip"
// numbers 2,3,5
// Boolean
// undefines
// null
// BigInt
// symbol

let age = 56

let name = "reedip"

console.log(typeof age);
console.log(typeof name);

// change numcer to string
// 56 -> "56"
console.log(typeof (age + ""));

age = age + "";

// change from string to number
// "56" -> 56
// +"56" changes to number
console.log(typeof +age);

//to string
age = String(age);
console.log(typeof age);

//to number
age = Number(age);
console.log(typeof age);