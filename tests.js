// Test cases for all functions
// Run with: node tests.js

const stringFunctions = require('./stringFunctions');
const arrayFunctions = require('./arrayFunctions');
const mathFunctions = require('./mathFunctions');

// Simple test runner
function runTest(testName, testFunction) {
    try {
        const result = testFunction();
        console.log(`✅ ${testName}: ${result ? 'PASSED' : 'FAILED'}`);
        return result;
    } catch (error) {
        console.log(`❌ ${testName}: ERROR - ${error.message}`);
        return false;
    }
}

console.log('🧪 Running Tests for JavaScript Functions\n');

// String Function Tests
console.log('📝 STRING FUNCTION TESTS');
console.log('========================');

runTest('Reverse String - Basic', () => {
    return stringFunctions.reverseString("hello") === "olleh";
});

runTest('Reverse String - Empty', () => {
    return stringFunctions.reverseString("") === "";
});

runTest('Count Characters - Basic', () => {
    return stringFunctions.countCharacters("JavaScript") === 10;
});

runTest('Count Characters - Empty', () => {
    return stringFunctions.countCharacters("") === 0;
});

runTest('Capitalize Words - Basic', () => {
    return stringFunctions.capitalizeWords("hello world") === "Hello World";
});

runTest('Capitalize Words - Mixed Case', () => {
    return stringFunctions.capitalizeWords("jAvAsCrIpT iS aWeSoMe") === "Javascript Is Awesome";
});

// Array Function Tests
console.log('\n📊 ARRAY FUNCTION TESTS');
console.log('=======================');

runTest('Find Maximum - Basic', () => {
    return arrayFunctions.findMaximum([1, 5, 3, 9, 2]) === 9;
});

runTest('Find Maximum - Negative Numbers', () => {
    return arrayFunctions.findMaximum([-5, -1, -10, -3]) === -1;
});

runTest('Find Minimum - Basic', () => {
    return arrayFunctions.findMinimum([1, 5, 3, 9, 2]) === 1;
});

runTest('Sum Array - Basic', () => {
    return arrayFunctions.sumArray([1, 2, 3, 4, 5]) === 15;
});

runTest('Sum Array - Empty', () => {
    return arrayFunctions.sumArray([]) === 0;
});

runTest('Filter Even Numbers', () => {
    const result = arrayFunctions.filterEvenNumbers([1, 2, 3, 4, 5, 6]);
    return JSON.stringify(result) === JSON.stringify([2, 4, 6]);
});

runTest('Filter Greater Than', () => {
    const result = arrayFunctions.filterGreaterThan([1, 5, 3, 9, 2], 4);
    return JSON.stringify(result) === JSON.stringify([5, 9]);
});

// Mathematical Function Tests
console.log('\n🔢 MATHEMATICAL FUNCTION TESTS');
console.log('==============================');

runTest('Factorial - Basic Cases', () => {
    return mathFunctions.factorial(5) === 120 && 
           mathFunctions.factorial(0) === 1 && 
           mathFunctions.factorial(1) === 1;
});

runTest('Factorial - Large Number', () => {
    return mathFunctions.factorial(10) === 3628800;
});

runTest('Prime Check - Prime Numbers', () => {
    return mathFunctions.isPrime(2) === true &&
           mathFunctions.isPrime(7) === true &&
           mathFunctions.isPrime(17) === true &&
           mathFunctions.isPrime(23) === true;
});

runTest('Prime Check - Non-Prime Numbers', () => {
    return mathFunctions.isPrime(1) === false &&
           mathFunctions.isPrime(4) === false &&
           mathFunctions.isPrime(9) === false &&
           mathFunctions.isPrime(15) === false;
});

runTest('Fibonacci Sequence - First 6 Terms', () => {
    const result = mathFunctions.fibonacciSequence(6);
    const expected = [0, 1, 1, 2, 3, 5];
    return JSON.stringify(result) === JSON.stringify(expected);
});

runTest('Fibonacci Sequence - Edge Cases', () => {
    return mathFunctions.fibonacciSequence(0).length === 0 &&
           mathFunctions.fibonacciSequence(1).length === 1 &&
           mathFunctions.fibonacciSequence(2).length === 2;
});

runTest('Fibonacci Recursive - Single Value', () => {
    return mathFunctions.fibonacciRecursive(8) === 21;
});

console.log('\n🎉 All tests completed!');
console.log('\nTo run the main demonstration, use: node main.js');