// classes
// classes are fake

class CreateUser {
    constructor(firstName, lastName, age, email, address) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
        this.address = address
    }
    about() {
        return `${this.firstName} is ${this.age} years old`
    }
    is18() {
        return this.age >= 18
    }
    sing() {
        return "toon la la na na la"
    }
}

const user1 = new CreateUser("Reedip", "Adhikary", 22, "reedipadhikary@gmail.com", "palpara, malbazar")
const user2 = new CreateUser("Moubani", "Laskar", 21, "mmoubanilaskar@gmail.com", "joteswar, Alipur")
const user3 = new CreateUser("Anup", "Barman", 25, "AnupBarman@gmail.com", "City center, siliguri")

// everytime new user will be created using new create user constructor will be called

console.log(user1.about())

console.log(user1.__proto__)