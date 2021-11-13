/**
 * Leetcode #1920
 * Difficulty: Easy
 * https://leetcode.com/problems/build-array-from-permutation/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const buildArray = nums => {
  const ans = new Array(nums.length);

  for (let i = 0; i < nums.length; i += 1) {
    ans[i] = nums[nums[i]];
  }

  return ans;
};
