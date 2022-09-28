/**
 * Leetcode #485
 * Difficulty: Easy
 * https://leetcode.com/problems/max-consecutive-ones/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const findMaxConsecutiveOnes = nums => {
  let max = 0;
  let current = 0;

  for (const num of nums) {
    if (num === 1) {
      current += 1;
      max = Math.max(max, current);
    } else {
      current = 0;
    }
  }

  return max;
};
