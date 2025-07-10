// Main file that imports and demonstrates all functions
// You can run this file with: node main.js

// Import all function modules
const stringFunctions = require('./stringFunctions');
const arrayFunctions = require('./arrayFunctions');
const mathFunctions = require('./mathFunctions');

console.log('🚀 JavaScript Functions Demonstration\n');

// String Functions Demo
console.log('📝 STRING MANIPULATION FUNCTIONS');
console.log('================================');
console.log('Original text: "Hello World"');
console.log('Reversed:', stringFunctions.reverseString("Hello World"));
console.log('Character count:', stringFunctions.countCharacters("Hello World"));
console.log('Capitalized:', stringFunctions.capitalizeWords("hello world from javascript"));
console.log();

// Array Functions Demo
console.log('📊 ARRAY FUNCTIONS');
console.log('==================');
const testArray = [15, 3, 8, 12, 7, 1, 20, 5];
console.log('Test array:', testArray);
console.log('Maximum value:', arrayFunctions.findMaximum(testArray));
console.log('Minimum value:', arrayFunctions.findMinimum(testArray));
console.log('Sum of all elements:', arrayFunctions.sumArray(testArray));
console.log('Even numbers:', arrayFunctions.filterEvenNumbers(testArray));
console.log('Numbers > 10:', arrayFunctions.filterGreaterThan(testArray, 10));
console.log();

// Mathematical Functions Demo
console.log('🔢 MATHEMATICAL FUNCTIONS');
console.log('=========================');
console.log('Factorial of 6:', mathFunctions.factorial(6));
console.log('Factorial of 10:', mathFunctions.factorial(10));
console.log();

console.log('Prime number checks:');
const numbersToCheck = [2, 7, 12, 17, 23, 25, 29];
numbersToCheck.forEach(num => {
    console.log(`${num} is ${mathFunctions.isPrime(num) ? 'prime' : 'not prime'}`);
});
console.log();

console.log('Fibonacci sequences:');
console.log('First 8 terms:', mathFunctions.fibonacciSequence(8));
console.log('First 12 terms:', mathFunctions.fibonacciSequence(12));
console.log();

// Interactive examples
console.log('🎯 INTERACTIVE EXAMPLES');
console.log('=======================');
console.log('Try these functions with your own values!');
console.log('Example usage:');
console.log('- stringFunctions.reverseString("your text")');
console.log('- arrayFunctions.sumArray([1, 2, 3, 4, 5])');
console.log('- mathFunctions.isPrime(97)');
console.log('- mathFunctions.fibonacciSequence(15)');