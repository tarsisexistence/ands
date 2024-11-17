/**
 * Leetcode #2864
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-odd-binary-number
 */
/**
 * @param {string} s
 * @return {string}
 */
export const maximumOddBinaryNumber = function (s) {
  const ones = s.split('').filter(bit => bit === '1').length;
  const zeros = s.length - ones;

  return '1'.repeat(ones - 1) + '0'.repeat(zeros) + '1';
};
