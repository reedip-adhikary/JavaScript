// splice is used to insert delete something in middle of array, changes original array
// splice can return deleted item

const myArray1 = ["it1", "it2", "it3", "it4"];

// delete
const deletedItem = myArray1.splice(1, 1);  // start from index 1, delete 1 item
console.log(deletedItem)
console.log(myArray1)

// insert
myArray1.splice(1, 0, "inserted item")  // start from index 1, delete o item, insert "item"
console.log(myArray1)

// delete and insert
myArray1.splice(1, 1, "inserted item 1", "inserted item 2")
console.log(myArray1)