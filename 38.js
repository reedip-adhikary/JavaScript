const person = {
    name: "Reedip",
    age: 22,
    hobbies: [
        "games",
        "sleeping",
        "photoshop"
    ]
};

// for in
// object.keys
//for of

// --------------------------------------------------------

// //for keys
// for (let key in person) {
//     console.log(key); // cannot use .
// }

// // for values
// for (let key in person) {
//     console.log(person[key]); // cannot use .
// }

// // for key: value pair
// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// --------------------------------------------------------

// console.log(Object.keys(person)) // gives an array of the keys

// --------------------------------------------------------

for (let key of Object.keys(person)) {
    console.log(person[key])
}