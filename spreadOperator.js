const arr = [1, 2, 3, 4, 5];
console.log(arr); 
console.log(...arr); 


// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [8, 9];
// const combinedArr = [...arr1, 6, 7, ...arr2, 10, 11];
// console.log(combinedArr);


const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); 

const updatedObj = { ...obj1, b: 3 };
console.log(updatedObj); // Output: { a: 1, b: 3 }



const user1 = {
    name: 'Jen',
    age: 22
};
const clonedUser = { ...user1 };
console.log(clonedUser);



const user3 = {
    name: 'Jen',
    age: 22,
};
const user2 = {
    name: "Andrew",
    location: "Philadelphia" 
};
const mergedUsers = {...user1, ...user2};
console.log(mergedUsers)




