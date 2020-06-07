/**
 * Leetcode #1389
 * Difficulty: Easy
 * https://leetcode.com/problems/create-target-array-in-the-given-order/
 */
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
export const createTargetArray = (nums, index) => {
  const target = [];

  for (let i = 0; i < nums.length; i += 1) {
    target.splice(index[i], 0, nums[i]);
  }

  return target;
};
