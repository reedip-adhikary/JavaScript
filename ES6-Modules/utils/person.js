export default class Person {
    constructor(firstName, lastname, age) {
        this.firstName = firstName
        this.lastname = lastname
        this.age = age
    }
    info() {
        console.log(this.firstName, this.lastname, this.age)
    }
}


export class Person2 {
    constructor(firstName, lastname, age) {
        this.firstName = firstName
        this.lastname = lastname
        this.age = age
    }
    info() {
        console.log(this.firstName, this.lastname, this.age)
    }
}


