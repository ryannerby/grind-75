/**
 * Longest Palindromic Substring
 * 
 * Given a string s, return the longest palindromic substring in s.
 * 
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 * 
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 * 
 * Constraints:
 * - 1 <= s.length <= 1000
 * - s consist of only digits and English letters.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // Your solution here
};

// Test cases
console.log(longestPalindrome("babad")); // Expected: "bab" or "aba"
console.log(longestPalindrome("cbbd")); // Expected: "bb"
console.log(longestPalindrome("a")); // Expected: "a"
console.log(longestPalindrome("ac")); // Expected: "a"
console.log(longestPalindrome("racecar")); // Expected: "racecar"
console.log(longestPalindrome("abcdef")); // Expected: "a"
console.log(longestPalindrome("abacabad")); // Expected: "abacaba"