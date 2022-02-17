// sets (it is iterable)
// stores data
// sets has it's own methods
// no index based access
// order is not guaranteed
// unique items only


const numbersSet = new Set([1, 1, 2, 3]);
console.log(numbersSet) // 1,2,3
console.log(numbersSet[2])  // undefined

const charSet = new Set("abc");
console.log(charSet) // 'a', 'b', 'c'

const firstEmpty = new Set()
firstEmpty.add(1)
firstEmpty.add(2)
firstEmpty.add(2) // won't work
firstEmpty.add(3)
firstEmpty.add(4)
firstEmpty.add(5)
firstEmpty.add(6)
firstEmpty.add(7)
firstEmpty.add(8)
firstEmpty.add(9)
console.log(firstEmpty)

const arr1 = ["it1", "it2", "it2"]  // this will add both it2
const arrSet = new Set()
arrSet.add(arr1)
arrSet.add(arr1) // won't add
console.log(arrSet)

// const arr1 = ["it1", "it2"]
// const arrSet = new Set()
// arrSet.add(["it1", "it2"])
// arrSet.add(["it1", "it2"]) // will add because these 2 arrayshave different memory address
// console.log(arrSet)

console.log(firstEmpty.has(1)) // checks if value is presen in set

for (let num of firstEmpty) {
    console.log(num)
}

// length of set
let length = 0
for (let num of firstEmpty) {
    length = length + 1
}
console.log(length)