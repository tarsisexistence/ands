/**
 * Leetcode #1512
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-good-pairs/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const numIdenticalPairs = nums => {
  let count = 0;

  for (let j = 0; j < nums.length; j += 1) {
    for (let i = 0; i < j; i += 1) {
      if (nums[i] === nums[j]) {
        count += 1;
      }
    }
  }

  return count;
};
