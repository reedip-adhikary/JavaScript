const key = "email";
const person = {
    name: "Reedip",
    age: 22,
    "person hobbies": [
        "games",
        "sleeping",
        "photoshop"
    ]
};
// console.log(person);
console.log(person["person hobbies"]); // cannot use . because of space

// to set value of a variable as key

person[key] = "reedip@gmail.com" // cannot be done with .
console.log(person)

