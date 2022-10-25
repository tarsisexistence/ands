/**
 * Leetcode #2396
 * Difficulty: Medium
 * https://leetcode.com/problems/strictly-palindromic-number
 */
/**
 * @param {number} n
 * @return {boolean}
 */
export const isStrictlyPalindromic = n => {
  for (let i = 2; i <= n; i += 1) {
    const is = isPalindromic(i);
    if (!is) {
      return false;
    }
  }

  return true;

  function isPalindromic(n) {
    const s = n.toString(2);
    const len = Math.floor(s.length / 2);

    for (let i = 0; i < len; i += 1) {
      if (s[i] !== s[s.length - 1 - i]) {
        return false;
      }
    }

    return true;
  }
};
