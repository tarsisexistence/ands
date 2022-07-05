/**
 * Leetcode #2200
 * Difficulty: Easy
 * https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/
 */
/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
export const findKDistantIndices = (nums, key, k) => {
  const result = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== key) {
      continue;
    }

    const startJ = Math.max(0, i - k);
    const endJ = Math.min(nums.length, i + k + 1);

    for (let j = startJ; j < endJ; j += 1) {
      if (Math.abs(i - j) <= k) {
        result.add(j);
      }
    }
  }

  return [...result].sort((a, b) => a - b);
};
