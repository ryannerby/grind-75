/**
 * Validate Binary Search Tree
 * 
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 * 
 * Example 1:
 * Input: root = [2,1,3]
 * Output: true
 * 
 * Example 2:
 * Input: root = [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is 4.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [1, 10^4].
 * - -2^31 <= Node.val <= 2^31 - 1
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // Your solution here
};

// Helper function to create binary tree from array
function createBinaryTree(arr) {
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
const tree1 = createBinaryTree([2,1,3]);
console.log(isValidBST(tree1)); // Expected: true

const tree2 = createBinaryTree([5,1,4,null,null,3,6]);
console.log(isValidBST(tree2)); // Expected: false

const tree3 = createBinaryTree([1]);
console.log(isValidBST(tree3)); // Expected: true

const tree4 = createBinaryTree([5,4,6,null,null,3,7]);
console.log(isValidBST(tree4)); // Expected: false