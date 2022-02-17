//      GEC
//          1.    Creation                                          2.      C.E.
//      window={}
//      this = window
//      hello = function
//      ans = uninitialised

//      FEC
//          1.    Creation                                          2.      C.E.
//      argument = [arg]
//      x = "arg"
//      a= uninitialised
//      b= uninitialised
//      a=varA
//      b=varB
//                                         return f -> returns function and local variables

//      GEC
//          1.    Creation                                          2.      C.E.
//      ans = Function
//      x = "arg"
//      a=varA
//      b=varB

//      FEC
//          1.    Creation                                          2.      C.E.
//      argument = []
//                                            console.log(a,b,x) -> varA varB arg

function hello(x) {
    const a = "varA"
    const b = "varB"
    return function () {
        console.log(a, b, x)
    }
}

const ans = hello("arg")
ans()