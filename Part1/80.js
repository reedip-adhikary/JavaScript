const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old`
    },
    is18: function () {
        return this.age >= 18
    },
    sing: function () {
        return "toon la la na na la"
    }
}

function createUser(firstName, lastName, age, email, address) {
    const user = Object.create(userMethods);
    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    user.email = email
    user.address = address

    return user
}

const user1 = createUser("Reedip", "Adhikary", 22, "reedipadhikary@gmail.com", "palpara, malbazar")
const user2 = createUser("Moubani", "Laskar", 21, "mmoubanilaskar@gmail.com", "joteswar, Alipur")
const user3 = createUser("Anup", "Barman", 25, "AnupBarman@gmail.com", "City center, siliguri")

console.log(user1.about())
console.log(user1.is18())
console.log(user1.sing())
console.log(user1.__proto__)

console.log(user2.about())
console.log(user2.is18())

console.log(user3.about())
console.log(user3.is18())