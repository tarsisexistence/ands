/**
 * Leetcode #3783
 * Difficulty: Easy
 * https://leetcode.com/problems/mirror-distance-of-an-integer/
 * Algorithm: Number
 */
/**
 * @param {number} n
 * @return {number}
 */
export const mirrorDistance = n => {
  const chars = String(n);
  let reversed = '';

  for (let i = chars.length - 1; i >= 0; i -= 1) {
    reversed += chars[i];
  }

  return Math.abs(n - Number(reversed));
};
