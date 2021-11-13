/**
 * Leetcode #1929
 * Difficulty: Easy
 * https://leetcode.com/problems/concatenation-of-array/
 * Duplicate of 476 number-complement
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const getConcatenation = nums => {
  const result = new Array(nums.length * 2);

  for (let i = 0; i < nums.length; i += 1) {
    const value = nums[i];
    result[i] = value;
    result[i + nums.length] = value;
  }

  return result;
};
