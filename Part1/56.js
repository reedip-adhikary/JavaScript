const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const multiple2 = (number, index) => {
    console.log(`index ${index}: ${number} * 2 = ${number * 2}`)
}

// 1
// for (let number in numbers) {
//     multiple2(numbers[number], number)
// }


// foeEach will always pass number first then index

// 2
// numbers.forEach(multiple2)

// 3
// numbers.forEach(function (number, index) {
//     console.log(`index ${index}: ${number} * 2 = ${number * 2}`)
// })

// ========================================================================


const users = [
    { firstName: "Reedip", age: 22 },
    { firstName: "Moubani", age: 21 },
    { firstName: "Anup", age: 25 },
    { firstName: "Payel", age: 21 },
]

// users.forEach(function (user) {
//     console.log(user.firstName)
// })

users.forEach(user => console.log(user.firstName))