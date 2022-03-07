const URL = "https://jsonplaceholder.typicode.com/posts"       // correct url
// const URL = "https://jsonplaceholder.typicode.com/postss"   // erong url
const xhr = new XMLHttpRequest()

xhr.open("GET", URL)

xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status <= 300) {
        const data = JSON.parse(xhr.response)
        // console.log(data)
        const id = data[11].id

        const xhr2 = new XMLHttpRequest()
        xhr2.open("GET", URL + "/" + id)
        xhr2.onload = () => {
            const data2 = JSON.parse(xhr2.response)
            console.log(data2)
        }
        xhr2.send()

    } else {
        console.log("something went wrong")
    }
}

xhr.onerror = () => {
    console.log("network error")   // when internet is off or no server response
}

xhr.send()