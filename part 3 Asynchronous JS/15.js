const URL = "https://jsonplaceholder.typicode.com/posts"

// returns promise
fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
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