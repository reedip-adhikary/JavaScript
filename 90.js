class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    get fullname() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullname(fullName) {
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName
        this.lastName = lastName

    }

}

const person1 = new Person("Reedip", "Adhikary", 22)

console.log(person1)
// console.log(person1.fullname())  // this gives return 
// console.log(person1.fullname)  // this gives the entire function
// but writing get infront of method it'll let us call methods like properties

console.log(person1.fullname)

person1.fullname = "Moubani Laskar"
console.log(person1.fullname)