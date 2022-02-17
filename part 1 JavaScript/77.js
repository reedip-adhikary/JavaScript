// const user1 = {
//     firstName: "Reedip",
//     lastName: "Adhikary",
//     email: "reedipadhikary@gmail.com",
//     age: 22,
//     address: "Palpara, Malbazar, 735221",
//     about: function () {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function () {
//         return this.age > 18
//     }
// }

// we need many users like this so we will create a function that will take inputs create an object and will give us an object


function createUser(firstName, lastName, age, email, address) {
    const user = {};
    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    user.email = email
    user.address = address
    user.about = function () {
        return `${this.firstName} is ${this.age} years old`
    }
    user.is18 = function () {
        return this.age >= 18
    }
    return user
}

const user1 = createUser("Reedip", "Adhikary", 22, "reedipadhikary@gmail.com", "palpara, malbazar")

console.log(user1)
console.log(user1.about())
console.log(user1.is18())


// in this process for every users 2 methods are being created will takes up memory.