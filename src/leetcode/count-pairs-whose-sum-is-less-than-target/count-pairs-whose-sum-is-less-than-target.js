/**
 * Leetcode #2824
 * Difficulty: Easy
 * https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const countPairs = function (nums, target) {
  let pairs = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] < target) {
        pairs += 1;
      }
    }
  }

  return pairs;
};
