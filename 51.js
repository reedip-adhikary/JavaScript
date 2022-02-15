//previous way

// const add2 = (a, b) => {
//     if (typeof b === "undefined") b = 0
//     return a + b
// }


// default parameters

const add2 = (a, b = 0) => a + b
console.log(add2(4))