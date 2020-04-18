/**
 * Leetcode #53
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-subarray/
 * Algorithm: Kadane
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = nums => {
  let maxSum = nums[0];
  let currentSum = maxSum;

  for (let i = 1; i < nums.length; i += 1) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// export const maxSubArray = nums => {
//   let max = nums[0];
//   let current = Math.max(max, 0);
//
//   for (let i = 1; i < nums.length; i += 1) {
//     current += nums[i];
//     max = Math.max(max, current);
//     current = Math.max(current, 0);
//   }
//
//   return max;
// };
