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
  const map = Object.fromEntries(nums2.map((num) => [num, true]));
  return nums1.filter((num) => {
    if (map[num]) {
      map[num] = false;
      return true;
    }

    return false;
  });
};
