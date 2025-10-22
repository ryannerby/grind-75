/**
 * Ransom Note
 * 
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 * 
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * 
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * 
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 * 
 * Constraints:
 * - 1 <= ransomNote.length, magazine.length <= 10^5
 * - ransomNote and magazine consist of lowercase English letters only.
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // Your solution here
};

// Test cases
console.log(canConstruct("a", "b")); // Expected: false
console.log(canConstruct("aa", "ab")); // Expected: false
console.log(canConstruct("aa", "aab")); // Expected: true
console.log(canConstruct("aab", "baa")); // Expected: true
console.log(canConstruct("", "a")); // Expected: true
console.log(canConstruct("a", "")); // Expected: false