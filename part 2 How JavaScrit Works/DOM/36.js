const mainBtn = document.querySelector("button")
const body = document.body
const h1 = document.querySelector("h1")

function randomColorGenerator() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    return `rgb(${red},${green},${blue})`
}

mainBtn.addEventListener("click", () => {
    const randomColor = randomColorGenerator()
    h1.textContent = `Current color : ${randomColor}`
    body.style.backgroundColor = randomColor
})