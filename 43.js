const users = [
    { userId: 1, name: "Reedip", age: 22, gender: "male" },
    { userId: 2, name: "Moubani", age: 21, gender: "female" },
    { userId: 3, name: "Anup", age: 25, gender: "male" }
]

// const [user1, user2, user3] = users // all variables will be an object
let [{ name }, { gender, age }, { userId, age: u3age }] = users // selecting a key from object to make a variable. 2 same keys cannot be used to make variable so one has to be changed
console.log(gender)
console.log(age)
console.log(u3age)