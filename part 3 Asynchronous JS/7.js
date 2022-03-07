// promise and setTimeout

// I want to resolve / reject promise after 2 secs

function myPromise() {
    return new Promise((resolve, reject) => {
        const value = true
        setTimeout(() => {
            if (value) {
                resolve(`Resolved: ${value}`)
            } else {
                reject(new Error("Promise Rejected"))
            }
        }, 2000)
    })
}

myPromise().then(resolve => console.log(resolve)).catch(error => console.log(error))