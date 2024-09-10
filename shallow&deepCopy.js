// Example of Shallow Copying
let arr1 = [1, 2, 3];
let arr2 = arr1; // Shallow copy

console.log('ARR1:', arr1); // [1, 2, 3]
console.log('ARR2:', arr2); // [1, 2, 3]

// Modify arr2
arr2.push(4);

console.log('Updated ARR2:', arr2); // [1, 2, 3, 4]
console.log('Updated ARR1:', arr1); // [1, 2, 3, 4]

// Solution 1: Using the Spread Operator
let arr3 = ['a', 'b', 'c'];
let arr4 = [...arr3];

console.log(arr3); // [ 'a', 'b', 'c' ]
arr4.push('d');
console.log(arr4); // [ 'a', 'b', 'c', 'd' ]
console.log(arr3); // [ 'a', 'b', 'c' ]

// Solution 2: Using a for Loop
let arr5 = [1, 2, 3];
let arr6 = [];

for (let number of arr5) {
    arr6.push(number);
}

console.log('ARR5:', arr5); // [1, 2, 3]
console.log('ARR6:', arr6); // [1, 2, 3]
arr6.push(4);
console.log('Updated ARR6:', arr6); // [1, 2, 3, 4]
console.log('Updated ARR5:', arr5); // [1, 2, 3]

// Solution 3: Using Array.from
let arr7 = [1, 2, 3];
let arr8 = Array.from(arr7);

console.log('ARR7:', arr7); // [1, 2, 3]
console.log('ARR8:', arr8); // [1, 2, 3]
arr8.push(4);
console.log('Updated ARR8:', arr8); // [1, 2, 3, 4]
console.log('Updated ARR7:', arr7); // [1, 2, 3]

// Solution 4: Using concat
let arr9 = [1, 2, 3];
let arr10 = arr9.concat();

console.log('ARR9:', arr9); // [1, 2, 3]
console.log('ARR10:', arr10); // [1, 2, 3]
arr10.push(4);
console.log('Updated ARR10:', arr10); // [1, 2, 3, 4]
console.log('Updated ARR9:', arr9); // [1, 2, 3]
