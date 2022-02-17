//      GEC
//          1.    Creation                                          2.      C.E.
//      window={}
//      this = window
//      power = function
//      cube = uninitiaised
//      ans = uninitiaised


//      FEC
//          1.    Creation                                          2.      C.E.
//      argument = [3]
//      power = 3
//                                                          return function with variables


//      GEC
//          1.    Creation                                          2.      C.E.
//       cube = function
//       power = 3


//      FEC
//          1.    Creation                                          2.      C.E.
//      argument = [2]
//      num = 2
//                                                          return num ** power -> 8

//      GEC
//          1.    Creation                                          2.      C.E.
//      ans = 8
//                                                              console.log(ans) -> 8

function power(power) {
    return function (num) {
        return num ** power
    }
}
const cube = power(3)
const ans = cube(2)
console.log(ans)