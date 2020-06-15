/**
 * Leetcode #1483
 * Difficulty: Easy
 * https://leetcode.com/problems/running-sum-of-1d-array/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const runningSum = nums => {
  const sum = [nums[0]];

  for (let i = 1; i < nums.length; i += 1) {
    sum[i] = nums[i] + sum[i - 1];
  }

  return sum;
};
