// methods
// function inside object

const person = {
    firstName: "Reedip",
    age: 22,
    about: function () {
        console.log(`I am a student, and my name is ${this.firstName} and age is ${this.age}`)
    },
    understandThis: function () {
        console.log(this)
    }
}

person.about()
person.understandThis()

// this
// this is an object that is calling the key.
// in this example 'this' is the entire object person. 



function userInfo() {
    console.log(`I am a student, and my name is ${this.firstName} and age is ${this.age}`)
}  // won't work with arrow function

const user1 = {
    firstName: "Reedip",
    age: 22,
    about: userInfo
}

const user2 = {
    firstName: "Moubani",
    age: 21,
    about: userInfo
}

const user3 = {
    firstName: "Anup",
    age: 25,
    about: userInfo
}

user1.about()
user2.about()
user3.about()