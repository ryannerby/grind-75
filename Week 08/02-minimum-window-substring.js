/**
 * Minimum Window Substring
 * 
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such window, return the empty string "".
 * The testcases will be generated such that the answer is unique.
 * A window is a contiguous sequence of characters within the string.
 * 
 * Example 1:
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 * 
 * Example 2:
 * Input: s = "a", t = "a"
 * Output: "a"
 * 
 * Example 3:
 * Input: s = "a", t = "aa"
 * Output: ""
 * Explanation: Both 'a's from t must be included in the window.
 * Since the largest window of s only has one 'a', return empty string.
 * 
 * Constraints:
 * - m == s.length
 * - n == t.length
 * - 1 <= m, n <= 10^5
 * - s and t consist of uppercase and lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // Your solution here
};

// Test cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
console.log(minWindow("a", "a")); // Expected: "a"
console.log(minWindow("a", "aa")); // Expected: ""
console.log(minWindow("ab", "b")); // Expected: "b"
console.log(minWindow("bba", "ab")); // Expected: "ba"
console.log(minWindow("cabwefgewcwaefgcf", "cae")); // Expected: "cwae"