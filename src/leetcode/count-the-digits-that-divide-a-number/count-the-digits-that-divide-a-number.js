/**
 * Leetcode #2520
 * Difficulty: Easy
 * https://leetcode.com/problems/count-the-digits-that-divide-a-number
 */
/**
 * @param {number} num
 * @return {number}
 */
export const countDigits = num =>
  String(num)
    .split('')
    .filter(d => num % d === 0).length;
