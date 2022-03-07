// Promise.resolve

// const myPromise = Promise.resolve(5)
// myPromise.then(val => console.log(val))

// then() will always return promise
// reason: so that we can do promise chaining

// promise chaining

function myPromise() {
    return new Promise((resolve, reject) => {
        resolve(`Resolved: Foo`)
    })
}

myPromise().then(val => {
    console.log(val)
    val += "Baaa"
    return val             // the val is a promise not a value
}).then(val => {
    console.log(val)
    val += "Loooo"
    return val
}).then(val => {
    console.log(val)
    val += "Taaaaa"
    return val
}).then(val => {
    console.log(val)
})