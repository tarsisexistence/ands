/**
 * Leetcode #1470
 * Difficulty: Easy
 * https://leetcode.com/problems/shuffle-the-array/
 */
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
export const shuffle = (nums, n) => {
  const shuffled = [];

  for (let i = 0; i < n; i += 1) {
    shuffled.push(nums[i]);
    shuffled.push(nums[i + n]);
  }

  return shuffled;
};
