const allBtn = document.querySelectorAll(".my-buttons button")

allBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        btn.style.outline = "none"
        btn.style.border = "1px solid black"
        btn.style.padding = "2px 7px"
        btn.style.borderRadius = "2px"
        if (e.currentTarget.textContent == "My button one") {
            btn.style.backgroundColor = "rgb(255,0,0,0.5)"
        } else if (e.currentTarget.textContent == "My button two") {
            btn.style.backgroundColor = "rgb(0,255,0,0.5)"
        } else {
            btn.style.backgroundColor = "rgb(0,0,255,0.3)"
        }
    })
})