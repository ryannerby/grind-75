/**
 * Merge k Sorted Lists
 * 
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 * 
 * Example 1:
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 * 
 * Example 2:
 * Input: lists = []
 * Output: []
 * 
 * Example 3:
 * Input: lists = [[]]
 * Output: []
 * 
 * Constraints:
 * - k == lists.length
 * - 0 <= k <= 10^4
 * - 0 <= lists[i].length <= 500
 * - -10^4 <= lists[i][j] <= 10^4
 * - lists[i] is sorted in ascending order.
 * - The sum of lists[i].length will not exceed 10^4.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
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
const list1 = createLinkedList([1,4,5]);
const list2 = createLinkedList([1,3,4]);
const list3 = createLinkedList([2,6]);
console.log(linkedListToArray(mergeKLists([list1, list2, list3]))); // Expected: [1,1,2,3,4,4,5,6]

console.log(linkedListToArray(mergeKLists([]))); // Expected: []
console.log(linkedListToArray(mergeKLists([null]))); // Expected: []

const list4 = createLinkedList([1,2,3]);
const list5 = createLinkedList([4,5,6]);
const list6 = createLinkedList([7,8,9]);
console.log(linkedListToArray(mergeKLists([list4, list5, list6]))); // Expected: [1,2,3,4,5,6,7,8,9]