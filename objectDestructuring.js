// // Destructuring Objects
// const user = {
//     name: 'John Doe',
//     age: 30,
//     job: 'Developer'
// };
// const { name, age, job } = user;
// console.log(name); // John Doe
// console.log(age); // 30
// console.log(job); // Developer
  

// // rename variables while destructuring
// const user1 = {
// name: 'John Doe',
// age: 30,
// job: 'Developer'
// };
// const { name: userName, age: userAge, job: userJob } = user1;
// console.log(userName); // John Doe
// console.log(userAge); // 30
// console.log(userJob); // Developer


// // Setting Default values
// const user3 = {
// name1: 'John Doe',
// age: 30
// };
// const { name1, job1 = 'Unemployed' } = user3;
// console.log(name); // John Doe
// console.log(job); // Unemployed



// Destructuring Function Parameters
const user5 = {
name: 'John Doe',
age: 30
};

function displayUser({ name, age }) {
console.log(`Name: ${name}, Age: ${age}`);
}
displayUser(user5); // Name: John Doe, Age: 30  