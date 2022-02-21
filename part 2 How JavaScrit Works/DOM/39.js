const todoform = document.querySelector(".form-todo")
const todoinput = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list")

todoform.addEventListener("submit", (e) => {
    e.preventDefault()    // doesnot let the page refresh
    const newTodoText = todoinput.value
    const newLi = document.createElement("li")
    const newLiInnerHTML = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`
    newLi.innerHTML = newLiInnerHTML
    todoList.append(newLi)
    todoinput.value = ""
})

todoList.addEventListener("click", (e) => {
    const btndone = document.querySelector(".done")
    // check id user clicked on done
    if (e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through"
        btndone.style.display = "none"
    }
    if (e.target.classList.contains("remove")) {
        const removetask = e.target.parentNode.parentNode;
        removetask.remove()
    }

})