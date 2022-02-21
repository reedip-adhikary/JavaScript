// elem.insertAdjustmentHTML(where, html)
// beforebegin
// afterbegin
// beforeend
// afterend

const todoList = document.querySelector(".todo-list")
todoList.insertAdjacentHTML("beforebegin", "<h2>beforebegin</h2>")
todoList.insertAdjacentHTML("beforeend", "<h2>beforeend</h2>")
todoList.insertAdjacentHTML("afterend", "<h2>afterend</h2>")
todoList.insertAdjacentHTML("afterbegin", "<h2>afterbegin</h2>")