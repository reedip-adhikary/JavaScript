// get and set attributes

const link = document.querySelector("a")
console.log(link.getAttribute("href"))
link.setAttribute("href", "https://google.com")
console.log(link.getAttribute("href"))

const inputElement = document.querySelector(".form-todo input")
console.log(inputElement.getAttribute("type"))