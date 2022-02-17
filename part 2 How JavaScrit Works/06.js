// 1. inside global scope
// foo
// getFullName
//      myVar
//      fullname

// 2. creation of GEC

//   call stack
// |            | After complete code execution is done GEC is popped
// |            |
// |            | After FEC is done is is popped
// |____________| 
// |    FEC     | on step 4 when function is called FEC is pushed in stack
// |____________|
// |    GEC     | when GEC is created is is pushed in stack
// |____________|

// when function is called it creates function execution context


//      1. GEC
//  2.      C.E.                                    1.    Creation
//                                                  window = {}
//                                                  this = window
//                                                  foo = uninitialised
//                                                  getFullName = function
//                                                  personName = uninitialised
//                                                      foo = "foo"
// console.log(foo) -> foo

//      2. FEC
//  2.      C.E.                                    1.    Creation
//                                     array like object (has index and and length property)
//                                     array like object -> argument = ["Reedip","Adhikary"] 
//                                              fname = "Reedip"
//                                              lname = "Adhikary"
//                                              myVar = uninitialised
//                                              fullname = uninitialised
// console.log(arguments)-> [Reedip,Adhikary]
//                                                  myVar = "var inside function"
// console.log(myVar) -> var inside function
//                                                 fullname = "Reedip Adhikary"

//      3. GEC
//  2.      C.E.                                    1.    Creation
//                                                  personName = "Reedip Adhikary"
// console.log(personName) -> Reedip Adhikary

let foo = "foo"
console.log(foo)
function getFullName(fname, lname) {
    console.log(arguments);
    let myVar = "var inside func"
    console.log(myVar)
    const fullname = fname + " " + lname
    return fullname
}
const personName = getFullName("Reedip", "Adhikary")
console.log(personName)