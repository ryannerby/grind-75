/**
 * Lowest Common Ancestor of a Binary Search Tree
 * 
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 * According to the definition of LCA on Wikipedia: "The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself)."
 * 
 * Example 1:
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * Output: 6
 * Explanation: The LCA of nodes 2 and 8 is 6.
 * 
 * Example 2:
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 * Output: 2
 * Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
 * 
 * Example 3:
 * Input: root = [2,1], p = 2, q = 1
 * Output: 2
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [2, 10^5].
 * - -10^9 <= Node.val <= 10^9
 * - All Node.val are unique.
 * - p != q
 * - p and q will exist in the BST.
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
const bst1 = createBST([6,2,8,0,4,7,9,null,null,3,5]);
const p1 = findNode(bst1, 2);
const q1 = findNode(bst1, 8);
console.log(lowestCommonAncestor(bst1, p1, q1).val); // Expected: 6

const bst2 = createBST([6,2,8,0,4,7,9,null,null,3,5]);
const p2 = findNode(bst2, 2);
const q2 = findNode(bst2, 4);
console.log(lowestCommonAncestor(bst2, p2, q2).val); // Expected: 2

const bst3 = createBST([2,1]);
const p3 = findNode(bst3, 2);
const q3 = findNode(bst3, 1);
console.log(lowestCommonAncestor(bst3, p3, q3).val); // Expected: 2