/**
 * Leetcode #693
 * Difficulty: Easy
 * https://leetcode.com/problems/binary-number-with-alternating-bits/
 */
/**
 * @param {number} n
 * @return {boolean}
 */
export const hasAlternatingBits = n => {
  const str = n.toString(2);

  for (let i = 1; i < str.length; i += 1) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }

  return true;
};
