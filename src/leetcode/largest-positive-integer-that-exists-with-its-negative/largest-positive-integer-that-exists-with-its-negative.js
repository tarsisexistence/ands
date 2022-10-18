/**
 * Leetcode #2441
 * Difficulty: Easy
 * https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const findMaxK = nums => {
  const set = new Set(nums);
  let max = -1;

  for (const num of nums) {
    if (num > max && set.has(-num)) {
      max = num;
    }
  }

  return max;
};
