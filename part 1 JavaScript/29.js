// clone array


let ar1 = ['it1', "it2"];

// 1
// slice // fastest

// let ar2 = ar1.slice(0);

// console.log(ar1 === ar2);
// ar1.push("it3")
// console.log("value of ar1 -> ", ar1);
// console.log("value of ar2 -> ", ar2);


// 2
// concatenate

// let ar2 = [].concat(ar1);

// console.log(ar1 === ar2);
// ar1.push("it3")
// console.log("value of ar1 -> ", ar1);
// console.log("value of ar2 -> ", ar2);

// 3
// spread operator

let ar2 = [...ar1];

console.log(ar1 === ar2);
ar1.push("it3")
console.log("value of ar1 -> ", ar1);
console.log("value of ar2 -> ", ar2);


// =================================================================

let ar3 = ar1.slice(0).concat(["it4", "it5"]);
console.log(ar3)

let ar5 = ["it4", "it5", "it6"];
let ar4 = [...ar1, ...ar5];
console.log("ar4 -> ", ar4)