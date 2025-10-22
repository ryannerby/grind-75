/**
 * Kth Smallest Element in a BST
 * 
 * Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 * 
 * Example 1:
 * Input: root = [3,1,4,null,2], k = 1
 * Output: 1
 * 
 * Example 2:
 * Input: root = [5,3,6,2,4,null,null,1], k = 3
 * Output: 3
 * 
 * Constraints:
 * - The number of nodes in the tree is n.
 * - 1 <= k <= n <= 10^4
 * - 0 <= Node.val <= 10^4
 * - Follow up: If the BST is frequently modified (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize the kthSmallest routine?
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // Your solution here
};

// Helper function to create BST from array
function createBST(arr) {
    if (arr.length === 0) return null;
    
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    
    while (queue.length > 0 && i < arr.length) {
        let node = queue.shift();
        
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    
    return root;
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

// Test cases
const tree1 = createBST([3,1,4,null,2]);
console.log(kthSmallest(tree1, 1)); // Expected: 1

const tree2 = createBST([5,3,6,2,4,null,null,1]);
console.log(kthSmallest(tree2, 3)); // Expected: 3

const tree3 = createBST([1]);
console.log(kthSmallest(tree3, 1)); // Expected: 1

const tree4 = createBST([2,1,3]);
console.log(kthSmallest(tree4, 2)); // Expected: 2
console.log(kthSmallest(tree4, 3)); // Expected: 3