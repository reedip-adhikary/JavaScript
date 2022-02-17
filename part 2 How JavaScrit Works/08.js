// closures -> when function is returned it returns with higher function's local memory

//      GEC
//          1.    Creation                                          2.      C.E.
//      window={}
//      this = window
//      printFullname = function
//      ans = uninitialised

//      FEC
//          1.    Creation                                          2.      C.E.
//      argument = [Reedip,Adhikary]
//      fname = "Reedip"
//      lname = "Adhikary"
//      printName = Function
//                                       return printName -> when print name will return it'll
//                                          return with the local variables of printFullname

//      GEC
//          1.    Creation                                          2.      C.E.
//      ans = Function
//      fname = "Reedip"
//      lname = "Adhikary"

//      FEC
//          1.    Creation                                          2.      C.E.
//      argument = []
//                                            console.log(fname, lname) -> Reedip Adhikary


function printFullname(fname, lname) {
    function printName() {
        console.log(fname, lname)
    }
    return printName
}

const ans = printFullname("Reedip", "Adhikary")
ans()