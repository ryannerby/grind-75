/**
 * Linked List Cycle
 * 
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * 
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 * 
 * Example 2:
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
 * 
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 * 
 * Constraints:
 * - The number of the nodes in the list is in the range [0, 10^4].
 * - -10^5 <= Node.val <= 10^5
 * - pos is -1 or a valid index in the linked-list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Your solution here
};

// Helper function to create linked list with cycle
function createLinkedListWithCycle(arr, pos) {
    if (arr.length === 0) return null;
    
    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = pos === 0 ? head : null;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
        if (i === pos) {
            cycleNode = current;
        }
    }
    
    if (pos !== -1 && cycleNode) {
        current.next = cycleNode;
    }
    
    return head;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Test cases
const list1 = createLinkedListWithCycle([3,2,0,-4], 1);
console.log(hasCycle(list1)); // Expected: true

const list2 = createLinkedListWithCycle([1,2], 0);
console.log(hasCycle(list2)); // Expected: true

const list3 = createLinkedListWithCycle([1], -1);
console.log(hasCycle(list3)); // Expected: false

const list4 = createLinkedListWithCycle([], -1);
console.log(hasCycle(list4)); // Expected: false