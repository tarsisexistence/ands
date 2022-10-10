/**
 * Leetcode #1903
 * Difficulty: Easy
 * https://leetcode.com/problems/largest-odd-number-in-string
 */
/**
 * @param {string} num
 * @return {string}
 */
export const largestOddNumber = num => {
  let max = '';
  let current = '';

  for (let i = 0; i < num.length; i += 1) {
    current += num[i];

    if (Number(num[i]) % 2 === 1) {
      max = current;
    }
  }

  return max;
};
