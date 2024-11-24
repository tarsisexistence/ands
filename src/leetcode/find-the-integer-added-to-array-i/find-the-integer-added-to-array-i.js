/**
 * Leetcode #3321
 * Difficulty: Easy
 * https://leetcode.com/problems/find-the-integer-added-to-array-i
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const addedInteger = (nums1, nums2) => {
  let min1 = Infinity;
  let min2 = Infinity;

  for (let i = 0; i < nums1.length; i += 1) {
    min1 = Math.min(min1, nums1[i]);
    min2 = Math.min(min2, nums2[i]);
  }

  return min2 - min1;
};
