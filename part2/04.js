// 1. inside global scope
// fName

// 2. creation of GEC

//  2.      C.E.                                    1.    Creation
//                                                  window = {}
//                                                  this = window
//                                               fName = uninitialised
//                                         for let the variable is uninitialised
//                                                  same for const
// console.log(fName) -> error: 
//       Uncaught ReferenceError: Cannot access
//       'fName' before initialization
//   (will not go to next line)
//                                                  let fName = "Reedip"
// console.log(fName) -> Reedip

// console.log(fName) // error
let fName = "Reedip"
console.log(fName)


// TDZ = Temporal Dead Zone
// an variable stays in TDZ untill the uninitialized variable is initialised. And it will kep giving Reference error

// if we write
// let myVar        the will be undefined after initialization
// const myVar      this won't work with const