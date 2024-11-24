/**
 * Leetcode #3301
 * Difficulty: Easy
 * https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
export var getFinalState = function(nums, k, multiplier) {
  for (let i = 0; i < k; i += 1) {
      let minJ = 0;

      for (let j = 0; j < nums.length; j += 1) {
          if (nums[j] < nums[minJ]) {
              minJ = j
          }
      }

      nums[minJ] = nums[minJ] * multiplier;
  }

  return nums;
};