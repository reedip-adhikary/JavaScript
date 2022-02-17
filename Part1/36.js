// OBJECTS ARE REFERENCE TYPE
// ARRAYS ARE NOT SUFFICIENT FOR REAL WORLD DATA
// OBJECTS STORE KEY VALUE PAIR
// OBJECTS DON'T HAVE INDEX

// also called object literal
// const person = { name: "Reedip", age: 22 };
// console.log(person);
// console.log(person.name);

// objects cant have same keys. if they do the later one will override the previous key


const person = {
    name: "Reedip",
    age: 22,
    hobbies: [
        "games",
        "sleeping",
        "photoshop"
    ]
};
console.log(person);
// console.log(person.name);
// console.log(person.hobbies);

person.gender = "male";
console.log(person);

console.log(person["name"]);
console.log(person.age);

person["maritalStatus"] = "single";
console.log(person.maritalStatus);