/**
 * Leetcode #3190
 * Difficulty: Easy
 * https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const minimumOperations = function (nums) {
  let ops = 0;

  for (const num of nums) {
    if (num % 3 !== 0) {
      ops += 1;
    }
  }

  return ops;
};
