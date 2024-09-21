const readlineSync = require('readline-sync');
const obj = {
    name: 'Prakash',
    age: 100
};


// Adding new properties using dot notation
obj.city = 'Mumbai';
obj.state = 'Maharashtra';
// console.log(obj);


// Adding new properties using bracket notation
obj['city'] = 'Mumbai-2';
obj['state'] = 'Maharashtra-2';
// console.log(obj);


// Getting a key from the user
// const key = readlineSync.question('What do you want to know? (name, age, city)');
// Adding the key to the object dynamically
// obj[key] = obj[key] || 'Not Available'; 
// console.log(obj[key]);


// Checking if 'name' property exists in obj
const isNameFound = 'name' in obj;
// console.log(isNameFound);


// Looping through the object
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
