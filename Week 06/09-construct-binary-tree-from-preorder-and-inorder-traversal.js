/**
 * Construct Binary Tree from Preorder and Inorder Traversal
 * 
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 * 
 * Example 1:
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * Output: [3,9,20,null,null,15,7]
 * 
 * Example 2:
 * Input: preorder = [-1], inorder = [-1]
 * Output: [-1]
 * 
 * Constraints:
 * - 1 <= preorder.length <= 3000
 * - inorder.length == preorder.length
 * - -3000 <= preorder[i], inorder[i] <= 3000
 * - preorder and inorder consist of unique values.
 * - Each value of inorder also appears in preorder.
 * - preorder is guaranteed to be the preorder traversal of the tree.
 * - inorder is guaranteed to be the inorder traversal of the tree.
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // Your solution here
};

// Helper function to convert binary tree to array (level order)
function binaryTreeToArray(root) {
    if (!root) return [];
    
    let result = [];
    let queue = [root];
    
    while (queue.length > 0) {
        let node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    
    // Remove trailing nulls
    while (result[result.length - 1] === null) {
        result.pop();
    }
    
    return result;
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

// Test cases
const tree1 = buildTree([3,9,20,15,7], [9,3,15,20,7]);
console.log(binaryTreeToArray(tree1)); // Expected: [3,9,20,null,null,15,7]

const tree2 = buildTree([-1], [-1]);
console.log(binaryTreeToArray(tree2)); // Expected: [-1]

const tree3 = buildTree([1,2], [2,1]);
console.log(binaryTreeToArray(tree3)); // Expected: [1,2]

const tree4 = buildTree([1,2,3], [2,1,3]);
console.log(binaryTreeToArray(tree4)); // Expected: [1,2,3]