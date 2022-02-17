// compile
// code execution

// compilation phase
// 1 Tokenizing / Lexing
//  breaks code into small pieces called token
// 2 Parsing
//  understands the token and creates abstract syntax tree
// 3 code generation
//  executavle formatted code generated

// why compile?
// Early error checking
// determining appropreate scope for variables

// global scope  --> fName

// code execution phase
// in js code executes inside execution context
// the first eecution context that is created is called global execution context


// Global Execution Context
// 1. creation phase
// 2. code execution phase


//  2.      C.E.                                    1.    Creation

//                                      even before executing the first line of code it'll
//                                               create the variable in global scope
//                                               fName = undefined (incase of var)
//                                      after creation of GEC the value of 'this' is set
//                                this= window (for browser, different for other environment)
//                                                window={} is provided by browser

// console.log(this) -> window{}
// console.log(window) -> window{}
// console.log(fName) -> undefined
//                                                      var fname = "Reedip"
// console.log(fName) -> Reedip



console.log(this)
console.log(window)
console.log(fName)
var fName = "Reedip"
console.log(fName)