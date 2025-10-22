/**
 * Middle of the Linked List
 * 
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node of the list is node 3.
 * 
 * Example 2:
 * Input: head = [1,2,3,4,5,6]
 * Output: [4,5,6]
 * Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 * 
 * Constraints:
 * - The number of nodes in the list is in the range [1, 100].
 * - 1 <= Node.val <= 100
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // Your solution here
};

// Helper function to create linked list from array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

// Test cases
const list1 = createLinkedList([1,2,3,4,5]);
console.log(linkedListToArray(middleNode(list1))); // Expected: [3,4,5]

const list2 = createLinkedList([1,2,3,4,5,6]);
console.log(linkedListToArray(middleNode(list2))); // Expected: [4,5,6]

const list3 = createLinkedList([1]);
console.log(linkedListToArray(middleNode(list3))); // Expected: [1]

const list4 = createLinkedList([1,2]);
console.log(linkedListToArray(middleNode(list4))); // Expected: [2]