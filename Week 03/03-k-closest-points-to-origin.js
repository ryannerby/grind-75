/**
 * K Closest Points to Origin
 * 
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
 * The distance between two points on the X-Y plane is the Euclidean distance (i.e., √((x1 - x2)² + (y1 - y2)²)).
 * You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
 * 
 * Example 1:
 * Input: points = [[1,1],[2,2],[3,3]], k = 1
 * Output: [[1,1]]
 * Explanation:
 * The distance between (1, 1) and the origin is sqrt(2).
 * The distance between (2, 2) and the origin is sqrt(8).
 * The distance between (3, 3) and the origin is sqrt(18).
 * Since sqrt(2) < sqrt(8) < sqrt(18), the closest point is (1, 1).
 * 
 * Example 2:
 * Input: points = [[3,3],[5,-1],[-2,4]], k = 2
 * Output: [[3,3],[-2,4]]
 * Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 * 
 * Constraints:
 * - 1 <= k <= points.length <= 10^4
 * - -10^4 < xi, yi < 10^4
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    // Your solution here
};

// Test cases
console.log(kClosest([[1,1],[2,2],[3,3]], 1)); // Expected: [[1,1]]
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2)); // Expected: [[3,3],[-2,4]] or [[-2,4],[3,3]]
console.log(kClosest([[1,1]], 1)); // Expected: [[1,1]]
console.log(kClosest([[0,1],[1,0]], 2)); // Expected: [[0,1],[1,0]]