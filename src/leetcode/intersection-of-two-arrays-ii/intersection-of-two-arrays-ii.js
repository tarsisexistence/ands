/**
 * Leetcode #350
 * Difficulty: Easy
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export const intersect = (nums1, nums2) => {
  const map = new Map();
  const result = [];

  for (const num of nums2) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  for (const num of nums1) {
    const mapValue = map.get(num) ?? 0;

    if (mapValue > 0) {
      map.set(num, mapValue - 1);
      result.push(num);
    }
  }

  return result;
};
