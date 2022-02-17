// function hello() {
//     console.log("hello world")
// }
// hello.call()    // same as hello()



// const user1 = {
//     fName: "Reedip",
//     age: 22,
//     about: function () {
//         console.log(this.fName, this.age)
//     }
// }

// const user2 = {
//     fName: "Moubani",
//     age: 21,
// }

// user1.about()
// user1.about.call(user2)  //Moubani 21

// here user 2 is borrowing about function from user1.
// using the call function it will call the function and in the () we can specify whose value the this in about should take



const user1 = {
    fName: "Reedip",
    age: 22,
    about: function (hobby, job) {
        console.log(this.fName, this.age, hobby, job)
    }
}

const user2 = {
    fName: "Moubani",
    age: 21,
}

user1.about("games", "web developer")

// call
user1.about.call(user2, "drawing", "nurse")

// apply
user1.about.apply(user2, ["drawing", "nurse"])

// bind
// bind will return a function
const func = user1.about.bind(user2, "drawing", "nurse")
func()