// optional chaining

const user = {
    fName: "Reedip",
    // address2: { houseNumber2: "12345" },
    address: { houseNumber: "1234" }
}

console.log(user?.fName)  // if value is present then will give value or else undefined
console.log(user?.address?.houseNumber)

// when value is not present

// console.log(user.address2)  // undefined
// console.log(user.address2.houseNumber2)  // error
// console.log(user.address2.houseNumber2)  // error
console.log(user?.address2?.houseNumber2)  // undefined