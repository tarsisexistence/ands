/**
 * Leetcode #88
 * Difficulty: Easy
 * https://leetcode.com/problems/merge-sorted-array/
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export const merge = (nums1, m, nums2, n) => {
  while (n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[n + m - 1] = nums1[m - 1];
      m -= 1;
    } else {
      nums1[n + m - 1] = nums2[n - 1];
      n -= 1;
    }
  }
};
