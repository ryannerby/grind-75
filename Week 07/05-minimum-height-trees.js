/**
 * Minimum Height Trees
 * 
 * A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.
 * Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the tree.
 * You can choose any node of the tree as the root. When you select node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h)) are called minimum height trees (MHTs).
 * Return a list of all MHTs' root labels. You can return the answer in any order.
 * The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.
 * 
 * Example 1:
 * Input: n = 4, edges = [[1,0],[1,2],[1,3]]
 * Output: [1]
 * Explanation: As shown, the height of the tree with root 1 is 1, while the trees with roots 0, 2, and 3 have heights of 2.
 * 
 * Example 2:
 * Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
 * Output: [3,4]
 * 
 * Constraints:
 * - 1 <= n <= 2 * 10^4
 * - edges.length == n - 1
 * - 0 <= ai < bi < n
 * - All pairs (ai, bi) are distinct.
 * - The given input is guaranteed to be a tree and there will be no repeated edges.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    // Your solution here
};

// Test cases
console.log(findMinHeightTrees(4, [[1,0],[1,2],[1,3]])); // Expected: [1]
console.log(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]])); // Expected: [3,4]
console.log(findMinHeightTrees(1, [])); // Expected: [0]
console.log(findMinHeightTrees(2, [[0,1]])); // Expected: [0,1]
console.log(findMinHeightTrees(3, [[0,1],[0,2]])); // Expected: [0]