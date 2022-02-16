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
console.log(user1.__proto__)

// to print user1's own properties

for (let key in user1) {
    if (user1.hasOwnProperty(key)) {
        console.log(key)
    }
}