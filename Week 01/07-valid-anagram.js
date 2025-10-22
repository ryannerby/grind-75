/**
 * Valid Anagram
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * Constraints:
 * - 1 <= s.length, t.length <= 5 * 10^4
 * - s and t consist of lowercase English letters only.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Your solution here
};

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false
console.log(isAnagram("listen", "silent")); // Expected: true
console.log(isAnagram("a", "ab")); // Expected: false
console.log(isAnagram("ab", "a")); // Expected: false