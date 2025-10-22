/**
 * Clone Graph
 * 
 * Given a reference of a node in a connected undirected graph.
 * Return a deep copy (clone) of the graph.
 * Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
 * 
 * Test case format:
 * For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.
 * An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.
 * The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
 * 
 * Example 1:
 * Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
 * Output: [[2,4],[1,3],[2,4],[1,3]]
 * Explanation: There are 4 nodes in the graph.
 * 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
 * 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
 * 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
 * 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
 * 
 * Example 2:
 * Input: adjList = [[]]
 * Output: [[]]
 * Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.
 * 
 * Example 3:
 * Input: adjList = []
 * Output: []
 * Explanation: This an empty graph, it does not have any nodes.
 * 
 * Constraints:
 * - The number of nodes in the graph is in the range [0, 100].
 * - 1 <= Node.val <= 100
 * - Node.val is unique for each node.
 * - There are no repeated edges and no self-loops in the graph.
 * - The Graph is connected and all nodes can be visited starting from the given node.
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    // Your solution here
};

// Helper function to create graph from adjacency list
function createGraph(adjList) {
    if (adjList.length === 0) return null;
    
    const nodes = [];
    for (let i = 0; i < adjList.length; i++) {
        nodes.push(new Node(i + 1));
    }
    
    for (let i = 0; i < adjList.length; i++) {
        for (let neighbor of adjList[i]) {
            nodes[i].neighbors.push(nodes[neighbor - 1]);
        }
    }
    
    return nodes[0];
}

// Helper function to convert graph to adjacency list
function graphToAdjList(node) {
    if (!node) return [];
    
    const visited = new Set();
    const result = [];
    
    function dfs(n) {
        if (visited.has(n.val)) return;
        visited.add(n.val);
        
        const neighbors = [];
        for (let neighbor of n.neighbors) {
            neighbors.push(neighbor.val);
        }
        result[n.val - 1] = neighbors;
        
        for (let neighbor of n.neighbors) {
            dfs(neighbor);
        }
    }
    
    dfs(node);
    return result;
}

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

// Test cases
const graph1 = createGraph([[2,4],[1,3],[2,4],[1,3]]);
const cloned1 = cloneGraph(graph1);
console.log(graphToAdjList(cloned1)); // Expected: [[2,4],[1,3],[2,4],[1,3]]

const graph2 = createGraph([[]]);
const cloned2 = cloneGraph(graph2);
console.log(graphToAdjList(cloned2)); // Expected: [[]]

const graph3 = createGraph([]);
const cloned3 = cloneGraph(graph3);
console.log(graphToAdjList(cloned3)); // Expected: []