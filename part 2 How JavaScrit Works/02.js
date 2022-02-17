// 1. inside global scope
// firstName
// lastName
// fullName
// myFunction

// 2. creation of GEC       GEC will be added inside stack

//  2.      C.E.                                    1.    Creation
//                                                  window = {}
//                                                  this = window
//                                                  firstName = undefined
//                                                  lastName = undefined
//                                                  fullName = undefined
//                                                  myFunction = function
//                                        when function is declared it is also added
//                                           in the memory before executing a code
// console.log(this) -> window{}
// console.log(window) -> window{}
// console.log(myfunction) -> f myfunction(){
//                console.log("this is my function");
//                }
// myfunction() -> this is my function
// console.log(fullName) -> undefined
//                                                  var firstName = "Reedip"
//                                                  var lastName = "Adhikary"
//                                                  var fullName = "Reedip Adhikary"
// console.log(fullName) -> Reedip Adhikary

// after the code has finished executing GEC will be popped from stack

console.log(this)
console.log(window)
console.log(myfunction)
myfunction()
console.log(fullName)

function myfunction() {
    console.log("this is my function");
}

var firstName = "Reedip"
var lastName = "Adhikary"
var fullName = firstName + " " + lastName
console.log(fullName)