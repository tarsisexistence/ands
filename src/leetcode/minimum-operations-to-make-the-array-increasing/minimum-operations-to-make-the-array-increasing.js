/**
 * Leetcode #1827
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const minOperations = nums => {
  let ans = 0;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] <= nums[i - 1]) {
      const diff = Math.abs(nums[i] - nums[i - 1]);
      nums[i] = nums[i] + diff + 1;
      ans += diff + 1;
    }
  }

  return ans;
};
