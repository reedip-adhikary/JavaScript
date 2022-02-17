const user1 = {
    fName: "Reedip",
    age: 22,
    about: () => {
        console.log(this)
        console.log(this.fName, this.age)
    }
}

user1.about()
user1.about.call(user1)

// arrow function doesnot take value of this from the object
// it takes this from one level higher. in this case the window object
// even using call method you can't change the value of this

