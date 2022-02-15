// callback function is when you take function as an input and call it

const myFunc1 = function (callback, name) {
    console.log("Inside func 1")
    callback(name)
}

const myFunc2 = function (name) {
    console.log("inside func 2")
    console.log(`my name is ${name}`)
}

myFunc1(myFunc2, "Reedip")

