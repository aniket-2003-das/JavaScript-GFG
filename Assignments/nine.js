// Assignment 9: Given an object obj, we have to invert its key and value for each entry. 
//Inversion will result in value being used as key and key as value.
// E.g:
// Input:  let obj = { name: "Prakash", age: 111, hairColor: "black", likes: "food" };
// Output: { '111': 'age', Prakash: 'name', black: 'hairColor', food: 'likes' }

let obj = {
    name: "Prakash",
    age: 111,
    hairColor: "black",
    likes: "food"
};
  
function invertKeysAndValue(obj) {
    let targetObj = {};
    for (let [key, value] of Object.entries(obj)) {
        targetObj[value] = key;
    }
    return targetObj;
}

console.log(obj);
console.log(invertKeysAndValue(obj));

