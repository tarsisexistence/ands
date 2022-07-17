/**
 * Leetcode #1608
 * Difficulty: Easy
 * https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const specialArray = nums => {
  for (let i = 1; i <= nums.length; i += 1) {
    const len = nums.filter(n => n >= i).length;

    if (i === len) {
      return i;
    }
  }

  return -1;
};
