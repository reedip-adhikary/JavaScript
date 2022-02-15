// filter method will take call back function which should always return boolean values

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const isEven = num => num % 2 === 0

//filter method will return an array and it will add elements in new array if the functions returns true
const evenNums = numbers.filter(isEven)
console.log(evenNums)


const oddNums = numbers.filter(nums => nums % 2 !== 0)
console.log(oddNums)