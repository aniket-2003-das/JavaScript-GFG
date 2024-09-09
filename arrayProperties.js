let studentNames = ["Prakash", "Ashish", "Via", "Adarsh"];
console.log(studentNames);


for (let name of studentNames) {
    console.log(name);
}

for (let index in studentNames) {
    console.log(studentNames[index]);
}

studentNames.push("Piyush");
console.log(studentNames);

studentNames.pop(); // Removes the last element
console.log(studentNames);

studentNames.shift(); // Removes the first element
console.log(studentNames);

studentNames.splice(1, 1); // Removes one element at index 1
console.log(studentNames);



let upperCaseNames = studentNames.map(name => name.toUpperCase());
console.log(upperCaseNames); // Output: ["ASHISH", "ADARSH"]

let longNames = studentNames.filter(name => name.length > 5);
console.log(longNames); // Output: ["Ashish", "Adarsh"]



array = [ 1, 2, 3, 4, 5, 6 ];
const helperSum = (acc,curr) => acc+curr
sum = array.reduce(helperSum, 0);
console.log(array)
console.log(sum);



array = [ 1, 2, 3, 4, 5, 6 ];
const lessthanFourCheck = (element) => element < 4 ;
const lessthanFour = array.some(lessthanFourCheck)
console.log(array);
if(lessthanFour){
    console.log("At least one element is less than 4" )
}
else{
    console.log("All elements are greater than 4 ")
}
