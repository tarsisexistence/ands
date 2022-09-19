/**
 * Leetcode #1629
 * Difficulty: Easy
 * https://leetcode.com/problems/slowest-key/
 */
/**
 * @param {number} n
 * @return {number}
 */
export const smallestEvenMultiple = n => (n % 2 === 0 ? n : n * 2);
