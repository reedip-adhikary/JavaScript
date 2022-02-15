// const myfunc = (a, b, ...c) => {
//     console.log(`a is ${a}`) // 1
//     console.log(`b is ${b}`) // 2
//     console.log(`c is ${c}`) // 3,4,5,6,7,8,9
// }
// myfunc(1, 2, 3, 4, 5, 6, 7, 8, 9)

const addAll = (...a) => {
    let sum = 0;
    for (let i in a) {
        sum = sum + a[i]
    }
    console.log(a)
    return sum
}
console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))