/**
 * Leetcode #2460
 * Difficulty: Easy
 * https://leetcode.com/problems/apply-operations-to-an-array
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const applyOperations = nums => {
  const res = [];

  for (let i = 0; i < nums.length; i += 1) {
    const j = i;

    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
      i += 1;
    }

    if (nums[j] !== 0) {
      res.push(nums[j]);
    }
  }

  const diff = nums.length - res.length;

  for (let i = 0; i < diff; i += 1) {
    res.push(0);
  }

  return res;
};
