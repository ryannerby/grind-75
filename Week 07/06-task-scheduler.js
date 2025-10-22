/**
 * Task Scheduler
 * 
 * Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.
 * However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.
 * Return the least number of units of times that the CPU will take to finish all the given tasks.
 * 
 * Example 1:
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 * Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 * There is at least 2 units of time between any two same tasks.
 * 
 * Example 2:
 * Input: tasks = ["A","A","A","B","B","B"], n = 0
 * Output: 6
 * Explanation: On this case any permutation of size 6 would work since n = 0.
 * ["A","A","A","B","B","B"]
 * ["A","B","A","B","A","B"]
 * ["B","B","B","A","A","A"]
 * ...
 * And so on.
 * 
 * Example 3:
 * Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
 * Output: 16
 * 
 * Constraints:
 * - 1 <= task.length <= 10^4
 * - tasks[i] is upper-case English letter.
 * - The integer n is in the range [0, 100].
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // Your solution here
};

// Test cases
console.log(leastInterval(["A","A","A","B","B","B"], 2)); // Expected: 8
console.log(leastInterval(["A","A","A","B","B","B"], 0)); // Expected: 6
console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)); // Expected: 16
console.log(leastInterval(["A","A","A","B","B","B","C","C","C","D","D","E"], 2)); // Expected: 12
console.log(leastInterval(["A"], 0)); // Expected: 1
console.log(leastInterval(["A","B","C","D","E","A","B","C","D","E"], 4)); // Expected: 10