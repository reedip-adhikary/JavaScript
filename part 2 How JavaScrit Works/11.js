//      GEC
//          1.    Creation                                          2.      C.E.
//      window={}
//      this = window
//      func = function

//      FEC
//          1.    Creation                                          2.      C.E.
//      argument = []
//      called = uninitialised
//      called = 0
//                                                          return function with variables

//      GEC
//          1.    Creation                                          2.      C.E.
//       func1 = function
//       called = 0

//      FEC
//          1.    Creation                                          2.      C.E.
//      argument = []
//      called = 1
//                                              console.log("Hi this is my first time here")

//      FEC
//          1.    Creation                                          2.      C.E.
//      argument = []
//      called = 1
//                                              console.log("you called me too many times")

function func() {
    let called = 0
    return function () {
        if (called === 0) {
            called++
            console.log("Hi this is my first time here")

        } else {
            console.log("you called me too many times")
        }
    }
}
const func1 = func()
func1()
func1()
const func2 = func()
func2()
func2()