// 1. inside global scope
// fName
// lname
// myFunction
//      var1
//      var2

// 2. creation of GEC

//  2.      C.E.                                    1.    Creation
//                                                  window = {}
//                                                  this = window
//                                               fName = uninitialised
//                                               lName = uninitialised
//                                               myFunction = uninitialised
// console.log("hello world") -> hello world
//                                               let fName = "Reedip"
//                                               let lName = "Adhikary"
//                                               myFunction = initialised


console.log("hello world")
let fName = "Reedip"
let lName = "Adhikary"

const myFunction = function () {
    let var1 = "First Variable"
    let var2 = "second Variable"
    console.log(var1)
    console.log(var2)
}
