console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Math.PI);

let num  = 12;
let num2 = '12';
console.log(num+num2); //num int to string
console.log(num-num2); //num2 string to int

console.log(parseInt(num2)); //use parseFloat

let num3 = 12.8;
console.log(Math.round(num3));
console.log(Math.floor(num3));
console.log(Math.ceil(num3));
console.log(Math.abs(num3)); //always +ve
console.log(Math.max(10,36,22,8));
console.log(Math.min(10,36,22,8));

// let randomnum = Math.random(); //[0,1) 0 possib;e not 1
// let randomnum = Math.floor(Math.random()*100);
// console.log(randomnum);

let minnum=10;
let maxnum=20;
let randomnum = Math.floor(Math.random() * (maxnum-minnum) + minnum);
console.log(randomnum);