// arrays.js - Map, filter, and reduce examples
const numbers = [1, 2, 3, 4, 5];
// Map
const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);
// Filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even:', evenNumbers);
// Reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);
// Additional examples
const names = ['Alice', 'Bob', 'Charlie'];
const upperNames = names.map(name => name.toUpperCase());
console.log('Upper:', upperNames);
const ages = [12, 18, 25, 30];
const adults = ages.filter(age => age >= 18);
console.log('Adults:', adults);
const total = ages.reduce((acc, age) => acc + age, 0);
console.log('Total age:', total);
