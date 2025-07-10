# JavaScript Functions Project

This project contains various JavaScript functions for string manipulation, array operations, and mathematical calculations.

## Project Structure

- `stringFunctions.js` - String manipulation functions
- `arrayFunctions.js` - Array operation functions  
- `mathFunctions.js` - Mathematical functions
- `main.js` - Main file that demonstrates all functions
- `tests.js` - Test cases for all functions

## Functions Included

### String Manipulation Functions
- **reverseString(str)** - Reverses a given string
- **countCharacters(str)** - Counts the number of characters in a string
- **capitalizeWords(sentence)** - Capitalizes the first letter of each word

### Array Functions
- **findMaximum(arr)** - Finds the maximum value in an array
- **findMinimum(arr)** - Finds the minimum value in an array
- **sumArray(arr)** - Calculates the sum of all elements
- **filterArray(arr, condition)** - Filters elements based on a condition

### Mathematical Functions
- **factorial(n)** - Calculates the factorial of a number
- **isPrime(num)** - Checks if a number is prime
- **fibonacciSequence(terms)** - Generates Fibonacci sequence

## How to Run

1. Make sure you have Node.js installed
2. Navigate to the project directory
3. Run individual files:
   ```bash
   node stringFunctions.js
   node arrayFunctions.js
   node mathFunctions.js
   ```
4. Or run the main demonstration:
   ```bash
   node main.js
   ```
5. Run tests:
   ```bash
   node tests.js
   ```

## Examples

```javascript
// String functions
reverseString("hello"); // Returns "olleh"
countCharacters("JavaScript"); // Returns 10
capitalizeWords("hello world"); // Returns "Hello World"

// Array functions
findMaximum([1, 5, 3, 9, 2]); // Returns 9
sumArray([1, 2, 3, 4, 5]); // Returns 15

// Math functions
factorial(5); // Returns 120
isPrime(17); // Returns true
fibonacciSequence(6); // Returns [0, 1, 1, 2, 3, 5]
```

## Features

- Well-documented functions with JSDoc comments
- Error handling for edge cases
- Multiple implementation approaches where applicable
- Comprehensive examples and test cases
- Modular design for easy reuse
