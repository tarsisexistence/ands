/**
 * Leetcode #1848
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-distance-to-the-target-element/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
export const getMinDistance = (nums, target, start) => {
  let min = Infinity;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== target) {
      continue;
    }

    min = Math.min(min, Math.abs(i - start));
  }

  return min;
};
