/**
 * Write a function named firstUniqChar that takes a string (s) as input and returns
 * the index of the first non-repeating character. If no such character exists, return -1.
 *
 * Problem: Given a string s, find the first non-repeating character and return its index.
 * If no such character exists, return -1.
 *
 * Examples:
 * - firstUniqChar("leetcode") → 0
 * - firstUniqChar("loveleetcode") → 2
 * - firstUniqChar("aabb") → -1
 */

const firstUniqChar = (s) => {
  const freq = {};
  for (const letter of s) {
    if (letter !== " ") {
      freq[letter] ? freq[letter]++ : (freq[letter] = 1);
    }
  }

  for (const letter of s) {
    if (freq[letter] === 1) {
      return s.indexOf(letter);
    }
  }
  return -1;
};

// Export the function for testing
module.exports = { firstUniqChar };

// Example usage (commented out to avoid interference with tests)
console.log(firstUniqChar("leetcode")); // → 0
console.log(firstUniqChar("loveleetcode")); // → 2
console.log(firstUniqChar("aabb")); // → -1
