/**
 * Implement Queue using Stacks
 * 
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 * Implement the MyQueue class:
 * - void push(int x) Pushes element x to the back of the queue.
 * - int pop() Removes the element from the front of the queue and returns it.
 * - int peek() Returns the element at the front of the queue.
 * - boolean empty() Returns true if the queue is empty, false otherwise.
 * 
 * Notes:
 * - You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
 * - Depending on your language, stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 * 
 * Example 1:
 * Input
 * ["MyQueue", "push", "push", "peek", "pop", "empty"]
 * [[], [1], [2], [], [], []]
 * Output
 * [null, null, null, 1, 1, false]
 * 
 * Explanation
 * MyQueue myQueue = new MyQueue();
 * myQueue.push(1); // queue is: [1]
 * myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
 * myQueue.peek(); // return 1
 * myQueue.pop(); // return 1, queue is [2]
 * myQueue.empty(); // return false
 * 
 * Constraints:
 * - 1 <= x <= 9
 * - At most 100 calls will be made to push, pop, peek, and empty.
 * - All the calls to pop and peek are valid.
 */

var MyQueue = function() {
    // Your solution here
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // Your solution here
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // Your solution here
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // Your solution here
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // Your solution here
};

// Test cases
const myQueue = new MyQueue();
console.log(myQueue.push(1)); // null
console.log(myQueue.push(2)); // null
console.log(myQueue.peek()); // 1
console.log(myQueue.pop()); // 1
console.log(myQueue.empty()); // false
console.log(myQueue.pop()); // 2
console.log(myQueue.empty()); // true