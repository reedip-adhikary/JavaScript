// const ar1 = [1, 2, 3]

// const newArr = [...ar1, ..."abc", ..."1234"]; // a,b,c   1,2,3,4
// console.log(newArr)


// spread operator in objects

const obj1 = {
    key1: "val1",
    key2: "val2"
};

const obj2 = {
    key1: "obj2 key1",
    key3: "val3",
    key4: "val4"
};

// const cloneObj = { ...obj1, ...obj2, key10: "value10" }

// const cloneObj = { ..."abc" }  // index will become key a, b, c will become values
const cloneObj = { ...["it1", "it2"] }  // index will become key items will become values

console.log(cloneObj)