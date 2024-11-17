/**
 * Leetcode #3194
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const minimumAverage = function (nums) {
  let averages = Infinity;

  for (let i = 0; i < nums.length / 2; i += 1) {
    const value = (nums[i] + nums[nums.length - 1 - i]) / 2;
    averages = Math.min(averages, value);
  }

  return averages;
};
