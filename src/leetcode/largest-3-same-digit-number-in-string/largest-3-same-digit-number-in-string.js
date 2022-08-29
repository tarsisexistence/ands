/**
 * Leetcode #2264
 * Difficulty: Easy
 * https://leetcode.com/problems/largest-3-same-digit-number-in-string/
 */
/**
 * @param {string} num
 * @return {string}
 */
export const largestGoodInteger = num => {
  let start = 0;
  let current = num[0];
  let res = '';

  for (let i = 0; i < num.length; i += 1) {
    if (num[i] !== current) {
      current = num[i];
      start = i;
    } else if (i - start === 3) {
      start += 1;
    }

    if (i - start === 2) {
      res = Math.max(res, current);
    }
  }

  return String(res).repeat(3);
};
