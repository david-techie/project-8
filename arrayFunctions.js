// Array Functions

/**
 * Finds the maximum value in an array of numbers
 * @param {number[]} arr - Array of numbers
 * @returns {number} - The maximum value
 */
function findMaximum(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
}

/**
 * Finds the minimum value in an array of numbers
 * @param {number[]} arr - Array of numbers
 * @returns {number} - The minimum value
 */
function findMinimum(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
}

/**
 * Calculates the sum of all elements in an array
 * @param {number[]} arr - Array of numbers
 * @returns {number} - The sum of all elements
 */
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

/**
 * Filters out elements from an array based on a given condition
 * @param {Array} arr - The array to filter
 * @param {Function} condition - The condition function to test each element
 * @returns {Array} - The filtered array
 */
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Helper function for common filtering scenarios
function filterEvenNumbers(arr) {
    return filterArray(arr, num => num % 2 === 0);
}

function filterGreaterThan(arr, value) {
    return filterArray(arr, num => num > value);
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        findMaximum,
        findMinimum,
        sumArray,
        filterArray,
        filterEvenNumbers,
        filterGreaterThan
    };
}

// Example usage and tests
console.log('=== Array Functions Examples ===');
const numbers = [3, 7, 1, 9, 4, 2, 8];
console.log('Array:', numbers);
console.log('Maximum:', findMaximum(numbers));
console.log('Minimum:', findMinimum(numbers));
console.log('Sum:', sumArray(numbers));
console.log('Even numbers:', filterEvenNumbers(numbers));
console.log('Numbers greater than 5:', filterGreaterThan(numbers, 5));