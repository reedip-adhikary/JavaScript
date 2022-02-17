// when let is used the scope of i is only inside for

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// console.log(i); // error

// when var is used the scope of i is inside and outside of for

for (var i = 0; i <= 5; i++) {
    console.log(i);
}

console.log(i);