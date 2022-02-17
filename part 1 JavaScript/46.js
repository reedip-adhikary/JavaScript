// const singHBD = function () {
//     console.log("happy birthday to you...")
// }
// singHBD()

const singHBD = () => console.log("happy birthday to you...")
singHBD()



// const sumOf2 = function (a, b) {
//     return a + b;
// }
// console.log(sumOf2(4, 5))

const sumOf2 = (a, b) => a + b;
// if there is only one line in function it can be written like above
console.log(sumOf2(4, 5))



// const isEven = function (a) {
//     return a % 2 === 0;
// }
// console.log(isEven(8))

const isEven = a => a % 2 === 0;
// if only one parameter is present (a) can be written as a 
console.log(isEven(8))


// const firstChar = function (a) {
//     return a[0];
// }
// console.log(firstChar("Reedip"))

const firstChar = a => a[0];
console.log(firstChar("Reedip"))


// const findTarget = function (ar, target) {
//     for (let i = 0; i < ar.length; i++) {
//         if (ar[i] === target) {
//             return i;
//         }
//     }
//     return "target not found"
// }

const findTarget = (ar, target) => {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === target) {
            return i;
        }
    }
    return "target not found"
}
const arr = [1, 10, 5, 4, 7]
console.log(findTarget(arr, 9))