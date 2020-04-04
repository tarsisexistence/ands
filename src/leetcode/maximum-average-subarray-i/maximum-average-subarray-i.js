/**
 * Leetcode #643
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-average-subarray-i/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const findMaxAverage = (nums, k) => {
  let currentSum = nums.slice(0, k).reduce((sum, value) => sum + value, 0);
  let maxSum = currentSum;

  for (let i = k; i < nums.length; i += 1) {
    currentSum = currentSum + nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum / k;
};
