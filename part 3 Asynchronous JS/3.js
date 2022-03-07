// function myFunc1(callback) {
//     console.log("function is doing task 1")
//     callback()
// }
// myFunc1(() => console.log("function is doing task 2"))


function get2Num(num1, num2, onSuccess, onFailure) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        onSuccess(num1, num2)
    } else {
        onFailure()
    }
}
// function get2Num(num1, num2) {
//     if (typeof num1 === "number" && typeof num2 === "number") {
//         onSuccess(num1, num2)
//     } else {
//         onFailure()
//     }
// }
function onSuccess(num1, num2) {
    console.log(num1 + num2)
}
function onFailure(num1, num2) {
    console.log("Wrong Datatype")
}
// get2Num(5, "6", (n1, n2) => console.log(n1 + n2), () => console.log("Wrong Datatype"))
get2Num(5, "6", onSuccess, onFailure)
// get2Num(5, "6")