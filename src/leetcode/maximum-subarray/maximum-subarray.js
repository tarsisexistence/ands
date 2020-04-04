/**
 * Leetcode #53
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-subarray/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = nums => {
  let currentSum = nums[0];
  let maxSum = currentSum;

  for (let i = 1; i < nums.length; i += 1) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
