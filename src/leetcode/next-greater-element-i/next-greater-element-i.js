/**
 * Leetcode #496
 * Difficulty: Easy
 * https://leetcode.com/problems/next-greater-element-i/
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export const nextGreaterElement = (nums1, nums2) =>
  nums1.map(num1 => {
    for (let i = nums2.indexOf(num1) + 1; i < nums2.length; i += 1) {
      if (nums2[i] > num1) {
        return nums2[i];
      }
    }

    return -1;
  });
