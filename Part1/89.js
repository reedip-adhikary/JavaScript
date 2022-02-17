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

    eat(food) {
        return `Modified eat : ${this.name} who is ${this.age} years old eats ${food}`
    }

    run() {
        return `${this.name} can run at ${this.speed} kmph`
    }
}

// object / instance
const pushon = new Cat("Pushon", 0.5, 48)

console.log(pushon)
console.log(pushon.run())
console.log(pushon.eat("fish"))    // if method is available at sub class it'll call that method 