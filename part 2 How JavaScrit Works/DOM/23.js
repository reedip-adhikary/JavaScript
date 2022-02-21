// add new html element to page

// innerHtml to ad html element

const todoList = document.querySelector(".todo-list")
// console.log(todoList.innerHTML)

todoList.innerHTML += "<li>Practice JavaScript</li>"
todoList.innerHTML += "<li>Buy Groceries</li>"


// when you shoild use it and when you should not

// not : performance becomes bad
// should : not to add but change the html