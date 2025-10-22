/**
 * Longest Palindrome
 * 
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 * 
 * Example 1:
 * Input: s = "abccccdd"
 * Output: 7
 * Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
 * 
 * Example 2:
 * Input: s = "a"
 * Output: 1
 * 
 * Example 3:
 * Input: s = "bb"
 * Output: 2
 * 
 * Constraints:
 * - 1 <= s.length <= 2000
 * - s consists of lowercase and/or uppercase English letters only.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // Your solution here
};

// Test cases
console.log(longestPalindrome("abccccdd")); // Expected: 7
console.log(longestPalindrome("a")); // Expected: 1
console.log(longestPalindrome("bb")); // Expected: 2
console.log(longestPalindrome("ab")); // Expected: 1
console.log(longestPalindrome("aabbcc")); // Expected: 6
console.log(longestPalindrome("racecar")); // Expected: 7