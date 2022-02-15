function hello() {
    console.log("hello world")
}

// in js functions are functions + object
console.log(hello.name)   // gives function name

hello.myOwnProperty = "unique property"
console.log(hello.myOwnProperty)

// function gives us an empty object to work with which is called prototype

console.log(hello.prototype)

// only functions provide prototype proerty