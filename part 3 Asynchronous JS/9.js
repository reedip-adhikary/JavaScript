const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")
const heading8 = document.querySelector(".heading8")

function changetext(element, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = element.className
                element.style.textTransform = "capitalize"
                element.style.color = color
                resolve("Task done")
            } else {
                reject("Element not found")
            }
        }, time)
    })
}

changetext(heading1, "violet", 1000)
    .then(() => changetext(heading2, "purple", 2000))
    .then(() => changetext(heading3, "red", 2000))
    .then(() => changetext(heading4, "pink", 1000))
    .then(() => changetext(heading5, "green", 2000))
    .then(() => changetext(heading6, "blue", 3000))
    .then(() => changetext(heading7, "brown", 1000))
    .then(() => changetext(heading8, "orange", 1000))
    .catch(error => alert(error))