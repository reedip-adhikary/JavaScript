// const user1 = {
//     fName: "Reedip",
//     age: 22,
//     about: function () {
//         console.log(this.fName, this.age)
//     }
// }


const user1 = {
    fName: "Reedip",
    age: 22,
    about() {
        console.log(this.fName, this.age)
    }
}

user1.about()