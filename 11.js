// undefined

let fName;
console.log(typeof fName); // undefined since no value is given

fName = "ABC";
console.log(typeof fName);

// null

let variable = null;
console.log(typeof variable, variable); //typeof is object which is a bug in javaScript

//BigInt

let myNum = BigInt(12);
let sameMyNum = 12n;
console.log(myNum);
console.log(sameMyNum);
console.log(Number.MAX_SAFE_INTEGER);

// BigInt + BigInt  - valid
// bigInt + int     - invalid