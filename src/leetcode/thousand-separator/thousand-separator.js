/**
 * Leetcode #1556
 * Difficulty: Easy
 * https://leetcode.com/problems/thousand-separator
 */
/**
 * @param {number} n
 * @return {string}
 */
export const thousandSeparator = n => {
  const str = n.toString();
  let res = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (i - 2 > 0) {
      res = `.${str[i - 2]}${str[i - 1]}${str[i]}${res}`;
      i -= 2;
    } else {
      res = `${str[i]}${res}`;
    }
  }

  return res;
};
