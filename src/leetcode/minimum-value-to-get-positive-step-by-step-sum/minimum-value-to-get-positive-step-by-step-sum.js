/**
 * Leetcode #1413
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const minStartValue = nums => {
  let sum = 0;
  let min = nums[0];

  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];
    min = Math.min(min, sum);
  }

  return min >= 1 ? 1 : 1 - min;
};
