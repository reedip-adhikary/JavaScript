// some method will return true if even one return of function is true

const numbers = [3, 5, 6, 9, 11]

const isEven = numbers.some(num => num % 2 === 0)
console.log(isEven)

const userCart = [
    { productId: 1, proName: "Mobile", price: 28000 },
    { productId: 2, proName: "Laptop", price: 60000 },
    { productId: 3, proName: "TV", price: 56000 },
    { productId: 4, proName: "tablet", price: 44000 },
    { productId: 5, proName: "monitor", price: 19000 },
    { productId: 6, proName: "controller", price: 5600 },
]

const under10k = userCart.some(cost => cost.price < 10000)
console.log(under10k)