// every method returns boolean when all the return of the call back function is true.

const numbers = [2, 4, 6, 8, 10]
// if one value is present that gives false, every will return false

const isEven = numbers.every(num => num % 2 === 0)
console.log(isEven)

const userCart = [
    { productId: 1, proName: "Mobile", price: 28000 },
    { productId: 2, proName: "Laptop", price: 60000 },
    { productId: 3, proName: "TV", price: 56000 },
    { productId: 4, proName: "tablet", price: 44000 },
    { productId: 5, proName: "monitor", price: 19000 },
    { productId: 6, proName: "controller", price: 5600 },
]

const under55k = userCart.every(cost => cost.price < 50000)
console.log(under55k)