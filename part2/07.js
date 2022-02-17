// 1. inside global scope
// lastname
// printName
//      firstName

// 2. creation of GEC

//      1. GEC
//  2.      C.E.                                    1.    Creation
//                                                  window = {}
//                                                  this = window
//                                                  lastName = uninitialised
//                                                  printName = uninitialised
//                                                  lastName = "Adhikary"
//                                                  printName = function

//      2. FEC
//  2.      C.E.                                    1.    Creation
//                                              argument = []
//                                              firstName = uninitialised
//                                              firstName = "Reedip"
// console.log(firstName) -> Reedip
// console.log(lastName) -> Adhikary  
// lastName is not present in function so it'll go it's lexical environment to find the value


const lastName = "Adhikary"
const printName = function () {
    const firstName = "Reedip"
    console.log(firstName)
    console.log(lastName)
}
printName()