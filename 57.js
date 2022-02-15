// map always creates a new array
// like forEach map will also pass value first then the index

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// const square = number => console.log(number * number)

// map will always store what is being returned by the function in an array
// if we use console.log and no return by default it will return "undefined"
// hence for every element in numbers an "undefined will be stored in sqnumbers"
// [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

const square = number => number * number
const sqNumbers = numbers.map(square);
console.log(sqNumbers)

const cubeNumbers = numbers.map(num => `${num * num * num}`)
console.log(cubeNumbers)

const users = [
    { firstName: "Reedip", age: 22 },
    { firstName: "Moubani", age: 21 },
    { firstName: "Anup", age: 25 },
    { firstName: "Payel", age: 21 },
]

const userNames = users.map(user => user.firstName)
console.log(userNames)