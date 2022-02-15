// let age =50;
// alert(`hello you are ${age} years old`);

// let num1 = prompt("enter num 1"); //turns number in to string
// let num2 = prompt("enter num 2");
// let total = num1+num2
// alert(total);

// let num1 = parseFloat(prompt("enter num 1"));
// let num2 =parseFloat(prompt("enter num 2"));

// let num1 = Number(prompt("enter num 1"));
// let num2 = Number(prompt("enter num 2"));
// let total = num1+num2
// alert(total);

// let age = prompt("your age?",18); // saves the default value to 18

// let x = confirm("are you sure?");
// console.log(x); //saves boolean value

// let age = 9;
// if (age>10) {
//     console.log("game available");
// }
// else{
//     console.log("unable to download game");
// }

// let num = prompt("enter number");
// if (num%2===0) {
//     console.log("EVEN");
// }
// else{
//     console.log("ODD");
// }

// let age = 15;

// if (age>18){
//     console.log("good to go");
// }else{
//     console.log("not good to go");
// }

// // ternry operation

// age>18 ? console.log("good to go") : console.log("not good to go");

// let ab18 = age>18 ? true : false;
// console.log(ab18);

// let temp = 38;

// (temp<=-90)? console.log("another planet"): 
// (temp<=0)? console.log("extremely cold"): 
// (temp<10)? console.log("very cold"): 
// (temp<15)? console.log("little cold"): 
// (temp<25)? console.log("perfect"):
// (temp >=25 && temp<=45)? console.log("hot day"):
// console.log("Don't die");

// let message = (temp<=-90)? "another planet": 
// (temp<=0)? "extremely cold": 
// (temp<10)? "very cold": 
// (temp<15)? "little cold": 
// (temp<25)? "perfect":
// (temp >=25 && temp<=45)? "hot day":
// "Don't die";
// console.log(message);

let day =4;

// if(day===0){
//     console.log("sunday");
// }
// else if(day===1){
//     console.log("monday");
// }
// else if(day===2){
//     console.log("tuesday");
// }
// else if(day===3){
//     console.log("wednesday");
// }
// else if(day===4){
//     console.log("thursday");
// }
// else if(day===5){
//     console.log("friday");
// }
// else if(day===6){
//     console.log("saturday");
// }
// else{
//     console.log("invalid day");
// }

// switch(day){
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     default:
//         console.log("invalid day");
// }


// Nullish Coalescing operator

// let myname;
// console.log(myname ?? "unknown"); //---> unknown
// let myname = "reedip";
// console.log(myname ?? "unknown"); //---> reedip

let myname;
let myname1=null;
let myname2="reedip";
let myname3="adhikary";
let fullname = myname ?? myname1 ?? myname2 ?? myname3;
console.log(fullname);//---> reedip