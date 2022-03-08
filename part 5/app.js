const myInput = document.getElementById("input-event")
const btn = document.querySelector(".btn")

// keyup   calls function when the key of keyboad goes up
// input   calls function the moment the key is pressed
// change  calls function when the focus is removed from the input field

// myInput.addEventListener("input", function(e) {
//     // console.log(myInput.value)
//     // console.log(e.target.value)
//     console.log(this.value)
// })

// trailing debouncing
function trailingDebounce(func, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func.call(this, ...args)
        }, delay)
    }
}

function findSuggestion(e) {
    console.log("Suggestion for ", e.target.value)
}

//leading debouncing
function leadingDebouncing(func, delay) {
    let timeoutId = null
    return function (...args) {
        if (timeoutId === null) {
            func.call(this, ...args)
        }
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            timeoutId = null
        }, delay)
    }
}

function ClickMe() {
    console.log("Added to cart")
}

// Trailing + Leading
function debounce(func, delay, option = { leading: false, trailing: true }) {
    let timeoutId = null
    return function (...args) {
        if (timeoutId === null && option.leading) {
            func.call(this, ...args)
        }
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            if (option.trailing) {
                func.call(this, ...args)
            }
            timeoutId = null
        }, delay)
    }
}

const dFindSuggetion = trailingDebounce(findSuggestion, 500)

myInput.addEventListener("input", dFindSuggetion)
// btn.addEventListener("click", leadingDebouncing(ClickMe, 300))
btn.addEventListener("click", debounce(ClickMe, 300, option = { leading: true, trailing: true }))