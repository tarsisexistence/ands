/**
 * Leetcode #2974
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-number-game/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const numberGame = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    const temp = nums[i];
    nums[i] = nums[i + 1];
    nums[i + 1] = temp;
  }

  return nums;
};
