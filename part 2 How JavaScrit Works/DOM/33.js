// event object

// const firstBtn = document.querySelector("#one")

// firstBtn.addEventListener("click", function (event) {
//     console.log(event)
// })


const btn1 = document.querySelectorAll("button")

for (let button of btn1) {
    button.addEventListener("click", e => console.log(e.currentTarget))
}