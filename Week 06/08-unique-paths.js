/**
 * Unique Paths
 * 
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
 * Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 * The testcases are generated so that the answer will fit in a 32-bit integer.
 * 
 * Example 1:
 * Input: m = 3, n = 7
 * Output: 28
 * 
 * Example 2:
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 * 1. Right -> Down -> Right
 * 2. Right -> Right -> Down
 * 3. Down -> Right -> Right
 * 
 * Example 3:
 * Input: m = 7, n = 3
 * Output: 28
 * 
 * Example 4:
 * Input: m = 3, n = 3
 * Output: 6
 * 
 * Constraints:
 * - 1 <= m, n <= 100
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Your solution here
};

// Test cases
console.log(uniquePaths(3, 7)); // Expected: 28
console.log(uniquePaths(3, 2)); // Expected: 3
console.log(uniquePaths(7, 3)); // Expected: 28
console.log(uniquePaths(3, 3)); // Expected: 6
console.log(uniquePaths(1, 1)); // Expected: 1
console.log(uniquePaths(1, 10)); // Expected: 1
console.log(uniquePaths(10, 1)); // Expected: 1