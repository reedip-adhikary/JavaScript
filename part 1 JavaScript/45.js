// function singHBD() {
//     console.log("happy birthday to you...")
// }
// singHBD()

const singHBD = function () {
    console.log("happy birthday to you...")
}
console.log(singHBD)  //shows the function
singHBD()  //calls the function     // typeof singHBD -> function


// function sumOf2(a, b) {
//     return a + b;
// }
const sumOf2 = function (a, b) {
    return a + b;
}
console.log(sumOf2)
console.log(sumOf2(4, 5))


// function isEven(a) {
//     return a % 2 === 0;
// }
const isEven = function (a) {
    return a % 2 === 0;
}
console.log(isEven)
console.log(isEven(8))


// function firstChar(a) {
//     return a[0];
// }
const firstChar = function (a) {
    return a[0];
}
console.log(firstChar)
console.log(firstChar("Reedip"))

// function findTarget(ar, target) {
//     for (let i = 0; i < ar.length; i++) {
//         if (ar[i] === target) {
//             return i;
//         }
//     }
//     return "target not found"
// }
const findTarget = function (ar, target) {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === target) {
            return i;
        }
    }
    return "target not found"
}
const arr = [1, 10, 5, 4, 7]
console.log(findTarget)
console.log(findTarget(arr, 9))