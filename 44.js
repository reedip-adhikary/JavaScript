function singHBD() {
    console.log("happy birthday to you...")
}
singHBD()


function sumOf2(a, b) {  // a,b parameter
    return a + b;
}
console.log(sumOf2(3, 4))  // 3,4 argument


function oddEven(a) {
    if (a % 2 === 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
}
oddEven(5)


// function isEven(a) {
//     if (a % 2 === 0) {
//         return true
//     }
//     return false
// }
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(8))


function firstChar(a) {
    return a[0];
}
console.log(firstChar("Reedip"))

function findTarget(ar, target) {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === target) {
            return i;
        }
    }
    return "target not found"      // function will stop working once it returns something. 
}
const arr = [1, 10, 5, 4, 7]
console.log(findTarget(arr, 9))