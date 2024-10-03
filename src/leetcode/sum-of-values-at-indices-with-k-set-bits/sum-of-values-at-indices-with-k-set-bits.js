/**
 * Leetcode #2859
 * Difficulty: Easy
 * https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const sumIndicesWithKSetBits = function (nums, k) {
  let output = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const s = i.toString(2);
    let count = 0;

    for (const c of s) {
      if (c === '1') {
        count += 1;
      }
    }

    if (count === k) {
      output += nums[i];
    }
  }

  return output;
};
