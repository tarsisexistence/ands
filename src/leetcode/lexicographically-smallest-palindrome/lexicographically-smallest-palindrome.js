/**
 * Leetcode #2697
 * Difficulty: Easy
 * https://leetcode.com/problems/lexicographically-smallest-palindrome
 */

/**
 * @param {string} s
 * @return {string}
 */
export const makeSmallestPalindrome = s => {
  const arr = s.split('');

  for (let i = 0; i < Math.floor(s.length / 2); i += 1) {
    const a = s[i];
    const b = s[s.length - i - 1];

    if (a !== b) {
      const smaller = a <= b ? a : b;
      arr[i] = smaller;
      arr[s.length - i - 1] = smaller;
    }
  }

  return arr.join('');
};
