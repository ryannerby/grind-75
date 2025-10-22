/**
 * Product of Array Except Self
 * 
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operator.
 * 
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * Explanation: [0] = 2*3*4 = 24, [1] = 1*3*4 = 12, [2] = 1*2*4 = 8, [3] = 1*2*3 = 6
 * 
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 * Explanation: [0] = 1*0*(-3)*3 = 0, [1] = (-1)*0*(-3)*3 = 0, [2] = (-1)*1*(-3)*3 = 9, [3] = (-1)*1*0*3 = 0, [4] = (-1)*1*0*(-3) = 0
 * 
 * Constraints:
 * - 2 <= nums.length <= 10^5
 * - -30 <= nums[i] <= 30
 * - The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Your solution here
};

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]
console.log(productExceptSelf([2,3,4,5])); // Expected: [60,40,30,24]
console.log(productExceptSelf([1,0])); // Expected: [0,1]
console.log(productExceptSelf([0,0])); // Expected: [0,0]