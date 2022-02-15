// break

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i) // 0, 1 , 2
}

console.log("out");

// continue

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i) // 0, 1 , 2 , 4, 5
}

console.log("out");