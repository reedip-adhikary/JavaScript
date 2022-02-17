// find method will return the first occurance of value which returns the functios value as true

const animals = ["tiger", "cat", "dog", "lion"]

const ani3 = animals.find(string => string.length === 3)
console.log(ani3)


const users = [
    { userId: 1, userName: "Reedip" },
    { userId: 2, userName: "Moubani" },
    { userId: 3, userName: "Anup" },
    { userId: 4, userName: "Debtanu" },
    { userId: 5, userName: "Sagarnil" }
]

const oneUser = users.find(user => user.userId === 3)
console.log(oneUser)