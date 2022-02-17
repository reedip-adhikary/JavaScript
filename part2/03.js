// 1. inside global scope
// myFunction

// 2. creation of GEC

//  2.      C.E.                                    1.    Creation
//                                                  window = {}
//                                                  this = window
//                                                  myFunction = undefined
//                                      for function expression it is treated like a variable
// console.log(myfunction) -> undefined
// myfunction() -> error
//                                                  myFynction = function
// console.log(myfunction) -> f myfunction(){
//                console.log("this is my function");
//                }
// myfunction() -> this is my function

console.log(myfunction)
// myfunction()  // error :  Uncaught TypeError: myfunction is not a function

var myfunction = function () {
    console.log("this is my function");
}

console.log(myfunction)
myfunction()