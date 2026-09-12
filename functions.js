// functions.js - Default parameters, arrow functions, and closure counter
// Default parameter function
function greet(name = 'World') {
    return `Hello, ${name}!`;
}
console.log(greet());
console.log(greet('Alice'));
// Arrow function
const add = (a, b) => a + b;
console.log('Add:', add(3, 5));
const square = x => x * x;
console.log('Square:', square(4));
// Closure counter
function createCounter() {
    let count = 0;
    return {
          increment: () => ++count,
          decrement: () => --count,
          getCount: () => count
    };
}
const counter = createCounter();
console.log('Count:', counter.getCount());
counter.increment();
counter.increment();
console.log('Count after increments:', counter.getCount());
counter.decrement();
console.log('Count after decrement:', counter.getCount());
