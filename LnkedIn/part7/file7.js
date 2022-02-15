let fruits = ['apple','mango','grapes','orange'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]);

//update
fruits[0]='peach';
console.log(fruits); // change element

//push
fruits.push('black berries');
console.log(fruits); //add at back

//unshift
fruits.unshift('blue berries');
console.log(fruits); //add at the beginning

//pop
let poppedItem = fruits.pop(); //removes 1 element frpm last
console.log(poppedItem);  // returns popped element
console.log(fruits);

//shift
let poppedItem2 = fruits.shift(); //removes 1 element frpm start
console.log(poppedItem2);  // returns popped element
console.log(fruits);

//splice
//remove
fruits.splice(1,1); //index,number of item to be removed
console.log(fruits);
//add
fruits.splice(1,0,'strawberry');
console.log(fruits);

//concat
let fruits2 = ['pineapple','dragon fruit'];
let fruits3 = ['papaya','blue berry'];
let combine = fruits.concat(fruits2, fruits3);
console.log(combine);

//slice
let sliced=combine.slice(1,4);
console.log(sliced);

console.log(fruits.includes('grapes'));

//reverse
console.log(fruits.reverse());

//for of loop
for(let i of fruits){
    console.log(`hello Mr. ${i}`);
}

//for of loop
for(let i in fruits){
    console.log(`hello Mr. ${fruits[i]}`);
}