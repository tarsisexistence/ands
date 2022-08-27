/**
 * Leetcode #2221
 * Difficulty: Medium
 * https://leetcode.com/problems/find-triangular-sum-of-an-array/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const triangularSum = nums => {
  while (nums.length > 1) {
    for (let i = 0; i < nums.length - 1; i += 1) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }

    nums.pop();
  }

  return nums[0];
};
