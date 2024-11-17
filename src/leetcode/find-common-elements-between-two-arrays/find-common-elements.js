/**
 * Leetcode #2956
 * Difficulty: Easy
 * https://leetcode.com/problems/find-common-elements-between-two-arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export const findIntersectionValues = function (nums1, nums2) {
  let answer1 = 0;
  let answer2 = 0;
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (const num of nums1) {
    if (set2.has(num)) {
      answer1 += 1;
    }
  }

  for (const num of nums2) {
    if (set1.has(num)) {
      answer2 += 1;
    }
  }

  return [answer1, answer2];
};
