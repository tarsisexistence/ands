/**
 * Leetcode #1313
 * Difficulty: Easy
 * https://leetcode.com/problems/decompress-run-length-encoded-list/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const decompressRLElist = nums => {
  const res = [];

  for (let i = 0; i < nums.length; i += 2) {
    Array.from(
        { length: nums[i] },
        () => res.push(nums[i + 1])
    );
  }

  return res;
};
