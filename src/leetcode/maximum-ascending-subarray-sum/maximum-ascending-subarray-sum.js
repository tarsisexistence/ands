/**
 * Leetcode #1800
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-ascending-subarray-sum/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxAscendingSum = nums => {
  let max = 0;
  let sum = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > nums[i - 1]) {
      sum += nums[i];
    } else {
      max = Math.max(max, sum);
      sum = nums[i];
    }
  }

  return Math.max(max, sum);
};
