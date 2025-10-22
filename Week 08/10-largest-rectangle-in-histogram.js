/**
 * Largest Rectangle in Histogram
 * 
 * Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
 * 
 * Example 1:
 * Input: heights = [2,1,5,6,2,3]
 * Output: 10
 * Explanation: The above is a histogram where width of each bar is 1.
 * The largest rectangle is shown in the red area, which has an area = 10 units.
 * 
 * Example 2:
 * Input: heights = [2,4]
 * Output: 4
 * 
 * Constraints:
 * - 1 <= heights.length <= 10^5
 * - 0 <= heights[i] <= 10^4
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // Your solution here
};

// Test cases
console.log(largestRectangleArea([2,1,5,6,2,3])); // Expected: 10
console.log(largestRectangleArea([2,4])); // Expected: 4
console.log(largestRectangleArea([1])); // Expected: 1
console.log(largestRectangleArea([1,1])); // Expected: 2
console.log(largestRectangleArea([2,1,2])); // Expected: 3
console.log(largestRectangleArea([6,2,5,4,5,1,6])); // Expected: 12
console.log(largestRectangleArea([3,6,5,7,4,8,1,0])); // Expected: 20