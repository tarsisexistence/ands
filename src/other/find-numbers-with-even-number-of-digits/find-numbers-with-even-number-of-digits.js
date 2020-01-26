/**
 * Leetcode #1295
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const findNumbers = nums => nums.reduce((acc, num) => String(num).length % 2 === 0 ? acc + 1 : acc, 0);
