const person1 = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};



const person2 = person1; // Shallow copy
const person3 = JSON.parse(JSON.stringify(person1)); // Deep copy
const person4 = Object.assign({}, person1); // Shallow copy



// Using a custom deep copy function:
function deepCopy(obj) {
    // Check if obj is null or is not an object
    if (obj===null || typeof obj !== 'object') {
        return obj; // Return the obj itself if it's not an object or is null
    }
    // Initialize a new empty object if obj
    const copy = Array.isArray(obj) ? [] : {};
    // Iterate through all keys in the obj
    for (const key in obj) {
        // Check if the key is a direct property of obj
        if (obj.hasOwnProperty(key)) {
            // Recursively deep copy nested object
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy; // Return the deep copied object
}
const person5 = deepCopy(person1); // Custom deep copy



const {name, age, ...rest} = person1;
console.log(name);
console.log(age);
console.log(rest);