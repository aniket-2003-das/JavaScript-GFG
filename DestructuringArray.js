// Array destructuring
// var names = ["alpha", "beta", "gamma", "delta"];
// var [firstName, secondName] = names;

// Array destructuring with direct assignment
var [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
console.log(firstName); // "alpha"
console.log(secondName); // "beta"


// Array destructuring while skipping elements
var [firstName,, thirdName] = ["alpha", "beta", "gamma", "delta"];
console.log(firstName); // "alpha"
console.log(thirdName); // "gamma"


// Using the rest operator (...) to capture remaining elements
var [firstName,, ...lastName] = ["alpha", "beta", "gamma", "delta"];
console.log(firstName); // "alpha"
console.log(lastName);  // ["gamma", "delta"]


// Swapping variables using array destructuring
var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;
console.log(firstName); // "alpha"
console.log(secondName); // "beta"
// swapping the values
[firstName, secondName] = [secondName, firstName];
console.log(firstName); // "beta"
console.log(secondName); // "alpha"



// Function returning an array
function NamesList() {
    return ["alpha", "beta", "gamma", "delta"];
}
// Destructuring the returned array from the function
var [firstName, secondName] = NamesList();
console.log(firstName); // "alpha"
console.log(secondName); // "beta"