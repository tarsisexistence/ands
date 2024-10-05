/**
 * Leetcode #3065
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const minOperations = function (nums, k) {
  let output = 0;

  for (const num of nums) {
    if (num < k) {
      output += 1;
    }
  }

  return output;
};
