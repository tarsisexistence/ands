/**
 * Leetcode #349
 * Difficulty: Easy
 * https://leetcode.com/problems/intersection-of-two-arrays/
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export const intersection = (nums1, nums2) => {
  const set2 = new Set(nums2);

  return [...new Set(nums1.filter(num => set2.has(num)))];
};
