// const headings = document.querySelectorAll("h2")
// setTimeout(() => {
//     headings.forEach((heading) => {
//         heading.textContent = heading.className
//         heading.style.textTransform = "capitalize"
//         heading.style.color = "#7a00ff"
//         // after 2 secs it'll change all the headings name atthe same time
//     })
// }, 2000)

const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")
const heading8 = document.querySelector(".heading8")

// callback hell

// setTimeout(() => {
//     heading1.textContent = heading1.className
//     heading1.style.textTransform = "capitalize"
//     heading1.style.color = "violet"
//     setTimeout(() => {
//         heading2.textContent = heading2.className
//         heading2.style.textTransform = "capitalize"
//         heading2.style.color = "purple"
//         setTimeout(() => {
//             heading3.textContent = heading3.className
//             heading3.style.textTransform = "capitalize"
//             heading3.style.color = "red"
//             setTimeout(() => {
//                 heading4.textContent = heading4.className
//                 heading4.style.textTransform = "capitalize"
//                 heading4.style.color = "pink"
//                 setTimeout(() => {
//                     heading5.textContent = heading5.className
//                     heading5.style.textTransform = "capitalize"
//                     heading5.style.color = "green"
//                     setTimeout(() => {
//                         heading6.textContent = heading6.className
//                         heading6.style.textTransform = "capitalize"
//                         heading6.style.color = "blue"
//                         setTimeout(() => {
//                             heading7.textContent = heading7.className
//                             heading7.style.textTransform = "capitalize"
//                             heading7.style.color = "brown"
//                         }, 1000)
//                     }, 3000)
//                 }, 2000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// }, 1000)

function changetext(element, color, time, onSuccess, onFailure) {
    setTimeout(() => {
        if (element) {
            element.textContent = element.className
            element.style.textTransform = "capitalize"
            element.style.color = color
            if (onSuccess) {
                onSuccess()
            }
        } else {
            if (onFailure) {
                onFailure()
            }
            // console.log("Wrong class oe element does not exist")
        }
    }, time)
}

// pyramid of doom
changetext(heading1, "violet", 1000, () => {
    changetext(heading2, "purple", 2000, () => {
        changetext(heading3, "red", 2000, () => {
            changetext(heading4, "pink", 1000, () => {
                changetext(heading5, "green", 2000, () => {
                    changetext(heading6, "blue", 3000, () => {
                        changetext(heading7, "brown", 1000, () => {
                        }, () => console.log("wrong"))
                    }, () => console.log("wrong"))
                }, () => console.log("wrong"))
            }, () => console.log("wrong"))
        }, () => console.log("wrong"))
    }, () => console.log("wrong"))
}, () => console.log("wrong"))