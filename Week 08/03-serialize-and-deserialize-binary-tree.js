/**
 * Serialize and Deserialize Binary Tree
 * 
 * Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 * Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 * Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
 * 
 * Example 1:
 * Input: root = [1,2,3,null,null,4,5]
 * Output: [1,2,3,null,null,4,5]
 * 
 * Example 2:
 * Input: root = []
 * Output: []
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 10^4].
 * - -1000 <= Node.val <= 1000
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    // Your solution here
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
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

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Test cases
const tree1 = createBinaryTree([1,2,3,null,null,4,5]);
const serialized1 = serialize(tree1);
const deserialized1 = deserialize(serialized1);
console.log(binaryTreeToArray(deserialized1)); // Expected: [1,2,3,null,null,4,5]

const tree2 = createBinaryTree([]);
const serialized2 = serialize(tree2);
const deserialized2 = deserialize(serialized2);
console.log(binaryTreeToArray(deserialized2)); // Expected: []

const tree3 = createBinaryTree([1]);
const serialized3 = serialize(tree3);
const deserialized3 = deserialize(serialized3);
console.log(binaryTreeToArray(deserialized3)); // Expected: [1]