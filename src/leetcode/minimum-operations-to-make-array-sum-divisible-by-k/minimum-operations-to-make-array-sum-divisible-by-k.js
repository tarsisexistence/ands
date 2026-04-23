/**
 * Leetcode #3512
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-operations-to-make-array-sum-divisible-by-k/
 * Algorithm: Math
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const minOperations = (nums, k) => {
  let sum = 0;

  for (const num of nums) {
    sum += num;
  }

  return sum % k;
};
