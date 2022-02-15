const person = {
    name: "Reedip",
    age: 22
}

// const printDetails = (obj) => {
//     console.log(obj.name)
//     console.log(obj.age)
// }

const printDetails = ({ name, age, gender }) => {
    console.log(name)
    console.log(age)
    console.log(gender)   // undefines as it is not available
}

printDetails(person)