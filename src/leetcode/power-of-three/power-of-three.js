/**
 * Leetcode #342
 * Difficulty: Easy
 * https://leetcode.com/problems/power-of-four/
 */
/**
 * @param {number} n
 * @return {boolean}
 */
export const isPowerOfThree = n => {
  while (n > 1) {
    n /= 3;
  }

  return n === 1;
};
