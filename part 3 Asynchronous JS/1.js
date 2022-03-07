// synchronous vs asynchronous


// synchronous
// one line of code will execute after the previous one is complete

// console.log("first line")

// for (let i = 0; i < 10000; i++) {
//     console.log("second line")
// }

// console.log("last line")       // this will not execute unless the previous one is complete

// asynchronous
// setTimeout

// console.log("script starts")
// function hello() {
//     console.log("hello world!")
// }
// setTimeout(hello, 3000)  // provided by web browser
// // this will wait for 3000ms/ 3s to run this code but the code after it will keep executing
// // setTimeout returns an id
// console.log("script end")

/*
      call stack                console                      WebAPI by browser
    |           |           1. script start                  
    |           |                                       setTimeout -> will wait for set time
    |           |                                      then will give it back to js
    |___________|           2. script end
    |    GEC    |                                          set time over
    |___________|           
                            call back queue
                        -------------------------------
     Event loop               CB
                        -------------------------------
    pop GEC
    push CB
                            3. hello world
    pop CB

*/

console.log("script starts")
const id = setTimeout(() => console.log("inside timeout"), 1000)
for (let i = 0; i < 100; i++)console.log("forloop")
console.log("setTimeout id: " + id)
console.log("clearing timeout")
clearTimeout(id)    // doesnot let setTimeout to run
console.log("script end")