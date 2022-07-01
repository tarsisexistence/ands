/**
 * Leetcode #2293
 * Difficulty: Easy
 * https://leetcode.com/problems/min-max-game/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const minMaxGame = nums => {
  while (nums.length > 1) {
    const nextNums = [];

    for (let i = 0; i < nums.length / 2; i += 1) {
      const left = nums[i * 2];
      const right = nums[i * 2 + 1];
      const value = i % 2 === 0 ? Math.min(left, right) : Math.max(left, right);
      nextNums.push(value);
    }

    nums = nextNums;
  }

  return nums[0];
};
