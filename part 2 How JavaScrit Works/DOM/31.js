// this keyword

const btn = document.querySelector(".btnheadline")

// in this case the value of this is the button itself
// btn.addEventListener("click", function () {
//     console.log("you clicked me")
//     console.log(this)
// })

// for arrow this is the window object
btn.addEventListener("click", () => {
    console.log("you clicked me")
    console.log(this)
})