/**
 * Invert Binary Tree
 * 
 * Given the root of a binary tree, invert the tree, and return its root.
 * 
 * Example 1:
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 * 
 * Example 2:
 * Input: root = [2,1,3]
 * Output: [2,3,1]
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
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
const tree1 = createBinaryTree([4,2,7,1,3,6,9]);
console.log(binaryTreeToArray(invertTree(tree1))); // Expected: [4,7,2,9,6,3,1]

const tree2 = createBinaryTree([2,1,3]);
console.log(binaryTreeToArray(invertTree(tree2))); // Expected: [2,3,1]

const tree3 = createBinaryTree([]);
console.log(binaryTreeToArray(invertTree(tree3))); // Expected: []