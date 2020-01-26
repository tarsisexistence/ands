/**
 * Leetcode #1
 * https://leetcode.com/problems/two-sum/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} startId
 * @return {number[]}
 */
export const twoSum = (nums, target, startId = 0) => {
  for (let i = startId+1; i < nums.length; i++) {
    if (nums[startId] + nums[i] === target) {
      return [startId, i];
    }
  }

  return twoSum(nums, target, startId + 1);
};
