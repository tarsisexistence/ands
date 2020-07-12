/**
 * Leetcode #190
 * Difficulty: Easy
 * https://leetcode.com/problems/reverse-bits/
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
export const reverseBits = n => {
  const base = n.toString(2);
  let reversed = '';

  for (let i = base.length - 1; i >= 0; i -= 1) {
    reversed += base[i];
  }

  reversed = reversed.padEnd(32, '0');

  return Number.parseInt(reversed, 2);
};
