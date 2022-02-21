// document.create()
// append
// prepend
// remove

// const newTodoItem = document.createElement("li")

// const newTodoItemText = document.createTextNode("JS practice")
// newTodoItem.append(newTodoItemText)

// newTodoItem.textContent = "JS practice 2"

// const todoList = document.querySelector(".todo-list")
// todoList.append(newTodoItem) // adds at end
// todoList.prepend(newTodoItem) // adds at start

// const todo1 = document.querySelector(".todo-list li")
// todo1.remove()


// before
// after

const newTodoItem = document.createElement("li")
newTodoItem.textContent = "JS practice 2"
const todoList = document.querySelector(".todo-list")

// todoList.before(newTodoItem)
todoList.after(newTodoItem)