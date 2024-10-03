/**
 * Leetcode #3162
 * Difficulty: Easy
 * https://leetcode.com/problems/find-the-number-of-good-pairs-i/
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
export const numberOfPairs = function (nums1, nums2, k) {
  let output = 0;

  for (const i of nums1) {
    for (const j of nums2) {
      if (i % (j * k) === 0) {
        output += 1;
      }
    }
  }

  return output;
};
