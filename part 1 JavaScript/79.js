const obj1 = {
    key1: "value1",
    key2: "value2"
}


// const obj2 = {
//     key3: "value3"
// }
// console.log(obj2.key1) // undefined

// we want if key 1 is not available in obj2 js should go to obj1 and print key1

// so we will use this method to achive that


const obj2 = Object.create(obj1)
console.log(obj2)   // it'll show empty object but it has connection with obj1

obj2.key3 = "value3"
obj2.key2 = "unique"

console.log(obj2.key3)
console.log(obj2.key1)   // value1
console.log(obj2.key2)   // unique     if key is present it'll take that value

console.log(obj2)
console.log(obj2.__proto__)  // obj1    __proto__ / [[prototype]]
