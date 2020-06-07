/**
 * Leetcode #1365
 * Difficulty: Easy
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const smallerNumbersThanCurrent = (nums) =>
  nums.map((num) => nums.filter((innerNum) => num > innerNum).length);
