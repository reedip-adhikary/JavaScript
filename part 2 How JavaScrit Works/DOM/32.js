// const btn1 = document.querySelector("#one")
const btn1 = document.querySelectorAll("button")

for (let button of btn1) {
    button.addEventListener("click", function () {
        console.log(this.textContent)
    })
}