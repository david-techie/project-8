// String Manipulation Functions

/**
 * Reverses a given string
 * @param {string} str - The string to reverse
 * @returns {string} - The reversed string
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Counts the number of characters in a string
 * @param {string} str - The string to count
 * @returns {number} - The number of characters
 */
function countCharacters(str) {
    return str.length;
}

/**
 * Capitalizes the first letter of each word in a sentence
 * @param {string} sentence - The sentence to capitalize
 * @returns {string} - The sentence with capitalized words
 */
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => {
        if (word.length === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        reverseString,
        countCharacters,
        capitalizeWords
    };
}

// Example usage and tests
console.log('=== String Functions Examples ===');
console.log('Reverse "hello": ', reverseString("hello"));
console.log('Count characters in "JavaScript": ', countCharacters("JavaScript"));
console.log('Capitalize "hello world javascript": ', capitalizeWords("hello world javascript"));