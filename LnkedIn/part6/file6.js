function sum3(num1, num2, num3){
    return num1 + num2 + num3;
}

console.log(sum3(3,4,5));

function iseven(num1){
    if(num1%2===0){
        return true;
    }else{
        return false
    }
}

console.log(iseven(3));
console.log(iseven(4));

function email(num){
    return num + "@gmil.com"
}

let maxv = 999999999999;
let minv = 100000000000;
let ran = Math.floor(Math.random() * (maxv-minv+1) + minv);
console.log(ran);
console.log(email(ran));