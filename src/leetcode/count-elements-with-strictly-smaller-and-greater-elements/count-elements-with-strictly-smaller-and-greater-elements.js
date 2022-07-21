/**
 * Leetcode #2148
 * Difficulty: Easy
 * https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const countElements = nums => {
  let count = 0;

  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length - 1; i += 1) {
    if (nums.at(i) > nums.at(0) && nums[i] < nums.at(-1)) {
      count += 1;
    }
  }

  return count;
};
