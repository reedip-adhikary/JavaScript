// sum of n natural numbers

let num = +prompt("Enter a number");

let sum = 0;

let i = 0;

while (i <= num) {
    sum = sum + i;
    i++
}

console.log(sum);


// using maths formula
let sum2 = (num * (num + 1)) / 2;   // this is very much faster than loop
console.log(sum2);