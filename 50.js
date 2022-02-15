// var is function sope
// let and const are block scope


// // block
// {
//     let firstName = "Reedip"
//     console.log(firstName)
// }
// // console.log(firstName)   // let and const cannot be accesible outside the block

// const firstName = "Anup"
// console.log(firstName)

// // block
// {
//     var firstName = "Moubani"
// }
// console.log(firstName)    // var will let you access outside block

{
    var firstName = "Moubani"
    console.log(firstName)
}
console.log(firstName)  // moubani
{
    var firstName = "Anup"
    console.log(firstName)  // anup
}
console.log(firstName)     // anup