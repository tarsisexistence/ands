/**
 * Leetcode #1221
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 */
/**
 * @param {string} s
 * @return {number}
 */
export const balancedStringSplit = s => {
  let count = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i += 1) {
    balance += s[i] === 'R' ? 1 : -1;

    if (balance === 0) {
      count += 1;
    }
  }

  return count;
};
