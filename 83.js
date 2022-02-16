// new 

// function createUser(firstName, age) {
//     this.firstName = firstName,
//         this.age = age
// }
// createUser.prototype.about = function () {
//     console.log(this.firstName, this.age)
// }

// const user1 = new createUser("Reedip", 22)

// // work of new
// // 1. creating empty object this = {}
// // 2. return this
// // 3. Object.create(create user)  this step will be done

// console.log(user1)
// user1.about()


// constructor function
// if we are creating a function that will be accessed with new in future we name it starting with uppercase
function CreateUser(firstName, lastName, age, email, address) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.email = email
    this.address = address
}
CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`
}
CreateUser.prototype.is18 = function () {
    return this.age >= 18
}
CreateUser.prototype.sing = function () {
    return "toon la la na na la"
}

const user1 = new CreateUser("Reedip", "Adhikary", 22, "reedipadhikary@gmail.com", "palpara, malbazar")
const user2 = new CreateUser("Moubani", "Laskar", 21, "mmoubanilaskar@gmail.com", "joteswar, Alipur")
const user3 = new CreateUser("Anup", "Barman", 25, "AnupBarman@gmail.com", "City center, siliguri")

console.log(user1.about())
console.log(user1.is18())
console.log(user1.sing())
console.log(user1.__proto__)