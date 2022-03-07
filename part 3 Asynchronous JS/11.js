const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest()

// step 1
// console.log(xhr)
xhr.open("GET", URL)
// console.log(xhr)
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         const response = xhr.response
//         const data = JSON.parse(response)
//         console.log(data)
//     }
// }

xhr.onload = function () {
    const response = xhr.response
    const data = JSON.parse(response)
    console.log(data)
    console.log(response)
}    // onload will run only when readystate is 4
xhr.send()