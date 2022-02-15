const ar1 = ["it1", "it2", "it3"];
const ar2 = [];
let i = 0;
let j = 0;

while (i < ar1.length) {
    console.log(ar1[i]);
    i++
}

while (j < ar1.length) {
    ar2.push(ar1[j].toUpperCase());
    j++
}

console.log(ar2);