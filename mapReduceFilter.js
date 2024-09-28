const numbers = [1, 2, 3, 4, 5];

// Using map to double each number
const doubled = numbers.map(num => num * 2);

// Using filter to keep only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Using reduce to sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);


console.log('Doubled:', doubled);  
console.log('Even Numbers:', evenNumbers); 
console.log('Sum:', sum);  