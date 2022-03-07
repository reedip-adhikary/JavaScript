// promises ===> it is an asynchronous function


console.log("Script End")

// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice']
const bucket = ['coffee', 'chips', 'vegetables', 'salt']

// promise produce --> js

const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("Fried Rice")
    } else {
        reject(new Error("All ingredients not available to cook fried rice"))
    }
})

// promise consume  --> browser

// friedRicePromise.then((myFriedRice) => {
//     // when promise resolved
//     console.log("Lets eat " + myFriedRice)
// }, (error) => {
//     // when promise rejected
//     console.log(error)
// })

setTimeout(() => console.log("setTimeout"), 0)

friedRicePromise.then((myFriedRice) => {
    console.log("Lets eat " + myFriedRice)
}).catch((error) => console.log(error))



// ----------------------------------------------------------------------
for (let i = 0; i < 100; i++) {
    console.log("forloop")
}

console.log("Script End")


/*
     call stack          GEC                console                           browser
    |          |
    |          |
    |__________|
    |    GEC   |
    |__________|    
          ^  ^      bucket: unini
          |  |   friedRicePromise: unini
          |  |                          1. sript start
          |  |      2. bucket: array
          |  |   3. friedRicePromise: {status:--
          |  |                        value:--} --   
          |  |                                   |
          |  |                                   |                      4.  settimeout
        first|                                   |                                |
          |  |                                   ------------------->   5. Promise consume
          |  |                                                              |     |
          |  |                                                              |     |
          |  |                                                              |     |
          |second                                                           |     |
          |  |                                                if resolved -> then |
          |  |                                                if rejected -> catch|
          |  |                                                              |     |
     Event Loop                         6. forloop(100)                     |     |
          |  |                          7. Script end                       |     |
     X   GEC POP                                                            |     |
     |    |  |                                                              |     |
     |    |  |                                                              |     |
     |    |  |                                  microtask queue             |     |
     |    |  |                              priority higher than callback   |     |
     |    |  |                                  --------------------------  |     |
     -----------------------------------------   then/catch        <---------     |
          X  |                                  --------------------------        |
          |  |                                                                    |
          |  |                                                                    |
          |  |                          8. value(then/catch)                      |
          |  |                                                                    |
          |  |                                                                    |
          |  |                                  callback queue                    |
          |  |                                  --------------------------        | 
          ------------------------------------   SetTimeout        <---------------
                                                --------------------------
                                        9. settimeout
*/
