/**
 * Leetcode #2032
 * Difficulty: Easy
 * https://leetcode.com/problems/two-out-of-three/
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
export const twoOutOfThree = function (nums1, nums2, nums3) {
  const ans = new Set();

  const set1 = new Set();
  for (const num of nums1) {
    set1.add(num);
  }

  const set2 = new Set();
  for (const num of nums2) {
    set2.add(num);

    if (set1.has(num)) {
      ans.add(num);
    }
  }

  for (const num of nums3) {
    if (set1.has(num) || set2.has(num)) {
      ans.add(num);
    }
  }

  return [...ans];
};
