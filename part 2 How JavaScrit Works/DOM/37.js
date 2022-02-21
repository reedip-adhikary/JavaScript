// keypress event
// mouseover event
// mouseleave event

const body = document.body
const todoli = document.querySelectorAll(".todo-list li")
const learnmore = document.querySelector(".btnheadline")

body.addEventListener("keypress", (e) => {
    console.log(e.key)
})

todoli.forEach((li) => {
    li.addEventListener("mouseover", () => {
        li.style.backgroundColor = "rgb(255,220,0,0.5)"
    })
})

todoli.forEach((li) => {
    li.addEventListener("mouseleave", () => {
        li.style.backgroundColor = "#461f0a0e"
    })
})

learnmore.addEventListener("mouseover", () => {
    learnmore.style.backgroundColor = "rgb(255,220,0)"
})

learnmore.addEventListener("mouseleave", () => {
    learnmore.style.backgroundColor = "#e7e7e7"
})