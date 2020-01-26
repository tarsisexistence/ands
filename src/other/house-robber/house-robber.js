/**
 * Leetcode #198
 * https://leetcode.com/problems/house-robber/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const rob = nums => {
  if (nums.length < 2) {
    return nums[0] || 0;
  }

  let previousEarnings = nums[0];
  let earnings = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i += 1) {
    const newEarnings = Math.max(nums[i] + previousEarnings, earnings);
    previousEarnings = earnings;
    earnings = newEarnings;
  }

  return earnings;
};
