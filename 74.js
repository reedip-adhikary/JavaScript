const user1 = {
    fName: "Reedip",
    age: 22,
    about: function () {
        console.log(this.fName, this.age)
    }
}

// const myFunc = user1.about
// myFunc()
// here we are not calling the about function and this will only work on runtime. 
// so in this case when we use it like this we store a reference and this will give us the window object.
// hence myFunc will give undefined undefined


const myFunc = user1.about.bind(user1)
myFunc()