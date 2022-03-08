// decorator function -> takes function returns function
// function decorator(func) {
//     return function (...args) {
//         console.log("functionality increased")
//         func.call(this, ...args)
//     }
// }
// function hello(a) {
//     console.log("hello world", a)
// }
// const dh = decorator(hello); dh("Reedip")