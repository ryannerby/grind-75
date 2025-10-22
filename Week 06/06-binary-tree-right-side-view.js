/**
 * Binary Tree Right Side View
 * 
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 * 
 * Example 1:
 * Input: root = [1,2,3,null,5,null,4]
 * Output: [1,3,4]
 * 
 * Example 2:
 * Input: root = [1,null,3]
 * Output: [1,3]
 * 
 * Example 3:
 * Input: root = []
 * Output: []
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 100].
 * - -100 <= Node.val <= 100
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
 * @return {number[]}
 */
var rightSideView = function(root) {
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
const tree1 = createBinaryTree([1,2,3,null,5,null,4]);
console.log(rightSideView(tree1)); // Expected: [1,3,4]

const tree2 = createBinaryTree([1,null,3]);
console.log(rightSideView(tree2)); // Expected: [1,3]

const tree3 = createBinaryTree([]);
console.log(rightSideView(tree3)); // Expected: []

const tree4 = createBinaryTree([1,2,3,4]);
console.log(rightSideView(tree4)); // Expected: [1,3,4]