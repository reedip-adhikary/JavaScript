const URL = "https://jsonplaceholder.typicode.com/posts"

fetch(URL)  // returns promise
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("something went wrong")
        }
    })
    .then(data => console.log(data))
    .catch(error => {
        console.log("catch block")
        console.log(error)
    })
// for fetch the propmise will be rejected only if there is a network error
// when the url is wrong (status 404) the catch block will not run