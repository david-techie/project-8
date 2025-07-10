// Mathematical Functions

/**
 * Calculates the factorial of a given number
 * @param {number} n - The number to calculate factorial for
 * @returns {number} - The factorial of n
 */
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/**
 * Checks if a number is prime or not
 * @param {number} num - The number to check
 * @returns {boolean} - True if the number is prime, false otherwise
 */
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    // Check odd divisors up to square root of num
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * Generates the Fibonacci sequence up to a given number of terms
 * @param {number} terms - The number of terms to generate
 * @returns {number[]} - Array containing the Fibonacci sequence
 */
function fibonacciSequence(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    if (terms === 2) return [0, 1];
    
    const sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

/**
 * Alternative recursive implementation of Fibonacci (less efficient for large numbers)
 * @param {number} n - The position in Fibonacci sequence
 * @returns {number} - The Fibonacci number at position n
 */
function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        factorial,
        isPrime,
        fibonacciSequence,
        fibonacciRecursive
    };
}

// Example usage and tests
console.log('=== Mathematical Functions Examples ===');
console.log('Factorial of 5:', factorial(5));
console.log('Factorial of 0:', factorial(0));
console.log('Is 17 prime?', isPrime(17));
console.log('Is 18 prime?', isPrime(18));
console.log('First 10 Fibonacci numbers:', fibonacciSequence(10));
console.log('8th Fibonacci number (recursive):', fibonacciRecursive(8));