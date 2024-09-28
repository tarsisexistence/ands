/**
 * Leetcode #9
 * Difficulty: Easy
 * https://leetcode.com/problems/palindrome-number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
export const isPalindrome = x => {
  if (x < 0) {
    return false;
  }

  x = String(x);
  const len = Math.floor(x.length / 2);

  for (let i = 0; i < len; i += 1) {
    if (x[i] !== x[x.length - i - 1]) {
      return false;
    }
  }

  return true;
};
