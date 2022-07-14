/**
 * Leetcode #268
 * Difficulty: Easy
 * https://leetcode.com/problems/missing-number/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumber = nums => {
  const set = new Set(nums);

  for (let i = 0; i <= nums.length; i += 1) {
    if (!set.has(i)) {
      return i;
    }
  }

  return null;
};
