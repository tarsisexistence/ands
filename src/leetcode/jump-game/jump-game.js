/**
 * Leetcode #55
 * Difficulty: Medium
 * https://leetcode.com/problems/jump-game/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const canJump = nums => {
  let maxDistance = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (maxDistance < i) {
      return false;
    }

    maxDistance = Math.max(maxDistance, i + nums[i]);
  }

  return true;
};
