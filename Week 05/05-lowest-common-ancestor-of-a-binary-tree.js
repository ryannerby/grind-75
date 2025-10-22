/**
 * Lowest Common Ancestor of a Binary Tree
 * 
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * According to the definition of LCA on Wikipedia: "The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself)."
 * 
 * Example 1:
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of nodes 5 and 1 is 3.
 * 
 * Example 2:
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * Output: 5
 * Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
 * 
 * Example 3:
 * Input: root = [1,2], p = 1, q = 2
 * Output: 1
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [2, 10^5].
 * - -10^9 <= Node.val <= 10^9
 * - All Node.val are unique.
 * - p != q
 * - p and q will exist in the tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
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

// Helper function to find node by value
function findNode(root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    
    let left = findNode(root.left, val);
    if (left) return left;
    
    return findNode(root.right, val);
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Test cases
const tree1 = createBinaryTree([3,5,1,6,2,0,8,null,null,7,4]);
const p1 = findNode(tree1, 5);
const q1 = findNode(tree1, 1);
console.log(lowestCommonAncestor(tree1, p1, q1).val); // Expected: 3

const tree2 = createBinaryTree([3,5,1,6,2,0,8,null,null,7,4]);
const p2 = findNode(tree2, 5);
const q2 = findNode(tree2, 4);
console.log(lowestCommonAncestor(tree2, p2, q2).val); // Expected: 5

const tree3 = createBinaryTree([1,2]);
const p3 = findNode(tree3, 1);
const q3 = findNode(tree3, 2);
console.log(lowestCommonAncestor(tree3, p3, q3).val); // Expected: 1