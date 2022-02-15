// reduce method will reduce an array and give us a single value


const numbers = [1, 2, 3, 4, 5, 10]

// aim: sum of all the numbers in array

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum)



// this is the default behavior
//                      accumulator, currentValue, return
// first function call      1           2           3
// second                   3           3           6
// third                    6           4           10
// fourth                   10          5           15
// fifth                    15          10          25



// to change the default behavior and  set a initial value
const sum100 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 100)
// setting a initial value at the end of the function will make the first value of accumulator == 1== and current value = 1. 
// hence the su will be 100 + sum = 125
console.log(sum100)



const userCart = [
    { productId: 1, proName: "Mobile", price: 28000 },
    { productId: 2, proName: "Laptop", price: 60000 },
    { productId: 3, proName: "TV", price: 56000 }
]
const cartValue = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price
}, 0)

console.log(cartValue)

// totalPrice, currentProduct.price, return
//      0               28000         28000
//      28000           60000         88000
//      88000           56000         144000