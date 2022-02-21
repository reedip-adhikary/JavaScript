console.log("script start")
const allBtn = document.querySelectorAll(".my-buttons button")
allBtn.forEach((btn) => {
    btn.addEventListener("click", e => {
        let num = 0
        for (let i = 0; i < 100000000; i++) {
            num += i
        }
        console.log(e.currentTarget.textContent, num)
    })
})
let outV = 0
for (let i = 0; i < 100000000; i++) {
    outV += i
}
console.log(outV)
console.log("scrit end")

/* 
        JS Engine                      console                         webAPI

        stack                                                   
    |           |                1.  script start                       
    |           |                2.  allBtn                             
    |           |                3.  eventListener     -->     browser will check for event
    |           |                                                        BTN1
    |___________|                                                        BTN2
    |   GEC     |                                                        BTN3
    |___________|                4.  forloop           -->     while running event happened
                                                                    BTN1,BTN2, BTN3
                                                     this events will get into callback queue
                                                     then the event loop won't let the event
                                                     go in to call stack unless the current
                                                     execution context is over
                                 5. ontV
                                 6. script end
    pop GEC from stack
    push BTN1
                                 7. btn1 event happened
    pop BTN1                                 
    push BTN2
                                 7. btn2 event happened
    pop BTN2                                 
    push BTN3
                                 7. btn3 event happened
    pop BTN3 

*/