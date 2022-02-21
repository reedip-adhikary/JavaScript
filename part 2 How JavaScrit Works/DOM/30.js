// intro to event

// click
// button press
// mouse over


// click event

// 1. write code on html element
/* <button class="btn btnheadline" onclick="console.log('button clicked')">Learn more</button> */


// 2. 
// const btn = document.querySelector(".btnheadline")
// btn.onclick = function () {
//     console.log("you clicked me")
// }


// 3.
// method -> addEventListener
const btn = document.querySelector(".btnheadline")
function clickMe() {
    console.log("you clicked me")
}
btn.addEventListener("click", clickMe)