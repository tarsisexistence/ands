/**
 * Leetcode #724
 * Difficulty: Easy
 * https://leetcode.com/problems/find-pivot-index
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const pivotIndex = nums => {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  let left = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (left === sum - left - nums[i]) {
      return i;
    }

    left += nums[i];
  }

  return -1;
};
