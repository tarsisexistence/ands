/**
 * Leetcode #1869
 * Difficulty: Easy
 * https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
export const checkZeroOnes = s => {
  let max1 = 0;
  let max0 = 0;
  let temp1 = 0;
  let temp0 = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '1') {
      temp0 = 0;
      temp1 += 1;
      max1 = Math.max(max1, temp1);
    } else {
      temp1 = 0;
      temp0 += 1;
      max0 = Math.max(max0, temp0);
    }
  }

  return max1 > max0;
};
