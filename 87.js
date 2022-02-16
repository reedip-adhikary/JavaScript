class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
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

// const animal1 = new Animal("cat", 0.5)
// console.log(animal1.eat("fish"))

class Cat extends Animal {
    // has all the methods and constructors that parent class has
}

const pushon = new Cat("Pushon", 0.5)
console.log(pushon)
console.log(pushon.isCute())
console.log(pushon.isNaughty())