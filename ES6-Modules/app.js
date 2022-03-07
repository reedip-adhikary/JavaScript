import { firstName as fname } from './utils/fname.js'
import { age } from './utils/age.js'
import PP, { Person2 } from './utils/person.js'

console.log(fname, age)

const person = new PP("Reedip", "Adhikary", 22)
person.info()
console.log(person)
const person2 = new Person2("Reedip", "Adhikary", 22)
person2.info()
console.log(person2)