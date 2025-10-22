/**
 * Find All Anagrams in a String
 * 
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0,6]
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 * 
 * Example 2:
 * Input: s = "abab", p = "ab"
 * Output: [0,1,2]
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 * 
 * Constraints:
 * - 1 <= s.length, p.length <= 3 * 10^4
 * - s and p consist of lowercase English letters only.
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // Your solution here
};

// Test cases
console.log(findAnagrams("cbaebabacd", "abc")); // Expected: [0,6]
console.log(findAnagrams("abab", "ab")); // Expected: [0,1,2]
console.log(findAnagrams("baa", "aa")); // Expected: [1]
console.log(findAnagrams("ababababab", "aab")); // Expected: [0,2,4,6]
console.log(findAnagrams("", "a")); // Expected: []
console.log(findAnagrams("a", "")); // Expected: []