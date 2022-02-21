const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

// event bubbling / event propagation

// document.body.addEventListener("click", () => console.log("Bubble Body"))
// grandparent.addEventListener("click", () => console.log("Bubble Grandparent"))
// parent.addEventListener("click", () => console.log("Bubble Parent"))
// child.addEventListener("click", () => console.log("Bubble Child"))

// capturing event

// document.body.addEventListener("click", () => {
//     console.log("Capturing body")
// }, true)
// grandparent.addEventListener("click", () => {
//     console.log("Capturing Grandparent")
// }, true)
// parent.addEventListener("click", () => {
//     console.log("Capturing Parent")
// }, true)
// child.addEventListener("click", () => {
//     console.log("Capturing Child")
// }, true)

//event delegation

grandparent.addEventListener("click", (e) => {
    console.log(e.target)
})