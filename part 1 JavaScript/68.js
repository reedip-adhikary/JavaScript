// maps is an iterable
// stores data in ordered fashion
// stores key balue pairs
// duplicate keys are not allowed

// difference between maps and objects
// objects can only have string or symbol as key
// in maps anything can be key
//      array number string


//object literal
// const person = {
//     firstName: "Reedip",
//     age: 22,
//     1: "one"    // one will be chnages to string
// }

const person = new Map()
person.set("fName", "Reedip")
person.set("age", 22)
person.set(1, "one")    // 1 is number
person.set([1, 2, 3], "onetwothree")

console.log(person)
console.log(person.get('fName'))
console.log(person.get(1))
console.log(person.keys())

for (let key of person) {    // for keys use person.keys()
    console.log(key)
}

for (let [key, value] of person) {
    console.log(key, value)
}

const person2 = new Map(
    [
        ["fName", "Moubani"],
        ["age", 21]
    ]
)
console.log(person2)

const user = {
    id: 1,
    fname: "Anup"
}

const userInfo = new Map();
userInfo.set(user, { age: 25, gender: "male" })
console.log(userInfo)
console.log(user.id)
console.log(userInfo.get(user).age)