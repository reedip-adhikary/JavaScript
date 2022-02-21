// loop

// let navItems = document.getElementsByTagName("a")  // html collection
// console.log(navItems)

let navItems = document.querySelectorAll("a")  // nodelist
// console.log(navItems)

// for (let i = 0; i < navItems.length; i++) {
//     const navItem = navItems[i]
//     navItem.style.backgroundColor = "#fff"
//     navItem.style.color = "#000"
//     navItem.style.padding = "3px 10px"
//     navItem.style.borderRadius = "5px"
//     navItem.style.fontWeight = "bold"
// }

// for (let navItem of navItems) {
//     navItem.style.backgroundColor = "#fff"
//     navItem.style.color = "#000"
//     navItem.style.padding = "3px 10px"
//     navItem.style.borderRadius = "5px"
//     navItem.style.fontWeight = "bold"

// }

// to use foreach you have to convert it to array

navItems = Array.from(navItems)
navItems.forEach(navItem => {
    navItem.style.backgroundColor = "#fff"
    navItem.style.color = "#000"
    navItem.style.padding = "3px 10px"
    navItem.style.borderRadius = "5px"
    navItem.style.fontWeight = "bold"
})