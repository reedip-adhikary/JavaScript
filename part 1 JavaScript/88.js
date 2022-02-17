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

class Cat extends Animal {
    constructor(name, age, speed) {
        super(name, age)   // gives the parameter to parent class to run 
        this.speed = speed
    }

    run() {
        return `${this.name} can run at ${this.speed} kmph`
    }
}

// object / instance
const pushon = new Cat("Pushon", 0.5, 48)

console.log(pushon)
console.log(pushon.run())