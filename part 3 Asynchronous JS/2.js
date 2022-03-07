// setInterval

// console.log("Script start")
// setInterval(() => {
//     console.log(Math.random())   // it keeps executing the code after set time
// }, 500)
// console.log("Script end")


const body = document.body
const button = document.querySelector("button")
const refresh = document.querySelector("h3")

const intervalId = setInterval(() => {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    body.style.backgroundColor = `rgb(${red},${green},${blue})`
}, 1000)

button.addEventListener("click", () => {
    clearInterval(intervalId)
    button.textContent = body.style.backgroundColor
    refresh.style.display = "block"
})

refresh.addEventListener("click", () => {
    window.location.reload();
})