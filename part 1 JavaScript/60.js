// sort method

// unlike other methods sort changes the original array

const numbers = [1, 56, 3, 70, 100, 45]
numbers.sort()
console.log(numbers) //[1, 100, 3, 45, 56, 70]
// the result is like this because JS is changing numbers in to string and then sorting it by using ASCII values

const names = ["Reedip", "Moubani", "Ruchira", "Anup", "Payel", "Debtanu", "reedip", "moubani", "ruchira", "anup", "payel", "debtanu"]
names.sort()
console.log(names)


const numbers2 = [1, 56, 3, 70, 100, 45]
numbers2.sort((a, b) => a - b)
console.log(numbers2)
// if a - b > 0 ie. +ve then b will come before a

const userCart = [
    { productId: 1, proName: "Mobile", price: 28000 },
    { productId: 2, proName: "Laptop", price: 60000 },
    { productId: 3, proName: "TV", price: 56000 },
    { productId: 4, proName: "tablet", price: 44000 },
    { productId: 5, proName: "monitor", price: 19000 },
    { productId: 6, proName: "controller", price: 5600 },
]
const lowToHigh = userCart.slice(0).sort((a, b) => a.price - b.price)
console.log(lowToHigh)

const highToLow = userCart.slice(0).sort((a, b) => b.price - a.price)
console.log(highToLow)

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125



