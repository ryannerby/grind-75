/**
 * Min Stack
 * 
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * Implement the MinStack class:
 * - MinStack() initializes the stack object.
 * - void push(int val) pushes the element val onto the stack.
 * - void pop() removes the element on the top of the stack.
 * - int top() gets the top element of the stack.
 * - int getMin() retrieves the minimum element in the stack.
 * You must implement a solution with O(1) time complexity for each function.
 * 
 * Example 1:
 * Input
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 * Output
 * [null,null,null,null,-3,null,0,-2]
 * 
 * Explanation
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin(); // return -3
 * minStack.pop();
 * minStack.top();    // return 0
 * minStack.getMin(); // return -2
 * 
 * Constraints:
 * - -2^31 <= val <= 2^31 - 1
 * - Methods pop, top and getMin operations will always be called on non-empty stacks.
 * - At most 3 * 10^4 calls will be made to push, pop, top, and getMin.
 */

var MinStack = function() {
    // Your solution here
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // Your solution here
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // Your solution here
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // Your solution here
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // Your solution here
};

// Test cases
const minStack = new MinStack();
console.log(minStack.push(-2)); // null
console.log(minStack.push(0)); // null
console.log(minStack.push(-3)); // null
console.log(minStack.getMin()); // -3
console.log(minStack.pop()); // null
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2