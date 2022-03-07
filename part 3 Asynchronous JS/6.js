function ricePromise() {
    const bucket = ['coffee', 'chips', 'salt', 'rice']
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve("Fried Rice")
        } else {
            reject(new Error("All ingredients not available to cook fried rice"))
        }
    })
}

ricePromise().then(myFriedRice => {
    console.log("Lets eat " + myFriedRice)
}).catch(error => console.log(error))
