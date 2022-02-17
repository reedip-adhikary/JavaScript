// trim() - removes spaces from beginning and end

let name = "     Reedip Adhikary     ";

console.log(name);
console.log(name.length);

name.trim();
console.log(name);
console.log(name.length);

name = name.trim();
console.log(name);
console.log(name.length);

// toUpperCase()
name = name.toUpperCase();
console.log(name);

// toLowerCase()
name = name.toLowerCase();
console.log(name);

// slice
// start index - end index

console.log(name.slice(0, 6)); // 0=r startindex 5=p endindex-1
console.log(name.slice(7, name.length)); // 7=a startindex name.length = lastindex +1 = y endindex-1