/**
 * Leetcode #191
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-1-bits/
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
export const hammingWeight = n => {
  let bits = 0;

  while (n) {
    bits += n & 1;
    n = n >>> 1;
  }

  return bits;
};
