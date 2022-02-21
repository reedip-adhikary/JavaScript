// static list vs live list

// querySelectorAll gives static method
// getElementsBy Somethid gives live list

// const listItems = document.querySelectorAll(".todo-list li")

const ul = document.querySelector(".todo-list")
const listItems = ul.getElementsByTagName("li")

const li6 = document.createElement("li")
li6.textContent = "item 6"


ul.append(li6)
console.log(listItems)