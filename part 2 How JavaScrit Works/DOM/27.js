// appendChild
// insertBefore
// replaceChild
// removeChild


const todoList = document.querySelector(".todo-list")

const li1 = document.createElement("li")
const li2 = document.createElement("li")

const referenceNode = document.querySelector(".first-todo")
li1.textContent = "appendChild"
li2.textContent = "insertBefore"

todoList.appendChild(li1)

todoList.insertBefore(li2, referenceNode)

todoList.replaceChild(li1, referenceNode)

todoList.removeChild(li1)
