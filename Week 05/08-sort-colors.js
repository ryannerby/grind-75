/**
 * Sort Colors
 * 
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * You must solve this problem without using the library's sort function.
 * 
 * Example 1:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 * 
 * Example 2:
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 * 
 * Example 3:
 * Input: nums = [0]
 * Output: [0]
 * 
 * Constraints:
 * - n == nums.length
 * - 1 <= n <= 300
 * - nums[i] is either 0, 1, or 2.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // Your solution here
};

// Test cases
const nums1 = [2,0,2,1,1,0];
sortColors(nums1);
console.log(nums1); // Expected: [0,0,1,1,2,2]

const nums2 = [2,0,1];
sortColors(nums2);
console.log(nums2); // Expected: [0,1,2]

const nums3 = [0];
sortColors(nums3);
console.log(nums3); // Expected: [0]

const nums4 = [1,2,0];
sortColors(nums4);
console.log(nums4); // Expected: [0,1,2]

const nums5 = [2,1,2];
sortColors(nums5);
console.log(nums5); // Expected: [1,2,2]