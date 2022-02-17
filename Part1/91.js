// static will only be accissable by class and not the object

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    static classInfo() {    // static method
        return "this is person class"
    }

    static desc = "Class Description"  // static properties

    get fullname() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullname(fullName) {
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName
        this.lastName = lastName
    }

    eat(food) {
        return `${this.name} who is ${this.age} years old eats ${food}`
    }

    isCute() {
        return this.age <= 1
    }

    isNaughty() {
        return true
    }
}

const person1 = new Person("Reedip", "Adhikary", 22)

// person1.classInfo() // will give error

console.log(Person.classInfo())
console.log(Person.desc)